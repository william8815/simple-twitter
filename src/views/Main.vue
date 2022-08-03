<template>
  <!-- 首頁 -->
  <div class="container row row-cols-3">
    <!-- navbar -->
    <section class="col-2" style="min-width:176px;'">
      <Navbar @submit-tweet="handleSubmitTweet" :tweet_state="tweetState" />
    </section>
    <!-- main -->
    <section class="main-section col-7">
      <div class="main .scrollbar">
        <h4>首頁</h4>
        <div class="tweet-board">
          <div class="tweet-board__user">
            <router-link :to="{ name: 'main' }">
              <img :src="currentUser.avatar | emptyImage" alt="userImg" />
            </router-link>
            <form @submit.stop.prevent="submitTweet" action="">
              <div>
                <!-- <label for="tweet" class="tweet-title">有甚麼新鮮事?</label> -->
                <textarea
                  v-model="content"
                  @keydown.stop="setCount"
                  class="tweet-content"
                  name="tweet"
                  id=""
                  maxlength="140"
                  cols="30"
                  :rows="count"
                  placeholder="有甚麼新鮮事?"
                ></textarea>
              </div>
              <button type="submit" class="tweet-btn">推文</button>
            </form>
          </div>
          <div class="tweet-board__otherUser">
            <ul>
              <li class="list-item" v-for="tweet in tweets" :key="tweet.id">
                <router-link :to="{ name: 'main' }">
                  <img
                    :src="tweet.User.avatar | emptyImage"
                    alt="otherUserImg"
                  />
                </router-link>
                <div>
                  <div class="user">
                    <router-link :to="{ name: 'main' }" class="user__name">
                      {{ tweet.User.name }}
                    </router-link>
                    <router-link :to="{ name: 'main' }" class="user__account">
                      @{{ tweet.User.account }} ・
                    </router-link>

                    <router-link
                      :to="{ name: 'replylist', params: { id: tweet.id } }"
                      class="user__posttime"
                    >
                      {{ tweet.createdAt | fromNow }}
                    </router-link>
                  </div>
                  <div class="post">
                    <router-link
                      :to="{ name: 'replylist', params: { id: tweet.id } }"
                    >
                      {{ tweet.description }}
                    </router-link>
                  </div>
                  <div class="extra-info">
                    <div class="btn comment">
                      <svg
                        @click="makeReply(tweet.id)"
                        class="icon comment__icon"
                        viewBox="0 0 30 30"
                        fill="#657786"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17.5576 2.80254L12.3726 2.79004H12.3701C6.90262 2.79004 2.62012 7.07379 2.62012 12.5425C2.62012 17.665 6.60262 21.55 11.9514 21.755V26.54C11.9514 26.675 12.0064 26.8975 12.1014 27.0438C12.2789 27.325 12.5814 27.4775 12.8914 27.4775C13.0639 27.4775 13.2376 27.43 13.3939 27.33C13.7239 27.12 21.4851 22.155 23.5039 20.4475C25.8814 18.435 27.3039 15.485 27.3076 12.5575V12.5363C27.3001 7.07754 23.0201 2.80254 17.5576 2.80129V2.80254ZM22.2914 19.0175C20.8739 20.2175 16.2139 23.2738 13.8264 24.8213V20.8375C13.8264 20.32 13.4076 19.9 12.8889 19.9H12.3939C7.81887 19.9 4.49637 16.805 4.49637 12.5425C4.49637 8.12504 7.95637 4.66504 12.3714 4.66504L17.5551 4.67754H17.5576C21.9726 4.67754 25.4326 8.13504 25.4351 12.5475C25.4314 14.935 24.2576 17.3525 22.2926 19.0175H22.2914Z"
                        />
                      </svg>
                      <span class="num">{{ tweet.replyCount }}</span>
                    </div>
                    <div class="btn like">
                      <svg
                        v-if="tweet.isLiked"
                        @click="deleteLike(tweet.id)"
                        class="icon like__icon"
                        viewBox="0 0 30 30"
                        fill="#f91880"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15 27.0478H14.9825C11.7538 26.9878 2.4375 18.5703 2.4375 10.5978C2.4375 6.76777 5.59375 3.40527 9.19125 3.40527C12.0537 3.40527 13.9787 5.38027 14.9987 6.81777C16.0162 5.38277 17.9412 3.40527 20.805 3.40527C24.405 3.40527 27.56 6.76777 27.56 10.599C27.56 18.569 18.2425 26.9865 15.0137 27.0453H15V27.0478Z"
                          fill="#f91880"
                        />
                      </svg>
                      <svg
                        v-else
                        @click="addLike(tweet.id)"
                        class="icon like__icon"
                        viewBox="0 0 30 30"
                        fill="#fff"
                        stroke="#657786"
                        stroke-width="2px"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15 27.0478H14.9825C11.7538 26.9878 2.4375 18.5703 2.4375 10.5978C2.4375 6.76777 5.59375 3.40527 9.19125 3.40527C12.0537 3.40527 13.9787 5.38027 14.9987 6.81777C16.0162 5.38277 17.9412 3.40527 20.805 3.40527C24.405 3.40527 27.56 6.76777 27.56 10.599C27.56 18.569 18.2425 26.9865 15.0137 27.0453H15V27.0478Z"
                          fill="white"
                        />
                      </svg>
                      <span class="num">{{ tweet.likeCount }}</span>
                    </div>
                  </div>
                </div>
                <!-- reply modal -->
                <ReplyModal
                  v-if="tweet.replyState"
                  :initial_tweet="tweet"
                  @handleReplyState="afterReplyState"
                  @after-submit="afterHandleSubmit"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <!-- recommend -->
    <section class="col-3" style="min-width:274px;'">
      <RecommendUsers />
    </section>
  </div>
