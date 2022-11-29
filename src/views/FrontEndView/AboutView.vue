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

</script>

<style scoped lang="scss">
@import "@/assets/css/app.scss";
@import "../../assets/css/base/text";

h1{
  color: antiquewhite;
}
p{
  color: antiquewhite;
  font-family: "Cube11";
}
.font{
  font-family: "Cube11";
}
.primary{
  // map-get(@button,primary);
  margin: 20px;
}
.secondary{
  // @include btn-secondary;
  margin: 20px;
  font-family: "Cube11";
}
.lightbox{
  // @include btn-lightbox;
  margin: 20px;
}
.disable{
  // @include btn-disable;
  margin: 20px;
}

</style>
