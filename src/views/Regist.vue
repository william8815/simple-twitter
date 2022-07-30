<template>
  <div class="regist">
    <div class="brand__image">
      <img src="../assets/img/logo.svg" alt="" />
    </div>
    <div class="brand__title">
      <h3>建立你的帳號</h3>
    </div>

    <form action="" class="form" @submit.prevent.stop="handleSubmit">
      <div class="form__label">
        <label for="account">帳號</label>
        <input
          type="text"
          class="label__control"
          name="account"
          id="account"
          placeholder="請輸入帳號"
          v-model="account"
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
          v-model="name"
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
          v-model="email"
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
          v-model="password"
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
          v-model="passwordCheck"
          required
        />
      </div>

      <div class="form__btn">
        <button class="btn submit" type="submit">註冊</button>
      </div>
      <div class="form__btn">
        <router-link class="btn cancel" to="/login"> 取消 </router-link>
      </div>
    </form>
  </div>
</template>

<script>
import { Toast } from "../utils/helpers";
export default {
  name: "Regist",
  data() {
    return {
      account: "",
      name: "",
      email: "",
      password: "",
      passwordCheck: "",
    };
  },
  methods: {
    handleSubmit(e) {
      if (this.password !== this.passwordCheck) {
        Toast.fire({
          icon: "warning",
          title: "密碼確認有誤，請重新輸入",
        });

        (this.password = ""), (this.passwordCheck = "");
        return;
      }
      const form = e.target;
      const formData = new FormData(form);
      for (let [name, value] of formData.entries()) {
        console.log(name + ": " + value);
      }
    },
  },
};
</script>



<style lang="scss" scoped>
.regist {
  margin-top: 64px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.brand__title {
  margin: 24px 0 40px;
  font-weight: 700;
  font-size: 28px;
  line-height: 26px;
}

.form {
  width: 356px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.form__label {
  width: 356px;
  height: 52px;
  margin-bottom: 2rem;
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
  width: 356px;
  height: 52px;
  margin-bottom: 2rem;
}

.btn {
  width: 100%;
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