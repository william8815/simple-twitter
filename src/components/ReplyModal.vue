<template>
  <div>
    <div class="black" @click="cancelModal"></div>
    <div class="reply-modal">
      <div class="modal">
        <div class="cancel">
          <i class="fa-solid fa-xmark" @click.stop="cancelModal"></i>
        </div>
        <!-- 留言對象 -->
        <div class="sent-user">
          <router-link :to="{ name: 'main' }" class="avator">
            <img :src="tweetContent.User.avatar | emptyImage" alt="userImg" />
          </router-link>
          <div class="user">
            <div class="user__info">
              <router-link :to="{ name: 'main' }">
                <span class="user__name">{{ tweetContent.User.name }}</span>
                <span class="user__account"
                  >@{{ tweetContent.User.account }} ・</span
                >
              </router-link>
              <router-link :to="{ name: 'main' }">
                <span class="user__posttime">{{
                  tweetContent.createdAt | fromNow
                }}</span>
              </router-link>
            </div>
            <div class="user__post">
              {{ tweetContent.description }}
            </div>
            <div class="user__sent">
              <span>回覆&nbsp;&nbsp;</span>
              <span class="sent-account">@{{ tweetContent.User.account }}</span>
            </div>
          </div>
        </div>
        <!-- 回覆留言區 -->
        <div class="tweet">
          <img :src="currentUser.avatar | emptyImage" alt="userImg" />
          <form @submit.stop.prevent="handleSubmit" action="">
            <div id="parent">
              <div id="dummy">{{ text }}</div>
              <textarea
                v-model="text"
                class="tweet-content"
                name="tweet"
                id=""
                cols="30"
                rows="6"
                placeholder="推你的回覆"
              ></textarea>
            </div>
            <button type="submit" class="tweet-btn" :disabled="isProcessing">
              推文
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import tweetsAPI from "./../apis/tweet";
import { emptyImageFilter } from "./../utils/mixins";
import { fromNowFilter } from "./../utils/mixins";
import { mapState } from "vuex";
import { Toast } from "./../utils/helpers";
export default {
  name: "ReplyModel",
  mixins: [emptyImageFilter, fromNowFilter],
  props: {
    initial_tweet: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      count: 6,
      // replyState: false,
      tweetContent: {
        id: -1,
        UserId: -1,
        description: "",
        createdAt: "",
        User: {},
        replyCount: 0,
        replyState: 0,
      },
      text: "",
      isProcessing: false,
    };
  },
  computed: {
    ...mapState(["currentUser"]),
  },
  created() {
    this.fetchReplyModal();
  },
  methods: {
    fetchReplyModal() {
      const {
        id,
        UserId,
        description,
        createdAt,
        User,
        replyCount,
        replyState,
      } = this.initial_tweet;
      this.tweetContent = {
        id,
        UserId,
        description,
        createdAt,
        User,
        replyCount,
        replyState,
      };
    },
    cancelModal() {
      this.$emit("handleReplyState", this.initial_tweet.id);
    },
    async handleSubmit() {
      // 預防 required 屬性被刪掉
      if (!this.text) {
        Toast.fire({
          icon: "warning",
          title: "請勿提交空白留言",
        });
        return;
      } else if (!this.text.length > 140) {
        Toast.fire({
          icon: "warning",
          title: "留言字數已超過140",
        });
        return;
      }
      try {
        this.isProcessing = true;
        const { data } = await tweetsAPI.addNewComment({
          tweetId: this.tweetContent.id,
          comment: this.text,
        });
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        this.$emit("after-submit", {
          tweetId: this.tweetContent.id,
          comment: this.text,
        });
        Toast.fire({
          icon: "success",
          title: "成功新增一則留言",
        });
        this.isProcessing = false;
      } catch (error) {
        this.isProcessing = false;
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "新增留言失敗，請稍後再試",
        });
      }
    },
  },
};
</script>


<style lang="scss" scoped>
// 圖片共同樣式
img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 8px;
}
.black {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  background: rgba($color: #333, $alpha: 0.5);
}
.reply-modal {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
  .modal {
    width: 50vw;
    background-color: #fff;
    border-radius: 14px;
    margin: 56px auto;
  }
}
.cancel {
  padding: 20px;
  border-bottom: 1px solid #e6ecf0;
  i {
    font-size: 20px;
    color: var(--main-color);
  }
}
.tweet {
  height: calc(100% - 60px);
  display: flex;
  padding: 16px 16px 16px 24px;
  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  #parent {
    width: 100%;
    position: relative;
    font-size: 16px;
    font-weight: 400;
    max-height: 60vh;
    color: #6c757d;
  }
  #dummy {
    visibility: hidden;
    min-height: 114px;
    white-space: pre-wrap;
    color: #6c757d;
    padding-top: 12px;
  }
  #dummy::after {
    content: "\A";
  }
  .tweet-content {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    resize: none;
    font: inherit;
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
.sent-user {
  position: relative;
  display: flex;
  padding: 16px 24px;
}
.sent-user::after {
  content: "";
  height: calc(100% - 82px);
  width: 2px;
  background-color: #b5b5be;
  position: absolute;
  bottom: 0;
  left: 48px;
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
    .sent-account {
      color: var(--main-color);
    }
  }
  &__post {
    margin: 8px 0;
    color: #171725;
  }
}
</style>