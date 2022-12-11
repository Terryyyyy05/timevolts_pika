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
      <router-link class="link" to="/itiItineraryClassicView"
        >了解更多</router-link
      >
    </div>
    <div class="itineraryTeg">
      <p>危險度:{{ look.story_risk }}</p>
      <p>地點:{{ look.story_spot }}</p>
      <p>{{ look.tagFeature }}</p>
    </div>
    <button class="next" @click="nextPage">&gt;</button>
    <button class="previous" @click="previous">&lt;</button>
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
          itinerary_name: "鐵達尼號沈船事件",
          story_age: "西元1912年",
          itinerary_memo: "回到過去的英國，體驗號稱「永不沉沒」的夢幻之船",
          story_risk: "中",
          story_spot: "北美洲",
          tagFeature: null,
        },
        {
          id: 2,
          story_cover: require("@/assets/image/itin/culturaMaya.webp"),
          itinerary_name: "馬雅文化",
          story_age: "未知",
          itinerary_memo: "回到過去的英國，體驗號稱「永不沉沒」的夢幻之船",
          story_risk: "低",
          story_spot: "南美洲",
          tagFeature: null,
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
          itinerary_name: "鐵達尼號沈船事件2",
          story_age: "西元1912年",
          itinerary_memo: "回到過去的英國，體驗號稱「永不沉沒」的夢幻之船",
          story_risk: "中",
          story_spot: "北美洲",
          tagFeature: null,
        },
        {
          id: 5,
          story_cover: require("@/assets/image/itin/culturaMaya.webp"),
          itinerary_name: "馬雅文化2",
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

      const temp = this.itinerarys[this.itinerarys.length - 1];
      this.itinerarys.pop();
      this.itinerarys.unshift(temp);

      const looktemp = this.itinerarys[this.activeIndex];
      this.look = looktemp;
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
    clickslide(index) {
      if (index > 1) {
        this.nextPage();
      } else if (index == 0) {
        this.previous();
      }
      //   this.look = item;
      //   this.activeIndex = index;
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

// .list-enter-active,
// .list-leave-active {
//   transition: all 0.5s ease;
// }
// .list-enter-from,
// .list-leave-to {
//   opacity: 0;
//   transform: translateX(calc(40vw + 30px));
// }
.swipe-move {
  transition: all 0.3s;
}
.slide-container {
  width: calc(100vw - 17.6px);
  top: -30px;
  left: -30px;
  padding: -30px;
  overflow: hidden;
  position: relative;
  @media screen and (max-width: $m-breakpoint) {
    width: 100vw;
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
  border-radius: 20px;
}
.next {
  left: 110%;
  right: -10%;
}
.previous {
  left: -10%;
  right: 110%;
}
.wrapper {
  left: calc(-20vw - 60px);
  height: 35vw;
  display: flex;
  align-items: center;

  position: relative;
  margin: 0 auto;
  .img-index {
    z-index: 5;
  }
  .slide {
    margin: 15px;
    width: calc(40vw + 4px);
    height: 20vw;

    // border: 2px solid map-get($color, "primary");
    transition: 0.7s;
    img {
      width: 40vw;
      height: 20vw;
      box-sizing: border-box;
      border-radius: 20px;
      border: 2px solid map-get($color, "primary");
      transition: 0.7s;
      object-fit: cover;
    }
  }
  .is-active {
    width: calc(60vw + 4px);
    height: 30vw;
    transition: 0.7s;
    z-index: 10;
    img {
      width: 60vw;
      height: 30vw;
      box-sizing: border-box;
      object-fit: cover;
    }
  }
}
.content {
  width: fit-content;
  height: fit-content;
  margin: 0 auto;
  border-radius: 20px;
  // border: 2px solid map-get($color, "primary");
  background: map-get($color, "dark_sub");
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: top;
  position: relative;

  @media screen and (max-width: $m-breakpoint) {
    flex-direction: column;
    width: 70vw;
  }
  .itineraryTitle {
    width: 15vw;
    // height: 100%;
    padding: 15px;
    box-sizing: border-box;
    border: 2px solid map-get($color, "primary");
    border-radius: 20px 0 0 20px;
    align-items: top;
    @media screen and (max-width: $m-breakpoint) {
      width: 100%;
      border-radius: 20px 20px 0 0px;
    }
  }
  .itineraryText {
    width: 32vw;
    // padding: 0 15px 0px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;

    border: 2px solid map-get($color, "primary");
    align-items: center;
    text-overflow: ellipsis;
    @media screen and (max-width: $m-breakpoint) {
      width: 100%;
      min-height: 30vh;
    }
    .summary {
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
    // height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-sizing: border-box;
    border: 2px solid map-get($color, "primary");
    @media screen and (max-width: $m-breakpoint) {
      width: 100%;
      flex-direction: row;
    }
    img {
      margin: 2rem 1rem;
    }
    .link {
      width: calc(8vw - 4px);
      text-align: center;
      padding: 0.7rem 0rem;
      box-sizing: border-box;
      color: map-get($color, "dark");
      background-color: map-get($color, "accent");
      border: none;
      border-top: 4px solid map-get($color, "primary");
      @media screen and (max-width: $m-breakpoint) {
        max-width: 100%;
        border-top: none;
        border-left: 2px solid map-get($color, "primary");
      }
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
    @media screen and (max-width: $m-breakpoint) {
      width: 100%;
      border-radius: 0px 0px 20px 20px;
      font-size: 14px;
    }
  }
}
</style>
