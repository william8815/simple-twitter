<template>
  <!-- 首頁 -->
  <div class="container row">
    <!-- navbar -->
    <section class="col-xl-2 col-lg-2">
      <Navbar />
    </section>
    <!-- main -->
    <section class="col-xl-7 col-lg-7">
      <div class="main .scrollbar">
        <h4>首頁</h4>
        <div class="tweet-board">
          <div class="tweet-board__user">
            <img src="~@/assets/img/userImg.png" alt="userImg" />
            <form action="">
              <div>
                <!-- <label for="tweet" class="tweet-title">有甚麼新鮮事?</label> -->
                <textarea
                  class="tweet-content"
                  name="tweet"
                  id=""
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
                <img src="~@/assets/img/otherUserImg.png" alt="otherUserImg" />
                <div>
                  <div class="user">
                    <div class="user__name">{{ tweet.name }}</div>
                    <div class="user__account">
                      {{ tweet.account }}・{{ tweet.createAt }}
                    </div>
                  </div>
                  <div class="post">
                    {{ tweet.post }}
                  </div>
                  <div class="extra-info">
                    <div class="btn comment">
                      <svg
                        class="icon comment__icon"
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.36401 0.49446L5.59867 0.487793H5.59734C2.68134 0.487793 0.397339 2.77246 0.397339 5.68913C0.397339 8.42113 2.52134 10.4931 5.37401 10.6025V13.1545C5.37401 13.2265 5.40334 13.3451 5.45401 13.4231C5.54867 13.5731 5.71001 13.6545 5.87534 13.6545C5.96734 13.6545 6.06001 13.6291 6.14334 13.5758C6.31934 13.4638 10.4587 10.8158 11.5353 9.90513C12.8033 8.83179 13.562 7.25846 13.564 5.69713V5.68579C13.56 2.77446 11.2773 0.49446 8.36401 0.493793V0.49446ZM10.8887 9.14246C10.1327 9.78246 7.64734 11.4125 6.37401 12.2378V10.1131C6.37401 9.83713 6.15067 9.61313 5.87401 9.61313H5.61001C3.17001 9.61313 1.39801 7.96246 1.39801 5.68913C1.39801 3.33313 3.24334 1.48779 5.59801 1.48779L8.36267 1.49446H8.36401C10.7187 1.49446 12.564 3.33846 12.5653 5.69179C12.5633 6.96513 11.9373 8.25446 10.8893 9.14246H10.8887Z"
                        />
                      </svg>
                      <span class="num">{{ tweet.commentLength }}</span>
                    </div>
                    <div class="btn like">
                      <svg
                        class="icon like__icon"
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.00005 13.4253H6.99072C5.26872 13.3933 0.300049 8.90392 0.300049 4.65192C0.300049 2.60925 1.98338 0.815918 3.90205 0.815918C5.42872 0.815918 6.45538 1.86925 6.99938 2.63592C7.54205 1.87058 8.56871 0.815918 10.096 0.815918C12.016 0.815918 13.6987 2.60925 13.6987 4.65258C13.6987 8.90325 8.72938 13.3926 7.00738 13.4239H7.00005V13.4253ZM3.90272 1.81658C2.51605 1.81658 1.30072 3.14192 1.30072 4.65325C1.30072 8.47992 5.99005 12.3839 7.00072 12.4253C8.01272 12.3839 12.7007 8.48058 12.7007 4.65325C12.7007 3.14192 11.4854 1.81658 10.0987 1.81658C8.41338 1.81658 7.47205 3.77392 7.46405 3.79325C7.31072 4.16792 6.69338 4.16792 6.53938 3.79325C6.53005 3.77325 5.58938 1.81658 3.90338 1.81658H3.90272Z"
                        />
                      </svg>
                      <span class="num">{{ tweet.likedLength }}</span>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <!-- recommend -->
    <section class="col-xl-3 col-lg-3">
      <RecommendUsers />
    </section>
  </div>
</template>

<script>
import Navbar from "./../components/Navbar.vue";
import RecommendUsers from "./../components/RecommendUsers.vue";
const dummyData = {
  tweets: [
    {
      id: 1,
      name: "Apple",
      account: "@apple",
      createAt: "3小時",
      post: `Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
                    ullamco cillum dolor. Voluptate exercitation incididunt
                    aliquip deserunt reprehenderit elit laborum.`,
      commentLength: 0,
      likedLength: 0,
    },
    {
      id: 2,
      name: "Apple",
      account: "@apple",
      createAt: "3小時",
      post: `Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
                    ullamco cillum dolor. Voluptate exercitation incididunt
                    aliquip deserunt reprehenderit elit laborum.`,
      commentLength: 0,
      likedLength: 0,
    },
    {
      id: 3,
      name: "Apple",
      account: "@apple",
      createAt: "3小時",
      post: `Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
                    ullamco cillum dolor. Voluptate exercitation incididunt
                    aliquip deserunt reprehenderit elit laborum.`,
      commentLength: 0,
      likedLength: 0,
    },
    {
      id: 4,
      name: "Apple",
      account: "@apple",
      createAt: "3小時",
      post: `Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
                    ullamco cillum dolor. Voluptate exercitation incididunt
                    aliquip deserunt reprehenderit elit laborum.`,
      commentLength: 0,
      likedLength: 0,
    },
  ],
};
export default {
  components: {
    Navbar,
    RecommendUsers,
  },
  data() {
    return {
      count: 1,
      tweets: [],
    };
  },
  created() {
    this.fetchTweet();
  },
  methods: {
    fetchTweet() {
      const { tweets } = dummyData;
      this.tweets = tweets;
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  max-width: 1144px;
  height: 100vh;
  margin: 0 auto;
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
    position: relative;
    width: 100%;
    padding: 24px;
    border-bottom: 1px solid #e6ecf0;
    position: sticky;
    top: 0;
    z-index: 99;
  }
  h4::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    // 毛玻璃特效
    backdrop-filter: blur(5px);
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
    // height: calc(100% - 90px);
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
        &__account {
          font-size: 14px;
          font-weight: 400;
          color: #6c757d;
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
            fill: #6c757d;
            background-size: cover;
            margin-right: 9px;
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
          fill: #f91880;
          color: #f91880;
        }
      }
    }
  }
}
</style>