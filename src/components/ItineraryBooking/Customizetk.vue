<template>
   <all-header />
   <innerpageHeader></innerpageHeader>
   <div class="container">
      <the-heading heading="票根製作" subheading="Customize Ticket"></the-heading>
      <div class="wrapper">
         <div class="customize-area">
            <div class="customize" :style="{backgroundColor:curColor}">
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
                     {{ message }}
                  </div>
               </div>
               <div class="ticket-dec">
                  <p>TimeVolts</p>
                  <img src="@/assets/image/logo.svg" alt="logo">
               </div>
            </div>
         
         <div class="pannel">
            <div class="pannel-title">
               <h5>1. 請選擇顏色</h5>
            </div>
            <div class="color">
               <button :style="{backgroundColor:color}" @click="changeColor(color)" v-for="(color,index) in colors" :key="index"></button>
            </div>
            <div class="pannel-title">
               <h5>2. 選擇想要放的圖片</h5>
            </div>
            <div class="pic-area"></div>
            <div class="pannel-title">
               <h5>3. 輸入想要打的文字</h5>
            </div>
            <input type="text" id="textarea" v-model="message" maxlength="42px" placeholder="請輸入文字...">
         </div>
      </div>
         <div class="btn">
            <button class="btn-primary">完成客製</button>
            <button class="btn-secondary">重新製作</button>
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
   data() {
      return {
         colors:['#521957','#4F4F4F','#07350E','#501010','#000000','#1B1D54'],
         curColor:'#1e1e1e',
         message:'',
      }
   },
   mounted() {

   },
   methods: {
      changeColor(color){
         this.curColor=color
      }
   },
};


</script>

<style lang="scss" scoped>
@import '@/assets/css/utils/variables';

.container {
   width: map-get($container, d);

}

.customize-area {
   display: flex;
   margin: 80px 10px auto;
}


   .customize{
      width: 55%;
      margin-top: 50px;
      margin-right: 70px;
      border-radius: 20px;
      display: flex;
      justify-content: space-between;
      height: fit-content;
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
            height: 100%;
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
            margin: auto;
            padding-left: 5px;
            padding-top: 5px;
            background-color: map-get($color, accent);
            border-radius: 0 0 12px 12px;
            font-size: 18px;
            
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
   margin: 0 0 60px 0;
   justify-content: center;
   .btn-primary,.btn-secondary{
      margin: 10px 20px;
   }
}
   

.pannel {
   width: 45%;

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

   #textarea {
      width: 80%;
      height: 30px;
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

@media screen and (max-width:768px) {
   .customize-area {
      flex-wrap:wrap ;
      width: 100%;
}
   .customize{
      width: 95%;
      margin-top: 0px;
      margin-right: 0px;
      .ticket{
         .ticket-container{
            .ticket-intro{
               font-size: 15px;
            }
            .ticket-drag{
               width: 60%;
               padding: 10px;
            }
         }
      }
      .ticket-dec{
         img{
            top: 125px;
            left: 7px;
         }
         p{
            font-size: 20px;
            top: 80px;
            left: 7px;
         }
      }
   }
.btn {
   .btn-primary,.btn-secondary{
      margin: 10px;
   }
}
.pannel {
   width: 95%;
   margin-top: 10px;

   .pannel-title {
      h5 {
         font-size: 17px;
         margin: 10px 0;
      }
   }
   .color {
      button {
         width: 40px;
         height: 40px;
         margin: 10px 10px;
      }
   }

   .pic-area {
      width: 95%;
   }

   #textarea {
      width: 95%;
   }
}
}
</style>
