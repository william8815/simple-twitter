<template>
  <div class="list__container">
    <div class="favorite__card" v-for="usertweet in usertweets" :key="usertweet.id">
      <div>
        <img :src="usertweet.selfImg" alt="" class="favorite__avatar" />
      </div>
      <div class="favorite__info">
        <div class="favorite__info__header">
          <span class="header__user">{{ usertweet.name }}</span>
          <span class="header__account">@{{ usertweet.account }}</span>
          <span class="header__time">．發文時間</span>
        </div>
        <div class="favorite__info__text">{{ usertweet.text }}</div>
        <div class="favorite__info__icons">
          <div class="favorite__info__icons__comment">
            <img
              src="./../assets/img/評論人數.png"
              alt=""
              class="favorite__info__icons__comment__img"
            />
            <span class="favorite__info__icons__comment__span">{{
              usertweet.commentpeople
            }}</span>
          </div>

          <div class="favorite__info__icons__like">
            <img
              src="./../assets/img/紅愛心.png"
              alt=""
              class="favorite__info__icons__like__img"
            />
            <span class="favorite__info__icons__like__span">{{
              usertweet.likepeople
            }}</span>
          </div>
        </div>
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
        },

        {
          id: 2,
          name: "Hello Kitty",
          account: "Hello Kitty",
          text: "hey guys, im Hello Kitty, i like to swimming",
          selfImg: require("./../assets/img/Photo.png"),
          commentpeople: 13,
          likepeople: 76,
        },
      ],
    };
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
    margin-bottom: 17px ;

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