<template>
  <div class="list__container">
    <Spinner v-if="isLoading" />
    <div
      v-else
      class="favorite__card"
      v-for="usertweet in usertweets"
      :key="usertweet.TweetId"
    >
      <div>
        <img :src="usertweet.selfImg | emptyImage" alt="" class="favorite__avatar" />
      </div>
      <div class="favorite__info">
        <div class="favorite__info__header">
          <span class="header__user">{{ usertweet.userNameOfLikedTweet }}</span>
          <span class="header__account"
            >@{{ usertweet.userAccountOfLikedTweet }}</span
          >
          <span class="header__time"
            >．{{ usertweet.createdAt | fromNow }}</span
          >
        </div>
        <div class="favorite__info__text">{{ usertweet.description }}</div>
        <div class="favorite__info__icons">
          <div class="favorite__info__icons__comment">
            <img
              src="./../assets/img/評論人數.png"
              alt=""
              class="favorite__info__icons__comment__img"
            />
            <span class="favorite__info__icons__comment__span">{{
              usertweet.repliedCount
            }}</span>
          </div>

          <div class="favorite__info__icons__like">
            <img
              src="./../assets/img/紅愛心.png"
              alt=""
              class="favorite__info__icons__like__img"
            />
            <span class="favorite__info__icons__like__span">{{
              usertweet.likesCount
            }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import usersAPI from "./../apis/users";
import { Toast } from "./../utils/helpers";
import { fromNowFilter } from "./../utils/mixins";
import { emptyImageFilter } from "./../utils/mixins";
import Spinner from "./../components/Spinner.vue";

export default {
  mixins: [fromNowFilter, emptyImageFilter],

  components: {
    Spinner,
  },

  created() {
    const { id: userId } = this.$route.params;
    this.getUserLikes(userId);
  },

  data() {
    return {
      usertweets: [
        {
          TweetId: -1,
          userNameOfLikedTweet: "",
          userAccountOfLikedTweet: "",
          description: "",
          createdAt: "",
          userAvatarOfLikedTweet: "",
          repliedCount: 0,
          likesCount: 0,
        },
      ],
      isLoading: false,
    };
  },

  methods: {
    async getUserLikes(userId) {
      try {
        this.isLoading = true;

        const { data } = await usersAPI.getUserLikes(userId);
        const usertweets = data;

        this.usertweets = usertweets;

        this.isLoading = false;
      } catch (error) {
        this.isLoading = false;
        Toast.fire({
          icon: "error",
          title: "無法取得個人喜歡的推文，請稍後再試",
        });
      }
    },
  },
};
</script>


<style lang="scss" scoped>
.favorite__card {
  width: 100%;
  display: flex;
  border: 1px solid #e6ecf0;
}

.favorite__avatar {
  width: 50px;
  height: 50px;
  border-radius: 50% 50%;
  margin: 16px 0 0 24px;
}

.favorite__info {
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
      }

      &__span {
        font-size: 14px;
        margin-left: 10px;
      }
    }
  }
}
</style>