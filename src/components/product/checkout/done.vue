<template>
  <div class="container">
    <font-awesome-icon icon="fa-solid fa-circle-check" class="circle-check" />
    <p class="p_xl">已收到您的訂單</p>
    <p class="p_xl">訂單編號: 123456789</p>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/css/utils/variables";
@import "@/assets/css/utils/mixin";

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  background-color: map-get($color, body_dark);
  width: 100%;

  .circle-check {
    font-size: 128px;
    color: map-get($color, "primary");
  }

  p {
    color: #fff;
    margin: 24px 0;
  }
}

@include m() {
  .container p {
    margin: 15px 0;
  }
}
</style>
