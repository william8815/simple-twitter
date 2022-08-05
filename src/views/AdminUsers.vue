<template>
  <div class="adminUsers">
    <!-- AdminSidbar -->
    <AdminSidbar />
    <!-- main -->
    <div class="main">
      <div class="main__title">
        <h1>使用者列表</h1>
      </div>
      <Spinner v-if="isLoading" />
      <template v-else>
        <div class="main__body">
          <!-- AdminUserCard -->
          <AdminUserCard
            v-for="user in users"
            :key="user.id"
            :user-info="user"
          />
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import AdminSidbar from "../components/AdminSidbar.vue";
import AdminUserCard from "../components/AdminUserCard.vue";
import adminAPI from "../apis/admin";
import { Toast } from "../utils/helpers";
import Spinner from "../components/Spinner.vue";

export default {
  name: "AdminUsers",
  components: {
    AdminSidbar,
    AdminUserCard,
    Spinner,
  },
  data() {
    return {
      users: {},
      isLoading: true,
    };
  },
  methods: {
    async fetchUsers() {
      try {
        this.isLoading = true;
        const { data } = await adminAPI.getUsers();

        if (data.statu === "error") {
          throw new Error(data.message);
        }

        this.users = data;
        this.isLoading = false;
      } catch (error) {
        this.isLoading = false;
        Toast.fire({
          icon: "warning",
          title: error.response.data.message,
        });
      }
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
  width: 100vw;
  max-width: 1400px;
  height: 100vh;
  margin: 0 auto;
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
  display: flex;
  align-items: center;
  z-index: 999;
  background: #fff;
  width: 100%;
  border-bottom: 1px solid#E6ECF0;
  height: 74px;
  padding: 24px;
  opacity: 0.95;
  h1 {
    font-weight: 700;
    font-size: 24px;
    line-height: 26px;
  }
}

.main__body {
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  padding-left: 1rem;
}
</style>