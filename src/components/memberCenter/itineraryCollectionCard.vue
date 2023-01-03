<template>
   <div>
      <slot></slot>
   </div>
</template>

<style lang="scss" scoped>
@import "@/assets/css/utils/variables";
@import "@/assets/css/app.scss";

div {
   width: 33%;
   min-width: 200px;
   height: 400px;
   box-sizing: border-box;
   margin: 10px;
   margin-top: 48px;
   padding: 1%;
   border: 2px solid map-get($color, "primary");
   background-color: map-get($color, "dark_sub");
}

@include m() {
   div {
      width: 100%;
   }
}
</style>
