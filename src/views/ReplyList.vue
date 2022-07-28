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
                @click="makeReply"
                class="icon comment__icon"
                viewBox="0 0 30 30"
                fill="#657786"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.5576 2.80254L12.3726 2.79004H12.3701C6.90262 2.79004 2.62012 7.07379 2.62012 12.5425C2.62012 17.665 6.60262 21.55 11.9514 21.755V26.54C11.9514 26.675 12.0064 26.8975 12.1014 27.0438C12.2789 27.325 12.5814 27.4775 12.8914 27.4775C13.0639 27.4775 13.2376 27.43 13.3939 27.33C13.7239 27.12 21.4851 22.155 23.5039 20.4475C25.8814 18.435 27.3039 15.485 27.3076 12.5575V12.5363C27.3001 7.07754 23.0201 2.80254 17.5576 2.80129V2.80254ZM22.2914 19.0175C20.8739 20.2175 16.2139 23.2738 13.8264 24.8213V20.8375C13.8264 20.32 13.4076 19.9 12.8889 19.9H12.3939C7.81887 19.9 4.49637 16.805 4.49637 12.5425C4.49637 8.12504 7.95637 4.66504 12.3714 4.66504L17.5551 4.67754H17.5576C21.9726 4.67754 25.4326 8.13504 25.4351 12.5475C25.4314 14.935 24.2576 17.3525 22.2926 19.0175H22.2914Z"
                />
              </svg>
            </div>
            <div class="like">
              <svg
                v-if="user.isLiked"
                key="user"
                @click="deleteLike"
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
                key="user"
                @click="addLike"
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
              </div>
            </li>
          </ul>
        </div>
        <!-- reply modal -->
        <ReplyModal
          :key="replyState.count"
          :reply_state="replyState.state"
          @handleReplyState="afterReplyState"
        />
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
import ReplyModal from "./../components/ReplyModal.vue";

const dummyData = {
  user: {
    id: 1,
    name: "Apple",
    account: "@apple",
    isLiked: false,
  },
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
  replyState: {
    count: 0,
    state: false,
  },
};

export default {
  name: "ReplyList",
  components: {
    Navbar,
    RecommendUsers,
    ReplyModal,
  },
  date() {
    return {
      replyList: [],
      replyState: {},
      user: {},
    };
  },
  created() {
    this.fetchReply();
  },
  methods: {
    fetchReply() {
      const { reply, replyState, user } = dummyData;
      const { count, state } = replyState;
      const { id, name, account, isLiked } = user;
      this.replyList = reply;
      // console.log(this.replyList);
      this.replyState = {
        count,
        state,
      };
      this.user = {
        id,
        name,
        account,
        isLiked,
      };
    },
    // 跳出彈跳視窗
    makeReply() {
      this.replyState = {
        count: 1,
        state: true,
      };
      this.$forceUpdate();
      // console.log(this.replyState);
    },
    afterReplyState(state) {
      this.replyState = {
        count: 0,
        state: state,
      };
      this.$forceUpdate();
      // console.log(this.replyState);
    },
    // 新增喜歡
    addLike() {
      this.user = {
        ...this.user,
        isLiked: true,
      };
      this.$forceUpdate();
    },
    // 移除喜歡
    deleteLike() {
      this.user = {
        ...this.user,
        isLiked: false,
      };
      this.$forceUpdate();
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
    backdrop-filter: blur(8px);
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
        stroke: #ff9ad5;
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