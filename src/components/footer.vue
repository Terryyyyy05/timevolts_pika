<template>
  <footer>
    <div class="footer-nav">
      <router-link to="/home">首頁</router-link> |
      <router-link to="/news">最新消息</router-link> |
      <router-link to="/itinerary">時光行程</router-link> |
      <router-link to="/history">歷史故事</router-link> |
      <router-link to="/product">購物商城</router-link> |
      <router-link to="/about">關於我們</router-link> |
      <router-link to="/memberLightBox">會員中心</router-link>
    </div>
    <div>{{copyright}}</div>
    <div class="container">{{disclaimer}}</div>
  </footer>
</template>
<script>
export default {
  name: "all-footer",
  data(){
    return{
      copyright: 'Copyright © 2022 Timevolts.All rights reserved.',
      disclaimer: '本網站為緯育TibaMe_前端設計工程師班學員專題成果作品，本平台僅供學習、展示之用。 若有侵權疑慮，您可以私訊「TibaMe-前端設計工程師養成班」，後續會由專人協助處理。',
    }
  }
};
</script>
<style scoped lang="scss">
  footer{
    display: flex;
    flex-direction: column;
    color: #fffaec;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    text-align: center;
    line-height: 1.5;
    padding-bottom: 10px;
    margin-bottom: 0;
    .footer-nav{
      color: #fffaec;
      display: flex;
      flex-wrap: nowrap;
      justify-content: center;
      align-items: center;
      a{
        text-decoration: none;
        color: #fffaec;
        &:hover {
          text-decoration: underline;
        }
      }
    }
    div.container {
      margin: 10px auto;
    }
  }
  @media screen and (min-width:768px) {
    footer{
      .footer-nav{
        font-size: 18px;
        a{
          font-size: 18px;
          margin: 5px;
        }
      }
    }
  }
</style>