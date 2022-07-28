<template>
  <div class="container row">
    <!-- navbar -->
    <section class="col-xl-2 col-lg-2">
      <Navbar />
    </section>
    <!-- reply-list -->
    <section class="col-xl-7 col-lg-7">
      <div class="reply">
        <!-- 開頭 -->
        <div class="title">
          <i @click="$router.back()" class="back fa-solid fa-arrow-left"></i>
          <h4>推文</h4>
        </div>
        <!-- 推文區 -->
        <div class="tweet">
          <router-link :to="{ name: 'replylist' }" class="tweet__user">
            <img src="~@/assets/img/otherUserImg.png" alt="userImg" />
            <div class="user">
              <div class="name">Apple</div>
              <div class="account">@apple</div>
            </div>
          </router-link>
          <div class="tweet__post">
            <div class="post">
              Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
              ullamco cillum dolor. Voluptate exercitation incididunt aliquip
              deserunt.
            </div>
            <div class="post-time">上午 10:05・2021年11月10日</div>
          </div>
          <div class="tweet__info">
            <div class="comments">
              <span class="num">34</span>
              <span class="text">&nbsp;回覆</span>
            </div>
            <div class="liked">
              <span class="num">808</span>
              <span class="text">&nbsp;喜歡次數</span>
            </div>
          </div>
          <div class="tweet__icon">
            <div class="comment">
              <svg
                class="icon comment__icon"
                viewBox="0 0 14 14"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.36401 0.49446L5.59867 0.487793H5.59734C2.68134 0.487793 0.397339 2.77246 0.397339 5.68913C0.397339 8.42113 2.52134 10.4931 5.37401 10.6025V13.1545C5.37401 13.2265 5.40334 13.3451 5.45401 13.4231C5.54867 13.5731 5.71001 13.6545 5.87534 13.6545C5.96734 13.6545 6.06001 13.6291 6.14334 13.5758C6.31934 13.4638 10.4587 10.8158 11.5353 9.90513C12.8033 8.83179 13.562 7.25846 13.564 5.69713V5.68579C13.56 2.77446 11.2773 0.49446 8.36401 0.493793V0.49446ZM10.8887 9.14246C10.1327 9.78246 7.64734 11.4125 6.37401 12.2378V10.1131C6.37401 9.83713 6.15067 9.61313 5.87401 9.61313H5.61001C3.17001 9.61313 1.39801 7.96246 1.39801 5.68913C1.39801 3.33313 3.24334 1.48779 5.59801 1.48779L8.36267 1.49446H8.36401C10.7187 1.49446 12.564 3.33846 12.5653 5.69179C12.5633 6.96513 11.9373 8.25446 10.8893 9.14246H10.8887Z"
                />
              </svg>
            </div>
            <div class="like">
              <svg
                class="icon like__icon"
                viewBox="0 0 14 14"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.00005 13.4253H6.99072C5.26872 13.3933 0.300049 8.90392 0.300049 4.65192C0.300049 2.60925 1.98338 0.815918 3.90205 0.815918C5.42872 0.815918 6.45538 1.86925 6.99938 2.63592C7.54205 1.87058 8.56871 0.815918 10.096 0.815918C12.016 0.815918 13.6987 2.60925 13.6987 4.65258C13.6987 8.90325 8.72938 13.3926 7.00738 13.4239H7.00005V13.4253ZM3.90272 1.81658C2.51605 1.81658 1.30072 3.14192 1.30072 4.65325C1.30072 8.47992 5.99005 12.3839 7.00072 12.4253C8.01272 12.3839 12.7007 8.48058 12.7007 4.65325C12.7007 3.14192 11.4854 1.81658 10.0987 1.81658C8.41338 1.81658 7.47205 3.77392 7.46405 3.79325C7.31072 4.16792 6.69338 4.16792 6.53938 3.79325C6.53005 3.77325 5.58938 1.81658 3.90338 1.81658H3.90272Z"
                />
              </svg>
            </div>
          </div>
        </div>
        <!-- 留言區 -->
        <div class="reply-board">
          <ul>
            <li class="list-item" v-for="reply in replyList" :key="reply.id">
              <router-link :to="{ name: 'main' }" class="avator">
                <img src="~@/assets/img/otherUserImg.png" alt="userImg" />
              </router-link>
              <div class="user">
                <div class="user__info">
                  <router-link :to="{ name: 'main' }">
                    <span class="user__name">{{ reply.name }}</span>
                    <span class="user__account">{{ reply.account }} ・</span>
                  </router-link>
                  <router-link :to="{ name: 'main' }">
                    <span class="user__posttime">{{ reply.createdAt }}</span>
                  </router-link>
                </div>
                <div class="user__sent">
                  <span>回覆&nbsp;&nbsp;</span>
                  <span class="sent-account">{{ reply.sentAccount }}</span>
                </div>
                <div class="user__post">
                  {{ reply.post }}
                </div>
                <div></div>
              </div>
            </li>
          </ul>
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
  reply: [
    {
      id: 1,
      name: "Devon Lane",
      account: "@devon_lane",
      createdAt: "12 小時",
      setAccount: "@apple",
      post: "former apple engineer shares a simple DIY fix to seal your surgical mask",
    },
    {
      id: 2,
      name: "Devon Lane",
      account: "@devon_lane",
      createdAt: "12 小時",
      setAccount: "@apple",
      post: "former apple engineer shares a simple DIY fix to seal your surgical mask",
    },
    {
      id: 3,
      name: "Devon Lane",
      account: "@devon_lane",
      createdAt: "12 小時",
      setAccount: "@apple",
      post: "former apple engineer shares a simple DIY fix to seal your surgical mask",
    },
    {
      id: 4,
      name: "Devon Lane",
      account: "@devon_lane",
      createdAt: "12 小時",
      setAccount: "@apple",
      post: "Michelin Challenges Creatives to Upcycle",
    },
    {
      id: 5,
      name: "Devon Lane",
      account: "@devon_lane",
      createdAt: "12 小時",
      setAccount: "@apple",
      post: "Michelin Challenges Creatives to Upcycle",
    },
    {
      id: 6,
      name: "Devon Lane",
      account: "@devon_lane",
      createdAt: "12 小時",
      setAccount: "@apple",
      post: "Michelin Challenges Creatives to Upcycle",
    },
  ],
};

