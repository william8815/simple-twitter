<template>
  <div class="adminSidbar">
    <div class="nav__brand">
      <router-link to="/login">
        <img src="../assets/img/logo.svg" alt="" />
      </router-link>
    </div>
    <div class="nav__list">
      <div class="nav__row">
        <div class="row__icon">
          <img src="../assets/img/home@active.svg" alt="" v-if="isTweetsView" />
          <img src="../assets/img/home.svg" alt="" v-else />
        </div>
        <div class="row__title">
          <router-link to="/admin/post">
            <p :class="{ active: isTweetsView }">推文清單</p></router-link
          >
        </div>
      </div>
      <div class="nav__row">
        <div class="row__icon">
          <img
            src="../assets/img/profile@active.svg"
            alt=""
            v-if="isUsersView"
          />
          <img src="../assets/img/profile.svg" alt="" v-else />
        </div>
        <div class="row__title">
          <router-link to="/admin/users">
            <p :class="{ active: isUsersView }">使用者列表</p></router-link
          >
        </div>
      </div>
    </div>
    <div class="nav__row" id="signOut">
      <div class="row__icon out__icon">
        <img src="../assets/img/Vectoroutlog.svg" alt="" />
      </div>
      <!-- <div class="row__title"><button type="button" class="btn__logout" @click="logout">登出</button></div> -->
      <button class="row__title" type="button" @click="logout">登出</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdminSidbar",
  data() {
    return {
      isTweetsView: false,
      isUsersView: false,
    };
  },
  created() {
    const location = this.$route.path.split("/")[2];
    this.setCurrentLocation(location);
  },
  methods: {
    setCurrentLocation(location) {
      if (location === "post") {
        this.isTweetsView = true;
        this.isUsersView = false;
      } else {
        this.isTweetsView = false;
        this.isUsersView = true;
      }
    },
    logout() {
      this.$store.commit("revokeAuthentication");
      this.$router.push("/login");
    },
  },
};
</script>

<style lang="scss" scoped>
.adminSidbar {
  margin-left: 130px;
  width: 178px;
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.nav__brand {
  margin: 13px 13px 30px;
  img {
    width: 40px;
    height: 40px;
  }
}

.nav__list {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.nav__row {
  display: flex;
  padding-left: 17px;
  align-items: center;
}

.nav__row:not(:last-child) {
  margin-bottom: 40px;
}

.row__icon {
  margin-right: 1rem;
  display: flex;
  align-items: center;
  width: 24px;
  height: 24px;
  img {
    width: 22.5px;
    height: 20.25px;
  }
}

.row__title {
  cursor: pointer;
  width: 100%;
  text-align: left;
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  color: #44444f;
  border: none;
  background: #fff;
}

.out__icon {
  img {
    width: 18px;
    height: 18px;
  }
}

#signOut {
  margin-bottom: 1rem;
}

.active {
  color: #ff6600;
}

</style>