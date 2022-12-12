<template>
  <cart :cartStatus="cartStatus" @xmark="() => (cartStatus = false)" />
  <div class="test" :class="{ test2: openRobot }">
    <header>
      <div v-if="show" class="icon-container">
        <div>
          <router-link to="/member"
            ><img src="../../public/Group604.png" alt=""
          /></router-link>
        </div>
        <div @click="toggleCart"><img src="../../public/Group605.png" alt="" /></div>
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
        </div>
      </div>
    </header>
  </div>
</template>
<script>
import Cart from "@/components/Cart.vue";

export default {
  name: "all-header",
  components: {
    Cart,
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
      customerText: "",
      info: [
        {
          type: "leftinfo",
          name: "robot",
          content: "您好，這裡是時空管理局，有什麼需要為您協助的嗎?",
          question: [],
        },
      ],
      robotQuestion: [
        { id: 1, content: "時間管理局是一個什麼樣的組織", index: 1 },
        { id: 2, content: "付款後是否可以取消訂單？", index: 2 },
        { id: 3, content: "商品配送時間多久", index: 3 },
      ],
      robotAnswer: [
        {
          id: 1,
          content:
            "時間管理局是一個為了維持時間線正常運行的組織，其主要成員都是研究時空穿越的頂尖科學家。",
          index: 1,
        },
        {
          id: 2,
          content: "若有不可抗力之因素需取消訂單，請洽詢客服。",
          index: 2,
        },
        {
          id: 3,
          content: "我們合作的時光宅急便，配送時間為工作天一到三天。",
          index: 3,
        },
      ],
    };
  },
  methods: {
    changeColor(e) {
      e.target.style.transition = "all .3s";
      e.target.style.backgroundColor = "#ffe1b5";
      // e.target.style.color = "#1e1e1e";
      e.target.childNodes[0].innerText = this.pageName[e.target.dataset.item].en;
      e.target.childNodes[0].style.color = "#1e1e1e";
      e.target.childNodes[0].style.backgroundColor = "transparent";
       e.target.childNodes[0].style.transition = "all .05s";
    },
    changeBack(e) {
      e.target.style.transition = "all .3s";
      // e.target.style.color = "#ffe1b5";
      e.target.style.backgroundColor = "transparent";
      e.target.style.backdropFilter = "blur(5px)";
      e.target.childNodes[0].innerText = this.pageName[e.target.dataset.item].ch;
      e.target.childNodes[0].style.color = "#ffe1b5";
      e.target.childNodes[0].style.backgroundColor = "transparent";
      e.target.childNodes[0].style.transition = "all 0s";
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
    // 用戶發送訊息
    sentMsg() {
      clearTimeout(this.timer);
      this.showTimer();
      let text = this.customerText.trim();
      if (text != "") {
        var obj = {
          type: "rightinfo",
          time: this.getTodayTime(),
          content: text,
        };
        this.info.push(obj);
        this.appendRobotMsg(this.customerText);
        this.customerText = "";
        this.$nextTick(() => {
          var contentHeight = document.getElementById("content");
          contentHeight.scrollTop = contentHeight.scrollHeight;
        });
      }
    },
    // 機器人回答消息
    appendRobotMsg(text) {
      clearTimeout(this.timer);
      this.showTimer();
      text = text.trim();
      let answerText = "";
      let flag;
      for (let i = 0; i < this.robotAnswer.length; i++) {
        if (this.robotAnswer[i].content.indexOf(text) != -1) {
          flag = true;
          answerText = this.robotAnswer[i].content;
          break;
        }
      }
      if (flag) {
        let obj = {
          type: "leftinfo",
          time: this.getTodayTime(),
          name: "robot",
          content: answerText,
          question: [],
        };
        this.info.push(obj);
      } else {
        answerText = "您可能想問: ";
        let obj = {
          type: "leftinfo",
          time: this.getTodayTime(),
          name: "robot",
          content: answerText,
          question: this.robotQuestion,
        };
        this.info.push(obj);
      }
      this.$nextTick(() => {
        var contentHeight = document.getElementById("content");
        contentHeight.scrollTop = contentHeight.scrollHeight;
      });
    },
    sentMsgById(val, id) {
      clearTimeout(this.timer);
      this.showTimer();

      let robotById = this.robotAnswer.filter((item) => {
        return item.id == id;
      });
      let obj_l = {
        type: "leftinfo",
        time: this.getTodayTime(),
        name: "robot",
        content: robotById[0].content,
        question: [],
      };
      let obj_r = {
        type: "rightinfo",
        time: this.getTodayTime(),
        name: "robot",
        content: val,
        question: [],
      };
      this.info.push(obj_r);
      this.info.push(obj_l);
      this.$nextTick(() => {
        var contentHeight = document.getElementById("content");
        contentHeight.scrollTop = contentHeight.scrollHeight;
      });
    },
    // 點擊機器人的單個問題
    clickRobot(val, id) {
      this.sentMsgById(val, id);
    },
    // 結束語
    endMsg() {
      let happyEnding = {
        type: "leftinfo",
        time: this.getTodayTime(),
        content: "很高興為您服務，期待下次見",
        question: [],
      };
      this.info.push(happyEnding);
      this.$nextTick(() => {
        var contentHeight = document.getElementById("content");
        contentHeight.scrollTop = contentHeight.scrollHeight;
      });
    },
    showTimer() {
      this.timer = setTimeout(this.endMsg, 1000 * 20);
    },
  },
};
</script>

<style scoped lang="scss">
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

  .chatbox {
    color: #fff;
    position: fixed;
    top: 50%;
    left: 50%;
    width: 60%;
    height: 60%;
    transform: translate(-50%, -50%);
    border: 2.5px solid #ffe1b5;
    border-radius: 30px 30px 0 0;
    z-index: 100000;
    img {
      width: 55px;
      height: 55px;
    }
    .chatbox-upper {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 2px solid #ffe1b5;
      width: 90%;
      position: relative;
      left: 5%;
      .upper-img-title {
        background-color: #464646;
        border-radius: 50%;
        width: 80px;
        height: 80px;
        margin: 10px;
        display: flex;
        align-items: center;
        img {
          width: 80px;
          height: 80px;
        }
        p {
          color: #fab042;
          font-size: 2rem;
          margin-left: 10px;
          white-space: nowrap;
        }
      }
    }
    .chatbox-lower {
      .lower-img {
        background-color: #464646;
        border-radius: 50%;
        width: 55px;
        height: 55px;
        margin: 10px;
      }
      .lower-box {
        display: flex;
        margin: 40px 0;
      }
      .lower-content {
        background-color: #545454;
        border-radius: 10px;
        p {
          margin: 10px;
        }
        .lower-content-rules {
          color: #000;
          background-color: #d9d9d9;
          border-radius: 10px;
          padding: 5px;
          display: flex;
          justify-content: center;
        }
      }
    }
    .input-submit {
      display: flex;
      justify-content: space-between;
      align-items: center;
      input {
        padding: 5px 10px;
        border-radius: 15px;
        margin: 10px;
        background-color: #545454;
        border: initial;
        width: 80%;
        font-size: 1rem;
        color: #fff;
      }
      input:focus {
        color: #fff;
      }
      ::placeholder {
        color: #fff;
      }
      button {
        color: #fff;
        background-color: #545454;
        border-radius: 15px;
        padding: 5px 10px;
        border: initial;
        cursor: pointer;
        width: 20%;
        font-size: 1rem;
        margin-right: 10px;
      }
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
    .chatbox {
      width: 40%;
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
