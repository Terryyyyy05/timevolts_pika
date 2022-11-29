<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->

    <div class="homeTitle bg_dark">
      <h1>
        TimeVolts
        <span>時萬伏特</span>
      </h1>
    </div>
    <div class="bg_dark p_md">
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
    <div>
      <strong>現在，我們實現了時光旅行</strong>
      <img src="" alt="" />
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

<!-- <style lang="scss">
@import "@/assets/css/app.scss";
.homeTitle{
  margin: 20px;
  text-align: center;
  h1{
    span{
      display: none;
    }
  }
}
.home{
  display: flex;
  flex-direction: column;
  border: 1px map-get($color , primary );
  color: map-get($color, primary) ;
  
}
</style> -->