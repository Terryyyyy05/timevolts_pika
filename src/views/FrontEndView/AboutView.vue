<template>
  <div class="about">
    <h1>關於我們</h1>
    <p>About us</p>
    <p class="font">完盪了 按鈕字體跑不出來hihihi</p>
    <button class="primary">主要按鈕</button>
    <button class="secondary">次要按鈕</button>
    <button class="lightbox">燈箱按鈕</button>
    <button class="disable">停用狀態</button>

  </div>
</template>

<script>
// import  from 
//   export default {
//     components: {
      
//     }
//   }
</script>

<style scoped lang="scss">
@import "@/assets/css/app.scss";

.primary{
  @include btn-primary;
  margin: 20px;
}

.secondary{
  @include btn-secondary;
  margin: 20px;
}
.lightbox{
  @include btn-lightbox;
  margin: 20px;
}

.disable{
  @include btn-disable;
  margin: 20px;
}


</style>
