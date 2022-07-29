<template>
  <div class="container row">
    <!--UserSidbar -->
    <section class="col-xl-2 col-lg-2">
      <Navbar />
    </section>
    <!-- main -->
    <section class="col-xl-7 col-lg-7">
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
    </section>
 
  </div>
</template>

<script>
/* eslint-disable */
// import UserSidbar from '../components/UserSidbar.vue'
import AccountEditForm from '../components/AccountEditForm.vue'
import Navbar from '../components/Navbar.vue'
export default {
  name: 'AccountEdit',
  components: {
    AccountEditForm,
    Navbar,
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
.container {
  max-width: 1144px;
  height: 100vh;
  margin: 0 auto;
}

.main {
  height: 100vh;
  border-left: 1px solid #e6ecf0;
  border-right: 1px solid #e6ecf0;
  // margin-left: 24px;
  // padding-left: 15px;
  // width: auto;
  overflow-y: scroll;
  
}

::-webkit-scrollbar {
  width: 0px;
  background: transparent;
}

.main__title {

  border-bottom: 1px solid#E6ECF0;
  h1 {
    padding: 24px;
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
  padding-left: 1rem;
}

</style>