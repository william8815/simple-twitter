<template >
  <div class="container row row-cols-3">
    <section class="col-2" style="min-width: 176px">
      <Navbar />
    </section>

    <!-- 使用者個人資料 -->
    <Spinner v-if="isLoading" />
    <section class="main-section col-7" v-else>
      <div class="card">
        <div class="card__header">
          <div class="card__header__icon">
            <img
              src="./../assets/img/左箭頭.png"
              alt=""
              @click="$router.back()"
            />
          </div>
          <div class="card__header__title">
            <h5>{{ user.name }}</h5>
            <p>{{ user.tweetsCount }}篇貼文</p>
          </div>
        </div>

        <div class="card__image">
          <img
            :src="user.front_cover | emptyBackground"
            alt=""
            class="card__image__background"
          />
          <img class="card__image__self" :src="user.avatar | emptyImage" />
        </div>

        <!-- 若是當前使用者，則會出現編輯個人資料 -->
        <template v-if="isCurrentUser">
          <UserEditModal :initialuser="user" :fetchUser="fetchUser"/>
        </template>
        <!-- 非當前使用者則是出現三個圖式 -->
        <div class="card__edit" v-else>
          <button type="button">
            <img
              src="./../assets/img/未點擊郵件.png"
              alt=""
              class="card__edit__mail"
            />
          </button>

          <button type="button" v-if="isSubscribing">
            <img
              src="./../assets/img/未開啟鈴鐺.png"
              class="card__edit__bell"
              alt=""
            />
          </button>

          <button type="button" v-else>
            <img
              src="./../assets/img/已開啟鈴鐺.png"
              class="card__edit__bell"
              alt=""
            />
          </button>

          <div v-if="user.isFollowed">
            <button
              type="button"
              class="card__edit__follow"
              @click.stop.prevent="deleteFollow"
              :disabled="isProcessing"
            >
              正在跟隨
            </button>
          </div>
          <div v-else>
            <button
              type="button"
              class="card__edit__unfollow"
              @click.stop.prevent="addFollow"
              :disabled="isProcessing"
            >
              跟隨
            </button>
          </div>
        </div>
        <!-- 使用者跟隨的數量 -->
        <div class="card__text">
          <h5>{{ user.name }}</h5>
          <p class="card__text__account">@{{ user.account }}</p>
          <p class="card__text__info">{{ user.introduction }}</p>

          <div class="card__text__follow">
            <div>
              <router-link
                :to="{ name: 'following', params: { id: $route.params.id } }"
                class="card__text__following"
                ><span>{{ user.followingsCount }}</span
                >跟隨中</router-link
              >
            </div>
            <div>
              <router-link
                :to="{ name: 'followers', params: { id: $route.params.id } }"
                class="card__text__followers"
                ><span>{{ user.Followers.length }}</span
                >跟隨者</router-link
              >
            </div>
          </div>
        </div>
      </div>

      <!-- 憨個嵌套式路由 點選可切換頁面 -->
      <div class="group">
        <ul class="nav">
          <li class="nav__item" active-class="active">
            <router-link
              class="nav__link"
              :to="{ name: 'user-post', params: { id: $route.params.id } }"
              active-class="active"
            >
              推文
            </router-link>
          </li>
          <li class="nav__item" active-class="active">
            <router-link
              class="nav__link"
              :to="{ name: 'user-reply', params: { id: $route.params.id } }"
            >
              回覆
            </router-link>
          </li>
          <li class="nav__item" active-class="active">
            <router-link
              class="nav__link"
              :to="{ name: 'user-favorite', params: { id: $route.params.id } }"
            >
              喜歡的內容
            </router-link>
          </li>
        </ul>

        <div class="list">
          <router-view :user="user" />
        </div>
      </div>
    </section>

    <section class="col-3" style="min-width: 274px">
      <RecommendUsers />
    </section>
  </div>
</template>


<script>
import UserEditModal from "../components/UserEditModal.vue";
import Navbar from "../components/Navbar.vue";
import RecommendUsers from "./../components/RecommendUsers.vue";

import { mapState } from "vuex";
import { emptyImageFilter } from "./../utils/mixins";
import { emptyBackgroundFilter } from "./../utils/mixins";
import { Toast } from "./../utils/helpers";
import Spinner from "./../components/Spinner.vue";

import usersAPI from "./../apis/users";

