<template>
    <div class="adminLogin">
     <form action="" class="login__from" @@submit.prevent.stop="handleSubmit"> 
        <div class="from__brand">
          <div class="brand__image">
            <img src="https://i.imgur.com/LEdjhKe.png" alt="" />
          </div>
          <div class="brand__title">
            <h3>後台登入</h3>
          </div>
        </div>
        <div class="from__label">
          <label for="account">帳號</label>
          <input
            type="text"
            class="label__control"
            name="account"
            id="account"
            style="border-style: none"
          />
        </div>
        <div class="from__label">
          <label for="password">密碼</label>
          <input
            type="password"
            class="label__control"
            name="password"
            id="password"
            style="border-style: none"
          />
        </div>
        <button class="from__btn" type="submit">登入</button>
        <div class="from__btn--link">
          <div class="btns">
            <router-link class="btn__link" to="/login">前台登入</router-link>
          </div>
        </div>
      </form>
       
    </div>
</template>

<script>
import { Toast } from './../utils/helpers'
export default {
  name: 'AdminLogin',
  data() {
    return {
      account: '',
      password: '',
      isProcessing: false,
    } 
  },
  methods: {
    async handleSubmit() {
      try {
        if(!this.account | !this.password) {
          Toast.fire({
            icon: 'warning',
            title: '請輸入帳號或密碼'
          })
        }
      } catch(error) {
       Toast.fire({
        icon: 'error',
        titel: '登入失敗，稍後再試'
       })
      }
    }
  }
}
</script>


<style lang="scss" scoped>

.adminLogin {
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