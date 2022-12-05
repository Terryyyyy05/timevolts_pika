<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
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
      </div>
    </div>

    <div class="historcal_block">
      <div class="title">
        <h2>
          歷史故事
          <span>Historcal</span>
        </h2>
        <home-historcal></home-historcal>
      </div>

    </div>


  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import HomeItinerary from '../../components/home/HomeItinerary.vue'
import HomeHistorcal from '../../components/home/HomeHistorcal.vue'

export default {
  name: 'HomeView',
  datas(){
    imgs:[
      // {src:"@/assets/image/home/sideTotem.svg",art:"時萬伏特-文字圖樣"},
      // {src:"@/assets/image/home/bitLightning.svg",art:"閃電圖樣"},
    ]
  },
  components: {
    HelloWorld,
    HomeItinerary,
    HomeHistorcal
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

// 12/1溝通過，說透明色用到的地方太少，寫在自己頁面就好

// -------- 透明背景顏色
// @mixin bgca($color) {
//   @each $k , $v in $color{
//     .bg_#{$k}_75{
//       background-color: rgba($v,75%);
//     }
//     .bg_#{$k}_50{
//       background-color: rgba($v,50%);
//     }
//     .bg_#{$k}_25{
//       background-color: rgba($v,25%);
//     }
//   }
// }


// .bg_dark{}




.bg_dark_75{
  background-color: rgba(map-get($color , "dark" ),75%);
}

// h2標題

h2{
  display: inline-block;
  width: 400px;
  font-size: 68px;
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
    // width: 100%;
    // height: 100vh;
    box-sizing: border-box;
    padding: 30px;
    padding-top: 80px;
    color: map-get($color, "primary") ;
    background-image: url(@/assets/image/home/bg1_1440.jpg);
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

  .itinerary_block{
    padding: 30px;
    color: map-get($color, "primary") ;
    background-image: url(@/assets/image/home/bg2_1440.jpg);
    background-position: center;
    background-size: cover;
  }
  .historcal_block{
    padding: 30px;
    color: map-get($color, "primary") ;
  }


</style>