</template>

<script>
import Navbar from "./../components/Navbar.vue";
import RecommendUsers from "./../components/RecommendUsers.vue";
import ReplyModal from "./../components/ReplyModal.vue";
// import { v4 as uuidv4 } from "uuid";
// api
import tweetsAPI from "./../apis/tweet";
// 共用區
import { Toast } from "./../utils/helpers";
import { mapState } from "vuex";
import { emptyImageFilter } from "./../utils/mixins";
import { fromNowFilter } from "./../utils/mixins";

export default {
  name: "main-component",
  mixins: [emptyImageFilter, fromNowFilter],
  components: {
    Navbar,
    RecommendUsers,
    ReplyModal,
  },
  data() {
    return {
      count: 1,
      content: "",
      tweets: [],
      tweetState: false,
    };
  },
  computed: {
    ...mapState(["currentUser"]),
  },
  created() {
    this.fetchTweet({
      limit: 10,
    });
  },
  methods: {
    async fetchTweet({ limit }) {
      try {
        const { data } = await tweetsAPI.getTweets({
          limit,
        });
        this.tweets = data;
        this.tweets = this.tweets.map((tweet) => ({
          ...tweet,
          replyState: false,
          tweetState: false,
        }));
      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "無法取得推文資料，請稍後再試",
        });
      }
    },
    // 新增喜歡
    async addLike(tweetId) {
      try {
        const { data } = await tweetsAPI.addTweetLike(tweetId);
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        this.tweets = this.tweets.map((tweet) => {
          if (tweet.id === tweetId) {
            return {
              ...tweet,
              isLiked: true,
              likeCount: tweet.likeCount + 1,
            };
          }
          return tweet;
        });
        Toast.fire({
          icon: "success",
          title: "已按讚",
        });
      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "按讚失敗",
        });
      }
    },
    // 移除喜歡
    async deleteLike(tweetId) {
      try {
        const { data } = await tweetsAPI.cancelTweetLike(tweetId);
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        this.tweets = this.tweets.map((tweet) => {
          if (tweet.id === tweetId) {
            return {
              ...tweet,
              isLiked: false,
              likeCount: tweet.likeCount - 1,
            };
          }
          return tweet;
        });
        Toast.fire({
          icon: "success",
          title: "已取消讚",
        });
      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "取消讚失敗",
        });
      }
      this.$forceUpdate();
    },
    // 跳出留言彈跳視窗
    makeReply(tweetId) {
      this.tweets = this.tweets.map((tweet) => {
        if (tweetId === tweet.id) {
          return {
            ...tweet,
            replyState: true,
          };
        }
        return tweet;
      });
    },
    // 關閉留言彈跳視窗
    afterReplyState(tweetId) {
      this.tweets = this.tweets.map((tweet) => {
        if (tweetId === tweet.id) {
          return {
            ...tweet,
            replyState: false,
          };
        }
        return tweet;
      });
    },
    // 新增留言
    async afterHandleSubmit({ tweetId, comment }) {
      try {
        const { data } = await tweetsAPI.addNewComment({ tweetId, comment });
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        Toast.fire({
          icon: "success",
          title: "成功新增一則留言",
        });
      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "新增留言失敗，請稍後再試",
        });
      }
      this.tweets = this.tweets.map((tweet) => {
        if (tweetId === tweet.id) {
          return {
            ...tweet,
            replyState: false,
            replyCount: tweet.replyCount + 1,
          };
        }
        return tweet;
      });
    },
    // 新增貼文
    submitTweet() {
      if (this.content.length === 0) {
        Toast.fire({
          icon: "error",
          title: "推文內容請勿空白",
        });
        return;
      }
      if (this.content.length > 140) {
        Toast.fire({
          icon: "error",
          title: "推文字數超過 140 個字",
        });
        return;
      }
      this.handleSubmitTweet({ description: this.content });
      this.content = "";
    },
    // 新增貼文(請求)
    async handleSubmitTweet({ description }) {
      try {
        const { data } = await tweetsAPI.addTweet({ description });
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        Toast.fire({
          icon: "success",
          title: "成功新增一則貼文",
        });
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "新增貼文失敗",
        });
      }
      this.fetchTweet({ limit: 10 });
    },
    setCount(event) {
      if (event.key === "Enter") {
        this.count += 1;
        // let reg = /^[\w*][\s*]\/n$/gi;
        // console.log(reg.exec(this.content));
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: calc(100vw - 130px);
  max-width: 1400px;
  height: 100vh;
  margin-left: 130px;
  .main-section {
    flex: 1 1;
  }
}
// 取消滾輪
::-webkit-scrollbar {
  /* make scrollbar transparent */
  width: 0px;
  background: transparent;
}

.main {
  border-left: 1px solid #e6ecf0;
  border-right: 1px solid #e6ecf0;
  height: 100vh;
  overflow-y: scroll;
  h4 {
    width: 100%;
    padding: 24px;
    border-bottom: 1px solid #e6ecf0;
    position: sticky;
    top: 0;
    z-index: 1;
  }
  h4::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    // 毛玻璃特效
    backdrop-filter: blur(3px);
    z-index: -1;
  }
  // 圖片共同樣式
  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 8px;
  }
  .tweet-board {
    &__user {
      display: flex;
      padding: 16px 24px;
      border-bottom: 10px solid #e6ecf0;
      form {
        width: 100%;
        display: flex;
        flex-direction: column;
      }
      .tweet-content {
        width: 100%;
        resize: none;
        font-size: 18px;
        font-weight: 700;
        color: #6c757d;
        padding-top: 12px;
        border: none;
        outline: none;
      }
      .tweet-btn {
        align-self: flex-end;
        margin-top: 16px;
        border: none;
        background-color: var(--main-color);
        color: #fff;
        width: 64px;
        height: 40px;
        border-radius: 50px;
        padding: 8px 16px;
        font-size: 16px;
      }
    }
    &__otherUser {
      .list-item,
      .user,
      .extra-info {
        display: flex;
      }
      .list-item {
        padding: 16px 24px;
        border-bottom: 1px solid #e6ecf0;
      }
      .user {
        align-items: center;
        &__name {
          font-size: 16px;
          font-weight: 700;
          margin-right: 8px;
        }
        &__account,
        &__posttime {
          font-size: 14px;
          font-weight: 400;
          color: #6c757d;
        }
        &__posttime:hover {
          border-bottom: 1px solid #e6ecf0;
        }
      }
      .post {
        margin: 0.5rem 0;
      }
      .extra-info {
        width: 10vw;
        justify-content: space-between;
        .btn {
          width: 38px;
          display: flex;
          align-items: center;
          .icon {
            width: 16px;
            height: 16px;
            fill: #6c757d;
            background-size: cover;
            margin-right: 9px;
            cursor: pointer;
          }
          .num {
            color: #6c757d;
            font-family: "Montserrat", sans-serif;
            font-size: 14px;
            font-weight: 600;
          }
        }
        .comment:hover .icon,
        .comment:hover .num {
          fill: var(--main-color);
          color: var(--main-color);
        }
        .like:hover .icon,
        .like:hover .num {
          stroke: #f91880;
          color: #f91880;
        }
      }
    }
  }
}
</style>