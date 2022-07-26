<template>
  <div id="app">
    <router-view />
  </div>
</template>

// ./src/App.vue
<script>
import "bootstrap/dist/css/bootstrap-grid.min.css";
// import "bootstrap/dist/css/bootstrap.min.css";
export default {
  name: "App",
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html,
body {
  width: 100%;
  height: 100%;
}
ul,
li {
  list-style: none;
}
a {
  text-decoration: none;
  color: #000;
}
</style>
