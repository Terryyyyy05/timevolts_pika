<template>
  <all-header/>
  <div class="home">
    <!-- <img alt="Vue logo" src="../../assets/logo.png"> -->
    <div class="introduce_block">
      <div class="sideTotem">
        <img src="@/assets/image/home/sideTotem.svg" alt="時萬伏特-文字圖樣">
      </div>
      <div class="title bg_dark_75">
        <h1>
          TimeVolts
          <span>時萬伏特</span>
        </h1>
      </div>
      <div class="text bg_dark_75 p_md">
        <p>Last login: Wed Nov 16 10:53:48</p>
        <p>Restored session:</p>
        <p>TimeVolts ~ %</p>
        <p>
          .<br />
          .<br />
          .<br />
          歡迎來到時萬伏特<br />
          假文字假文字假文字假文字假文字假文字假文字假文字<br />
          假文字假文字假文字假文字假文字假文字假文字假文字假文字假文字
        </p>
      </div>
      <div class="slogan">
        <strong>現在，我們實現了時光旅行</strong>
        <img src="@/assets/image/home/bitLightning.svg" alt="閃電圖樣"  />
      </div>
      <div class="pic">
        <img src="@/assets/image/home/Time_Machine.png" alt="時光機圖樣" />
      </div>
    </div>
    <div class="itinerary_block">
      <div class="title">
        <h2>
          時光行程
          <span>Itinerary</span>
        </h2>
        <home-itinerary me-itinerary></home-itinerary>
        <router-link class="link" to="/itinerary">更多時光行程</router-link>
      </div>
    </div>
    <div class="historcal-news">
      <div class="historcal_block">
        <div class="title">
          <h2>
            歷史故事
            <span>Historcal</span>
          </h2>
          <home-historcal></home-historcal>
          <router-link class="link" to="/history">更多歷史故事</router-link>
        </div>
      </div>

      <div class="new_block">
        <div class="title">
          <h2>
            最新消息
            <span>News</span>
          </h2>
            <HomeNews/>
          <router-link class="link" to="/news">更多最新消息</router-link>
        </div>
      </div>
    </div>
  </div>
  <all-footer/>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import HomeItinerary from '../../components/home/HomeItinerary.vue'
import HomeHistorcal from '../../components/home/HomeHistorcal.vue'
import HomeNews from '../../components/home/HomeNews.vue'

export default {
  name: 'HomeView',
  datas(){
    return {
      newsData: [
        {
          id: 1,
          title: '購物須知',
          date: '2022-11-11',
          hashtag: '#最新公告',
          content: '【購物流程】1.點選您需要的商品規格及數量，加入購物車。2.購物車內確認購買項目後，點選前往結帳（請注意：購物車內商品尚未結帳前，如商品已無庫存，進入結帳時系統會取消商品數量，請注意核對結帳數量及項目）。',
          content_box: '',
          img: require(`@/assets/image/news/shopping.jpg`),

        },
        {
          id: 2,
          title: '新商品出爐囉!!',
          date: '2022-12-11',
          hashtag: '#新品上架',
          content: '超過上百種語言翻譯，打破溝通障礙，運用本公司獨家秘方【翻譯蒟蒻】，精準翻出生活化的當地語言，就像學會當地語言一樣與人流暢對話。',
          content_box: '',
          img: require(`@/assets/image/news/jelly.jpeg`),
        },
        {
          id: 3,
          title: '官網維護公告',
          date: '2022-11-09',
          hashtag: '#公告 #維修中',
          content: '親愛的用戶您好，為提高您的網站使用品質，本公司將預計2022-09-15進行系統維護作業，期間會造成部分網頁無法使用，造成您的不便，敬請見諒!',
          content_box: '',
          img: require(`@/assets/image/news/system.png`),
        }
      ],
    }
  },
  components: {
    HelloWorld,
    HomeItinerary,
    HomeHistorcal,
    HomeNews,
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/css/utils/_variables.scss";

$b1-primary : (1px solid map-get($color , "primary" ));
$b2-primary : (2px solid map-get($color , "primary" ));
$b20-primary : (20px solid map-get($color , "primary" ));


// 酷酷的雜訊效果
h1::before{
  width: 100%;
  height: 100%;
  content: '';
  margin: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: block;
  pointer-events: none;
  background:radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0.3) 0%, rgba(54, 54, 54, 0.3) 100%),
  url(@/assets/image/noise.gif) ;
  mix-blend-mode: overlay;
  opacity: .5;
  background-repeat: repeat;
  position: fixed;
  z-index: 1000;
}


