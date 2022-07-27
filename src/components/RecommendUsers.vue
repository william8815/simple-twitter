<template>
  <div class="recommend">
    <h4>推薦跟隨</h4>
    <div class="recommend__list">
      <ul>
        <li v-for="user in recommendUsers" :key="user.id" class="list-item">
          <div class="user">
            <img
              src="~@/assets/img/otherUserImg.png"
              alt="otherUser"
              class="user__image"
            />
            <div class="content">
              <div class="user__name">
                <a href="#">{{ user.name }}</a>
              </div>
              <div class="user__account">{{ user.account }}</div>
            </div>
          </div>
          <button
            @click.stop.prevent="deleteFollow(user.id)"
            v-if="user.isFollowed"
            class="btn followed"
          >
            正在跟隨
          </button>
          <button
            @click.stop.prevent="addFollow(user.id)"
            v-else
            class="btn follow"
          >
            跟隨
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
const dummyUser = {
  recommendUsers: [
    {
      id: 1,
      name: "Pizza Hut",
      account: "@pizzahut",
      isFollowed: true,
    },
    {
      id: 2,
      name: "Pizza Hut",
      account: "@pizzahut",
      isFollowed: false,
    },
    {
      id: 3,
      name: "Pizza Hut",
      account: "@pizzahut",
      isFollowed: false,
    },
  ],
};
export default {
  data() {
    return {
      // 少了用戶圖片
      recommendUsers: [],
    };
  },
  created() {
    this.fetchUser();
  },
  methods: {
    fetchUser() {
      const { recommendUsers } = dummyUser;
      this.recommendUsers = recommendUsers;
    },
    addFollow(userId) {
      console.log(this.recommendUser);
      this.recommendUsers = this.recommendUsers.map((user) => {
        if (user.id === userId) {
          return {
            ...user,
            isFollowed: true,
          };
        }
        return user;
      });
    },
    deleteFollow(userId) {
      this.recommendUsers = this.recommendUsers.map((user) => {
        if (user.id === userId) {
          return {
            ...user,
            isFollowed: false,
          };
        }
        return user;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.recommend {
  margin-top: 16px;
  background-color: #fafafb;
  border-radius: 16px;
  h4 {
    padding: 24px;
    border-bottom: 1px solid #e6ecf0;
  }
  &__list {
    padding: 16px;
    .list-item:not(:last-child) {
      margin-bottom: 32px;
    }
    .list-item {
      display: flex;
      justify-content: space-between;
      .user {
        display: flex;
        &__image {
          margin-right: 8px;
          width: 50px;
          height: 50px;
          border-radius: 50%;
        }
        &__name {
          font-size: 16px;
          font-weight: 700;
          // 溢出文字以...替代
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
        }
        &__account {
          color: #92929d;
          font-size: 14px;
          font-weight: 400;
        }
      }
      .btn {
        border: none;
        font-size: 16px;

        height: 40px;
        border-radius: 50px;
      }
      .followed {
        width: 96px;
        background-color: var(--main-color);
        color: #fff;
      }
      .follow {
        width: 64px;
        background-color: #fff;
        color: var(--main-color);
        border: 1px solid var(--main-color);
      }
    }
  }
}
</style>

