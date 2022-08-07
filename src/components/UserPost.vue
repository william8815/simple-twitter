<template>
  <div class="list__container">
    <Spinner v-if="isLoading" />
    <div
      v-else
      class="post__card"
      v-for="usertweet in usertweets"
      :key="usertweet.id"
    >
      <div>
        <img :src="user.avatar | emptyImage" alt="" class="post__avatar" />
      </div>
      <div class="post__info">
        <div class="post__info__header">
          <span class="header__user">{{ user.name }}</span>
          <span class="header__account">@{{ user.account }}</span>
          <span class="header__time"
            >．{{ usertweet.createdAt | fromNow }}</span
          >
        </div>
        <div class="post__info__text">{{ usertweet.description }}</div>
        <div class="post__info__icons">
          <div class="post__info__icons__comment">
            <img
              src="./../assets/img/評論人數.png"
              alt=""
              class="post__info__icons__comment__img"
            />
            <span class="post__info__icons__comment__span">{{
              usertweet.RepliesCount
            }}</span>
          </div>

          <div class="post__info__icons__like">
            <img
              v-if="!usertweet.isLiked"
              src="./../assets/img/喜歡人數.png"
              alt=""
              class="post__info__icons__like__img"
              :class="{ disabled: isProcessing }"
              @click.stop.prevent="addLike(usertweet.id)"
            />

            <img
              v-else
              src="./../assets/img/紅愛心.png"
              alt=""
              class="post__info__icons__like__img"
              :class="{ disabled: isProcessing }"
              @click.stop.prevent="deleteLike(usertweet.id)"
            />

            <span class="post__info__icons__like__span">{{
              usertweet.LikesCount
            }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import usersAPI from "./../apis/users";
import tweetsAPI from "./../apis/tweet";

import { Toast } from "./../utils/helpers";
import { emptyImageFilter } from "./../utils/mixins";
import { fromNowFilter } from "./../utils/mixins";
import Spinner from "./../components/Spinner.vue";

export default {
  mixins: [fromNowFilter, emptyImageFilter],

  components: {
    Spinner,
  },

  data() {
    return {
      usertweets: [
        {
          id: 0,
          createdAt: "",
          description: "",
          RepliesCount: 0,
          LikesCount: 0,
          isLiked: false,
        },
      ],
      isProcessing: false,
      isLoading: false,
    };
  },

  created() {
    // api getUser (params: id)
    // 先取得要渲染的使用者id
    const { id: userId } = this.$route.params;
    this.getUserTweets(userId);
  },

  props: {
    user: {
      type: Object,
      required: true,
    },
  },

  methods: {
    // 取得特定使用者的所有貼文
    async getUserTweets(userId) {
      try {
        this.isProcessing = true;
        const { data } = await usersAPI.getUserTweets(userId);

        const usertweets = { data };
        // 將取得的資料解構附值至data中
        this.usertweets = usertweets.data;

        this.isProcessing = false;
      } catch (error) {
        this.isProcessing = false;
        Toast.fire({
          icon: "error",
          title: "無法取得個人推文，請稍後再試",
        });

        this.$router.push("/main");
      }
    },

    // 新增喜歡
    async addLike(tweetId) {
      try {
        this.isProcessing = true;
        const { data } = await tweetsAPI.addTweetLike(tweetId);
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        this.usertweets = this.usertweets.map((usertweet) => {
          if (usertweet.id === tweetId) {
            return {
              ...usertweet,
              isLiked: true,
              LikesCount: usertweet.LikesCount + 1,
            };
          }
          return usertweet;
        });
        Toast.fire({
          icon: "success",
          title: "已喜歡該推文",
        });
        this.isProcessing = false;
      } catch (error) {
        this.isProcessing = false;
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "喜歡該貼文失敗",
        });
      }
    },
    // 移除喜歡
    async deleteLike(tweetId) {
      try {
        this.isProcessing = true;
        const { data } = await tweetsAPI.cancelTweetLike(tweetId);
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        this.usertweets = this.usertweets.map((usertweet) => {
          if (usertweet.id === tweetId) {
            return {
              ...usertweet,
              isLiked: false,
              LikesCount: usertweet.LikesCount - 1,
            };
          }
          return usertweet;
        });
        Toast.fire({
          icon: "success",
          title: "已取消喜歡該推文",
        });
        this.isProcessing = false;
      } catch (error) {
        this.isProcessing = false;
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "取消喜歡該推文失敗",
        });
      }
    },
  },
};
</script>


<style lang="scss" scoped>
.post__card {
  width: 100%;
  display: flex;
  border: 1px solid #e6ecf0;
}

.post__avatar {
  width: 50px;
  height: 50px;
  border-radius: 50% 50%;
  margin: 16px 0 0 24px;
}

.post__info {
  flex-grow: 1;
  margin-left: 8px;

  &__header {
    & .header__user {
      display: inline-block;
      margin-top: 16px;
      margin-right: 8px;
      font-size: 16px;
      color: #171725;
    }

    & .header__account,
    & .header__time {
      font-size: 14px;
      color: #657786;
    }
  }

  &__text {
    margin: 10px 0;
    font-size: 16px;
    color: #171725;
  }

  &__icons {
    display: flex;
    margin-bottom: 17px;

    &__comment,
    &__like {
      display: flex;
      align-items: center;
    }

    &__comment {
      margin-right: 40px;

      &__img {
        height: 14px;
        width: 14px;   
        cursor: pointer;     
      }

      &__span {
        font-size: 14px;
        margin-left: 10px;
      }
    }

    &__like {
      &__img {
        height: 14px;
        width: 14px;
        cursor: pointer;

        &.disabled {
          pointer-events: none;
        }
      }

      &__span {
        font-size: 14px;
        margin-left: 10px;
      }
    }
  }
}
</style>