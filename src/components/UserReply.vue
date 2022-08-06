<template>
  <div class="list__container">
    <Spinner v-if="isLoading" />
    <div
      v-else
      class="reply__card"
      v-for="usertweet in usertweets"
      :key="usertweet.id"
    >
      <div>
        <img :src="user.avatar | emptyImage" alt="" class="reply__avatar" />
      </div>
      <div class="reply__info">
        <div class="reply__info__header">
          <span class="header__user">{{ user.name }}</span>
          <span class="header__account">@{{ user.account }}</span>
          <span class="header__time"
            >．{{ usertweet.createdAt | fromNow }}</span
          >
        </div>
        <div class="reply__friend">
          <span class="reply__friend__text">回覆</span>
          <router-link
            :to="{ name: 'user-post', params: { id: usertweet.Tweet.User.id } }"
          >
            <span class="reply__friend__span"
              >@{{ usertweet.Tweet.User.account }}</span
            ></router-link
          >
        </div>
        <div class="reply__info__text">{{ usertweet.comment }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import usersAPI from "./../apis/users";

import { Toast } from "./../utils/helpers";
import { emptyImageFilter } from "./../utils/mixins";
import { fromNowFilter } from "./../utils/mixins";
import Spinner from "./../components/Spinner.vue";

export default {
  mixins: [fromNowFilter, emptyImageFilter],

  components: {
    Spinner,
  },

  props: {
    user: {
      type: Object,
      required: true,
    },
  },

  created() {
    // api getUser (params: id)
    // 先取得要渲染的使用者id
    const { id: userId } = this.$route.params;
    this.getUserReply(userId);
  },

  data() {
    return {
      usertweets: [
        {
          id: 1, // Reply Id
          comment: "123", // Reply comment
          createdAt: "2022-08-02T16:49:11.000Z", // Reply 更新時間
          Tweet: {
            id: 1, // 該篇推文ID
            User: {
              id: 1, // 該篇推文使用者的 ID
              account: "8", // 該篇推文使用者的 帳號
            },
          },
        },
      ],
      isLoading: false,
    };
  },

  methods: {
    async getUserReply(userId) {
      try {
        this.isLoading = true;
        const { data } = await usersAPI.getUserReply(userId);
        const usertweets = data;
        this.usertweets = usertweets;

        this.isLoading = false;
      } catch (error) {
        this.isLoading = false;
        Toast.fire({
          icon: "error",
          title: "無法取得個人推文，請稍後再試",
        });
      }
    },
  },
};
</script>




<style lang="scss" scoped>
.reply__card {
  width: 100%;
  display: flex;
  border: 1px solid #e6ecf0;
}

.reply__avatar {
  width: 50px;
  height: 50px;
  border-radius: 50% 50%;
  margin: 16px 0 0 24px;
}

.reply__info {
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
}

.reply__friend {
  margin-top: 10px;

  & span {
    font-size: 14px;
  }

  &__text {
    color: #657786;
  }

  &__span {
    margin-left: 5px;
    color: var(--main-color);
  }
}
</style>