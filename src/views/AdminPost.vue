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
import tweetAPI from '../apis/tweets'
import { Toast } from '../utils/helpers'
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
      // tweets: {
      //   id: -1,
      //   name:'',
      //   text: '',
      //   tweetDate: '',
      //   content: ''
      // },
      tweets:[],
    };
  },
  methods: {
    async fetchTweets() {
      try {
        const { data } = await tweetAPI.getTweets()
        console.log(data)
        console.log('hi')
          this.tweets = dammyData.tweets
      } catch(error) {
        Toast.fire({
          icon: 'error',
          title: '載入失敗，請稍後再試'
        })
      }
    
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
.adminUsers {
  display: flex;
  max-height: 100vh;
  width: auto;;
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