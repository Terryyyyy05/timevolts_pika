<template>
   <all-header />
   <innerpageHeader></innerpageHeader>
   <div class="container">
      <the-heading heading="票根製作" subheading="Customize Ticket"></the-heading>
      <div class="wrapper">
         <div class="customize-area">
            <div class="customize" :style="{backgroundColor:curColor}" id="customize">
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
                     <div id="picContainer">
                        <!-- <div class="ticket_drag" v-bind:class="{ticket_drag:isActive}"> -->
                        <div class="ticket_drag">
                           新增圖片
                           <!-- <img :src="pics.src" :class="img" v-show="isActive"> -->
                        </div>
                     </div>
                  </div>
                  <div class="ticket_input">
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
               <button id="appendBtn">新增圖片格</button>
            </div>
            <div class="picArea">
               <div class="picElement" v-for="pic in pics" :key="pic">
                  <img :src="pic.src">
               </div>
               
               <!-- <div class="picElement"><img src="@/assets/image/ticket/dinosaur.svg"></div>
               <div class="picElement"><img src="@/assets/image/ticket/dog.svg"></div>
               <div class="picElement"><img src="@/assets/image/ticket/face.svg"></div>
               <div class="picElement"><img src="@/assets/image/ticket/lighting.svg"></div>
               <div class="picElement"><img src="@/assets/image/ticket/panda.svg"></div>
               <div class="picElement"><img src="@/assets/image/ticket/pig.svg"></div>
               <div class="picElement"><img src="@/assets/image/ticket/snake.svg"></div>
               <div class="picElement"><img src="@/assets/image/ticket/snowflake.svg"></div>
               <div class="picElement"><img src="@/assets/image/ticket/star.svg"></div> -->

            </div>
            <div class="pannel-title">
               <h5>3. 輸入想要打的文字</h5>
            </div>
            <input type="text" id="textarea" v-model="message" maxlength="42px" placeholder="請輸入文字...">
         </div>
      </div>
         <div class="btn">
            <router-link to="/membercenter">
            <button class="btn-primary" @click="finish">完成客製</button>
            </router-link>
            <button class="btn-secondary" id="clearBtn">重新製作</button>
         </div>
      </div>
   </div>
   <all-footer />
</template>

<script type="module">
import { drag } from "@/components/ItineraryBooking/Customizetk.js";

// import * as htmlToImage from 'html-to-image';
// import { toBlob } from 'html-to-image';
export default {
   name: "Customizetk",
   components: {

   },
   data() {
      return {
         colors:['#521957','#4F4F4F','#07350E','#501010','#000000','#1B1D54'],
         curColor:'#1e1e1e',
         message:'',
         pics:[
            {src: require(`@/assets/image/ticket/dinosaur.svg`)},
            {src: require(`@/assets/image/ticket/dog.svg`)},
            {src: require(`@/assets/image/ticket/face.svg`)},
            {src: require(`@/assets/image/ticket/lighting.svg`)},
            {src: require(`@/assets/image/ticket/panda.svg`)},
            {src: require(`@/assets/image/ticket/pig.svg`)},
            {src: require(`@/assets/image/ticket/snake.svg`)},
            {src: require(`@/assets/image/ticket/snowflake.svg`)},
            {src: require(`@/assets/image/ticket/star.svg`)},
         ],
         // ticket_drag:{
         //    isActive:true,
         //    border: '2px dotted #fab042',
         //    position: 'absolute',
         //    width: '40px',
         //    minHeight: '40px',
         //    padding: '10px',
         //    top: '10px',
         //    right: '10px',
         //    fontSize: '15px',
         //    textAlign: 'center',
         // },
         // img:{
         //    isActive:true,
         //    width:'100%',
         // }
      }
   },
   mounted() {
      drag();
   },
   methods: {
      changeColor(color) {
         this.curColor = color
      },
      // finish() {
      //    htmlToImage.toBlob(document.getElementById('customize'))
      //       .then(function (blob) {
      //          if (window.saveAs) {
      //             window.saveAs(blob, 'customize.png');
      //          } else {
      //             FileSaver.saveAs(blob, 'customize.png');
      //          }
      //       });
      //    fetch(img.src)
      //       .then(res => res.blob())
      //       .then(blob => {
      //          const file = new File([blob], "capture.png", {
      //             type: 'image/png'
      //          });
      //          var fd = new FormData();
      //          fd.append("image", file);
      //          $.ajax({
      //             type: "POST",
      //             enctype: 'multipart/form-data',
      //             url: "/api/file/upload",
      //             data: fd,
      //             processData: false,
      //             contentType: false,
      //             cache: false,
      //             success: (data) => {
      //                alert("yes");
      //             },
      //             error: function (xhr, status, error) {
      //                alert(xhr.responseText);
      //             }
      //          });
      //       });
      // }
   },  
};


</script>

<style lang="scss">
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
            #picContainer{
               width: 60%;
               padding: 10px;
               border-left: 2px dotted map-get($color, accent);
               

            }
         }
         
         .ticket_input{
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
      .ticket_drag { 
         border: 2px dotted map-get($color, accent);
         position: absolute;
         width: 40px;
         min-height: 40px;
         padding: 10px;
         top: 10px;
         right: 10px;
         font-size: 15px;
         text-align: center;
         img {
               width: 100%;
               margin: auto;
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
      display: flex;
      h5 {
         color: map-get($color, accent);
      }
      #appendBtn{
         background-color: map-get($color, accent);
         margin-left: 100px;
         border: none;
         color: map-get($color, dark);
         cursor: pointer;
         padding: 5px;
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

   .picArea {
      width: 80%;
      height: 200px;
      margin: 20px 10px;
      border: 2px solid map-get($color, accent);
      display: flex;
      overflow-y: scroll;
      flex-wrap: wrap;
      .picElement{
         margin: 10px;
         padding: 5px 8px;
         height: 70px;
         width: 70px;
         display: flex;
         box-sizing: border-box;
         border: 1px dotted map-get($color, accent);
         img{
            height: 70%;
            margin: auto;
         }
      }
   }
   //捲軸寬度
::-webkit-scrollbar {
    width: 10px;
}

//捲軸底色
::-webkit-scrollbar-track {
    box-shadow: inset 0 0 3px grey;
    border-radius: 10px;
}

//捲軸本體顏色
::-webkit-scrollbar-thumb {
    background: map-get($color, accent);
    border-radius: 10px;
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
