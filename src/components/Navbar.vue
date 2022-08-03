<template>
  <div class="navbar">
    <nav class="navtabs">
      <div class="navtabs__logo"></div>
      <div v-if="!isAdmin" class="navtabs__list">
        <ul class="list">
          <li>
            <router-link :to="{ name: 'main' }" class="tag">
              <!-- <img :src="tab.icon" alt="" class="icon" /> -->
              <svg
                class="icon"
                :class="{ focus: $route.name === 'main' }"
                viewBox="0 0 24 24"
                fill="#fff"
                stroke="#44444F"
                stroke-width="2px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  :class="{ focus: $route.name === 'main' }"
                  d="M22.58 7.34986L12.475 1.89686C12.178 1.73686 11.821 1.73686 11.525 1.89686L1.42496 7.34986C0.938957 7.61386 0.757957 8.21986 1.01996 8.70586C1.19996 9.04086 1.54496 9.23086 1.89996 9.23086C2.05996 9.23086 2.22396 9.19286 2.37496 9.11086L3.10896 8.71486L4.69896 19.9649C4.91496 21.1789 6.00896 22.0269 7.35896 22.0269H16.641C17.991 22.0269 19.085 21.1789 19.303 19.9389L20.891 8.71386L21.628 9.11186C22.113 9.37486 22.72 9.19386 22.982 8.70786C23.245 8.22186 23.062 7.61486 22.578 7.35286L22.58 7.34986ZM12 15.4349C10.205 15.4349 8.74996 13.9799 8.74996 12.1849C8.74996 10.3899 10.205 8.93486 12 8.93486C13.795 8.93486 15.25 10.3899 15.25 12.1849C15.25 13.9799 13.795 15.4349 12 15.4349Z"
                  fill="#fff"
                />
              </svg>
              <h5 :class="{ focus: $route.name === 'main' }">首頁</h5>
            </router-link>
          </li>
          <li>
            <router-link
              :to="{ name: 'user-profile', params: { id: 14} }"
              class="tag"
            >
              <!-- <img :src="tab.icon" alt="" class="icon" /> -->
              <svg
                class="icon"
                :class="{ focus: $route.name === 'user-profile' }"
                viewBox="0 0 24 24"
                fill="#fff"
                stroke="#44444F"
                stroke-width="2px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.225 12.1649C10.869 12.1649 9.35301 12.0149 8.38501 10.9089C7.57101 9.97891 7.30801 8.54091 7.58001 6.51691C7.96001 3.69091 9.69601 2.00391 12.226 2.00391C14.756 2.00391 16.493 3.69091 16.872 6.51691C17.144 8.54091 16.88 9.97691 16.066 10.9089C15.096 12.0149 13.581 12.1639 12.226 12.1639L12.225 12.1649ZM18.074 22.0149H6.37601C5.71301 22.0149 5.12601 21.7349 4.72601 21.2289C4.30401 20.6949 4.15001 19.9589 4.31601 19.2609C5.15001 15.7309 8.40201 13.2639 12.224 13.2639C16.046 13.2639 19.298 15.7299 20.134 19.2609C20.298 19.9589 20.144 20.6949 19.722 21.2279C19.322 21.7329 18.737 22.0129 18.074 22.0129V22.0149Z"
                  fill="#fff"
                />
              </svg>
              <h5 :class="{ focus: $route.name === 'user-profile' }">
                個人資料
              </h5>
            </router-link>
          </li>
          <li>
            <router-link
              :to="{ name: 'user-edit', params: { id: 14 } }"
              class="tag"
            >
              <!-- <img :src="tab.icon" alt="" class="icon" /> -->
              <svg
                class="icon"
                :class="{ focus: $route.name === 'user-edit' }"
                viewBox="0 0 24 24"
                fill="#fff"
                stroke="#44444F"
                stroke-width="2px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  :class="{ focus: $route.name === 'user-edit' }"
                  d="M12.36 22.375H11.638C10.455 22.375 9.48405 21.487 9.37605 20.311L9.36205 20.164C9.33705 19.877 9.15505 19.631 8.89005 19.52C8.60405 19.4 8.30805 19.455 8.09205 19.635L7.97605 19.732C7.10805 20.457 5.72305 20.395 4.91605 19.592L4.40605 19.082C3.57005 18.242 3.51005 16.928 4.26605 16.022L4.36405 15.904C4.55005 15.682 4.59405 15.381 4.48605 15.117C4.37605 14.845 4.12805 14.663 3.84005 14.637L3.69005 14.623C2.51005 14.516 1.62305 13.543 1.62305 12.361V11.639C1.62305 10.456 2.51105 9.485 3.68705 9.377L3.84305 9.363C4.12805 9.338 4.37305 9.156 4.48505 8.89C4.59505 8.62 4.55005 8.317 4.36505 8.095L4.27105 7.979C3.51405 7.071 3.57305 5.756 4.40805 4.919L4.92005 4.407C5.72405 3.603 7.10805 3.542 7.98005 4.267L8.09605 4.365C8.31405 4.549 8.62405 4.595 8.88605 4.487C9.15605 4.375 9.33805 4.129 9.36305 3.844L9.37705 3.691C9.48405 2.511 10.457 1.625 11.639 1.625H12.361C13.544 1.625 14.515 2.513 14.623 3.689L14.637 3.845C14.662 4.13 14.843 4.375 15.109 4.485C15.386 4.602 15.689 4.547 15.903 4.368L16.023 4.266C16.89 3.543 18.277 3.604 19.083 4.406L19.593 4.918C20.429 5.756 20.489 7.071 19.733 7.978L19.633 8.096C19.445 8.316 19.399 8.618 19.51 8.884C19.622 9.154 19.87 9.334 20.156 9.362L20.308 9.376C21.488 9.483 22.375 10.456 22.375 11.638V12.361C22.375 13.544 21.487 14.515 20.311 14.623L20.156 14.637C19.872 14.661 19.626 14.842 19.516 15.107C19.403 15.379 19.449 15.681 19.633 15.902L19.733 16.022C20.489 16.927 20.429 18.242 19.593 19.082L19.083 19.592C18.276 20.396 16.893 20.456 16.023 19.732L15.908 19.636C15.691 19.453 15.378 19.406 15.118 19.514C14.845 19.628 14.663 19.874 14.638 20.16L14.624 20.31C14.517 21.483 13.544 22.37 12.362 22.37L12.36 22.375ZM8.20996 12C8.20996 9.90996 9.90996 8.20996 12 8.20996C14.09 8.20996 15.79 9.90996 15.79 12C15.79 14.09 14.09 15.79 12 15.79C9.90996 15.79 8.20996 14.09 8.20996 12ZM9.70996 12C9.70996 13.264 10.738 14.29 12 14.29C13.262 14.29 14.29 13.264 14.29 12C14.29 10.736 13.26 9.70996 12 9.70996C10.74 9.70996 9.70996 10.736 9.70996 12Z"
                  fill="#fff"
                />
              </svg>
              <h5 :class="{ focus: $route.name === 'user-edit' }">設定</h5>
            </router-link>
          </li>
        </ul>
        <button @click="newlModel" class="navtabs__btn">推文</button>
      </div>
      <div v-else class="navtabs__list">
        <ul class="list">
          <li>
            <router-link :to="{ name: 'admin-post' }" class="tag">
              <!-- <img :src="tab.icon" alt="" class="icon" /> -->
              <svg
                class="icon"
                :class="{ focus: $route.name === 'admin-post' }"
                viewBox="0 0 24 24"
                fill="#fff"
                stroke="#44444F"
                stroke-width="2px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  :class="{ focus: $route.name === 'admin-post' }"
                  d="M22.58 7.34986L12.475 1.89686C12.178 1.73686 11.821 1.73686 11.525 1.89686L1.42496 7.34986C0.938957 7.61386 0.757957 8.21986 1.01996 8.70586C1.19996 9.04086 1.54496 9.23086 1.89996 9.23086C2.05996 9.23086 2.22396 9.19286 2.37496 9.11086L3.10896 8.71486L4.69896 19.9649C4.91496 21.1789 6.00896 22.0269 7.35896 22.0269H16.641C17.991 22.0269 19.085 21.1789 19.303 19.9389L20.891 8.71386L21.628 9.11186C22.113 9.37486 22.72 9.19386 22.982 8.70786C23.245 8.22186 23.062 7.61486 22.578 7.35286L22.58 7.34986ZM12 15.4349C10.205 15.4349 8.74996 13.9799 8.74996 12.1849C8.74996 10.3899 10.205 8.93486 12 8.93486C13.795 8.93486 15.25 10.3899 15.25 12.1849C15.25 13.9799 13.795 15.4349 12 15.4349Z"
                  fill="#fff"
                />
              </svg>
              <h5 :class="{ focus: $route.name === 'admin-post' }">推文清單</h5>
            </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'admin-users' }" class="tag">
              <!-- <img :src="tab.icon" alt="" class="icon" /> -->
              <svg
                class="icon"
                :class="{ focus: $route.name === 'admin-users' }"
                viewBox="0 0 24 24"
                fill="#fff"
                stroke="#44444F"
                stroke-width="2px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  :class="{ focus: $route.name === 'admin-users' }"
                  d="M12.225 12.1649C10.869 12.1649 9.35301 12.0149 8.38501 10.9089C7.57101 9.97891 7.30801 8.54091 7.58001 6.51691C7.96001 3.69091 9.69601 2.00391 12.226 2.00391C14.756 2.00391 16.493 3.69091 16.872 6.51691C17.144 8.54091 16.88 9.97691 16.066 10.9089C15.096 12.0149 13.581 12.1639 12.226 12.1639L12.225 12.1649ZM18.074 22.0149H6.37601C5.71301 22.0149 5.12601 21.7349 4.72601 21.2289C4.30401 20.6949 4.15001 19.9589 4.31601 19.2609C5.15001 15.7309 8.40201 13.2639 12.224 13.2639C16.046 13.2639 19.298 15.7299 20.134 19.2609C20.298 19.9589 20.144 20.6949 19.722 21.2279C19.322 21.7329 18.737 22.0129 18.074 22.0129V22.0149Z"
                  fill="#fff"
                />
              </svg>
              <h5 :class="{ focus: $route.name === 'admin-users' }">
                使用者列表
              </h5>
            </router-link>
          </li>
        </ul>
      </div>

      <!-- 推文彈跳視窗 -->
      <div>
        <div class="black" v-if="tweetMode" @click="cancelModel"></div>
      </div>
      <div v-if="tweetMode" class="tweetModal">
        <div class="modal">
          <div class="cancel">
            <i @click="cancelModel" class="fa-solid fa-xmark"></i>
          </div>
          <div class="tweet">
            <img src="~@/assets/img/userImg.png" alt="userImg" />
            <form action="">
              <div>
                <!-- <label for="tweet" class="tweet-title">有甚麼新鮮事?</label> -->
                <textarea
                  class="tweet-content"
                  name="tweet"
                  id=""
                  cols="30"
                  :rows="count"
                  placeholder="有甚麼新鮮事?"
                ></textarea>
              </div>
              <button type="submit" class="tweet-btn">推文</button>
            </form>
          </div>
        </div>
      </div>
    </nav>
    <div class="logout">
      <a href="#" @click="logout">
        <i class="fa-solid fa-arrow-right-from-bracket"></i>
        <span>登出</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 7,
      tweetMode: false,
      isAdmin: false,
    };
  },
  methods: {
    cancelModel() {
      this.tweetMode = false;
    },
    newlModel() {
      this.tweetMode = true;
    },
    logout() {
      this.$store.commit("revokeAuthentication");
      this.$router.push("/login");
    },
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  // min-width: 178px;
  // height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.navtabs {
  // setting Icon
  &__logo {
    margin: 13px;
    width: 40px;
    height: 40px;
    background: url("~@/assets/img/acIcon@2x.png") no-repeat;
    background-size: cover;
  }
  .icon {
    margin-right: 16px;
    width: 20px;
    height: 20px;
    border-radius: 0;
  }
  // navlist
  &__list {
    .list {
      margin: 18px 0 0 16px;
    }
    li:not(:last-child) {
      margin-bottom: 40px;
    }
    .tag {
      display: flex;
      align-items: center;
      color: #44444f;
    }
    .tag .icon > path.focus {
      fill: var(--main-color);
    }
    .tag:hover .icon {
      stroke-width: 2px;
      stroke: var(--main-color);
    }
    .tag .icon.focus {
      stroke-width: 1px;
      stroke: #fff;
    }
    .tag:hover h5,
    .tag h5.focus {
      color: var(--main-color);
    }
  }
  // tweet button
  &__btn {
    border: none;
    background: var(--main-color);
    color: #fff;
    width: 100%;
    height: 45px;
    border-radius: 50px;
    font-size: 20px;
    margin-top: 24px;
    font-weight: 400;
  }
}
// logout
.logout {
  margin: 16px;
  font-size: 18px;
  font-weight: 700;
  i {
    margin-right: 16px;
    color: #44444f;
  }
  span {
    color: #44444f;
  }
}
// 推文彈跳視窗
// 圖片共同樣式
img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 8px;
}
.black {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  background: rgba($color: #333, $alpha: 0.5);
}
.tweetModal {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  .modal {
    width: 50vw;
    background-color: #fff;
    border-radius: 14px;
    margin: 56px auto;
  }
}
.cancel {
  padding: 20px;
  border-bottom: 1px solid #e6ecf0;
  i {
    font-size: 20px;
    color: var(--main-color);
  }
}
.tweet {
  height: calc(100% - 60px);
  display: flex;
  padding: 16px 16px 16px 24px;
  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .tweet-content {
    width: 100%;
    resize: none;
    font-size: 16px;
    font-weight: 400;
    color: #6c757d;
    padding-top: 12px;
    border: none;
    outline: none;
  }
  .tweet-btn {
    align-self: flex-end;
    margin-top: 16px;
    border: none;
    background-color: var(--main-color);
    color: #fff;
    width: 64px;
    height: 40px;
    border-radius: 50px;
    padding: 8px 16px;
    font-size: 16px;
  }
}
</style>