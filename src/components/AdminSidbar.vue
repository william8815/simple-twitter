<template>
  <div class="adminSidbar">
    <div class="nav__brand">
      <router-link to="/login">
        <img src="https://i.imgur.com/LEdjhKe.png" alt="" />
      </router-link>
    </div>
    <div class="nav__list">
      <div class="nav__row">
        <div class="row__icon">
          <img src="https://imgur.com/PK1xDx4.png" alt="" />
        </div>
        <div class="row__title">
          <router-link to="/admin/post">推文清單</router-link>
        </div>
      </div>
      <div class="nav__row">
        <div class="row__icon">
          <img src="https://imgur.com/75jNM0W.png" alt="" />
        </div>
        <div class="row__title">
          <router-link to="/admin/users">使用者列表</router-link>
        </div>
      </div>
    </div>
    <div class="nav__row" id="signOut">
      <div class="row__icon out__icon">
        <img src="https://i.imgur.com/fgMUybH.png" alt="" />
      </div>
      <div class="row__title"><router-link to="/login">登出</router-link></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.adminSidbar {
  margin-left: 130px;
  width: 178px;
  height: auto;
  // height: 1400px;
  // max-height: 100vh;
  display: flex;
  flex-direction: column;
}

.nav__brand {
  margin: 13px 13px 30px;
  img {
    width: px;
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
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  a {
    color: #44444f;
  }
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
</style>