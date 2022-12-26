<template>
  <div class="vl-parent" id="loading-background">
    <loading
      v-model:active="isLoading"
      :can-cancel="true"
      :is-full-page="false"
    >
      <div class="loadingContainer">
        <div class="loadingBackground"></div>
        <img
          class="loadingSvg"
          src="@/assets/image/home/loading.svg"
          alt="時光穿梭"
        />
        <p class="loadingText">
          loading
          <span>.</span>
          <span>.</span>
          <span>.</span>
        </p>
      </div>
    </loading>
  </div>
  <!-- <button @click.prevent="doAjax" id="fetch">前導頁預覽</button> -->
  <all-header />
  <!-- <div id="mouse"></div> -->

  <div class="home">
    <div class="introduce_block">
      <div class="sideTotem">
        <img src="@/assets/image/home/sideTotem.svg" alt="時萬伏特-文字圖樣" />
      </div>
      <div class="title bg_dark_75">
        <h1>
          TimeVolts
          <span>時萬伏特</span>
        </h1>
      </div>
      <div class="text bg_dark_75 p_md">
        <p>
          Last login: {{ nowTime.data }}<br />
          Restored session:<br />
          TimeVolts ~ %<br />
          .<br />
          .<br />
          .<br />
          .<br />
          .<br />
        </p>
        <p>
          歡迎來到時萬伏特<br />
          我們開發了全新的時光機器<br />
          誠摯的邀請您來場奇幻的時光之旅<br />
          <span>探索歷史的全新可能... </span>
        </p>
      </div>
      <div class="slogan">
        <strong>現在，我們實現了時光旅行</strong>
        <img src="@/assets/image/home/bitLightning.svg" alt="閃電圖樣" />
      </div>
      <div class="pic">
        <img
          class="TimeMachine"
          src="@/assets/image/home/Time_Machine.png"
          alt="時光機圖樣"
        />
      </div>
    </div>
    <div class="itinerary_block">
      <div class="title">
        <h2>
          時光行程
          <span>Itinerary</span>
        </h2>
        <HomeItinerary />
        <router-link class="link" to="/itinerary">更多時光行程</router-link>
      </div>
    </div>
    <div class="historcal-news">
      <div class="historcal_block">
        <div class="title">
          <h2>
            歷史故事
            <span>Historcal</span>
          </h2>
          <HomeHistorcal />
          <router-link class="historyLink" to="/history"
            >更多歷史故事</router-link
          >
        </div>
      </div>

      <div class="new_block">
        <div class="title">
          <h2>
            最新消息
            <span>News</span>
          </h2>
          <HomeNews />
          <router-link class="link" to="/news">更多最新消息</router-link>
        </div>
      </div>
    </div>
  </div>
  <all-footer />
</template>

<script>
// @ is an alias to /src

import { gsap } from "gsap";
import "vue-loading-overlay/dist/css/index.css";
import Loading from "vue-loading-overlay";
import HomeItinerary from "../../components/home/HomeItinerary.vue";
import HomeHistorcal from "../../components/home/HomeHistorcal.vue";
import HomeNews from "../../components/home/HomeNews.vue";
import { reactive, ref } from "vue";

