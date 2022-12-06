<template>
   <div>
      <slot></slot>
   </div>
</template>

<style lang="scss" scoped>
@import "@/assets/css/utils/variables";
@import "@/assets/css/utils/mixin";

div {
   width: fit-content;
   height: fit-content;
   padding: 50px;
   border: 2px solid map-get($color, "primary");
   background-color: map-get($color, "dark_sub");
   margin: 50px auto;
}

</style>
