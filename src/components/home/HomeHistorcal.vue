<template>
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
      <button class="next" @click="nextPage">&gt;</button>
    </div>
  </div>
  <div class="content">
    <div class="itineraryTitle">
      <h3>{{ look.itinerary_name }}</h3>
    </div>
    <div class="itineraryText">
      <div class="summary">
        <p>年代:{{ look.story_age }}</p>
        <p>{{ look.itinerary_memo }}</p>
      </div>
    </div>
    <div class="more">
      <img v-bind:src="imgsrc" alt="圖騰" />
      <button>了解更多</button>
    </div>
    <div class="itineraryTeg">
      <p>危險度:{{ look.story_risk }}</p>
      <p>地點:{{ look.story_spot }}</p>
      <p>{{ look.tagFeature }}</p>
    </div>
    <!-- <button class="previous" @click="previous">&lt;</button> -->
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
      itinerarys: [
        {
          id: 1,
          story_cover: require("@/assets/image/itin/titanic.jpg"),
          itinerary_name: "1鐵達尼號沈船事件",
          story_age: "西元1912年",
          itinerary_memo: "回到過去的英國，體驗號稱「永不沉沒」的夢幻之船",
          story_risk: "中",
          story_spot: "北美洲",
          tagFeature: null,
        },
        {
          id: 2,
          story_cover: require("@/assets/image/itin/culturaMaya.webp"),
          itinerary_name: "2馬雅文化",
          story_age: "未知",
          itinerary_memo: "回到過去的英國，體驗號稱「永不沉沒」的夢幻之船",
          story_risk: "低",
          story_spot: "南美洲",
          tagFeature: null,
        },
        {
          id: 3,
          story_cover: require("@/assets/image/itin/atlantis.png"),
          itinerary_name: "3亞特蘭提斯",
          story_age: "西元前12000年",
          itinerary_memo: `這個地方是個傳說中的地方，存不存在沒人知道。柏拉圖說，公元前9560年的時候，他聲稱這個非洲大陸旁邊還有一個非常大的島，這個島也就是亞特蘭提斯。...`,
          story_risk: "低",
          story_spot: null,
          tagFeature: "奇聞軼事",
        },
        {
          id: 4,
          story_cover: require("@/assets/image/itin/titanic.jpg"),
          itinerary_name: "4鐵達尼號沈船事件",
          story_age: "西元1912年",
          itinerary_memo: "回到過去的英國，體驗號稱「永不沉沒」的夢幻之船",
          story_risk: "中",
          story_spot: "北美洲",
          tagFeature: null,
        },
        {
          id: 5,
          story_cover: require("@/assets/image/itin/culturaMaya.webp"),
          itinerary_name: "5馬雅文化",
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

  computed: {
    // pictures(){
    //     Array.from({ length:
    // 		5 }, (_, item) => ({ src:`https://picsum.photos/600/400?random=${item + 1}`
    //     }))
    // },
    // previous(){
    //     // 頁面往前，循環補上
    //     const lastSlide = pictures.value.pop();
    //     pictures.value = [lastSlide].concat(pictures.value);
    // },
    // next(){
    //     // 頁面往後，循環補上
    //     const firstPicture = pictures.value.shift();
    //     pictures.value = pictures.value.concat(firstPicture);
    // },
  },
  methods: {
    previous() {
      // 頁面往前，循環補上
      //   this.activeIndex--;
      //   const temp = this.itinerarys[this.itinerarys.length - 1];
      //   this.itinerarys.pop();
      //   this.itinerarys.unshift(temp);
      //   const looktemp = this.itinerarys[this.activeIndex];
      //   this.look = looktemp;
      //   this.activeIndex = index;
      // const lastSlide = pictures.value.pop();
      // pictures.value = [lastSlide].concat(pictures.value);
    },

    nextPage() {
      // 頁面往後，循環補上
      //   this.activeIndex++;

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
    this.look = this.itinerarys[this.activeIndex];
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/utils/variables";

.img-index {
  z-index: -1;
}

.swipe-move {
  transition: all 0.3s;
}

.slide-container {
  width: calc(100vw - 17.6px);
  top: -30px;
  left: -30px;
  padding: -30px;
  display: flex;
  overflow: hidden;
  position: relative;
  @media screen and (max-width: $m-breakpoint) {
    .slide-container {
      width: 100vw;
    }
  }
}
.next,
.previous {
  top: 50%;
  bottom: 50%;
  width: 40px;
  height: 40px;
  padding: 3px;
  font-size: 30px;
  transform: translate(-50%, -50%);
  position: absolute;
  background: map-get($color, "primary");
  border: 1px solid map-get($color, "primary");
}
.next {
  left: 110%;
  right: -10%;
}
.previous {
  left: -10%;
  right: 110%;
}
#list {
  //   display: flex;
}
.wrapper {
  height: 40vw;
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
    // width: calc(20vw + 4px);
    // height: calc(20vw + 4px);
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
    width: calc(30vw + 4px);
    height: calc(30vw + 4px);
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
.content {
  width: fit-content;
  height: 170px;
  margin: 0 auto;
  border-radius: 20px;
  // border: 2px solid map-get($color, "primary");
  background: map-get($color, "dark_sub");
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: top;
  position: relative;
  &div {
    vertical-align: text-top;
  }
  .itineraryTitle {
    width: 15vw;
    height: 100%;
    padding: 15px;
    box-sizing: border-box;
    border: 2px solid map-get($color, "primary");
    border-radius: 20px 0 0 20px;
    align-items: top;
  }
  .itineraryText {
    width: 32vw;
    height: 100%;
    // padding: 0 15px 0px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;

    border: 2px solid map-get($color, "primary");
    align-items: center;
    text-overflow: ellipsis;
    .summary {
      //   width: 80%;
      height: 100%;
      padding: 20px;
      box-sizing: border-box;
      align-self: start;
      line-height: 1.4;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
      :nth-child(1) {
        font-size: 24px;
      }
    }
  }
  .more {
    width: 8vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-sizing: border-box;
    border: 2px solid map-get($color, "primary");
    img {
      margin: 2rem 1rem;
    }
    button {
      width: 8vw;
      padding: 0.7rem;
      box-sizing: border-box;
      color: map-get($color, "dark");
      background-color: map-get($color, "accent");
      border: none;
      border-top: 2px solid map-get($color, "primary");
    }
  }
  .itineraryTeg {
    width: 15vw;
    // height: 100%;
    padding: 20px;
    box-sizing: border-box;
    border: 2px solid map-get($color, "primary");
    border-radius: 0 20px 20px 0;
    align-items: center;
    font-size: 24px;
    line-height: 33px;
  }
}
</style>
