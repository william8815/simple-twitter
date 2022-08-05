<template>
  <div class="container row">
    <!-- navbar -->
    <section class="col-2" style="min-width:176px;'">
      <Navbar />
    </section>
    <!-- followers -->
    <section class="col-7 following-section">
      <div class="follow">
        <div class="follow-head">
          <!-- 開頭 -->
          <div class="title">
            <i @click="$router.back()" class="back fa-solid fa-arrow-left"></i>
            <div class="head">
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
        <!-- 粉絲清單 -->
        <!-- 追蹤清單 -->
        <Spinner v-if="isLoading" />
        <div v-else class="follow-list">
          <ul>
            <li
              class="list-item"
              v-for="following in followings"
              :key="following.followingId"
            >
              <router-link
                :to="{
                  name: 'user-post',
                  params: { id: following.followingId },
                }"
                class="avator"
              >
                <img
                  :src="following.followingAvatar | emptyImage"
                  alt="userImg"
                />
              </router-link>
              <div class="user">
                <div class="user__info">
                  <router-link :to="{ name: 'main' }">
                    <span class="user__name">{{
                      following.followingName
                    }}</span>
                  </router-link>
                  <button
                    v-if="following.isFollowing"
                    @click.stop.prevent="deleteFollow(following.followingId)"
                    class="btn followed-btn"
                    :disabled="isProcessing"
                  >
                    正在跟隨
                  </button>
                  <button
                    v-else
                    @click.stop.prevent="addFollow(following.followingId)"
                    class="btn follow-btn"
                    :disabled="isProcessing"
                  >
                    跟隨
                  </button>
                </div>
                <div class="user__post">
                  {{ following.followingIntroduction }}
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
import Spinner from "./../components/Spinner.vue";
import userAPI from "./../apis/users";
import { Toast } from "./../utils/helpers";
import { emptyImageFilter } from "./../utils/mixins";
import { mapState } from "vuex";

export default {
  name: "followings",
  mixins: [emptyImageFilter],
  components: {
    Navbar,
    RecommendUsers,
    Spinner,
  },
  data() {
    return {
      followings: [],
      user: {},
      isProcessing: false,
      isLoading: false,
    };
  },
  computed: {
    ...mapState(["currentUser"]),
  },
  beforeRouteUpdate(to, from, next) {
    const { id } = to.params;
    this.fetchUser(id);
    this.fetchfollowing(id);
    next();
  },
  created() {
    const { id: userId } = this.$route.params;
    this.fetchUser(userId);
    this.fetchfollowing(userId);
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
    async fetchfollowing(userId) {
      try {
        this.isLoading = true;
        const { data } = await userAPI.getUserFollowing(userId);
        this.followings = data;
        this.followings = this.followings.filter((following) => {
          return this.currentUser.id !== following.followingId;
        });
        this.isLoading = false;
      } catch (error) {
        this.isLoading = false;
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "請求追蹤用戶失敗",
        });
      }
    },
    async addFollow(followingId) {
      try {
        this.isProcessing = true;
        const { data } = await userAPI.addFollowing(followingId);
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        this.followings = this.followings.map((following) => {
          if (following.followingId === followingId) {
            return {
              ...following,
              isFollowing: true,
            };
          }
          return following;
        });
        Toast.fire({
          icon: "success",
          title: "成功追蹤用戶",
        });
        this.isProcessing = false;
      } catch (error) {
        this.isProcessing = false;
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "追蹤用戶失敗",
        });
      }
    },
    async deleteFollow(followingId) {
      try {
        this.isProcessing = true;
        const { data } = await userAPI.deleteFollowing(followingId);
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        this.followings = this.followings.map((following) => {
          if (following.followingId === followingId) {
            return {
              ...following,
              isFollowing: false,
            };
          }
          return following;
        });
        Toast.fire({
          icon: "success",
          title: "取消追蹤用戶",
        });
        this.isProcessing = false;
      } catch (error) {
        this.isProcessing = false;
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "取消追蹤用戶失敗",
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
  .following-section {
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
    height: 100%;
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
  // .head {
  //   height: 45px;
  // }
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
      // border-bottom: 2px solid var(--main-color);
    }
    .tab:hover {
      border-bottom: 2px solid #92929d;
      color: #92929d;
    }
    .following {
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