export default {
  name: "HomeView",
  data() {
    return {
      isLoading: false,
      fullPage: true,
      result: {}, //存資料
      nowTime: [{ data: "" }],
      c: true,
    };
  },
  components: {
    HomeItinerary,
    HomeHistorcal,
    HomeNews,
    Loading,
  },
  setup() {
    //取得時間
    let nowTime = reactive({
      data: "",
    });
    let timeDate = new Date();
    function setTime(timeDate) {
      let year = timeDate.getFullYear();
      let month =
        timeDate.getMonth() + 1 < 10
          ? "0" + (timeDate.getMonth() + 1)
          : timeDate.getMonth() + 1;
      let date =
        timeDate.getDate() < 10 ? "0" + timeDate.getDate() : timeDate.getDate();
      let h = timeDate.getHours();
      let m =
        timeDate.getMinutes() < 10
          ? "0" + timeDate.getMinutes()
          : timeDate.getMinutes();
      let s =
        timeDate.getSeconds() < 10
          ? "0" + timeDate.getSeconds()
          : timeDate.getSeconds();
      let day = year + "-" + month + "-" + date;
      let time = h + ":" + m + ":" + s;

      nowTime.data = day + " " + time;
    }
    function nowTimes() {
      setTime(timeDate);
      setInterval(() => {
        timeDate = new Date();
        setTime(timeDate);
      }, 1000);
    }
    nowTimes();
    return {
      nowTime,
    };
  },

  created() {
    if (!sessionStorage["first"]) {
      // this.isLoading = true;
      // setTimeout(() => {
      //   this.isLoading = false;
      // }, 2000);
    }
  },
  methods: {
    //前導頁
    doAjax() {
      this.isLoading = true;
      // simulate AJAX

      //動畫
      gsap.fromTo(
        ".loadingText",
        { opacity: 1 },
        { duration: 1, opacity: 0, delay: 1 }
      );
      gsap.fromTo(
        ".loadingSvg",
        { opacity: 1 },
        { duration: 2, opacity: 0, delay: 2.5 }
      );
      gsap.fromTo(
        ".loadingBackground",
        { backgroundColor: "#000" },
        { duration: 1, backgroundColor: "#fff" },
        "<"
      );
      gsap.fromTo(
        ".loadingBackground",
        { opacity: 1 },
        { duration: 2, opacity: 0, delay: 4 }
      );
      // gsap.to(".loadingContainer", { x: 100000, duration: 0.1 }, ">");

      setTimeout(() => {
        this.isLoading = false;
      }, 6500);
    },
    onCancel() {
      console.log("User cancelled the loader.");
    },
  },
  computed: {},
  beforeMount() {},
  mounted() {
    if (!sessionStorage["first"]) {
      this.doAjax();
      sessionStorage["first"] = true;
    }
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/css/utils/_variables.scss";
p {
  line-height: 1.7;
}
// loading
.loading-container {
  > p {
    display: inline-block;
    width: fit-content;
    justify-content: center;
    font-size: 18px;
    color: #fff;
    z-index: 10000;
  }
  #loadingSvg {
    width: 100%;
    height: 100vh;
    z-index: 500;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    object-fit: fill;
    position: fixed;
    // z-index: 200;
  }
}

$b1-primary: (1px solid map-get($color, "primary"));
$b2-primary: (2px solid map-get($color, "primary"));
$b20-primary: (20px solid map-get($color, "primary"));

// loading

#fetch {
  color: map-get($color, "primary");
  background-color: #131313;
  border: $b1-primary;
}

.loadingContainer {
  // width: 100%;
  // height: 100%;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  position: fixed;
  z-index: 500;
  text-align: center;

  vertical-align: top;

  > .loadingText {
    width: 100%;
    height: 36px;
    top: 50%;
    bottom: 50%;
    // display: block;
    // line-height: 36px;
    font-size: 36px;
    color: map-get($color, "primary");
    position: fixed;
    > span {
      animation-delay: 0.1s;
      animation-duration: 0.7s;
      animation-iteration-count: infinite;

      &:nth-child(1) {
        animation-name: loadingBit1;
      }
      &:nth-child(2) {
        animation-name: loadingBit2;
      }
      &:nth-child(3) {
        animation-name: loadingBit3;
      }
    }
  }
  > .loadingSvg {
    object-fit: fill;
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    position: fixed;
    // mix-blend-mode: color-burn;
  }
}
.loadingBackground {
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: #000;
  mix-blend-mode: darken;
  position: fixed;
}

a:visited.link {
  color: map-get($color, "accent");
}

.bg_dark_75 {
  background-color: rgba(map-get($color, "dark"), 75%);
}

// h2標題

h2 {
  display: inline-block;
  width: 400px;
  font-size: 68px;
  padding: 20px 0;
  vertical-align: text-top;
  span {
    display: inline-block;
    font-size: 32px;
  }
  @media screen and (max-width: $m-breakpoint) {
    width: 200px;
    font-size: 38px;
    span {
      font-size: 17px;
    }
  }
}

