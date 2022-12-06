<template>
  <all-header/>
  <nav>
    <router-link to="/">首頁</router-link> |
    <router-link to="/news">最新消息</router-link> |
    <router-link to="/itinerary">時光行程</router-link> |
    <router-link to="/history">歷史故事</router-link> |
    <router-link to="/product">購物商城Test</router-link> |
    <router-link to="/about">關於我們</router-link> |
    <router-link to="/member">會員中心</router-link> |
    <router-link to="/itinerary-booking">行程訂票(預覽)</router-link> |
    <router-link to="/itineraryPeriodView">時光行程-期間限定(預覽)</router-link> |
    <router-link to="/itiItineraryClassicView">時光行程-經典(預覽)</router-link> |
    <router-link to="/Customizetk">客製票根(預覽)</router-link> |
  </nav>
  <router-view />
  
  <all-footer/>
</template>

<script>
import header from './components/header.vue'
import footer from './components/footer.vue'

export default {
  name: 'app',

  components:{
    'all-header':header,
    'all-footer':footer,
  }

}
</script>
<style lang="scss">
@import "@/assets/css/utils/variables";
body {
  background-color: map-get($color, body_dark);
}

// nav {
//   padding: 30px;
//   color: #2c3e50;
//   a {
//     font-weight: bold;
//     color: #2c3e50;
//     text-decoration: none;
//     &.router-link-exact-active {
//       color: #42b983;
//       text-decoration: none;
//     }
//   }
// }

footer{
    padding-bottom: 0;
    margin-bottom: 0;
  }
</style>
