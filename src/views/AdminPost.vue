<template>
  <div class="container row">
    <!-- AdminSidbar -->
    <!-- <AdminSidbar /> -->
    <!-- navbar -->
    <section class="col-xl-2 col-lg-2">
      <Navbar />
    </section>
    <!-- main -->
    <section class="col-xl-10 col-lg-10">
      <div class="main">
        <div class="main__title">
          <h1>推文清單</h1>
        </div>
        <div class="main__body">
          <!-- AdminTweetsList -->
          <AdminTweetsList
            v-for="tweet in tweets"
            :key="tweet.id"
            :tweet="tweet"
            @after-delete-tweet="afterDeleteTweet"
          />
        </div>
      </div>
    </section>
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
import Navbar from "./../components/Navbar.vue";
export default {
  name: "AdminPost",
  components: {
    AdminSidbar,
    AdminTweetsList,
    Navbar,
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
      this.tweets = this.tweets.filter((tweet) => tweet.id !== tweetId);
    },
  },
  created() {
    this.fetchTweets();
  },
};
</script>

<style lang="scss" scoped>
.container {
  // display: flex;
  // margin-right: 130px;
  // max-height: 100vh;
  // width: auto;
  max-width: 1144px;
  height: 100vh;
  margin: 0 auto;
}

.main {
  // width: auto;
  height: 100vh;
  border-right: 1px solid #e6ecf0;
  border-left: 1px solid #e6ecf0;
  // margin-left: 24px;
  overflow-y: scroll;
  position: relative;
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
  h1 {
    padding: 24px;
    font-weight: 700;
    font-size: 24px;
    line-height: 26px;
  }
}

// .main__body {
//   // margin-top: 90px;
//   // max-height: 100%;
//   // width: 937px;
// }
</style>