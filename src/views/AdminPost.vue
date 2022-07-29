<template>
  <div class="adminPost">
    <!-- AdminSidbar -->
    <AdminSidbar />
    <div class="main">
      <div class="main__title">
        <h1>推文清單</h1>
      </div>
      <div class="main__body scrollbar">
        <!-- AdminTweetsList -->
        <AdminTweetsList 
        v-for="tweet in tweets" 
        :key="tweet.id" 
        :tweet="tweet" 
        @after-delete-tweet="afterDeleteTweet"
        />
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import { v4 as uuidv4 } from "uuid";
const dammyData = {
  tweets: [
    {
      id: uuidv4(),
      name: "Apple",
      image: "https://imgur.com/3C9eOJT.png",
      text: "hello",
      tweetDate: "3小時",
      content:
        " Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
    },
    {
      id: uuidv4(),
      name: "Apple",
      image: "https://imgur.com/3C9eOJT.png",
      text: "apple",
      tweetDate: "3小時",
      content:
        " Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
    },
    {
      id: uuidv4(),
      name: "Apple",
      image: "https://imgur.com/3C9eOJT.png",
      text: "apple",
      tweetDate: "3小時",
      content:
        " Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
    },
    {
      id: uuidv4(),
      name: "Apple",
      image: "https://imgur.com/3C9eOJT.png",
      text: "apple",
      tweetDate: "3小時",
      content:
        " Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
    },
    {
      id: uuidv4(),
      name: "Apple",
      image: "https://imgur.com/3C9eOJT.png",
      text: "apple",
      tweetDate: "3小時",
      content:
        " Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
    },
    {
      id: uuidv4(),
      name: "Apple",
      image: "https://imgur.com/3C9eOJT.png",
      text: "apple",
      tweetDate: "3小時",
      content:
        " Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
    },
    {
      id: uuidv4(),
      name: "Apple",
      image: "https://imgur.com/3C9eOJT.png",
      text: "apple",
      tweetDate: "3小時",
      content:
        " Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
    },
    {
      id: uuidv4(),
      name: "Apple",
      image: "https://imgur.com/3C9eOJT.png",
      text: "apple",
      tweetDate: "3小時",
      content:
        " Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
    },
    {
      id: uuidv4(),
      name: "Apple",
      image: "https://imgur.com/3C9eOJT.png",
      text: "apple",
      tweetDate: "3小時",
      content:
        " Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
    },
    {
      id: uuidv4(),
      name: "Apple",
      image: "https://imgur.com/3C9eOJT.png",
      text: "apple",
      tweetDate: "3小時",
      content:
        " Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
    },
    {
      id: uuidv4(),
      name: "Apple",
      image: "https://imgur.com/3C9eOJT.png",
      text: "apple",
      tweetDate: "3小時",
      content:
        " Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
    },
    {
      id: uuidv4(),
      name: "Apple",
      image: "https://imgur.com/3C9eOJT.png",
      text: "apple",
      tweetDate: "3小時",
      content:
        " Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
    },
    {
      id: uuidv4(),
      name: "Apple",
      image: "https://imgur.com/3C9eOJT.png",
      text: "apple",
      tweetDate: "3小時",
      content:
        " Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
    },
    {
      id: uuidv4(),
      name: "Apple",
      image: "https://imgur.com/3C9eOJT.png",
      text: "apple",
      tweetDate: "3小時",
      content:
        " Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
    },
    {
      id: uuidv4(),
      name: "Apple",
      image: "https://imgur.com/3C9eOJT.png",
      text: "apple",
      tweetDate: "3小時",
      content:
        " Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
    },
  ],
};
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
      tweets: [],
    };
  },
  methods: {
    fetchTweets() {
      this.tweets = dammyData.tweets;
    },
    afterDeleteTweet(tweetId) {
      this.tweets = this.tweets.filter(tweet => tweet.id !== tweetId)
    }
  },
  created() {
    this.fetchTweets();
  },
};
</script>

<style lang="scss" scoped>
.adminPost {
  display: flex;
  // justify-content: center;
  margin-right: 130px;
  max-height: 100vh;
  width: auto;
}

.main {
  width: auto;
  min-height: 100vh;
  border-right: 1px solid #e6ecf0;
  border-left: 1px solid #e6ecf0;
  margin-left: 24px;
}
.main__title {
  margin-top: 24px;
  width: 100%;
  border-bottom: 1px solid#E6ECF0;
  h1 {
    padding: 0 21px 25px;
    font-weight: 700;
    font-size: 24px;
    line-height: 26px;
  }
}

.main__body {
  overflow-y: auto;
  max-height: 100vh;
  // overscroll-behavior: contain;
}

.scrollbar {
  padding-left: 6px;
  &::-webkit-scrollbar {
    width: 6px;
  }
}
</style>