export default {
  mixins: [emptyImageFilter, emptyBackgroundFilter],
  components: {
    UserEditModal,
    Navbar,
    RecommendUsers,
    Spinner,
  },

  data() {
    return {
      user: {
        name: "",
        tweetsCount: 0,
        account: "",
        introduction: "",
        front_cover: "",
        avatar: "",
        followingsCount: "",
        Followers: "",
        isFollowed: false,
      },
      isLoading: false,
      isCurrentUser: true,
      isSubscribing: false,
      isEdit: false,
      isProcessing: false,
    };
  },

  computed: {
    ...mapState(["currentUser"]),
  },

  created() {
    // api getUser (params: id)
    // 先取得要渲染的使用者id
    const { id: userId } = this.$route.params;
    this.fetchUser(userId);
  },

  watch: {
    "$route.params.id": function (id) {
      // 可以試試看換user.id
      this.fetchUser(id);
    },
    
  },

  methods: {
    async fetchUser(userId) {
      try {
        this.isLoading = true;
        const { data } = await usersAPI.getOtherUser(userId);
        const {
          name,
          tweetsCount,
          account,
          introduction,
          front_cover,
          avatar,
          followingsCount,
          Followers,
          isFollowed,
        } = data;

        this.user = {
          name,
          tweetsCount,
          account,
          introduction: introduction ? introduction : "大家好",
          front_cover,
          avatar,
          followingsCount,
          Followers,
          isFollowed,
        };

        if (this.$store.state.currentUser.id === Number(userId)) {
          this.isCurrentUser = true;
        } else {
          this.isCurrentUser = false;
        }

        this.isLoading = false;
      } catch (error) {
        // STEP 6: 透過 restaurantsAPI 取得餐廳資訊
        Toast.fire({
          icon: "error",
          title: "無法取得個人資料，請稍後再試",
        });
      }
    },

    // 追蹤他人
    async addFollow() {
      try {
        this.isProcessing = true;
        const id = this.$route.params.id;

        const { data } = await usersAPI.addFollowing(id);
        if (data.status !== "success") {
          throw new Error(data.message);
        }

        Toast.fire({
          icon: "success",
          title: "追蹤用戶成功",
        });

        this.user.isFollowed = true;
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

    // 取消追蹤他人
    async deleteFollow() {
      try {
        this.isProcessing = true;
        const id = this.$route.params.id;
        const { data } = await usersAPI.deleteFollowing(id);
        if (data.status !== "success") {
          throw new Error(data.message);
        }

        Toast.fire({
          icon: "success",
          title: "已取消追蹤用戶",
        });

        this.user.isFollowed = false;
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
ul,
li {
  list-style: none;
}

a,
button {
  color: #000;
  text-decoration: none;
  background: no-repeat;
  border: none;
  padding: 0;
  outline: none;
}

.isEdit {
  background-color: #e5e5e5;
  opacity: 0.5;
}

.container {
  width: 100vw;
  max-width: 1400px;
  height: 100vh;
  padding-left: 130px;
  margin: 0 auto;
  .main-section {
    flex: 1 1;
  }
}

.card__header {
  display: flex;
  margin-left: 24px;

  &__icon {
    display: flex;
    align-items: center;

    img {
      width: 17px;
      height: 14px;
      cursor: pointer;
    }
  }

  &__title {
    margin-left: 19px;

    & p {
      font-size: 13px;
    }
  }
}

.card__image {
  height: 200px;
  position: relative;
  margin-top: 17px;

  &__background {
    width: 100%;
    height: 100%;
  }

  &__self {
    position: absolute;
    width: 140px;
    height: 140px;
    border: 3px solid white;
    border-radius: 50% 50%;
    top: 100%;
    left: 16px;
    transform: translateY(-50%);
  }
}

.card__edit {
  margin-top: 16px;
  justify-content: flex-end;
  display: flex;

  &__button {
    margin-right: 16px;
    width: 128px;
    height: 40px;
    color: var(--main-color);
    border: 1px solid var(--main-color);
    border-radius: 50px;
  }

  &__mail,
  &__bell {
    margin-right: 16px;
    width: 40px;
  }

  &__follow {
    width: 80px;
    height: 40px;
    color: #fff;
    font-size: 16px;
    margin-right: 16px;
    background-color: var(--main-color);
    border: 1px solid var(--main-color);
    border-radius: 50px;
  }

  &__unfollow {
    width: 80px;
    height: 40px;
    font-size: 16px;
    margin-right: 16px;
    color: var(--main-color);
    border: 1px solid var(--main-color);
    border-radius: 50px;
  }
}

.card__text {
  margin-top: 16px;
  margin-left: 16px;

  & h5 {
    font-size: 18px;
  }

  &__account {
    color: #67757d;
    font-size: 14px;
  }

  &__info {
    margin-top: 6px;
    color: #171725;
    font-size: 14px;
  }

  &__follow {
    display: flex;
  }
}

.card__text__following,
.card__text__followers {
  color: #657786;
  margin-right: 20px;
  font-size: 14px;

  & span {
    color: #171725;
  }
}

.group {
  margin-top: 16px;
  height: 52px;
}

.nav {
  display: flex;
  height: 100%;

  &__item {
    width: 130px;
    line-height: 52px;
    text-align: center;
    font-size: 15px;
  }

  &__link {
    display: block;
    color: #657786;
    width: 100%;
    height: 100%;

    &.active {
      color: var(--main-color);
      border-bottom: 2px solid var(--main-color);
    }

    &:hover {
      color: var(--main-color);
    }
  }
}
</style>