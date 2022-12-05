<template>
   <div class="container">
      <div class="customize">
         <div class="ticket">
            <img src="@/assets/image/ticket.png">
         </div>
         <button class="btn-primary">完成客製</button>
         <button class="btn-secondary">放棄修改</button>
      </div>

      <div class="pannel">
         <div class="color">
            <button class="pink" style="background-color:pink"></button>
            <button class="white" style="background-color:white"></button>
            <button class="blue" style="background-color:blue"></button>
            <button class="yellow" style="background-color:yellow"></button>
            <button class="green" style="background-color:green"></button>
            <button class="black" style="background-color:black"></button>
         </div>
         <div class="pic-area"></div>
         <input type="text" name="" id="">
      </div>

   </div>
</template>

<script>

</script>

<style lang="scss" scoped>
@import '@/assets/css/utils/variables';
   .customize{
      width: 50%;
      background-color: map-get($color, accent);
   }
   .pannel{
      width: 50%;
      background-color: map-get($color, accent);
   }
</style>
