<template>
   <div class="container">
      <font-awesome-icon icon="fa-solid fa-circle-check" class="circle-check" />
      <p class="p_xl">付款完成</p>
      <p class="p_xl">要去製作時光旅行通行票根嗎 ?</p>
   </div>
</template>

<style lang="scss" scoped>
@import "@/assets/css/utils/variables";

.container {
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 24px;

   .circle-check {
      font-size: 128px;
      color: map-get($color, "primary");
   }

   p {
      color: #fff;
   }

   p {
      margin: 24px 0;
   }
}
</style>
