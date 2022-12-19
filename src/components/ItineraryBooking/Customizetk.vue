<template>
   <all-header />
   <innerpageHeader></innerpageHeader>
   <div class="container">
      <the-heading heading="票根製作" subheading="Customize Ticket"></the-heading>
      <div class="wrapper">
         <div class="customize">
            <div class="ticket">
               <img src="@/assets/image/ticket.png">
            </div>
            <div class="btn">
               <button class="btn-primary">完成客製</button>
               <button class="btn-secondary">放棄修改</button>
            </div>
         </div>
         <div class="pannel">
            <div class="pannel-title">
               <h5>1. 請選擇顏色</h5>
            </div>
            <div class="color">
               <button class="pink" style="background-color:pink"></button>
               <button class="white" style="background-color:white"></button>
               <button class="blue" style="background-color:navy"></button>
               <button class="yellow" style="background-color:goldenrod"></button>
               <button class="green" style="background-color:seagreen"></button>
               <button class="grey" style="background-color:grey"></button>
            </div>
            <div class="pannel-title">
               <h5>2. 選擇想要放的圖片</h5>
            </div>
            <div class="pic-area"></div>
            <div class="pannel-title">
               <h5>3. 輸入想要打的文字</h5>
            </div>
            <input type="text" name="" id="" placeholder="請輸入文字...">
         </div>
      </div>
   </div>
   <all-footer />
</template>

<script type="module">

export default {
   name: "Customizetk",
   components: {

   },
   mounted() {

   },
   methods: {

   },
};


</script>

<style lang="scss" scoped>
@import '@/assets/css/utils/variables';

.container {
   width: map-get($container, d);

}

.wrapper {
   display: flex;
   margin: 50px auto;
}

.customize {
   width: 50%;

   .ticket {
      img {
         width: 100%;
      }
   }

   .btn {
      display: flex;
      justify-content: center;
   }
}

.pannel {
   width: 50%;
   margin-top: 50px;

   .pannel-title {
      h5 {
         color: map-get($color, accent);
      }
   }

   .color {
      button {
         width: 40px;
         height: 40px;
         border-radius: 50%;
         cursor: pointer;
         margin: 20px 10px;
         border: none;

         &:focus,
         &:hover {
            outline: 3px solid map-get($color, accent);
         }
      }

   }

   .pic-area {
      width: 80%;
      height: 100px;
      margin: 20px 10px;
      border: 2px solid map-get($color, accent);
   }

   input {
      width: 200px;
      height: 20px;
      font-size: 18px;
      margin: 20px 10px;
      border: 2px solid map-get($color, accent);
      background: none;
      color: map-get($color, accent);

      &:focus {
         outline: none;
      }
   }
}

@media screen and (max-width:768px) {}
</style>
