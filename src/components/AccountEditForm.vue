<template>
  <form action="" class="form" @submit.stop.prevent="handleSubmit">
    <div class="form__label">
      <label for="account">帳號</label>
      <input
        type="text"
        class="label__control"
        name="account"
        id="account"
        placeholder="請輸入帳號"
        v-model="user.account"
        required
      />
    </div>
    <div class="form__label">
      <label for="name">名稱</label>
      <input
        type="text"
        class="label__control"
        name="name"
        id="name"
        placeholder="請輸入名稱"
        v-model="user.name"
        required
      />
    </div>
    <div class="form__label">
      <label for="email">Email</label>
      <input
        type="email"
        class="label__control"
        name="email"
        id="email"
        placeholder="請輸入email"
        v-model="user.email"
        required
      />
    </div>
    <div class="form__label">
      <label for="password">密碼</label>
      <input
        type="password"
        class="label__control"
        name="password"
        id="password"
        placeholder="請輸入密碼"
        v-model="user.password"
      />
    </div>
    <div class="form__label">
      <label for="checkPassword">密碼確認</label>
      <input
        type="password"
        class="label__control"
        name="checkPassword"
        id="passwordCheck"
        placeholder="請再次輸入密碼"
        v-model="user.checkPassword"
      />
    </div>

    <div class="form__btn">
      <button class="btn submit" type="submit">儲存</button>
    </div>
  </form>
</template>

<script>
import { mapState } from "vuex";
import { Toast } from '../utils/helpers'
 export default {
  name: "AccountEditForm",
  data() {
    return {
      user: {
        name: "",
        account: "",
        email: "",
        password: "",
        checkPassword: "",
      },
    };
  },

  // 追蹤fetchUser欄位是否有改變
  watch: {
    currentUser(newValue) {
      this.fetchUser(newValue);
    },
  },
  created() {
    this.fetchUser(this.currentUser);
  },
  methods: {
    fetchUser(newValue) {
      console.log("newValue", newValue);
      const { account, name, email } = newValue;
      this.user = {
        ...this.user,
        account,
        name,
        email,
      };
    },
    async handleSubmit() {
      try {
         if (this.user.password.length < 4) {
          Toast.fire({
            icon: "warning",
            title: "密碼長度不得小於 4 ",
          });
          this.password = "";
          this.checkPassword = "";
          return;
        }
        if (this.user.password !== this.user.checkPassword) {
          Toast.fire({
            icon: "warning",
            title: "兩次輸入的密碼不同",
          });
          this.password = "";
          this.checkPassword = "";
          return;
        }
        const formDate = this.user;
        this.$emit("handle-after-submit", formDate);
      } catch (error) {
        console.error(error);
      }
    },
  },
  computed: {
    ...mapState(["currentUser"]),
  },
};
</script>

<style lang="scss" scoped>
.form {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form__label {
  width: 100%;
  height: 54px;
  margin-bottom: 24px;
  background: #f5f8fa;
  border-radius: 2px;
}

.form__label input {
  width: 100%;
  border: none;
  border-bottom: 1px solid #657786;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  background: #f5f8fa;
  padding-left: 10px;
  border-radius: 2px;
}

.form__label label {
  padding-left: 11px;
  color: #696974;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  display: block;
  width: 100%;
}

.form__btn {
  width: 100%;
  height: 52px;
  margin-bottom: 1rem;
  text-align: end;
}

.btn {
  width: 88px;
  border-radius: 50px;
  height: 46px;
  border: none;
}

.submit {
  background: #ff6600;
  margin: 8px 0 22px;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  color: #fff;
}

.cancel {
  color: #0099ff;
  text-decoration: underline;
  background: transparent;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
}
</style>