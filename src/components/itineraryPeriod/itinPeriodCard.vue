<template>
   <div>
      <slot></slot>
   </div>
</template>

<style lang="scss" scoped>
@import "@/assets/css/utils/variables";

    div {
        
        display: flex;
        flex-direction: row;
        // flex-wrap: wrap;
        width: 300px;
        height: 600px;
        box-sizing: border-box;
        margin: 10px;
        padding: 1%;
        border: 2px solid map-get($color, "primary");
        background-color: map-get($color, "dark_sub");
    }
</style>
