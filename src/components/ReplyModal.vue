<template>
  <div class="reply-modal" @click="cacelModal" v-if="replyState">
    <div class="modal">
      <div class="cancel">
        <i class="fa-solid fa-xmark" @click="cacelModal"></i>
      </div>
      <!-- 留言對象 -->
      <div class="sent-user">
        <router-link :to="{ name: 'main' }" class="avator">
          <img src="~@/assets/img/otherUserImg.png" alt="userImg" />
        </router-link>
        <div class="user">
          <div class="user__info">
            <router-link :to="{ name: 'main' }">
              <span class="user__name">Apple</span>
              <span class="user__account">@apple ・</span>
            </router-link>
            <router-link :to="{ name: 'main' }">
              <span class="user__posttime">3 小時</span>
            </router-link>
          </div>
          <div class="user__post">
            Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco
            cillum dolor. Voluptate exercitation incididunt aliquip deserunt
            reprehenderit elit laborum.
          </div>
          <div class="user__sent">
            <span>回覆&nbsp;&nbsp;</span>
            <span class="sent-account">@apple</span>
          </div>
        </div>
      </div>
      <!-- 回覆留言區 -->
      <div class="tweet">
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
              placeholder="推你的回覆"
            ></textarea>
          </div>
          <button type="submit" class="tweet-btn">推文</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    reply_state: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      count: 6,
      replyState: false,
    };
  },
  created() {
    this.fetchModal();
  },
  methods: {
    fetchModal() {
      this.replyState = this.reply_state;
      // console.log(this.replyState);
    },
    cacelModal() {
      // this.replyState = false;
      this.$emit("handleReplyState", false);
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
.reply-modal {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  background: rgba($color: #333, $alpha: 0.5);
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
  .tweet-content {
    width: 100%;
    resize: none;
    font-size: 16px;
    font-weight: 400;
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