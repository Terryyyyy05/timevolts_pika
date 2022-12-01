<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div class="container">
      <div class="sideTotem">
        <img src="@/assets/image/home/sideTotem.svg" alt="時萬伏特-文字圖樣">
      </div>
      <div class="title bg_dark_50">
        <h1>
          TimeVolts
          <span>時萬伏特</span>
        </h1>
      </div>
      <div class="text bg_dark_50 p_md">
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
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/css/app.scss";

$b1-primary : (1px solid map-get($color , primary ));
$b2-primary : (2px solid map-get($color , primary ));
$b20-primary : (20px solid map-get($color , primary ));




// 12/1溝通過，說透明色用到的地方太少，寫在自己頁面就好
// -------- 顏色透明度


// -------- 透明背景顏色
@mixin bgca($color) {
  @each $k , $v in $color{
    .bg_#{$k}_#{$alphaName}{
      $alpha:(.75,.5,.25);
      $alphaName:(75,50,25);
      background-color: rgba($v,$alpha);
    }
  }
}

// .bg_dark{}

.home{
  // display: flex;
  .container{
    width: 100%;
    height: 100vh;
    box-sizing: border-box;
    padding: 30px;
    color: map-get($color, primary) ;
    display: grid;
    grid-template-columns: 2fr 4.5fr 4.5fr 1fr;
    grid-template-rows: 1.5fr 3fr 0.5fr;
    gap: 20px;
    background-image: url(@/assets/image/home/bg1_1440.jpg);
    
    .sideTotem{
      grid-column:1 ;
      grid-row: 1/3;
      // min-height: 50vh;
      // width: 100%;
      // height: 100%;
      // background-image:url(@/assets/image/home/sideTotem.svg) ;
      object-fit: scale-down;
      border:none;
      @media screen and (max-width: 767px) {
        grid-row: 2/3;
        }
      img{
        height: 100%;
        object-fit: scale-down;
      }
    }
    
    .title{
      @media screen and (max-width: 767px) {
        font-size: 42px;
        grid-column: 1/4;
        }
      grid-column: 2/4;
      grid-row: 1;
      display: flex;
      align-items: center;
      align-content: center;
      border:$b2-primary ;
      border-top:$b20-primary ;
      @media screen and (max-width: 1439px) {
        font-size: 42px;
      }
      @media screen and (max-width: 767px) {
        font-size: 42px;
        grid-column: 1/4;
        }
      h1{
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
    }
    .slogan{
      grid-column: 1/3;
      grid-row: 3/4;
    }
    .pic{
      grid-column: 3/4;
      grid-row: 2/3;
      img{
      width: 100%;
      height: 100%;
      object-fit: scale-down;
      }
    }
  

  }
}
</style>