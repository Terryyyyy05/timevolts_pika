<template>
  <div>
    <router-link to="/product-item">
      <slot></slot>
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/css/utils/variables";
@import "@/assets/css/utils/mixin";

div {
  box-sizing: border-box;
  width: 18%;

  padding: 20px 10px;
  border: 2px solid map-get($color, "primary");
  background-color: map-get($color, "dark_sub");
}

@include m() {
  div {
    width: 45%;
  }
}
</style>
