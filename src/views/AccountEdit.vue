<template>
  <div class="container row">
    <!-- navbar -->
    <section class="col-2" style="min-width:176px;'">
      <Navbar />
    </section>
    <section class="set-section col-7">
      <div class="main">
        <div class="main__title">
          <h1>帳戶設定</h1>
        </div>
        <div class="main__body">
          <!-- AccountEditForm -->
          <AccountEditForm
            :initial-user="user"
            @handle-after-submit="handleAfterSubmit"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
/* eslint-disable */
// import UserSidbar from '../components/UserSidbar.vue'
import AccountEditForm from "../components/AccountEditForm.vue";
import Navbar from "../components/Navbar.vue";
export default {
  name: "AccountEdit",
  components: {
    AccountEditForm,
    Navbar,
  },
  data() {
    return {
      user: {
        name: "",
        account: "",
        email: "",
        password: "",
        passwordCheck: "",
      },
    };
  },
  methods: {
    handleAfterSubmit(formData) {
      for (let [name, value] of formData.entries()) {
        console.log(name + ": " + value);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: calc(100vw - 260px);
  max-width: 1400px;
  height: 100vh;
  margin: 0 auto;
}
@media screen and (max-width: 960px) {
  .set-section {
    flex-grow: 1;
  }
}
// 取消滾輪
::-webkit-scrollbar {
  /* make scrollbar transparent */
  width: 0px;
  background: transparent;
}
.main {
  height: 100vh;
  border-left: 1px solid #e6ecf0;
  border-right: 1px solid #e6ecf0;
  overflow-y: scroll;
}

::-webkit-scrollbar {
  width: 0px;
  background: transparent;
}

.main__title {
  border-bottom: 1px solid#E6ECF0;
  padding: 24px;

  h1 {
    font-weight: 700;
    font-size: 24px;
    line-height: 26px;
  }
}

.main__body {
  padding: 24px 23px 0;
  display: flex;
  flex-wrap: wrap;
  // max-height: 100vh;
}
</style>