<template>
  <div class="recommend">
    <h4>推薦跟隨</h4>
    <Spinner v-if="isLoading" />
    <div v-else class="recommend__list">
      <ul>
        <li v-for="user in recommendUsers" :key="user.id" class="list-item">
          <router-link
            :to="{ name: 'user-post', params: { id: user.id } }"
            class="user"
          >
            <img
              :src="user.avatar | emptyImage"
              alt="otherUser"
              class="user__image"
            />
            <div class="content">
              <div class="user__name">
                <a href="#">{{ user.name }}</a>
              </div>
              <div class="user__account">@{{ user.account }}</div>
            </div>
          </router-link>
          <button
            @click.stop.prevent="deleteFollow(user.id)"
            v-if="user.isFollowed"
            class="btn followed"
            :disabled="isProcessing"
          >
            正在跟隨
          </button>
          <button
            @click.stop.prevent="addFollow(user.id)"
            v-else
            class="btn follow"
            :disabled="isProcessing"
          >
            跟隨
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Spinner from "./../components/Spinner.vue";
import userAPI from "./../apis/users";
import { Toast } from "./../utils/helpers";
import { emptyImageFilter } from "./../utils/mixins";
import { mapState } from "vuex";

export default {
  mixins: [emptyImageFilter],
  components: {
    Spinner,
  },
  data() {
    return {
      // 少了用戶圖片
      recommendUsers: [],
      isLoading: false,
      isProcessing: false,
    };
  },
  computed: {
    ...mapState(["currentUser"]),
  },
  created() {
    this.fetchUser({ limit: 11 });
  },
  methods: {
    async fetchUser({ limit }) {
      try {
        this.isLoading = true;
        const { data } = await userAPI.getRecommendUsers({ limit });
        const { users } = data;
        this.recommendUsers = users.filter(
          (user) => user.id !== this.currentUser.id
        );
        this.isLoading = false;
      } catch (error) {
        this.isLoading = false;
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "無法取得推薦用戶資料",
        });
      }
    },
    async addFollow(userId) {
      try {
        this.isProcessing = true;
        const { data } = await userAPI.addFollowing(userId);
        if (data.status !== "success") {
          console.log(data.message);
        }

        this.recommendUsers = this.recommendUsers.map((user) => {
          if (user.id === userId) {
            return {
              ...user,
              isFollowed: true,
            };
          }
          return user;
        });
        Toast.fire({
          icon: "success",
          title: "已追蹤此用戶",
        });
        this.isProcessing = false;
      } catch (error) {
        this.isProcessing = false;
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "追蹤用戶請求失敗",
        });
      }
    },
    async deleteFollow(userId) {
      try {
        this.isProcessing = true;
        const { data } = await userAPI.deleteFollowing(userId);
        if (data.status !== "success") {
          console.log(data.message);
        }
        this.recommendUsers = this.recommendUsers.map((user) => {
          if (user.id === userId) {
            return {
              ...user,
              isFollowed: false,
            };
          }
          return user;
        });
        Toast.fire({
          icon: "success",
          title: "已取消追蹤此用戶",
        });
        this.isProcessing = false;
      } catch (error) {
        this.isProcessing = false;
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "取消追蹤用戶請求失敗",
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
// 取消滾輪
::-webkit-scrollbar {
  /* make scrollbar transparent */
  width: 0px;
  background: transparent;
}
.recommend {
  margin-top: 16px;
  background-color: #fafafb;
  border-radius: 16px;
  height: 60vh;
  min-height: 508px;
  overflow-y: scroll;
  h4 {
    padding: 24px;
    border-bottom: 1px solid #e6ecf0;
    position: sticky;
    top: 0;
    z-index: 1;
  }
  h4::before {
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
  &__list {
    padding: 16px;
    .list-item:not(:last-child) {
      margin-bottom: 32px;
    }
    .list-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .user {
        display: flex;
        &__image {
          margin-right: 8px;
          width: 50px;
          height: 50px;
          border-radius: 50%;
        }
        .content {
          width: 70px;
        }
        &__name {
          font-size: 16px;
          font-weight: 700;
          // 溢出文字以...替代
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        &__account {
          color: #92929d;
          font-size: 14px;
          font-weight: 400;
          // 溢出文字以...替代
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
      .btn {
        border: none;
        font-size: 16px;
        cursor: pointer;
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

