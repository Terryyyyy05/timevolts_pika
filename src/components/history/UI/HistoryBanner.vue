<template>
   <div class="banner">
      <slot></slot>
   </div>
</template>

<style lang="scss" scoped>
@import "@/assets/css/utils/variables";
@import "@/assets/css/utils/mixin";

.banner {
   position: relative;
   &::before {
      content: "";
      background-position: center;
      background-size: cover;
      background-attachment: fixed;
      background-image: url("@/assets/image/history/test.png");
      // position: absolute;
      display: block;
      left: 0;
      top: 0;
      height: 100vh;
      z-index: -1;
   }
}

@include m() {
   .banner {
      &::before {
         background-attachment: inherit;
      }
   }
}
</style>
