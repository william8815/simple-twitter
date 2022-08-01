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
          v-model="form.account"
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
          v-model="form.name"
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
          v-model="form.email"
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
          v-model="form.password"
          required
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
          v-model="form.checkPassword"
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
/* eslint-disable */
import { Toast } from "../utils/helpers";
import authorizationAPI from "../apis/authorization";
import { mapState } from "vuex";
export default {
  name: "Regist",
  created() {
    this.fetchCurrentUser(this.currentUser);
  },
  data() {
    return {
      form: {
        name: "",
        account: "",
        email: "",
        password: "",
        checkPassword: "",
      },
      isProcessing: false,
      isSaved: true,
      userChanged: false,
    };
  },
  methods: {
    fetchCurrentUser(newVal) {
      const { name, email, account } = newVal;
      this.form = {
        ...this.form,
        name,
        email,
        account,
      };
    },
    goBackToSignIn() {
      this.$router.push("/login");
    },
    handleSubmit(e) {
      console.log(this.form)
      // console.log(e)
      const formDataCheckResult = this.formDataCheck();
      if (!formDataCheckResult) {
        return (this.isProcessing = false);
      }
       this.handleSignUpSubmit(e);
      // if (this.isSignUp) {
      //   this.handleSignUpSubmit(e);
      // } else {
      //   this.handleSaveSetting(e);
      // }
    },
    formDataCheck() {
      let result = false;
      if (!this.form.account) {
        Toast.fire({
          icon: "info",
          title: "請填寫帳號！",
        });
        return result;
      }
      if (!this.form.name) {
        Toast.fire({
          icon: "info",
          title: "請填寫名稱！",
        });
        return result;
      }
      if (!this.form.email) {
        Toast.fire({
          icon: "info",
          title: "請填寫 Email！",
        });
        return result;
      }
      if (!this.form.password) {
        Toast.fire({
          icon: "info",
          title: "請填寫密碼！",
        });
        return result;
      }
      if (this.form.password.length > 12 || this.form.password.length < 4) {
        Toast.fire({
          icon: "info",
          title: "密碼長度不得小於 4 或超過 12！",
        });
        return result;
      }
      if (!this.form.checkPassword) {
        Toast.fire({
          icon: "info",
          title: "請填寫密碼確認！",
        });
        return result;
      }
      if (this.form.password !== this.form.checkPassword) {
        Toast.fire({
          icon: "error",
          title: "密碼不相符！",
        });
        return result;
      }
      console.log("Data check passed");
      return (result = true);
    },
    async handleSignUpSubmit() {
      try {
         
        this.isProcessing = true;
        const formData = this.form;
        // call api to post formData
        const { data } = await authorizationAPI.signUp(JSON.stringify(formData));
        console.log('formData : ', formData )
      //   for (let [name, value] of formData.entries()) {
      //   console.log(name + ': ' + value)
      // }

      
        // if (data.status !== "success") {
        //   throw new Error(data);
        // }
        // Toast.fire({
        //   icon: "success",
        //   title: "註冊成功！",
        // });
        // 轉址
        // this.$router.push("");
      } catch (error) {
        console.log(error);
        let message = "無法註冊，請稍後再試！";
        if (error.response.status === 409) {
          message = "該 Email 已被註冊，請選擇其他 Email！";
        }
        this.isProcessing = false;
        Toast.fire({
          icon: "error",
          title: message,
        });
      }
    },
    // async handleSaveSetting() {
    //   const formDataCheckResult = this.formDataCheck();
    //   if (!formDataCheckResult) {
    //     return;
    //   }
    //   try {
    //     this.isProcessing = true;
    //     const userId = this.currentUser.id;
    //     const formData = {
    //       ...this.form,
    //       page: "setting",
    //     };
    //     const { data } = await usersAPI.putUser(userId, formData);
    //     console.log(data);
    //     if (data.status !== "success") {
    //       throw new Error(data.message);
    //     }
    //     Toast.fire({
    //       icon: "success",
    //       title: "資料修改成功！",
    //     });
    //     this.isProcessing = false;
    //     this.isSaved = true;
    //     this.userChanged = true;
    //     this.form.password = "";
    //     this.form.checkPassword = "";
    //   } catch (error) {
    //     console.log(error);
    //     this.isProcessing = false;
    //     Toast.fire({
    //       icon: "error",
    //       title: "無法變更使用者資訊，請稍候再試！",
    //     });
    //   }
    // },
  },
  watch: {
    currentUser(newVal) {
      this.fetchCurrentUser(newVal);
    },
    form: {
      handler: function () {
        if (!this.userChanged) {
          // true
          return (this.userChanged = true);
        }
        this.isSaved = false;
      },
      deep: true,
    },
  },
  computed: {
    ...mapState(["currentUser"]),
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
</style>