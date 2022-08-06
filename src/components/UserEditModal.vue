<template>
  <div class="modal__container">
    <!-- 編輯個人資料的按鈕 -->
    <div class="card__edit">
      <button
        type="button"
        class="card__edit__button"
        @click.stop.prevent="toggleModal"
      >
        編輯個人資料
      </button>
    </div>

    <!-- modal 彈跳視窗 -->
    <section class="modal">
      <!-- 全銀幕背景淡黑圖 -->
      <div class="background" v-show="isEdit" />

      <!-- 返回圖示、標題、儲存紐 -->
      <div class="edit__modal" v-show="isEdit">
        <form
          action=""
          class="form"
          @submit.prevent.stop="handleSubmit"
          enctype="multipart/form-data"
        >
          <div class="header">
            <img
              src="./../assets/img/橘叉叉.png"
              alt=""
              class="header__close"
              @click.stop.prevent="toggleModal"
            />

            <span class="header__title">編輯個人資料</span>
            <button
              type="submit"
              class="header__save"
              :disabled="isNameOver || isInfoOver"
            >
              儲存
            </button>
          </div>

          <!-- 中間使用者背景和使用者頭像的部分 -->
          <div class="modal__image">
            <!-- 使用者背景 -->
            <img
              :src="user.front_cover | emptyBackground"
              alt=""
              class="modal__image__background"
              @error="user.img = ''"
            />

            <!-- 使用者背景控制組 (白相機和白x) -->
            <div class="control__cover">
              <input
                type="file"
                id="cover-input"
                name="front_cover"
                accept="image/*"
                class="control__cover__input"
                @change="handleChangeCover"
              />
              <label for="cover-input">
                <img
                  src="./../assets/img/相機.png"
                  class="control__cover__camera"
                />
              </label>
              <img
                src="./../assets/img/白叉叉.png"
                class="control__cover__cross"
                @click="cancelCover"
              />
            </div>

            <!-- 使用者頭像 -->
            <img
              :src="user.avatar | emptyImage"
              alt=""
              class="modal__image__self"
            />

            <!-- 使用者頭像控制組 (白相機)-->
            <div class="control__self">
              <input
                type="file"
                id="self-input"
                name="avatar"
                @change="handleChangeAvatar"
              />
              <label for="self-input">
                <img
                  src="./../assets/img/相機.png"
                  class="modal__image__self__camera"
                />
              </label>
            </div>
          </div>

          <!-- 文字輸入框群組 -->
          <div class="text__group">
            <!-- 修改姓名 -->
            <div class="text__name">
              <div class="text__name__input">
                <label for="text__name__input__id">名稱</label>
                <input
                  id="text__name__input__id"
                  v-model="user.name"
                  type="text"
                  name="name"
                />
              </div>

              <span class="text__name__alert" v-show="isNameOver"
                >字數不能超過50字!</span
              >

              <span class="text__name__count"> {{ nameLength }}/50</span>
            </div>

            <!-- 修改自介 -->
            <div class="text__info">
              <div class="text__info__input">
                <label for="" class="info__label">自我介紹</label>
                <textarea
                  v-model="user.introduction"
                  name="introduction"
                  cols="30"
                  rows="5"
                />
              </div>

              <span class="text__info__alert" v-show="isInfoOver"
                >字數不能超過160字!</span
              >

              <span class="text__info__count"
                >{{ introductionLength }}/160</span
              >
            </div>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>



<script>
import usersAPI from "./../apis/users";

import { Toast } from "../utils/helpers";
import { emptyImageFilter } from "./../utils/mixins";
import { emptyBackgroundFilter } from "./../utils/mixins";

export default {
  mixins: [emptyImageFilter, emptyBackgroundFilter],

  props: {
    initialIsedit: {
      type: Boolean,
      require: true,
    },

    initialuser: {
      type: Object,
      require: true,
    },
  },

  created() {
    this.user = {
      ...this.user,
      ...this.initialuser,
    };
  },

  computed: {
    nameLength() {
      return this.user.name.length;
    },
    introductionLength() {
      if (this.user.introduction.length === 0) {
        return 0;
      }
      return this.user.introduction.length;
    },
  },

  watch: {
    "user.name": function () {
      if (this.user.name.length > 50) {
        this.isNameOver = true;
      } else {
        this.isNameOver = false;
      }
    },

    "user.introduction": function () {
      if (this.user.introduction.length > 160) {
        this.isInfoOver = true;
      } else {
        this.isInfoOver = false;
      }
    },

    initialuser(newValue) {
      this.user = newValue;
    },
  },

  data() {
    return {
      user: {
        name: "",
        account: "",
        introduction: "",
        front_cover: "",
        avatar: "",
      },
      isEdit: false,
      isNameOver: false,
      isInfoOver: false,
    };
  },

  methods: {
    toggleModal() {
      this.isEdit = !this.isEdit;
    },

    handleChangeCover(e) {
      const { files } = e.target;

      if (files.length === 0) {
        // 使用者沒有選擇上傳的檔案
        this.user.front_cover = this.initialuser.front_cover;
        return;
      }
      // 否則產生預覽圖
      const imageURL = window.URL.createObjectURL(files[0]);
      this.user.front_cover = imageURL;
    },

    handleChangeAvatar(e) {
      const { files } = e.target;

      if (files.length === 0) {
        // 使用者沒有選擇上傳的檔案
        this.user.avatar = this.initialuser.avatar;
        return;
      }
      // 否則產生預覽圖
      const imageURL = window.URL.createObjectURL(files[0]);
      this.user.avatar = imageURL;
    },

    cancelCover() {
      this.user.front_cover = "";
    },

    async handleSubmit(e) {
      try {
        if (this.user.name.trim().length === 0) {
          Toast.fire({
            icon: "error",
            title: "名稱不能空白",
          });
          return;
        }

        if (this.user.introduction.trim().length === 0) {
          Toast.fire({
            icon: "error",
            title: "自我介紹不能空白",
          });
          return;
        }
        // const formData = this.user;
        const form = e.target;
        const formData = new FormData(form);

        const id = this.$route.params.id;

        const { data } = await usersAPI.editUser(id , formData);

        if (data.status !== "success") {
          console.log(data.message);
        }

        this.$store.commit("setCurrentUser", data.newData);

        this.isEdit = false;
      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "無法編輯使用者資料，請稍後再試",
        });
      }
    },

    // overName(){

    // }
  },
};
</script>


