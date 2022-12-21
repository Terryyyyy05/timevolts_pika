<template>
  <div class="historcal-slide">
    <div class="content">
      <div class="title">EGYPT</div>
      <div class="historcalText">
        <div>
          <h3>{{ look.itinerary_name }}</h3>
        </div>
        <div class="historcalTeg">
          <span v-if="look.story_risk != null"
            >危險度:{{ look.story_risk }}
          </span>
          <span v-if="look.tagFeature != null"> | {{ look.tagFeature }}</span>
          <span v-if="look.story_spot != null">
            | 地點:{{ look.story_spot }}</span
          >
        </div>
        <div class="summary">
          <p>年代:{{ look.story_age }}</p>
          <p>{{ look.itinerary_memo }}</p>
        </div>
        <div class="more">
          <router-link class="link" to="/history-details">了解更多</router-link>
        </div>
      </div>
    </div>
    <div class="slide-container">
      <div class="wrapper">
        <TransitionGroup id="list" class="transition-container" name="list">
          <div
            class="slide"
            v-for="(item, index) in itinerarys"
            :key="item.id"
            @click="clickslide(index)"
            :class="{
              'is-active': activeIndex == index,
              'img-index': activeIndex != index,
            }"
          >
            <img v-bind:src="item.story_cover" />
          </div>
        </TransitionGroup>
      </div>
      <button class="next" @click="nextPage">&gt;</button>
    </div>
  </div>
</template>

<script>
// import { Carousel, Slide } from 'vue-carousel';

