<template>
  <div class="adminUsers">
    <!-- AdminSidbar -->
    <AdminSidbar />
    <!-- main -->
    <div class="main">
      <div class="main__title">
        <h1>推文清單</h1>
      </div>
      <div class="main__body">
        <!-- AdminTweetsList -->
        <AdminTweetsList
          v-for="tweet in tweets"
          :key="tweet.id"
          :tweet-info="tweet"
          @after-delete-tweet="afterDeleteTweet"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from "../utils/helpers";
import adminAPI from "../apis/admin";
import AdminSidbar from "../components/AdminSidbar.vue";
import AdminTweetsList from "../components/AdminTweetsList.vue";

export default {
  name: "AdminPost",
  components: {
    AdminSidbar,
    AdminTweetsList,
  },
  data() {
    return {
      tweets: {},
    };
  },
  methods: {
    async fetchTweets() {
      try {
        const { data } = await adminAPI.getTweets();
        this.tweets = data
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: error.response.data.message,
        });
      }
    },
    async afterDeleteTweet(tweetId) {
      try {
        const { data } = await adminAPI.deleteTweet({tweetId})
        if(data.statu === 'error') {
          throw new Error(data.message)
        }
        this.tweets = this.tweets.filter((tweet) => tweet.id !== tweetId);
        Toast.fire({
          icon: 'success',
          title: data.message
        })
      } catch(error) {
        Toast.fire({
          icon: 'error',
          title: error.response.data.message
        })
      }
    },
  },
  created() {
    this.fetchTweets();
  },
};
</script>

<style lang="scss" scoped>
.adminUsers {
  display: flex;
  max-height: 100vh;
  width: auto;
}

.main {
  width: 937px;
  height: 100vh;
  border-right: 1px solid #e6ecf0;
  border-left: 1px solid #e6ecf0;
  margin-left: 24px;
  overflow-y: scroll;
}

::-webkit-scrollbar {
  width: 0px;
  background: transparent;
}

.main__title {
  position: sticky;
  top: 0;
  // width: 937px;
  width: 100%;
  background: #fff;
  border-bottom: 1px solid#E6ECF0;
  height: 74px;
  display: flex;
  align-items: center;
  padding: 24px;
  opacity: 0.95;
  h1 {
    font-weight: 700;
    font-size: 24px;
    line-height: 26px;
  }
}
</style>