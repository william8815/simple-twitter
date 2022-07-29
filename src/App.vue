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
html,
body {
  width: 100%;
  height: 100%;
  font-family: "Noto Sans TC", sans-serif;
  font-size: 1rem;
  line-height: 1.4;
  margin: 0;
}

html {
  scroll-behavior: smooth;
}
h1,
h2,
h3,
h4,
h5 {
  margin: 0;
  line-height: 0.9;
}
p {
  margin: 0;
}
ul,
li {
  list-style-type: none; /* 拿掉前方圈圈 */
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none; /* 拿掉底線 */
}

table {
  border: none;
  border-spacing: 0;
  border-collapse: collapse;
}
th,
td {
  text-align: initial;
}
</style>
