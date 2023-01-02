<template>
   <base-dialog :show="!hasLoggedIn" title="登入訊息" @close="askForLogin">
      <p>請先登入!</p>
   </base-dialog>
   <cart
      :cartStatus="cartStatus"
      @xmark="() => (cartStatus = false)"
      @goCheckOut="goCheckOut"
   />
   <header>
      <div class="icon-container">
         <span class="mem_name" v-if="userId">Hi, {{ mem_name }}</span>
         <div style="cursor: pointer" @click="clickMemberIcon">
            <img src="../../public/Group604.png" alt="" />
         </div>
         <div @click="toggleCart" style="cursor: pointer">
            <img src="../../public/Group605.png" alt="" />
         </div>
      </div>

      <div class="nav">
         <div @click="shownav" class="hbicon">
            <img src="../../public/Group603.png" alt="寶貝球" />
         </div>
         <div class="vertical-nav" v-if="show">
            <div
               v-for="(item, index) in pageName"
               :key="index"
               class="link-container"
            >
               <div class="bar"></div>
               <router-link
                  @mouseover="changeColor"
                  @mouseleave="changeBack"
                  :to="item.router"
                  :data-item="index"
               >
                  <p class="glitched">{{ item.ch }}</p>
               </router-link>
            </div>
            <div @click="showChatbox" class="chatbox-icon">
               <img src="../../public/chatbot-icon.gif" alt="時空管理局" />
            </div>
            <GetVoucher />
         </div>
      </div>
   </header>
   <div v-if="openRobot">
      <Chatbox @closeThisBox="closeTheBox" />
   </div>
   <member-login v-if="loginboxIsActive"></member-login>
</template>
<script>
// import $ from "jquery";
import Cart from "@/components/Cart.vue";
import Chatbox from "@/components/Chatbox.vue";
import GetVoucher from "@/components/voucher/GetVoucher.vue";
import { BASE_URL } from "@/assets/js/commom.js";
export default {
   name: "all-header",
   components: {
      Cart,
      Chatbox,
      GetVoucher,
   },
   data() {
      return {
         pageName: [
            {
               router: "/news",
               ch: "最新消息",
               en: "NEWS",
            },
            {
               router: "/itinerary",
               ch: "時光行程",
               en: "ITINERARY",
            },
            {
               router: "/history",
               ch: "歷史故事",
               en: "HISTORY",
            },
            {
               router: "/product",
               ch: "購物商城",
               en: "PRODUCTS",
            },
            {
               router: "/about",
               ch: "關於我們",
               en: "ABOUT US",
            },
         ],
         cartStatus: false,
         show: false,
         openRobot: false,
         mem_name: "",
         userId: null,
         hasLoggedIn: true,
         memberStatus: null,
      };
   },
   created() {
      this.getData();
      this.sayHi();
   },
   methods: {
      async getData() {
         await this.$store.dispatch("getUserId");
         this.userId = this.$store.getters["userId"];

         if (this.userId) {
            fetch(`${BASE_URL}getMemberInfo.php`, {
               method: "POST",
               body: JSON.stringify({
                  userId: this.userId,
               }),
            })
               .then((res) => res.json())
               .then((json) => {
                  this.mem_name = json[0].mem_name;
               });
         }
      },
      changeColor(e) {
         e.target.style.transition = "all .3s";
         e.target.style.backgroundColor = "#ffe1b5";
         // e.target.style.color = "#1e1e1e";
         if (!e.target.childNodes[0]) return;
         e.target.childNodes[0].innerText =
            this.pageName[e.target.dataset.item]?.en;
         if (!e.target.childNodes[0].style) return;
         e.target.childNodes[0].style.color = "#1e1e1e";
         e.target.childNodes[0].style.backgroundColor = "transparent";
         e.target.childNodes[0].style.transition = "all .05s";
      },
      changeBack(e) {
         e.target.style.transition = "all .3s";
         // e.target.style.color = "#ffe1b5";
         e.target.style.backgroundColor = "transparent";
         e.target.style.backdropFilter = "blur(5px)";
         if (!e.target.childNodes[0]) return;
         e.target.childNodes[0].innerText =
            this.pageName[e.target.dataset.item]?.ch;
         if (!e.target.childNodes[0].style) return;
         e.target.childNodes[0].style.color = "#ffe1b5";
         e.target.childNodes[0].style.backgroundColor = "transparent";
         e.target.childNodes[0].style.transition = "all 0s";
      },
      toggleCart() {
         this.cartStatus = !this.cartStatus;
      },
      shownav() {
         this.show = !this.show;
      },
      showChatbox() {
         this.openRobot = !this.openRobot;
      },
      closeTheBox() {
         this.openRobot = false;
      },
      async clickMemberIcon() {
         await this.$store.dispatch("getUserId");
         this.userId = this.$store.getters["userId"];
         this.memberStatus = this.$store.getters["memberStatus"];
         // console.log(this.userId);
         if (!this.userId) {
            // 找不到會員
            this.hasLoggedIn = false;
         } else if (this.memberStatus === 0) {
            this.$router.push({ path: "/memberLightBox" });
         } else {
            // 會員有登入
            this.$router.push({ path: "/memberCenter" });
         }
      },
      async sayHi() {
         await this.$store.dispatch("getUserId");
         this.userId = this.$store.getters["userId"];
         // console.log(this.userId);
      },
      askForLogin() {
         if (this.$route.path !== "/memberLightBox") {
            this.$router.push({ path: "/memberLightBox" });
         } else {
            this.hasLoggedIn = true;
         }
      },
      // gg
      async goCheckOut() {
         this.cartStatus = !this.cartStatus;
         await this.$store.dispatch("getUserId");
         this.userId = this.$store.getters["userId"];
         // console.log(this.userId);
         if (!this.userId) {
            // 找不到會員
            this.hasLoggedIn = false;
         } else {
            // 會員有登入
            this.$router.push({ path: "/ProductCheckOut" });
         }
      },
   },
};
</script>