export default {
  // components: {
  //     Carousel,
  //     Slide
  // },
  data() {
    return {
      paginations: 5,
      currentPage: 1,
      HistoriesData: [],
      itinerarys: [
        {
          id: 1,
          story_cover: require("@/assets/image/itin/atlantis00.jpg"),
          itinerary_name: "鐵達尼號沈船事件",
          story_age: "西元1912年",
          itinerary_memo: "回到過去的英國，體驗號稱「永不沉沒」的夢幻之船",
          story_risk: "中",
          story_spot: "北美洲",
          tagFeature: null,
        },
        {
          id: 2,
          story_cover: require("@/assets/image/itin/prehistoric00.jpg"),
          itinerary_name: "史前時代",
          story_age: "未知",
          itinerary_memo:
            "安全的房屋可以遮風避雨，沒有便利商店買食物買水，隨時面臨猛獸的攻擊?讓我們回到最原始的石器時代，尋找身旁最天然的資源，建立屬於自己的小小家園，體驗我們祖先的生活吧！",
          story_risk: "高",
          story_spot: "歐洲",
          tagFeature: "奇聞軼事",
        },
        {
          id: 3,
          story_cover: require("@/assets/image/itin/atlantis.png"),
          itinerary_name: "亞特蘭提斯",
          story_age: "西元前12000年",
          itinerary_memo: `這個地方是個傳說中的地方，存不存在沒人知道。柏拉圖說，公元前9560年的時候，他聲稱這個非洲大陸旁邊還有一個非常大的島，這個島也就是亞特蘭提斯。...`,
          story_risk: "低",
          story_spot: null,
          tagFeature: "奇聞軼事",
        },
        {
          id: 4,
          story_cover: require("@/assets/image/itin/titanic.jpg"),
          itinerary_name: "鐵達尼號沈船事件",
          story_age: "西元1912年",
          itinerary_memo: "回到過去的英國，體驗號稱「永不沉沒」的夢幻之船",
          story_risk: "中",
          story_spot: "北美洲",
          tagFeature: null,
        },
        {
          id: 5,
          story_cover: require("@/assets/image/itin/culturaMaya.webp"),
          itinerary_name: "馬雅文化",
          story_age: "西元1912年",
          itinerary_memo: "回到過去的英國，體驗號稱「永不沉沒」的夢幻之船",
          story_risk: "中",
          story_spot: "南美洲",
          tagFeature: null,
        },
      ],
      look: {},
      imgsrc: require("@/assets/image/home/icon/icon_1.svg"),
      filterExtension: false,
      activeIndex: 1,
    };
  },

  computed: {},
  methods: {
    getHistoriesData() {
      fetch("http://localhost/timevolts_pika/public/phpfile/getHistories.php")
        .then((res) => res.json())
        .then((jsonData) => {
          this.HistoriesData = jsonData;
          console.log(this.HistoriesData);
        });
    },
    nextPage() {
      // 頁面往後，循環補上

      const temp = this.itinerarys[0];
      this.itinerarys.shift();
      this.itinerarys.push(temp);

      const looktemp = this.itinerarys[this.activeIndex];
      this.look = looktemp;

      // const firstPicture = pictures.value.shift();
      // pictures.value = pictures.value.concat(firstPicture);
    },
    selectPage(val) {
      this.currentPage = val;
    },
    clickslide() {
      this.nextPage();
    },
  },
  created() {
    this.getHistoriesData();
    this.look = this.itinerarys[this.activeIndex];
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/utils/variables";
$b1-primary: (1px solid map-get($color, "primary"));
$b2-primary: (2px solid map-get($color, "primary"));

// 整體容器
.historcal-slide {
  display: flex;
}

// 輪播圖

.slide-container {
  //   width: calc(100vw - 17.6px);
  //   top: -30px;
  left: 30px;
  padding: 30px;
  display: flex;
  justify-items: center;
  overflow: hidden;
  position: relative;
  @media screen and (max-width: $m-breakpoint) {
    .slide-container {
      width: 100vw;
    }
  }
}
.next {
  top: calc(15vw + 20px + 23px);
  left: calc(30vw + 27px);
  width: 45px;
  height: 45px;
  padding: 3px;
  font-size: 35px;
  transform: translate(-50%, -50%);
  position: absolute;
  background: map-get($color, "dark");
  border: 2px solid map-get($color, "primary");
  color: map-get($color, "primary");
  z-index: 22;
}
.wrapper {
  width: 50vw;
  align-items: center;
  position: relative;
  margin: 20px auto;
  //   display: flex;
  .img-index {
    z-index: 5;
  }
  .slide {
    //left控制滑走的移動速度
    top: -5vw;
    left: 30vw;
    transition: 0.7s;
    position: absolute;
    z-index: 21;
    box-shadow: 5px solid map-get($color, "body");
    opacity: 0;
    img {
      width: 40vw;
      height: 40vw;
      box-sizing: border-box;
      border: 2px solid map-get($color, "primary");
      transition: 0.7s;
      object-fit: cover;
    }
  }

  .is-active + .slide + .slide + .slide + .slide {
    top: 8vw;
    left: 17vw;
    z-index: 16;
    opacity: 0;
    // transition: 0s;
    img {
      width: 14vw;
      height: 14vw;
      filter: brightness(3%);
    }
  }
  .is-active + .slide + .slide + .slide {
    top: 6vw;
    left: 16vw;
    z-index: 17;
    opacity: 0;
    img {
      width: 18vw;
      height: 18vw;
      filter: brightness(15%);
    }
  }
  .is-active + .slide + .slide {
    top: 4vw;
    left: 13vw;
    z-index: 18;
    opacity: 1;
    img {
      width: 22vw;
      height: 22vw;

      filter: brightness(33%);
    }
  }
  .is-active + .slide {
    top: 2vw;
    left: 7vw;
    z-index: 19;
    opacity: 1;
    img {
      width: 26vw;
      height: 26vw;
      filter: brightness(66%);
    }
  }

  .is-active {
    transition: 0.7s;
    top: 0px;
    left: 0px;
    z-index: 20;
    opacity: 1;
    img {
      transition: 0.7s;
      width: 30vw;
      height: 30vw;
      box-sizing: border-box;
      object-fit: cover;
    }
  }
}
.swipe-move {
  transition: all 0.3s;
}

// 標題與內文

.content {
  width: fit-content;

  margin: 20px;
  margin-left: 10vw;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  position: relative;
  @media screen and (max-width: $ts-breakpoint) {
    margin-left: 20px;
  }
}

.title {
  padding: 2vw;
  text-align: center;
  border: $b2-primary;
  background: map-get($color, "dark");
  font-family: "Cube&8";
  font-size: 72px;
  @media screen and (max-width: $t-breakpoint) {
    font-size: 64px;
  }
  @media screen and (max-width: $ts-breakpoint) {
    font-size: 38px;
  }
  @media screen and (max-width: $m-breakpoint) {
    font-size: 30px;
  }
  //   @media screen and (max-width: 320px) {
  //     font-size: 24px;
  //   }
}
.historcalText {
  //   width: 40vw;
  //   height: 100%;
  margin-top: 20px;
  padding: 15px;
  box-sizing: border-box;
  border: 2px solid map-get($color, "primary");
  background: map-get($color, "dark_sub");
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: top;
  .summary {
    width: 30vw;
    min-height: 20vh;
    box-sizing: border-box;
    align-self: start;
    line-height: 1.4;
    :nth-child(1) {
      font-size: 24px;
    }
  }

  .historcalTeg {
    box-sizing: border-box;
    align-items: center;
    margin-top: 20px;
    font-size: 24px;
    line-height: 33px;
  }
  .more {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-sizing: border-box;
    .link {
      text-align: center;
      padding: 0.7rem;
      box-sizing: border-box;
      color: map-get($color, "dark");
      background-color: map-get($color, "accent");
      border: 2px solid map-get($color, "primary");
    }
  }
}
</style>