export default {
  components: {
    Navbar,
    RecommendUsers,
  },
  date() {
    return {
      replyList: [],
    };
  },
  created() {
    this.fetchReply();
  },
  methods: {
    fetchReply() {
      const { reply } = dummyData;
      this.replyList = reply;
      // console.log(this.replyList);
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
// 圖片共同樣式
img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 8px;
}
.reply {
  height: 100vh;
  border-left: 1px solid #e6ecf0;
  border-right: 1px solid #e6ecf0;
  overflow-y: scroll;
  // header
  .title {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 24px;
    border-bottom: 1px solid #e6ecf0;
    position: sticky;
    top: 0;
    z-index: 1;
  }
  .title::before {
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
  .back {
    margin-right: 16px;
  }
  // 推文區
  .tweet {
    padding: 0 16px;
    border-bottom: 1px solid #e6ecf0;
    &__user {
      display: flex;
      margin-top: 16px;
      img {
        margin-right: 8px;
      }
      .name {
        font-size: 16px;
        font-weight: 700;
      }
      .account {
        font-size: 14px;
        font-weight: 400;
        color: #6c757d;
      }
    }
    &__post {
      padding: 8px 0;
      border-bottom: 1px solid #e6ecf0;
      .post {
        font-size: 24px;
        margin-bottom: 8px;
      }
      .post-time {
        font-weight: 500;
        font-size: 14px;
        color: #6c757d;
      }
    }
    &__info {
      padding: 16px 0;
      border-bottom: 1px solid #e6ecf0;
      display: flex;
      font-weight: 700;
      font-size: 19px;
      color: #6c757d;
      .comments {
        margin-right: 24px;
      }
      .text {
        font-weight: 500;
      }
      .num {
        font-family: "Montserrat", sans-serif;
        color: #171725;
      }
    }
    &__icon {
      padding: 19px 0;
      width: 10vw;
      display: flex;
      justify-content: space-between;
      .icon {
        fill: #6c757d;
        background-size: cover;
        width: 30px;
        height: 30px;
      }
      .comment__icon:hover {
        fill: var(--main-color);
      }
      .like__icon:hover {
        fill: #f91880;
      }
    }
  }
  // 留言區
  .reply-board {
    .list-item {
      display: flex;
      padding: 16px 24px;
      border-bottom: 1px solid #e6ecf0;
    }
    .user {
      &__name {
        font-size: 16px;
        font-weight: 700;
        margin-right: 8px;
      }
      &__account,
      &__posttime,
      &__sent {
        font-size: 14px;
        font-weight: 400;
        color: #6c757d;
      }
      &__sent {
        margin: 8px 0;
        .sent-account {
          color: var(--main-color);
        }
      }
      &__post {
        color: #171725;
      }
    }
  }
}
</style>