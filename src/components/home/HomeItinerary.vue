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
      <p>類型:{{ look.story_specialty }}</p>
      <p>{{ look.story_classification }}</p>
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
          itinerary_memo:
            "鐵達尼號沉沒事故是個著名船難，事發時是鐵達尼號從英國南安普敦港至美國紐約港首航的第5天，而該船當時是世界最大的郵輪。當瞭望員看到冰山時，該船的行駛速度正接近最高速。因此無法快速轉向...",
          story_risk: "中",
          story_classification: "期間限定",
          story_spot: "歐洲",
          story_specialty: "歷史事件",
        },
        {
          id: 2,
          story_cover: require("@/assets/image/itin/culturaMaya00.jpg"),
          itinerary_name: "馬雅文明",
          story_age: "西元前2000年",
          itinerary_memo:
            "關於「馬雅」文明的傳說，很多人都聽說過。提到馬雅人，大部分人會把他們與美洲叢林聯繫到一起。浮現在腦海中的也是一群印地安人，他們身著鮮豔羽毛服飾，趁著月光進行著神祕的儀式，他們有著神祕的巨石遺跡及特別的美食和宗教祭祀活動。就讓我們一同去一探神祕的馬雅文明吧!",
          story_risk: "低",
          story_classification: "期間限定",
          story_spot: "南美洲",
          story_specialty: "歷史事件",
        },
        {
          id: 3,
          story_cover: require("@/assets/image/itin/atlantis.png"),
          itinerary_name: "亞特蘭提斯",
          story_age: "西元前9650年",
          itinerary_memo: `這個地方是個傳說中的地方，存不存在沒人知道，。柏拉圖說，公元前9560年的時候，在直布羅陀海峽的對面有一個非常大的島，也就是現在的非洲大陸，他聲稱這個非洲大陸旁邊還有一個非常大的島，這個島也就是亞特蘭提斯...`,

          story_risk: "低",
          story_classification: "期間限定",
          story_spot: "歐洲",
          story_specialty: "奇聞軼事",
        },
        {
          id: 4,
          story_cover: require("@/assets/image/itin/crusades00.jpg"),
          itinerary_name: "十字軍東征",
          story_age: "西元1096年",
          itinerary_memo:
            "耶穌被釘十字架，耶穌被逮捕後以十字架處死的事件，一般認為發生在公元1世紀的猶太行省，最可能在公元30到33年之間。雖然歷史學家對這個事件的準確細節並沒有達成共識，學者多數認為這是一個歷史事件。",
          story_risk: "中",
          story_classification: "期間限定",
          story_spot: "北美洲",
          story_specialty: "宗教事件",
        },
        {
          id: 5,
          story_cover: require("@/assets/image/itinEgypt.jpg"),
          itinerary_name: "埃及黃金時代",
          story_age: "西元1234年",
          itinerary_memo:
            "這位新國王將其父親遺留的壯觀事業進一步發揚光大，完成了埃及史上最宏大且最受美譽的著名地標：吉薩大金字塔。當初的命名是「阿赫特─胡夫」，意即「胡夫的地平線」。",
          story_risk: "低",
          story_classification: "經典行程",
          story_spot: "非洲",
          story_specialty: "歷史事件",
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
    padding: 15px 5px 15px 15px;
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
    width: 34vw;
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
      padding: 20px 12px;
      box-sizing: border-box;
      align-self: start;
      line-height: 1.4;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
      :nth-child(1) {
        font-size: 20px;
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
    width: 13vw;
    // height: 100%;
    padding: 20px;
    box-sizing: border-box;
    border: 2px solid map-get($color, "primary");
    border-radius: 0 20px 20px 0;
    align-items: center;
    font-size: 20px;
    line-height: 33px;
    @media screen and (max-width: $m-breakpoint) {
      width: 100%;
      border-radius: 0px 0px 20px 20px;
      font-size: 12px;
    }
  }
}
</style>
