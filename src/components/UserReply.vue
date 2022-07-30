<template>
  <div class="list__container">
    <div
      class="reply__card"
      v-for="usertweet in usertweets"
      :key="usertweet.id"
    >
      <div>
        <img :src="usertweet.selfImg" alt="" class="reply__avatar" />
      </div>
      <div class="reply__info">
        <div class="reply__info__header">
          <span class="header__user">{{ usertweet.name }}</span>
          <span class="header__account">@{{ usertweet.account }}</span>
          <span class="header__time">．發文時間</span>
        </div>
        <div class="reply__friend">
          <span class="reply__friend__text">回覆</span>
          <span class="reply__friend__span">@{{ usertweet.friend }}</span>
        </div>
        <div class="reply__info__text">{{ usertweet.text }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      usertweets: [
        {
          id: 1,
          name: "John Doe",
          account: "heyJohn",
          text: "hey guys, im John, i like to swimming",
          selfImg: require("./../assets/img/Photo.png"),
          commentpeople: 13,
          likepeople: 76,
          friend: "apple",
        },

        {
          id: 2,
          name: "Hello Kitty",
          account: "Hello Kitty",
          text: "hey guys, im Hello Kitty, i like to swimming",
          selfImg: require("./../assets/img/Photo.png"),
          commentpeople: 13,
          likepeople: 76,
          friend: "apple",
        },
      ],
    };
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