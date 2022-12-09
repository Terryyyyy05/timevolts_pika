<template>
   <nav>
      <router-link to="/">切換頁</router-link> |
      <router-link to="/home">首頁</router-link> |
      <router-link to="/news">最新消息</router-link> |
      <router-link to="/itinerary">時光行程</router-link> |
      <router-link to="/history">歷史故事</router-link> |
      <router-link to="/product">購物商城Test</router-link> |
      <router-link to="/ProductCheckOut">結帳</router-link> |
      <router-link to="/about">關於我們</router-link> |
      <router-link to="/member">會員中心</router-link> |
      <router-link to="/itineraryPeriodView">時光行程-期間限定(預覽)</router-link> |
      <router-link to="/itiItineraryClassicView">時光行程-經典(預覽)</router-link
      > | 
       <router-link to="/manage-main">後台</router-link> |
   </nav>
   <pageTop/>
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