<style scoped lang="scss">
header {
   display: flex;
   position: fixed;
   top: 2%;
   right: 2%;
   z-index: 101;
   pointer-events: none;
   .icon-container {
      display: flex;
      height: fit-content;
      margin-top: calc((55px - 15px) / 2);
      pointer-events: none;
      .mem_name {
         font-size: 12px;
         color: #ffe1b5;
         vertical-align: baseline;
         margin: 0 auto;
         margin-right: 2px;
         // padding: 5px 2px;
         text-align: center;
         line-height: 1.3;
      }
      div {
         width: 15px;
         height: 15px;
         margin-right: 10px;
         pointer-events: auto;
         img {
            width: 100%;
            height: 100%;
         }
      }
   }
   div.nav {
      pointer-events: none;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .hbicon {
         pointer-events: auto;
         cursor: pointer;
         height: 55px;
         width: 55px;
         animation: rotate 1.5s infinite;
         img {
            width: 100%;
            height: 100%;
            pointer-events: auto;
         }
      }
      .vertical-nav {
         pointer-events: auto;
         .link-container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            a {
               font-size: 12px;
               font-weight: bold;
               height: 54px;
               width: 54px;
               text-decoration: none;
               color: #ffe1b5;
               backdrop-filter: blur(5px);
               border: 2px solid #ffe1b5;
               border-radius: 50%;
               display: flex;
               justify-content: center;
               align-items: center;
            }
            div.bar {
               height: 3px;
               width: 1.5px;
               background-color: #ffe1b5;
               position: relative;
               margin: 0 20px;
               color: #ffe1b5;
            }
         }
      }
   }
   .chatbox-icon {
      position: relative;
      left: 7px;
      img {
         width: 45px;
         height: 45px;
         cursor: pointer;
      }
   }

   @keyframes rotate {
      0% {
         rotate: (0deg);
      }
      5% {
         rotate: (18deg);
      }
      10% {
         rotate: (36deg);
      }
      15% {
         rotate: (54deg);
      }
      20% {
         rotate: (72deg);
      }
      25% {
         rotate: (90deg);
      }
      30% {
         rotate: (108deg);
      }
      35% {
         rotate: (126deg);
      }
      40% {
         rotate: (144deg);
      }
      45% {
         rotate: (162deg);
      }
      50% {
         rotate: (180deg);
      }
      55% {
         rotate: (198deg);
      }
      60% {
         rotate: (216deg);
      }
      65% {
         rotate: (234deg);
      }
      70% {
         rotate: (252deg);
      }
      75% {
         rotate: (270deg);
      }
      80% {
         rotate: (288deg);
      }
      85% {
         rotate: (306deg);
      }
      90% {
         rotate: (324deg);
      }
      95% {
         rotate: (342deg);
      }
      100% {
         rotate: (360deg);
      }
   }
}

@media screen and (min-width: 768px) {
   header {
      .icon-container {
         margin-top: calc((85px - 30px) / 2);
         div {
            width: 30px;
            height: 30px;
            margin-right: 20px;
            img {
               width: 100%;
               height: 100%;
            }
         }
         .mem_name {
            font-size: 16px;
            padding: 5px 2px;
         }
      }

      div.nav {
         .hbicon {
            height: 85px;
            width: 85px;
         }
         .vertical-nav {
            .link-container {
               a {
                  height: 80px;
                  width: 80px;
               }
               div.bar {
                  height: 10px;
                  width: 3px;
                  margin: 0 40px;
               }
            }
         }
      }
      .chatbox-icon {
         position: relative;
         left: 15px;
         img {
            width: 60px;
            height: 60px;
            cursor: pointer;
         }
      }
   }
}
.glitched {
   animation-name: glitched;
   animation-duration: calc(0.9s * 1.4);
   animation-iteration-count: infinite;
   animation-timing-function: linear;
}
@keyframes glitched {
   0% {
      left: -4px;
      transform: skew(-20deg);
   }

   11% {
      left: 2px;
      transform: skew(0deg);
   }

   50% {
      transform: skew(0deg);
   }

   51% {
      transform: skew(10deg);
   }

   60% {
      transform: skew(0deg);
   }

   100% {
      transform: skew(0deg);
   }
}
</style>
