<template>
  <nav>
    <router-link to="/">首頁</router-link> |
    <router-link to="/news">最新消息</router-link> |
    <router-link to="/itinerary">時光行程</router-link> |
    <router-link to="/history">歷史故事</router-link> |
    <router-link to="/product">購物商城</router-link> |
    <router-link to="/about">關於我們</router-link> |
    <router-link to="/member">會員中心</router-link> |
  </nav>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
