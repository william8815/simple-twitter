<template>
  <div class="container">
    <div class="login">
      <form action="" class="login__from" @submit.prevent.stop="handleSubmit">
        <div class="from__brand">
          <div class="brand__image">
            <img src="../assets/img/logo.svg" alt="" />
          </div>
          <div class="brand__title">
            <h3>登入 Alphitter</h3>
          </div>
        </div>
        <div class="from__label">
          <label for="account">帳號</label>
          <input
            type="text"
            class="label__control"
            name="account"
            id="account"
            v-model="account"
          />
        </div>
        <div class="from__label">
          <label for="password">密碼</label>
          <input
            type="password"
            class="label__control"
            name="password"
            id="password"
            v-model="password"
          />
        </div>
        <button class="from__btn" type="submit" :disabled="isProcessing">
          登入
        </button>
        <div class="from__btn--link">
          <div class="btns">
            <router-link class="btn__link" to="/regist"
              >註冊 Alphitter</router-link
            >
            <span> &#xb7; </span>
            <router-link class="btn__link" to="/admin/login"
              >後台登入</router-link
            >
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { Toast } from "./../utils/helpers";
import authorizationAPI from "./../apis/authorization";
export default {
  name: "Login",
  data() {
    return {
      account: "",
      password: "",
      isProcessing: false,
      isError: true,
    };
  },
  methods: {
    async handleSubmit() {
      try {
        if (!this.account | !this.password) {
          Toast.fire({
            icon: "warning",
            title: "請輸入帳號 和 密碼",
          });
          return;
        }

        this.isProcessing = true;
        const { data } = await authorizationAPI.login({
          account: this.account,
          password: this.password,
        });

        if (data.status !== "success") {
          throw new Error(data.message);
        }
        this.$store.commit("setCurrentUser", data.user);
        localStorage.setItem("token", data.token);
        this.$router.push("/main");
        // error info
      } catch (error) {
        this.isProcessing = false;
        Toast.fire({
          icon: "error",
          title: error.response.data.message
        });

        (this.account = ""), (this.password = "");
      }
    },
  },
};
</script>


<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.from__label {
  width: 356px;
  height: 52px;
  margin-bottom: 2rem;
  background: #f5f8fa;
  border-radius: 2px;

  input {
    &:hover, &:focus {
     border-bottom: 1px solid #50B5FF;
     outline:none;
    }
  }

  .error {
     border-bottom: 1px solid #FC5A5A;
      &:hover, &:focus {
     border-bottom: 1px solid #FC5A5A;
    }
  }
  
}

.from__label input {
  width: 100%;
  border: none;
  border-bottom: 1px solid #657786;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  background: #f5f8fa;
}

.from__label label {
  padding-left: 11px;
  color: #696974;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  display: block;
  width: 100%;
}

.inputInfo {
  // border: 1px solid #000;
  display: flex;
  justify-content: space-between;
  .errorInfo {
    font-weight: 500;
font-size: 12px;
line-height: 20px;
    max-width: 270px;
    color: #FC5A5A;
    border: 1px solid #000;
  }
  .lengthInfo {
    border: 1px solid #000;
    width: 270px;
    font-weight: 500;
font-size: 12px;
line-height: 20px;
color: #696974;
text-align: right;
  }
}

.login__from {
  width: 356px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.from__brand {
  width: 185px;
  height: 100px;
  margin: 64px 0 40px;
  text-align: center;
}

.brand__title {
  margin-top: 1.5rem;
  font-weight: 700;
  font-size: 28px;
  line-height: 26px;
}

.from__btn {
  width: 100%;
}

.from__btn--link {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  .btns {
    text-align: right;
  }
}

.btn__link {
  cursor: pointer;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #0099ff;
   text-decoration: underline;
}

.from__btn {
  cursor: pointer;
  width: 100%;
  height: 46px;
  margin: 16px 0 22px;
  border-radius: 50px;
  border-color: transparent;
  background: #ff6600;
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  color: #ffffff;
}
</style>