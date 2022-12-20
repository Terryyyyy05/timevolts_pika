<template>
   <all-header />
   <innerpageHeader></innerpageHeader>
   <div class="container">
      <the-heading heading="票根製作" subheading="Customize Ticket"></the-heading>
      <div class="wrapper">
         <div class="customize-l">
            <div class="customize">
               <div class="ticket">
                  <div class="ticket-container">
                     <div class="ticket-intro">
                        <div class="ticket-no">
                           行程編號:
                        </div>
                        <div class="ticket-name">
                           姓名:
                        </div>
                        <div class="ticket-date">
                           穿越日
                        </div>
                     </div>
                     <div class="ticket-drag">
                        拖曳區塊
                     </div>
                  </div>
                  <div class="ticket-input">
                     打字區塊
                  </div>
         
               </div>
               <div class="ticket-dec">
                  <p>TimeVolts</p>
                  <img src="@/assets/image/logo.svg" alt="logo">
               </div>
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
   margin: 80px auto;
}

.customize-l {
   width: 50%;
   margin-right: 70px;
   .customize{
      border-radius: 20px;
      display: flex;
      justify-content: space-between;
      width: 100%;
      height: fit-content;
      background-color: map-get($color, dark);
      .ticket{
         width: 80%;
         height: 200px;
         margin: 10px;
         border: 2px solid map-get($color, accent);
         
         border-radius: 15px;
         color: #ffffff;
         position: relative;
         &::after{
            content: '';
            height: 200px;
            border-left: 2px dotted map-get($color, accent);
            position: absolute;
            right: -13px;
            top: 0;
         }
        
         .ticket-container{
            display: flex;
            height: 80%;
            
            .ticket-intro{
               width: 40%;
               padding: 10px;
               .ticket-no{

                  margin: 10px 0;
               }
               .ticket-name{
                  margin: 10px 0;
               }
               .ticket-date{

                  margin: 10px 0;
               }
            }
            .ticket-drag{
               width: 60%;
               padding: 10px;

            }
         }
         
         .ticket-input{
            height: 20%;
            width: 100%;
            margin: auto;
            background-color: map-get($color, accent);
            border-radius: 0 0 12px 12px;
            
         }
   
      }
      .ticket-dec{
         width: 15%;
         margin: 10px;
         border: 2px solid map-get($color, accent);
         border-radius: 15px;
         display: flex;
         flex-direction: column;

         img{
            width: 70%;
            transform: rotate(-90deg);
            position: relative;
            top: 110px;
            left: 15px;
         }
         p{
            font-size: 25px;
            font-weight: bold;
            color:  map-get($color, primary);
            transform: rotate(-90deg);
            position: relative;
            top: 60px;
            left: 10px;

         }
      }

   }
   .btn {
      display: flex;
   }
   
}
   

.pannel {
   width: 50%;

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
