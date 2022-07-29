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
        required
      />
    </div>
    <div class="form__label">
      <label for="passwordCheck">密碼確認</label>
      <input
        type="password"
        class="label__control"
        name="passwordCheck"
        id="passwordCheck"
        placeholder="請再次輸入密碼"
        v-model="user.passwordCheck"
        required
      />
    </div>

    <div class="form__btn">
      <button class="btn submit" type="submit">儲存</button>
    </div>
  </form>
</template>

<script>
/* eslint-disable */
import { Toast } from "../utils/helpers";
export default {
  name: "AccountEditForm",
  props: {
    initialUser: {
      type: Object,
      default: () => ({
        name: "",
        account: "",
        email: "",
        password: "",
        passwordCheck: "",
      }),
    },
  },
  data() {
    return {
      user: {
        ...this.initialUser,
      },
    };
  },
  methods: {
    handleSubmit(e) {
      if (this.user.password !== this.user.passwordCheck) {

        Toast.fire({
          icon: "warning",
          title: "密碼確認有誤，請重新輸入",
        });

        this.user.password = '',
        this.user.passwordCheck = ''
        return;

      }

      const form = e.target;
      const formDate = new FormData(form);
      this.$emit("handle-after-submit", formDate);

    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  min-width: 593px;
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