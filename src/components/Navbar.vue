<template>
  <section class="col-2">
    <nav class="navbar">
      <div class="navbar__logo"></div>
      <div class="navbar__list">
        <ul>
          <li>
            <a href="#">
              <div class="home icon"></div>
              首頁
            </a>
          </li>
          <li>
            <a href="#">
              <div class="user icon"></div>
              個人資料
            </a>
          </li>
          <li>
            <a href="#">
              <div class="setting icon"></div>
              設定
            </a>
          </li>
        </ul>
      </div>
      <button class="navbar__btn">推文</button>
    </nav>
    <div class="logout">
      <a href="#">
        <i class="fa-solid fa-arrow-right-from-bracket"></i>
        登出
      </a>
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.container {
  max-width: 1144px;
  height: 100vh;
  margin: 0 auto;
}
section {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.navbar {
  // setting Icon
  &__logo {
    margin: 13px;
    width: 40px;
    height: 40px;
    background: url("~@/assets/img/acIcon@2x.png") no-repeat;
    background-size: cover;
  }
  .icon {
    display: inline-block;
    margin-right: 16px;
    width: 20px;
    height: 20px;
  }
  .home {
    background: url("~@/assets/img/homeIcon.png") no-repeat;
    background-size: cover;
  }
  .user {
    background: url("~@/assets/img/userIcon.png") no-repeat;
    background-size: cover;
  }
  .setting {
    background: url("~@/assets/img/setIcon.png") no-repeat;
    background-size: cover;
  }
  // navlist
  &__list {
    margin: 18px 0 0 16px;
    font-size: 18px;
    li:not(:last-child) {
      margin-bottom: 40px;
    }
    a {
      display: flex;
      align-items: center;
    }
  }
  &__btn {
    border: none;
    background: var(--main-color);
    color: #fff;
    width: 100%;
    height: 45px;
    border-radius: 50px;
    font-size: 20px;
    margin-top: 24px;
  }
}
.logout {
  margin: 16px;
  font-size: 18px;
  i {
    margin-right: 16px;
  }
}
</style>