<template>
  <div class="Noise"></div>
  <pageTop />
  <router-view />
</template>

<script>
export default {
  name: "app",
  mounted() {
    this.$store.commit("updateCartFromLocalStorage");
  },
};
</script>
<style lang="scss">
@import "@/assets/css/utils/variables";
body {
  background-color: map-get($color, body_dark);
}

nav {
  padding: 30px;
  color: #2c3e50;
  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    &.router-link-exact-active {
      color: #42b983;
      text-decoration: none;
    }
  }
}
</style>
