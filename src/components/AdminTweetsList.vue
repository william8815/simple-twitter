<template>
  <div class="tweets__list">
    <div class="list__avast">
      <img :src="tweet.User.avatar" alt="" />
    </div>
    <div class="list__info">
      <div class="info__title">
        <div class="title__name">{{ tweet.User.name }}</div>
        <div class="title__date">
          @{{ tweet.User.text }} ‧ {{ tweet.createdAt |  fromNow }}
        </div>
      </div>

      <p>
        {{ tweet.description }}
      </p>
    </div>
    <div class="list__icon">
      <img
        src="../assets/img/delete.svg"
        alt=""
        @click.prevent.stop="handleDeleteButton(tweet.id)"
      />
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import { fromNowFilter } from './../utils/mixins'
export default {
  name: "AdminTweetsList",
  mixins: [ fromNowFilter ],
  props: {
    Tweet: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      tweet: {
        id: -1,
        description: "",
        createdAt: "",
        updatedAt: "",
        User: {
          id: -1,
          name: "user1",
          text: "",
          avatar: null,
        },
      },
    };
  },
  methods: {
    handleDeleteButton(tweetId) {
      this.$emit("after-delete-tweet", tweetId);
    },
    fetchTweet() {
      const { id, description, createdAt, updatedAt, User } = this.Tweet;
      const { name, text, avatar } = User;
      this.tweet = {
        id,
        description,
        createdAt,
        updatedAt,
        User: {
          name,
          text: text ? text : "apple",
          avatar: avatar ? avatar : "https://imgur.com/2P4VlXI.png",
        },
      };
    },
  },
  created() {
    this.fetchTweet();
  },
};
</script>

<style lang="scss" scoped>
.tweets__list {
  min-height: 120px;
  height: auto;
  display: flex;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e6ecf0;
  padding-top: 16px;
  padding-left: 24px;
}

.list__avast {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 50px;
    height: 50px;
  }
}

.list__info {
  padding-left: 8px;
  flex: 1;
  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    color: #171725;
  }
}

.info__title {
  display: flex;
  margin-bottom: 8px;
}
.title__name {
  margin-right: 8px;
  font-weight: 700;
  font-size: 16px;
  line-height: 26px;
}

.title__date {
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #6c757d;
}

.list__icon {
  cursor: pointer;
  img {
    width: 15px;
    height: 15px;
  }
}
</style>