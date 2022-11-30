<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div class="container">
      <!-- <div class="titleText"> -->
        <div class="sideTotem">
          <img src="@/assets/image/home/sideTotem.svg" alt="時萬伏特-圖樣">
        </div>
        <div class="title bg_dark">
          <h1>
            TimeVolts
            <span>時萬伏特</span>
          </h1>
        </div>
        <div class="text bg_dark p_md">
          <p>Last login: Wed Nov 16 10:53:48</p>
          <p>Restored session:</p>
          <p>TimeVolts ~ %</p>
          <p>
            .<br />
            .<br />
            .<br />
            假文字假文字假文字假文字假文字假文字假文字<br />
            假文字假文字假文字假文字假文字假文字假文字假文字<br />
            假文字假文字假文字假文字假文字假文字假文字假文字假文字假文字
          </p>
        </div>
        <div class="slogan">
          <strong>現在，我們實現了時光旅行</strong>
          <img src="@/assets/image/home/bitLightning.svg" alt="閃電圖樣"  />
        </div>
        <div class="pic">
          <img src="#" alt="時光機圖樣" />
        </div>

      <!-- </div> -->
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
.home{
  // display: flex;
  .container{
    background-image: url(@/assets/image/home/bg1.png);
    color: map-get($color, primary) ;
    display: grid;
    grid-template-columns: 2fr 4.5fr 4.5fr 1fr;
    grid-template-rows: 2fr 4fr 1fr;
    gap: 20px;
    // border: 1px map-get($color , primary );
    .sideTotem{
      // width: 8.333333;
      grid-column:1 ;
      grid-row: 1/3;
      min-height: 50vh;
      img{
        // width: 100%;
        max-height:80vh ;
      }
    }
    // .titleText{
      .title{
        grid-column: 2/4;
        grid-row: 1;
        text-align: center;
        h1{
          span{
            display: none;
          }
        }
      }
      .text{
        grid-column: 2/3;
        grid-row: 2/3;
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
        background-color: #fff;
        }
      }
    // }

  }
}
</style>