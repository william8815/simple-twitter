<template>
  <div class="adminUsers">
    <!-- AdminSidbar -->
    <AdminSidbar />
    <!-- main -->
    <div class="main">
      <div class="main__title">
        <h1>使用者列表</h1>
      </div>
      <div class="main__body">
        <!-- AdminUserCard -->
        <AdminUserCard v-for="user in users" :key="user.id" :user="user" />
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import AdminSidbar from "../components/AdminSidbar.vue";
import AdminUserCard from "../components/AdminUserCard.vue";
import { v4 as uuidv4 } from "uuid";
const dammyData = {
  users: [
    {
      id: uuidv4(),
      name: "John Doe",
      image: "https://imgur.com/GrO4gR6.png",
      background: "https://i.imgur.com/NPIq5gR.png",
      text: "heyjohn",
      Count: {
        replyCount: 150011,
        likeCount: 300011,
        following: 314441,
        follower: 54449,
      },
    },
    {
      id: uuidv4(),
      name: "John Doe",
      image: "https://imgur.com/GrO4gR6.png",
      background: "https://i.imgur.com/NPIq5gR.png",
      text: "heyjohn",
      Count: {
        replyCount: 22345,
        likeCount: 14257841,
        following: 34,
        follower: 59,
      },
    },
    {
      id: uuidv4(),
      name: "John Doe",
      image: "https://imgur.com/GrO4gR6.png",
      background: "https://i.imgur.com/NPIq5gR.png",
      text: "heyjohn",
      Count: {
        replyCount: 110,
        likeCount: 3000,
        following: 34,
        follower: 59,
      },
    },
    {
      id: uuidv4(),
      name: "John Doe",
      image: "https://imgur.com/GrO4gR6.png",
      background: "https://i.imgur.com/NPIq5gR.png",
      text: "heyjohn",
      Count: {
        replyCount: 10,
        likeCount: 3000,
        following: 34,
        follower: 59,
      },
    },
    {
      id: uuidv4(),
      name: "John Doe",
      image: "https://imgur.com/GrO4gR6.png",
      background: "https://i.imgur.com/NPIq5gR.png",
      text: "heyjohn",
      Count: {
        replyCount: 1500,
        likeCount: 3000,
        following: 34,
        follower: 59,
      },
    },
    {
      id: uuidv4(),
      name: "John Doe",
      image: "https://imgur.com/GrO4gR6.png",
      background: "https://i.imgur.com/NPIq5gR.png",
      text: "heyjohn",
      Count: {
        replyCount: 1500,
        likeCount: 3000,
        following: 34,
        follower: 59,
      },
    },
  ],
};
export default {
  name: "AdminUsers",
  components: {
    AdminSidbar,
    AdminUserCard,
  },
  data() {
    return {
      users: [],
    };
  },
  methods: {
    fetchUsers() {
      this.users = dammyData.users;
    },
  },
  created() {
    this.fetchUsers();
  },
};
</script>

<style lang="scss" scoped>
.adminUsers {
  display: flex;
  max-height: 100vh;
  width: auto;
}

.main {
  width: 1076px;
  flex: 1;
  height: 100vh;
  border-left: 1px solid #e6ecf0;
  margin-left: 24px;
  overflow-y: scroll;
}

::-webkit-scrollbar {
  width: 0px;
  background: transparent;
}

.main__title {
  position: sticky;
  top: 0;
  z-index: 999;
  background: #fff;
  width: 100%;
  border-bottom: 1px solid#E6ECF0;
  height: 74px;
  padding: 24px;
  opacity: 0.95;
  h1 {
    padding: 24px;
    font-weight: 700;
    font-size: 24px;
    line-height: 26px;
  }
}

.main__body {
  display: flex;
  flex-wrap: wrap;
  padding-left: 1rem;
}
</style>