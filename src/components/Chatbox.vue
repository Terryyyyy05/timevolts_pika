<template>
  <div class="chatbox">
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
            icon="fa-solid fa-xmark"
            color="#FFE1B5"
            cursor="pointer"
            size="2x"
            @click="$emit('closeThisBox')"
          />
        </div>
      </div>
      <div class="chatbox-lower">
        <div class="lower-box">
          <div class="lower-img">
            <img src="../assets/image/chatbox.png" alt="chatbox" />
          </div>
          <div class="lower-content-one">
            <p>
              您好，這裡是時空管理局<br />
              若有任何問題&#44;歡迎隨時與我聯繫<br />
              聯絡電話&#58;0800&#45;449&#45;449<br />
              營業時間&#58;AM 1&#58;00&#126;5&#58;00<br />
            </p>
          </div>
        </div>
        <div class="lower-box">
          <div class="lower-img">
            <img src="../assets/image/chatbox.png" alt="chatbox" />
          </div>
          <div class="lower-content-two">
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
</template>

<script>
export default {
  name: "Chatbox",
  emits: ["closeThisBox"],
  data() {
    return {
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

<style lang="scss" scoped>
.chatbox {
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  position: fixed;
  z-index: 100;
  background: rgba(0, 0, 0, 0.9);
}
.chatbox-container {
  color: #fff;
  position: fixed;
  top: 50%;
  left: 50%;
  width: 50%;
  transform: translate(-50%, -50%);
  border: 2.5px solid #ffe1b5;
  border-radius: 30px 30px 0 0;
  z-index: 100;
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
    .lower-content-one {
      background-color: #545454;
      border-radius: 10px;
      p {
        margin: 10px;
        line-height: 25px;
      }
    }
    .lower-content-two {
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
      width: 50%;
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
@media screen and (max-width: 768px) {
  .chatbox {
    .chatbox-container {
      width: 70%;
      .chatbox-upper {
        .upper-img-title {
          width: 60px;
          height: 60px;
          img {
            width: 60px;
            height: 60px;
          }
          p {
            font-size: 1.4rem;
          }
        }
      }
      .chatbox-lower {
        .lower-img {
          width: 40px;
          height: 40px;
          margin: 5px;
          img {
            width: 40px;
            height: 40px;
          }
        }
      }
      .input-submit {
        input {
          width: 70%;
        }
        button {
          white-space: nowrap;
        }
      }
    }
  }
}
</style>
