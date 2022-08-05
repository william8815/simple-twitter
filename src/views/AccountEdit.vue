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
          <AccountEditForm @handle-after-submit="handleAfterSubmit" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import AccountEditForm from "../components/AccountEditForm.vue";
import Navbar from "../components/Navbar.vue";
import { Toast } from "../utils/helpers";
import usersAPI from "../apis/users";
export default {
  name: "AccountEdit",
  components: {
    AccountEditForm,
    Navbar,
  },
  methods: {
    async handleAfterSubmit(formData) {
      try {
        const id = this.$route.params.id;
        const { data } = await usersAPI.editUser(id, {
          name: formData.name,
          account: formData.account,
          email: formData.email,
          password: formData.password,
          checkPassword: formData.checkPassword,
        });
        Toast.fire({
          icon: "success",
          title: data.message,
        });
        // put上去後 更新store.state的顯示資訊
        this.$store.commit("setCurrentUser", data.newData);
       this.$router.push("/main");
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: error.response.data.message,
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: calc(100vw - 130px);
  max-width: 1400px;
  height: 100vh;
  margin-left: 130px;
}
@media screen and (max-width: 960px) {
  .set-section {
    flex-grow: 1;
  }
}
::-webkit-scrollbar {
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
}
</style>