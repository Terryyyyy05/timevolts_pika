<template>
   <div>
      <slot></slot>
   </div>
</template>

<style lang="scss" scoped>
@import "@/assets/css/utils/variables";

   div {
      width: 1000px;
      height: 500px;
      padding: 25px 50px;
      border: 2px solid map-get($color, "primary");
      background-color: map-get($color, "dark_sub");
      margin: 50px auto;
   }
</style>
