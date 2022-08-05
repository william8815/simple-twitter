<template>
  <div class="container">
    <div class="card">
      <div class="user__background">
        <img :src="user.front_cover" alt="" />
      </div>
      <div class="card__avatar">
        <img :src="user.avatar" alt="" />
      </div>
      <div class="card__body">
        <div class="card__title">{{ user.name }}</div>
        <p class="card__text">@{{ user.account }}</p>
        <div class="click__panel">
          <div class="click__icon">
            <img src="../assets/img/reply.svg" alt="" />{{
              user.tweetsCount | changeCount
            }}
          </div>
          <div class="click__icon">
            <img src="../assets/img/like.svg" alt="" />{{
              user.likedTweetsCount | changeCount
            }}
          </div>
        </div>
        <div class="follow__panel">
          <div class="follow__count">
            <span>{{ user.followingsCount | changeFollow }} </span>跟隨中
          </div>
          <div class="follow__count">
            <span>{{ user.followersCount | changeFollow }} </span>跟隨者
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdminUserCard",
  props: {
    userInfo: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      user: {
        id: -1,
        name: "",
        avatar: "",
        account: "",
        front_cover: "",
        tweetsCount: 1,
        likedTweetsCount: 0,
        followingsCount: 0,
        followersCount: 0,
      },
    };
  },
  methods: {
    fetchUser() {
      const {
        id,
        name,
        avatar,
        account,
        tweetsCount,
        likedTweetsCount,
        followingsCount,
        followersCount,
        front_cover,
      } = this.userInfo;
      this.user = {
        ...this.user,
        id,
        name,
        front_cover: front_cover ? front_cover : 'https://imgur.com/GGeK2iP.png',
        avatar: avatar ? avatar : "https://imgur.com/2ajTlIb.png",
        account,
        tweetsCount,
        likedTweetsCount,
        followingsCount,
        followersCount,
      };
    },
  },
  created() {
    this.fetchUser();
  },
  filters: {
    changeCount(count) {
      if (count >= 1000000) {
        return Math.round(count / 100000) / 10 + "M";
      } else if (count >= 1000) {
        return Math.round(count / 100) / 10 + "K";
      } else {
        return count;
      }
    },
    changeFollow(count) {
      if (count >= 100000) {
        return Math.round(count / 10000).toLocaleString() + " W";
      } else return count.toLocaleString();
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  width: 249px;
  // margin: 1rem;
  margin: 0 1rem 1rem 0;
  padding: 0;
}
.container .card {
  border-radius: 10px;
  background-color: #f6f7f8;
}
.user__background img {
  width: 249px;
  height: 140px;
  border-radius: 10px 10px 0px 0px;
}

.card__avatar {

}
.card__avatar img {
  width: 100px;
  height: 100px;
  position: absolute;
  top: 70px;
  left: 50%;
  transform: translateX(-50%);
   border: 4px solid #FFFFFF;
  border-radius: 50%;
}

.card__body {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  color: #171725;
  width: 100%;
  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: #6c757d;
    margin-bottom: 1rem;
  }
}

.card__title {
  font-weight: 700;
  font-size: 16px;
  line-height: 26px;
}

.click__panel {
  width: 155px;
  display: flex;
  justify-content: space-between;
}

.click__icon {
  // cursor: pointer;
  font-weight: 500;
  font-size: 16px;
  line-height: 15px;
  color: #1c1c1c;
  margin-bottom: 0.5rem;

  img {
    width: 24px;
    height: 21px;
    margin-right: 5px;
  }
}

.follow__panel {
  display: flex;
}

.follow__count {
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #6c757d;
  margin-bottom: 24px;

  span {
    color: #171725;
    // margin-right: 5px;
  }
}

.follow__count:not(:last-child) {
  margin-right: 8px;
}
</style>