<style lang="scss">
ul,
li {
  list-style: none;
}

a,
button {
  color: #000;
  text-decoration: none;
  background: no-repeat;
  border: none;
  padding: 0;
  outline: none;
}

input,
textarea {
  all: unset;
}

.card__edit {
  margin-top: 16px;
  display: flex;
  justify-content: flex-end;

  &__button {
    margin-right: 16px;
    width: 128px;
    height: 40px;
    color: var(--main-color);
    border: 1px solid var(--main-color);
    border-radius: 50px;
    cursor: pointer;
  }
}

.modal {
  width: 450px;
}

.background {
  position: absolute;
  z-index: 2;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 50%;
  background-color: #000;
}

.edit__modal {
  position: fixed;
  top: 10px;
  left: 45%;
  width: 540px;
  transform: translateX(-45%);
  background-color: #fff;
  border-radius: 14px;
  z-index: 5;
}

.header {
  display: flex;
  align-items: center;
  height: 57px;

  &__close {
    width: 15px;
    height: 15px;
    margin-left: 20px;
    cursor: pointer;
  }

  &__title {
    margin-left: 35px;
    font-weight: bold;
    font-size: 18px;
  }

  &__save {
    margin-right: 16px;
    margin-left: auto;
    width: 64px;
    height: 40px;
    background-color: var(--main-color);
    color: #fff;
    font-size: 16px;
    border-radius: 50px;
    cursor: pointer;
  }
}

.modal__image {
  position: relative;

  &__background {
    width: 100%;
    height: 200px;
    filter: brightness(0.55);
    opacity: 0.75;
  }

  &__self {
    width: 140px;
    height: 140px;
    position: absolute;
    top: 100%;
    left: 16px;
    transform: translateY(-50%);
    border-radius: 50% 50%;
    background-color: #000;
    filter: brightness(0.55);
    border: 2px solid white;

    &__camera {
      width: 20px;
      height: 20px;
      position: absolute;
      top: 100%;
      left: 78px;
      transform: translateY(-50%);
      border-radius: 50% 50%;
      cursor: pointer;
    }
  }
}

.control__cover,
.control__self {
  position: absolute;
}

// 個人背景 白相機和白叉叉控制群組
.control__cover {
  top: 50%;
  left: 50%;
  transform: translate(-50%);

  &__input {
    display: none;
  }

  &__camera,
  &__cross {
    width: 20px;
    height: 20px;
    cursor: pointer;
  }

  &__camera {
    margin-right: 35px;
  }
}

// 個人頭像 白相機控制群組
.control__self {
  & input {
    display: none;
  }
}

.text__group {
  margin-top: 80px;
}

.text__name,
.text__info {
  display: flex;
  flex-direction: column;
}

.text__name {
  margin: 0 16px 0 16px;
  position: relative;

  &__input {
    display: flex;
    flex-direction: column;
    background-color: #f5f8fa;
    border-bottom: 2px solid #657786;
    padding: 0 15px;

    & label {
      font-size: 14px;
      color: #696974;
    }

    & input {
      font-size: 16px;
      color: #141425;
    }
  }

  &__count {
    display: inline-block;
    margin-top: 5px;
    margin-left: auto;
    font-size: 12px;
    color: #696974;
  }

  &__alert {
    display: inline-block;
    position: absolute;
    bottom: 0%;
    font-size: 12px;
    color: red;
  }
}

.text__info {
  margin: 5px 16px 30px 16px;
  position: relative;

  &__input {
    display: flex;
    flex-direction: column;
    background-color: #f5f8fa;
    border-bottom: 2px solid #657786;
    padding: 0 15px;

    & label {
      font-size: 14px;
      color: #696974;
    }

    & textarea {
      font-size: 16px;
      color: #141425;
    }
  }

  &__count {
    display: inline-block;
    margin-left: auto;
    font-size: 12px;
    color: #696974;
  }

  &__alert {
    display: inline-block;
    position: absolute;
    bottom: 0%;
    font-size: 12px;
    color: red;
  }
}
</style>