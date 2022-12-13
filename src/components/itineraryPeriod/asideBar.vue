<template>
   <div class="wrap">
      <button class="btn-lightbox" @click="$emit('tab0')">行程簡介</button>
      <button class="btn-lightbox" @click="$emit('tab1')">行程安排</button>
      <button class="btn-lightbox" @click="$emit('tab2')">美食體驗</button>
      <button class="btn-lightbox" @click="$emit('tab3')">安全守則</button>
      <button class="btn-lightbox" @click="$emit('tab4')">取消政策</button>
   </div>
</template>

<script>
export default {
    emits: ['tab0','tab1', 'tab2', 'tab3', 'tab4' ]
}
</script>

<style lang="scss" scoped>
@import "@/assets/css/utils/variables";
@import "@/assets/css/layout/rwd.scss";

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

@include m (){
    .btn-lightbox{
        margin: 10px auto;
    }
}
</style>