// .bg_dark{}




.bg_dark_75{
  background-color: rgba(map-get($color , "dark" ),75%);
}

// h2標題

h2{
  display: inline-block;
  width: 400px;
  font-size: 68px;
  padding: 20px 0;
  vertical-align: text-top;
  span{
    display: inline-block;
    font-size: 32px;
  }
  @media screen and (max-width: $m-breakpoint) {
    width: 200px;
    font-size: 38px;
    span{
      font-size: 17px;
    }
  } 
}


  .introduce_block{
    vertical-align: middle;
    box-sizing: border-box;
    padding: 30px;
    padding-top: 80px;
    color: map-get($color, "primary") ;
    background:
    linear-gradient(180deg, #131313 0%, rgba(19, 19, 19, 0) 10%, rgba(19, 19, 19, 0) 90%, #131313 100%),
    url(@/assets/image/home/bg1_1440.jpg);
    background-repeat: repeat;
    background-position: center;
    background-size: cover;

    align-items: center;
    display: grid;
    grid-template-columns: 2fr 4.5fr 4.5fr 1fr;
    grid-template-rows: 1.5fr 3fr 0.5fr;
    gap: 20px;


  
    @media screen and (max-width: $m-breakpoint) {
      height: auto;
      grid-template-columns: 2fr 4.5fr 4.5fr 1fr;
      grid-template-rows: 1fr 4fr 0.5fr;
      }
    .sideTotem{
      grid-column:1 ;
      grid-row: 1/3;
      // background-image:url(@/assets/image/home/sideTotem.svg) ;
      object-fit: scale-down;
      border:none;
      img{
        height: 100%;
        object-fit: scale-down;
      }
      @media screen and (max-width: $m-breakpoint) {
        grid-row: 2/3;
        img{
          width: 100px;
          height: auto;
        }
      }
    }
    
    .title{
      grid-column: 2/4;
      grid-row: 1;
      padding: 30px 0 48px;
      display: flex;
      align-items: stretch;
      align-content: center;
      border:$b2-primary ;
      border-top:$b20-primary ;
      font-size: 128px;
      
      @media screen and (max-width: $m-breakpoint) {
          grid-column: 1/4;
          }
        h1{
          @media screen and (max-width: $t-breakpoint) {
          font-size: 42px;
          }
          @media screen and (max-width: $ts-breakpoint) {
          font-size: 38px;
          }
          margin: auto;
          span{
            display: none;
          }
          }
    }
    .text{
      grid-column: 2/3;
      grid-row: 2/3;
      padding: 20px;
      border:$b2-primary ;
      @media screen and (max-width: $m-breakpoint) {grid-column: 2/4;}
    }
    .slogan{
      grid-column: 1/4;
      grid-row: 3/4;
      display: flex;
      align-items: center;
      font-size: 42px;
      img{
        width: 100px;
      }
      
    }
    .pic{
      grid-column: 3/4;
      grid-row: 2/3;
      img{
      width: 100%;
      height: 100%;
      object-fit: scale-down;
      }
      @media screen and (max-width: $m-breakpoint) {display: none;}
    }  
  }

  .itinerary_block,.historcal_block,.new_block{
    padding: 30px;
    background-size: cover;
    color: map-get($color, "primary");
    .link{
      display: block;
      text-align: center;
      width: 68vw;
      margin: 20px auto;
      padding: 10px;
      border:$b2-primary ;
      color: map-get($color, "primary");
      background: map-get($color , "dark_sub" );
      text-decoration:none;
    }
  }
  .itinerary_block{
    background: linear-gradient(180deg, #131313 0%, rgba(19, 19, 19, 0) 10%, rgba(19, 19, 19, 0) 90%, #131313 100%),
    url(@/assets/image/home/bg2_1440.jpg);
    background-position: center;
  }
  .historcal-news{
    background: linear-gradient(180deg, #131313 0%, rgba(19, 19, 19, 0) 10%, rgba(19, 19, 19, 0) 90%, #131313 100%),
    url(@/assets/image/home/bg3.jpg);
    background-position: top;
    background-size: cover;
  }


</style>