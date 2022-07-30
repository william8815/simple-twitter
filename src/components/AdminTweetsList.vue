<template>
  <div class="tweets__list">
    <div class="list__avast">
      <img :src="tweet.image" alt="" />
    </div>
    <div class="list__info">
      <div class="info__title">
        <div class="title__name">{{ tweet.name }}</div>
        <div class="title__date">@{{ tweet.text }} ‧ {{ tweet.tweetDate }}</div>
      </div>

      <p>
        {{ tweet.content }}
      </p>
    </div>
    <div class="list__icon">
      <img
        src="https://imgur.com/zbiCCdk.png"
        alt=""
        @click.prevent.stop="handleDeleteButton(tweet.id)"
      />
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "AdminTweetsList",
  props: {
    tweet: {
      type: Object,
      required: true,
    },
  },
  methods: {
    handleDeleteButton(tweetId) {
      this.$emit("after-delete-tweet", tweetId);
    },
    test() {
      console.log("test");
    },
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
  // min-width: 937px;
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
}
</style>