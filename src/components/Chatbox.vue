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
        <div id="content" class="content">
          <div v-for="(item, index) in info" :key="index">
            <div class="info_r info_default" v-if="item.type == 'leftinfo'">
              <span class="circle circle_r lower-img"
                ><img src="../assets/image/chatbox.png" alt="chatbox"
              /></span>
              <div class="con_r con_text">
                <div class="lower-content">{{ item.content }}</div>
                <div v-for="(item2, index) in item.question" :key="index">
                  <div
                    class="con_que"
                    @click="clickRobot(item2.content, item2.id)"
                    v-if="item2.status"
                  >
                    <div class="czkj-question-msg">
                      {{ item2.index }}
                      {{ item2.content }}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="info_l" v-if="item.type == 'rightinfo'">
              <div class="con_text">
                <span class="con_l">{{ item.content }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="input-submit">
        <textarea
          placeholder="請輸入關鍵字"
          required
          v-model="customerText"
          @keyup.enter="sentMsg()"
        ></textarea>
        <button type="submit" @click="sentMsg()">送出</button>
      </div>
    </div>
  </div>
</template>

<script>
import { BASE_URL } from "@/assets/js/commom.js";
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
      timer: null,
      /* robotQuestion: [
        { id: 1, content: "時間管理局是一個什麼樣的組織？", index: 1 },
        { id: 2, content: "付款後是否可以取消訂單？", index: 2 },
        { id: 3, content: "商品配送時間多久？", index: 3 },
      ], */
      robotQuestion: [],
      /* robotAnswer: [
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
      ], */
      robotAnswer: [],
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
          name: "robot",
          content: answerText,
          question: [],
        };
        this.info.push(obj);
      } else {
        answerText = "您可能想問: ";
        let obj = {
          type: "leftinfo",
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
        name: "robot",
        content: robotById[0].content,
        question: [],
      };
      let obj_r = {
        type: "rightinfo",
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
  created() {
    // fetch(`/api_server/get_Question.php`)
    fetch(`${BASE_URL}get_Question.php`)
      .then((res) => res.json())
      .then((json) => {
        (this.robotQuestion = json.map((item) => {
          return {
            id: item.qa_id,
            content: item.qa_title,
            index: item.qa_id,
            status: item.qa_status,
          };
        })),
          (this.robotAnswer = json.map((item) => {
            return {
              id: item.qa_id,
              content: item.qa_answer,
              index: item.qa_id,
              status: item.qa_status,
            };
          }));
      });
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
  z-index: 102;
  background: rgba(0, 0, 0, 0.8);
}
.chatbox-container {
  color: #fff;
  position: fixed;
  top: 50%;
  left: 50%;
  width: 45%;
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
        font-size: 1.8rem;
        margin-left: 15px;
        white-space: nowrap;
      }
    }
  }
  .content {
    overflow-y: scroll;
    width: 100%;
    height: 50vh;
    .lower-img {
      display: block;
      background-color: #545454;
      border-radius: 50%;
      width: 55px;
      height: 55px;
      margin: 10px;
    }
    .info_r {
      display: flex;
      margin: 20px 10px;
      align-items: center;
    }
    .con_r {
      background-color: #545454;
      border-radius: 10px;
      padding: 10px;
      width: 50%;
      line-height: 25px;
    }
    .info_l {
      text-align: right;
      .con_l {
        display: inline-block;
        width: 20%;
        min-height: 45px;
        border-radius: 10px;
        background-color: #545454;
        margin-right: 10px;
        text-align: left;
        padding: 10px;
        line-height: 25px;
      }
    }
    .lower-content {
      background-color: #545454;
      border-radius: 10px;
      width: 70%;
      border-radius: 10px;
      padding: 10px;
      line-height: 1.8;
      p {
        margin: 10px;
        line-height: 25px;
      }
    }
    .con_que {
      height: 30px;
      line-height: 30px;
      cursor: pointer;
    }
    .czkj-question-msg {
      float: left;
      color: #ffe1b5;
      font-weight: bold;
    }
  }
  .input-submit {
    display: flex;
    justify-content: space-between;
    align-items: center;
    textarea {
      padding: 5px 10px;
      border-radius: 15px;
      margin: 10px;
      background-color: #545454;
      width: 100%;
      font-size: 1rem;
      color: #fff;
      outline: none;
      resize: none;
      box-sizing: border-box;
      box-shadow: 0.1rem 0.1rem 0px #ffe1b5;
      border-color: #ccc;
    }
    ::placeholder {
      color: #fff;
    }
    button {
      color: #fff;
      background-color: #545454;
      border-radius: 15px;
      padding: 5px 10px;
      cursor: pointer;
      width: 15%;
      font-size: 1rem;
      margin-right: 10px;
      white-space: nowrap;
      border-color: #ccc;
      box-shadow: 0.1rem 0.1rem 0px #ffe1b5;
    }
  }
}

// chat bot

::-webkit-scrollbar {
  width: 1.2rem;
}
::-webkit-scrollbar-track {
  background: hsl(36, 100%, 85%);
  border-radius: 100vw;
  margin-block: 0.5em;
}
::-webkit-scrollbar-thumb {
  background: hsl(36, 100%, 55%);
  border: 0.25em solid hsl(36, 100%, 85%);
  border-radius: 100vw;
}
::-webkit-scrollbar-thumb:hover {
  background: hsl(36, 100%, 35%);
}
@supports (scrollbar-color: red blue) {
  * {
    scrollbar-color: hsl(36, 100%, 55%) hsl(36, 100%, 85%);
    scrollbar-width: auto;
  }
} // support firefox

// scrollbar

@media screen and (max-width: 768px) {
  .chatbox {
    .chatbox-container {
      width: 90%;
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
        font-size: 0.9rem;
        .lower-img {
          width: 40px;
          height: 40px;
          margin: 10px;
          img {
            width: 40px;
            height: 40px;
          }
        }
      }
      .input-submit {
        textarea {
          width: 70%;
          font-size: 0.9rem;
        }
        button {
          width: 20%;
          font-size: 0.9rem;
        }
      }
    }
  }
  // chat bot

  ::-webkit-scrollbar {
    width: 1rem;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: initial;
  }
  // scrollbar
}
</style>
