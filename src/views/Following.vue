<template>
  <div class="container row">
    <!-- navbar -->
    <section class="col-xl-2 col-lg-2">
      <Navbar />
    </section>
    <!-- followers -->
    <section class="col-xl-7 col-lg-7">
      <div class="follow">
        <div class="follow-head">
          <!-- 開頭 -->
          <div class="title">
            <i @click="$router.back()" class="back fa-solid fa-arrow-left"></i>
            <div>
              <h5>John Doe</h5>
              <span>25 貼文</span>
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
        <div class="follow-list">
          <ul>
            <li
              class="list-item"
              v-for="following in followings"
              :key="following.id"
            >
              <router-link :to="{ name: 'main' }" class="avator">
                <img src="~@/assets/img/otherUserImg.png" alt="userImg" />
              </router-link>
              <div class="user">
                <div class="user__info">
                  <router-link :to="{ name: 'main' }">
                    <span class="user__name">{{ following.name }}</span>
                  </router-link>
                  <button
                    v-if="following.isFollowed"
                    @click.stop.prevent="deleteFollow(following.id)"
                    class="btn followed-btn"
                  >
                    正在跟隨
                  </button>
                  <button
                    v-else
                    @click.stop.prevent="addFollow(following.id)"
                    class="btn follow-btn"
                  >
                    跟隨
                  </button>
                </div>
                <div class="user__post">
                  {{ following.post }}
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <!-- recommend -->
    <section class="col-xl-3 col-lg-3">
      <RecommendUsers />
    </section>
  </div>
</template>

<script>
import Navbar from "./../components/Navbar.vue";
import RecommendUsers from "./../components/RecommendUsers.vue";

const dummyData = {
  followings: [
    {
      id: 1,
      name: "Apple",
      post: `Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
            ullamco cillum dolor. Voluptate exercitation incididunt
            aliquip deserunt reprehenderit elit laborum.`,
      isFollowed: true,
    },
    {
      id: 2,
      name: "Apple",
      post: `Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
            ullamco cillum dolor. Voluptate exercitation incididunt
            aliquip deserunt reprehenderit elit laborum.`,
      isFollowed: true,
    },
    {
      id: 3,
      name: "Apple",
      post: `Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
            ullamco cillum dolor. Voluptate exercitation incididunt
            aliquip deserunt reprehenderit elit laborum.`,
      isFollowed: true,
    },
    {
      id: 4,
      name: "Apple",
      post: `Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
            ullamco cillum dolor. Voluptate exercitation incididunt
            aliquip deserunt reprehenderit elit laborum.`,
      isFollowed: true,
    },
    {
      id: 5,
      name: "Apple",
      post: `Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
            ullamco cillum dolor. Voluptate exercitation incididunt
            aliquip deserunt reprehenderit elit laborum.`,
      isFollowed: true,
    },
    {
      id: 6,
      name: "Apple",
      post: `Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
            ullamco cillum dolor. Voluptate exercitation incididunt
            aliquip deserunt reprehenderit elit laborum.`,
      isFollowed: true,
    },
  ],
};

export default {
  name: "followings",
  components: {
    Navbar,
    RecommendUsers,
  },
  data() {
    return {
      followings: [],
    };
  },
  created() {
    this.fetchfollowing();
  },
  methods: {
    fetchfollowing() {
      const { followings } = dummyData;
      this.followings = followings;
    },
    addFollow(followingId) {
      this.followings = this.followings.map((following) => {
        if (following.id === followingId) {
          return {
            ...following,
            isFollowed: true,
          };
        }
        return following;
      });
    },
    deleteFollow(followingId) {
      this.followings = this.followings.map((following) => {
        if (following.id === followingId) {
          return {
            ...following,
            isFollowed: false,
          };
        }
        return following;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  max-width: 1144px;
  height: 100vh;
  margin: 0 auto;
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