.introduce_block {
  vertical-align: middle;
  box-sizing: border-box;
  padding: 30px;
  padding-top: 80px;
  color: map-get($color, "primary");
  background: linear-gradient(
      180deg,
      #131313 0%,
      rgba(19, 19, 19, 0) 10%,
      rgba(19, 19, 19, 0) 90%,
      #131313 100%
    ),
    url(@/assets/image/home/bg1_1440.jpg);
  background-repeat: repeat;
  background-position: center;
  background-size: cover;

  align-items: center;
  display: grid;
  grid-template-columns: 2fr 4.5fr 4.5fr 1fr;
  grid-template-rows: 1.5fr 2.5fr 0.5fr;
  gap: 20px;

  @media screen and (max-width: $m-breakpoint) {
    height: auto;
    grid-template-columns: 2fr 4.5fr 4.5fr;
    grid-template-rows: 1fr 2fr 0.5fr;
  }
  .sideTotem {
    grid-column: 1;
    grid-row: 1/3;
    border: none;
    img {
      height: 100%;
      object-fit: scale-down;
    }
    @media screen and (max-width: $m-breakpoint) {
      grid-row: 2/3;
      img {
        width: 100px;
        height: auto;
      }
    }
  }

  .title {
    grid-column: 2/4;
    grid-row: 1;
    padding: 30px 0 48px;
    display: flex;
    align-items: stretch;
    align-content: center;
    border: $b2-primary;
    border-top: $b20-primary;
    font-size: 72px;

    @media screen and (max-width: $m-breakpoint) {
      grid-column: 1/4;
    }
    h1 {
      @media screen and (max-width: $t-breakpoint) {
        font-size: 64px;
      }
      @media screen and (max-width: $ts-breakpoint) {
        font-size: 38px;
      }
      @media screen and (max-width: $m-breakpoint) {
        font-size: 30px;
      }
      // @media screen and (max-width: 320px) {
      //   font-size: 24px;
      // }
      margin: auto;
      span {
        display: none;
      }
    }
  }
  .text {
    grid-column: 2/3;
    grid-row: 2/3;
    flex-grow: 1;
    padding: 20px;
    border: $b2-primary;

    > p > span::after {
      content: "|";
      animation-name: flashing;
      animation-duration: 0.7s;
      animation-delay: 1s;
      animation-iteration-count: infinite;
    }
    @media screen and (max-width: $m-breakpoint) {
      grid-column: 2/4;
    }
  }
  .slogan {
    grid-column: 1/4;
    grid-row: 3/4;
    display: flex;
    align-items: center;
    font-size: 42px;

    img {
      width: 100px;
    }
    @media screen and (max-width: $m-breakpoint) {
      strong {
        font-size: 24px;
      }
    }
  }
  .pic {
    grid-column: 3/4;
    grid-row: 2/3;
    img {
      width: 100%;
      height: 100%;
      object-fit: scale-down;
      position: relative;

      animation-delay: 0.3s;
      animation-name: float;
      animation-duration: 4.4s;
      animation-iteration-count: infinite;
      animation-direction: alternate-reverse;
      animation-timing-function: ease-in-out;
    }
    @media screen and (max-width: $m-breakpoint) {
      display: none;
    }
  }
}

.itinerary_block,
.historcal_block,
.new_block {
  padding: 30px;
  background-size: cover;
  color: map-get($color, "primary");
  .link {
    display: block;
    text-align: center;
    width: 68vw;
    margin: 20px auto;
    padding: 10px;
    border: $b2-primary;
    color: map-get($color, "primary");
    background: map-get($color, "dark_sub");
    text-decoration: none;
  }
}
.historyLink {
  display: block;
  text-align: center;
  width: calc(30vw + 10px);
  margin: 10px;
  margin-left: 10vw;
  padding: 10px;
  border: $b2-primary;
  color: map-get($color, "primary");
  background: map-get($color, "dark_sub");
  text-decoration: none;
}
.itinerary_block {
  background: linear-gradient(
      180deg,
      #131313 0%,
      rgba(19, 19, 19, 0) 10%,
      rgba(19, 19, 19, 0) 90%,
      #131313 100%
    ),
    url(@/assets/image/home/bg2_1440.jpg);
  background-position: center;
  background-size: cover;
}
.historcal-news {
  background: linear-gradient(
      180deg,
      #131313 0%,
      rgba(19, 19, 19, 0) 10%,
      rgba(19, 19, 19, 0) 90%,
      #131313 100%
    ),
    url(@/assets/image/home/bg3.jpg);
  background-position: top;
  background-size: cover;
}
// 打字機閃爍
@keyframes flashing {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 1;
  }
  75% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
// loading點點閃爍
@keyframes loadingBit1 {
  0% {
    opacity: 0;
  }
  16% {
    opacity: 1;
  }
  96% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@keyframes loadingBit2 {
  0% {
    opacity: 0;
  }
  16% {
    opacity: 0;
  }
  32% {
    opacity: 1;
  }
  80% {
    opacity: 1;
  }
  96% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
@keyframes loadingBit3 {
  0% {
    opacity: 0;
  }
  32% {
    opacity: 0;
  }
  48% {
    opacity: 1;
  }
  64% {
    opacity: 1;
  }
  80% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
@keyframes float {
  0% {
    transform: translateY(0);
  }
  25% {
    transform: translateY(5%);
  }
  50% {
    transform: translateY(0);
  }
  75% {
    transform: translateY(8%);
  }
}
</style>
