<template>
  <div class="container row">
    <!-- navbar -->
    <section class="col-2" style="min-width:176px;'">
      <Navbar />
    </section>
    <!-- followers -->
    <section class="col-7 follower-section">
      <div class="follow">
        <div class="follow-head">
          <!-- 開頭 -->
          <div class="title">
            <i @click="$router.back()" class="back fa-solid fa-arrow-left"></i>
            <div>
              <h5>{{ user.name }}</h5>
              <span>{{ user.tweetsCount }} 貼文</span>
            </div>
          </div>
          <!-- 追蹤切換 -->
          <div class="follow-tabs">
            <ul class="tabs-list">
              <li>
                <router-link :to="{ name: 'followers' }" class="tab followers">
                  追隨者
                </router-link>
              </li>
              <li>
                <router-link :to="{ name: 'following' }" class="tab following">
                  正在追隨
                </router-link>
              </li>
            </ul>
          </div>
        </div>
        <!-- 追蹤清單 -->
        <div class="follow-list">
          <ul>
            <li
              class="list-item"
              v-for="follower in followers"
              :key="follower.followerId"
            >
              <router-link :to="{ name: 'main' }" class="avator">
                <img
                  :src="follower.followerAvatar | emptyImage"
                  alt="userImg"
                />
              </router-link>
              <div class="user">
                <div class="user__info">
                  <router-link :to="{ name: 'main' }">
                    <span class="user__name">{{ follower.followerName }}</span>
                  </router-link>
                  <button
                    v-if="follower.isFollower"
                    @click.stop.prevent="deleteFollow(follower.followerId)"
                    class="btn followed-btn"
                  >
                    正在跟隨
                  </button>
                  <button
                    v-else
                    @click.stop.prevent="addFollow(follower.followerId)"
                    class="btn follow-btn"
                  >
                    跟隨
                  </button>
                </div>
                <div class="user__post">
                  {{ follower.post }}
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <!-- recommend -->
    <section class="col-3" style="min-width:274px;'">
      <RecommendUsers />
    </section>
  </div>
</template>

<script>
import Navbar from "./../components/Navbar.vue";
import RecommendUsers from "./../components/RecommendUsers.vue";
import userAPI from "./../apis/users";
import { Toast } from "./../utils/helpers";
import { emptyImageFilter } from "./../utils/mixins";
import { mapState } from "vuex";

export default {
  name: "Followers",
  mixins: [emptyImageFilter],
  components: {
    Navbar,
    RecommendUsers,
  },
  data() {
    return {
      followers: [],
      user: {},
    };
  },
  computed: {
    ...mapState(["currentUser"]),
  },
  beforeRouteUpdate(to, from, next) {
    const { id } = to.params;
    this.fetchUser(id);
    this.fetchFollower(id);
    next();
  },
  created() {
    const { id: userId } = this.$route.params;
    this.fetchUser(userId);
    this.fetchFollower(userId);
  },
  methods: {
    async fetchUser(userId) {
      const { data } = await userAPI.getOtherUser(userId);
      const { name, tweetsCount } = data;
      this.user = {
        name,
        tweetsCount,
      };
    },
    async fetchFollower(userId) {
      try {
        const { data } = await userAPI.getUserFollowers(userId);
        this.followers = data;
        this.followers = this.followers.filter((follower) => {
          return this.currentUser.id !== follower.followerId;
        });
      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "請求粉絲用戶失敗",
        });
      }
    },
    async addFollow(followerId) {
      try {
        const { data } = await userAPI.addFollowing(followerId);
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        this.followers = this.followers.map((follower) => {
          if (follower.followerId === followerId) {
            return {
              ...follower,
              isFollower: true,
            };
          }
          return follower;
        });
      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "追蹤用戶失敗",
        });
      }
    },
    async deleteFollow(followerId) {
      try {
        const { data } = await userAPI.deleteFollowing(followerId);
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        this.followers = this.followers.map((follower) => {
          if (follower.followerId === followerId) {
            return {
              ...follower,
              isFollower: false,
            };
          }
          return follower;
        });
      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "追蹤用戶失敗",
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: calc(100vw - 130px);
  max-width: 1400px;
  height: 100vh;
  margin-left: 130px;
  .follower-section {
    flex: 1 1;
  }
}
// 取消滾輪
::-webkit-scrollbar {
  /* make scrollbar transparent */
  width: 0px;
  background: transparent;
}
// 圖片共同樣式
img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 8px;
}
.follow {
  height: 100vh;
  border-left: 1px solid #e6ecf0;
  border-right: 1px solid #e6ecf0;
  overflow-y: scroll;
  .follow-head {
    position: sticky;
    top: 0;
    z-index: 1;
  }
  // 開頭
  .title {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px 28px;
    border-bottom: 1px solid #e6ecf0;

    span {
      font-weight: 500;
      font-size: 13px;
      color: #6c757d;
    }
  }
  .follow-head::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    // 毛玻璃特效
    backdrop-filter: blur(3px);
    z-index: -1;
  }
  .back {
    margin-right: 19px;
  }
  // 切換 tabs
  .follow-tabs {
    width: 100%;
    height: 50px;
    border-bottom: 1px solid #e6ecf0;
  }
  .tabs-list {
    display: flex;
    .tab {
      display: inline-block;
      width: 130px;
      line-height: 47px;
      text-align: center;
      color: #657786;
      font-weight: 700;
      font-size: 15px;
    }
    .tab:hover {
      border-bottom: 2px solid #92929d;
      color: #92929d;
    }
    .followers {
      border-bottom: 2px solid var(--main-color);
      color: var(--main-color);
    }
  }
  // 追隨者清單
  .list-item {
    display: flex;
    padding: 16px 24px;
    border-bottom: 1px solid #e6ecf0;
  }
  .user {
    width: 100%;
    &__info {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 8px;
    }
    &__name {
      font-size: 16px;
      font-weight: 700;
      margin-right: 8px;
    }
  }
  .btn {
    border: none;
    font-size: 16px;
    height: 40px;
    border-radius: 50px;
  }
  .followed-btn {
    width: 96px;
    background-color: var(--main-color);
    color: #fff;
  }
  .follow-btn {
    width: 64px;
    background-color: #fff;
    color: var(--main-color);
    border: 1px solid var(--main-color);
  }
}
</style>