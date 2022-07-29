<template>
  <div class="accountEdit">
    <!--UserSidbar -->
    <UserSidbar />
  <div class="main">
          <div class="main__title">
        <h1>帳戶設定</h1>
      </div>

      <div class="main__body">
        <!-- AccountEditForm -->
        <AccountEditForm 
        :initial-user="user"
        @handle-after-submit="handleAfterSubmit" />
      </div>
  </div>
  </div>
</template>

<script>
/* eslint-disable */
import UserSidbar from '../components/UserSidbar.vue'
import AccountEditForm from '../components/AccountEditForm.vue'
// import Navbar from '../components/Navbar.vue'
export default {
  name: 'AccountEdit',
  components: {
    AccountEditForm,
    UserSidbar,
  },
  data() {
    return {
      user: {
        name: '',
        account: '',
        email: '',
        password: '',
        passwordCheck: ''
      }
    }
  },
  methods: {
    handleAfterSubmit(formData) {
      for(let [name, value] of formData.entries()) {
        console.log(name + ": " + value)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.accountEdit {
  display: flex;
}

.main {
  height: 100vh;
  border-left: 1px solid #e6ecf0;
  border-right: 1px solid #e6ecf0;
  margin-left: 24px;
  padding-left: 15px;
  width: auto;
  
}
.main__title {
  margin-top: 24px;
  border-bottom: 1px solid#E6ECF0;
  h1 {
    padding: 0 8px 25px;
    font-weight: 700;
    font-size: 24px;
    line-height: 26px;
  }
}

.main__body {
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  max-height: 100vh;
}

</style>