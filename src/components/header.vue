<template>
  <cart :cartStatus="cartStatus" @xmark="() => (cartStatus = false)" />
<<<<<<< HEAD
  <div class="test" :class="{ test2: openRobot }">
    <header>
      <div v-if="show" class="icon-container">
        <div>
          <router-link to="/member"
            ><img src="../../public/Group604.png" alt=""
          /></router-link>
        </div>
        <div @click="toggleCart"><img src="../../public/Group605.png" alt="" /></div>
=======
  <header>
    <div v-if="show" class="icon-container">
      <div>
        <router-link to="/member"
          ><img src="Group604.png" alt=""
        /></router-link>
>>>>>>> dev_vito
      </div>
      <div @click="toggleCart"><img src="Group605.png" alt="" /></div>
    </div>

<<<<<<< HEAD
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
            <img src="../../public/Group243.png" alt="時空管理局" />
          </div>
          <div v-if="openRobot" class="chatbox full-screen">
            <div class="chatbox-container">
              <div class="chatbox-upper">
                <div class="upper-img-title">
                  <img src="../assets/image/chatbox.png" alt="chatbox" />
                  <div class="upper-title">
                    <p>時空管理局</p>
                  </div>
                </div>
                <div class="upper-x">
                  <font-awesome-icon
                    @click="showChatbox"
                    icon="fa-solid fa-xmark"
                    color="#FFE1B5"
                    cursor="pointer"
                    size="2x"
                  />
                </div>
              </div>
              <div class="chatbox-lower">
                <div class="lower-box">
                  <div class="lower-img">
                    <img src="../assets/image/chatbox.png" alt="chatbox" />
                  </div>
                  <div class="lower-content">
                    <p>您好，這裡是時空管理局</p>
                    <p>若有任何問題，歡迎隨時與我聯繫</p>
                    <p>聯絡電話&#58;0800&#45;449&#45;449</p>
                    <p>營業時間&#58;AM 1&#58;00&#126;5&#58;00</p>
                  </div>
                </div>
                <div class="lower-box">
                  <div class="lower-img">
                    <img src="../assets/image/chatbox.png" alt="chatbox" />
                  </div>
                  <div class="lower-content">
                    <p>你想要知道什麼呢&#63;</p>
                    <p class="lower-content-rules">旅行規範</p>
                    <p class="lower-content-rules">FAQ</p>
                  </div>
                </div>
              </div>
              <div class="input-submit">
                <input type="text" placeholder="請輸入關鍵字" />
                <button type="submit">送出</button>
              </div>
            </div>
          </div>
=======
    <div class="nav">
      <div @click="shownav" class="hbicon">
        <img src="Group603.png" alt="寶貝球" />
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
          <img src="Group243.png" alt="時空管理局" />
>>>>>>> dev_vito
        </div>
      </div>
    </div>
  </header>
  <div v-if="openRobot">
    <Chatbox @closeThisBox="closeTheBox" />
  </div>
</template>
<script>
import Cart from "@/components/Cart.vue";
import Chatbox from "./Chatbox.vue";

export default {
  name: "all-header",
  components: {
    Cart,
    Chatbox,
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
      cartStatus: true,
      show: false,
      openRobot: false,
    };
  },
  methods: {
    changeColor(e) {
      e.target.style.transition = "all .3s";
      e.target.style.backgroundColor = "#ffe1b5";
      e.target.style.color = "#1e1e1e";

      e.target.innerText = this.pageName[e.target.dataset.item].en;
    },
    changeBack(e) {
      e.target.style.transition = "all .3s";
      e.target.style.color = "#ffe1b5";
      e.target.style.backgroundColor = "transparent";
      e.target.style.backdropFilter = "blur(5px)";
      e.target.innerText = this.pageName[e.target.dataset.item].ch;
    },
    toggleCart() {
      return (this.cartStatus = !this.cartStatus);
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
  },
};
</script>

<style scoped lang="scss">
<<<<<<< HEAD
// .test {
//   width: 100%;
//   height: 100vh;
//   position: fixed;
//   background: transparent;
//   z-index: 100000;
// }
.test2 {
  width: 100%;
  height: 100vh;
  position: fixed;
  background: rgba(0, 0, 0, 0.9);
  z-index: 100000;
}
=======
>>>>>>> dev_vito
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
          font-size: 14px;
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
