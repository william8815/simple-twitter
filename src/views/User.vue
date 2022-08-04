<template >
  <div class="container">
    <div class="left__bar">
      <Navbar />
    </div>

    <!-- 使用者個人資料 -->
    <div class="user">
      <div class="card">
        <div class="card__header">
          <div class="card__header__icon">
            <img
              src="./../assets/img/左箭頭.png"
              alt=""
              @click="$router.back(-1)"
            />
          </div>
          <div class="card__header__title">
            <h5>{{ user.name }}</h5>
            <p>{{ user.tweetsCount }}篇貼文</p>
          </div>
        </div>

        <div class="card__image">
          <img
            :src="user.front_cover | emptyImage"
            alt=""
            class="card__image__background"
          />
          <img class="card__image__self" :src="user.avatar | emptyImage" />
        </div>

        <!-- 若是當前使用者，則會出現編輯個人資料 -->
        <template v-if="isCurrentUser">
          <UserEditModal :initial-edit="isEdit" />
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

          <div v-if="isFollowed">
            <button type="button" class="card__edit__follow">正在跟隨</button>
          </div>
          <div v-else>
            <button type="button" class="card__edit__unfollow">跟隨</button>
          </div>
        </div>
        <!-- 使用者跟隨的數量 -->
        <div class="card__text">
          <h5>{{ user.name }}</h5>
          <p class="card__text__account">@{{ user.account }}</p>
          <p class="card__text__info">{{ user.introduction }}</p>

          <div class="card__text__follow">
            <div>
              <router-link to="" class="card__text__following"
                ><span>{{ user.followingsCount }}</span
                >跟隨中</router-link
              >
            </div>
            <div>
              <router-link to="" class="card__text__followers"
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
          <router-view :user="user"/>
        </div>
      </div>
    </div>

    <div class="right__bar">右Bar</div>
  </div>
</template>


<script>
import UserEditModal from "../components/UserEditModal.vue";
import Navbar from "../components/Navbar.vue";

import { mapState } from "vuex";
import { emptyImageFilter } from "./../utils/mixins";
import { Toast } from "./../utils/helpers";

import usersAPI from "./../apis/users";

export default {
  mixins: [emptyImageFilter],
  components: {
    UserEditModal,
    Navbar,
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
      },
      isCurrentUser: true,
      isSubscribing: false,
      isFollowed: true,
      isEdit: true,
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

  methods: {
    async fetchUser(userId) {
      try {
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
        } = data;

        this.user = {
          name,
          tweetsCount,
          account,
          introduction,
          front_cover: front_cover ? front_cover : 'https://imgur.com/s4rJStF.png',
          avatar: avatar ? avatar : "https://imgur.com/TYOq10P.png",
          followingsCount,
          Followers,
        };

          if(this.$store.state.currentUser.id !== userId){
            this.isCurrentUser = false
          }
      } catch (error) {
        // STEP 6: 透過 restaurantsAPI 取得餐廳資訊
        Toast.fire({
          icon: "error",
          title: "無法取得個人資料，請稍後再試",
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
  width: 80%;
  max-width: 960px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 25px;
}

.left__bar {
  grid-column: 1 / 3;
}

.user {
  grid-column: 3 / 10;
  padding-top: 16px;
  border-right: 1px solid #e6ecf0;
  border-left: 1px solid #e6ecf0;
}

.right__bar {
  grid-column: 10 / 13;
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