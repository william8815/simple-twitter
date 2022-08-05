<template>
  <div class="regist">
    <div class="brand__image">
      <img src="../assets/img/logo.svg" alt="" />
    </div>
    <div class="brand__title">
      <h3>建立你的帳號</h3>
    </div>

    <form action="" class="form" @submit.prevent.stop="handleSubmit($event)">
      <div class="form__label">
        <label for="account">帳號</label>
        <input
          type="text"
          class="label__control"
          name="account"
          id="account"
          placeholder="請輸入帳號"
          v-model="account"
          :class="{ error: isAccountError }"
        />

        <div class="inputInfo">
          <div class="errorInfo">
            <span v-if="isAccountError">帳號 或 e-mail 已經有人使用</span>
          </div>
        </div>
      </div>
      <div class="form__label">
        <label for="name">名稱</label>
        <input
          type="text"
          class="label__control"
          name="name"
          id="name"
          placeholder="請輸入名稱"
          maxlength="51"
          v-model="name"
          :class="{ error: this.name.length > 50 }"
        />
        <div class="inputInfo">
          <div class="errorInfo">
            <span v-if="this.name.length > 50">名稱字數上限 50 </span>
          </div>
          <div class="lenghtInfo">
            <span>{{ nameLength }} / 50</span>
          </div>
        </div>
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
          :class="{ error: isEmailError }"
        />

        <div class="inputInfo">
          <div class="errorInfo">
            <span v-if="isEmailError">帳號 或 e-mail 已經有人使用</span>
          </div>
        </div>
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
        />
      </div>
      <div class="form__label">
        <label for="">密碼確認</label>
        <input
          type="password"
          class="label__control"
          name="checkPassword"
          id="checkPassword"
          placeholder="請再次輸入密碼"
          v-model="checkPassword"
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
import authorizationAPI from "../apis/authorization";
export default {
  name: "Regist",
  data() {
    return {
      name: "",
      account: "",
      email: "",
      password: "",
      checkPassword: "",
      isAccountError: false,
      isEmailError: false,
    };
  },
  methods: {
    async handleSubmit() {
      try {
        if (
          !this.name ||
          !this.email ||
          !this.account ||
          !this.password ||
          !this.checkPassword
        ) {
          Toast.fire({
            icon: "warning",
            title: "請確認已填寫所有欄位",
          });
          return;
        }
        if (this.name && this.name.length > 50) {
          Toast.fire({
            icon: "warning",
            title: "名稱字數不能超過 50 ",
          });
          return;
        }
        if (this.password.length < 4) {
          Toast.fire({
            icon: "warning",
            title: "密碼長度不得小於 4 ",
          });
          this.password = "";
          this.checkPassword = "";
          return;
        }
        if (this.password !== this.checkPassword) {
          Toast.fire({
            icon: "warning",
            title: "兩次輸入的密碼不同",
          });
          this.password = "";
          this.checkPassword = "";
          return;
        }
        const { data } = await authorizationAPI.signUp({
          name: this.name,
          account: this.account,
          email: this.email,
          password: this.password,
          checkPassword: this.checkPassword,
        });
        if (data.status === "error") {
          throw new Error(data.message);
        }
        Toast.fire({
          icon: "success",
          title: "帳號註冊成功",
        });
        // 成功登入後轉址到登入頁
        this.$router.push("/login");
      } catch (error) {
        if (error.response.data.message === "帳號或信箱已有人使用了!") {
          console.log("in error");
          this.isEmailError = true;
          this.isAccountError = true;
        }
        console.error(error.response);
        this.account = "";
        this.email = "";
      }
    },
  },
  // watch: {
  // account: function () {
  //   this.isAccountError = false;
  // },
  // email: function () {
  //   this.isEmailError = false;
  // },
  // },
  computed: {
    nameLength() {
      return this.name.length;
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
  input {
    &:hover,
    &:focus {
      border-bottom: 1px solid #50b5ff;
      outline: none;
    }
  }

  .error {
    border-bottom: 1px solid #fc5a5a;
    &:hover,
    &:focus {
      border-bottom: 1px solid #fc5a5a;
    }
  }
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
  text-align: center;
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

.inputInfo {
  display: flex;
  margin: 0 1rem 0 5px;
  justify-content: space-between;
  .errorInfo {
    font-weight: 500;
    font-size: 12px;
    line-height: 20px;
    color: #fc5a5a;
  }
  .lengthInfo {
    font-weight: 500;
    font-size: 12px;
    line-height: 20px;
    color: #696974;
    text-align: right;
  }
}
</style>