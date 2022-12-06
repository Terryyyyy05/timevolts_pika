<template>
   <div class="wrap">
      <button class="btn-lightbox">行程簡介</button>
      <button class="btn-lightbox">行程安排</button>
      <button class="btn-lightbox">美食體驗</button>
      <button class="btn-lightbox">安全守則</button>
      <button class="btn-lightbox">取消政策</button>
   </div>
</template>

<style lang="scss" scoped>
@import "@/assets/css/utils/variables";

   .wrap {
        width: 200px;
        height: fit-content;
        margin: 50px auto;
   }
   .btn-lightbox{
        width: 100%;
        justify-content: center;
        border-radius: 0;
   }
</style>