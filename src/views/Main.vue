<template>
  <!-- 首頁 -->
  <div class="container row">
    <!-- navbar -->
    <Navbar />
    <!-- main -->
    <section class="col-7">hello World</section>
    <!-- recommend -->
    <section class="col-3">hello World</section>
  </div>
</template>

<script>
import Navbar from "./../components/Navbar.vue";

export default {
  components: {
    Navbar,
  },
};
</script>

<style lang="scss" scoped>
.container {
  max-width: 1144px;
  height: 100vh;
  margin: 0 auto;
}
// .main {
// }
// .recommend {
// }
</style>