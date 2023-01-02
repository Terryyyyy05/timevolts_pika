<template>
  <div class="slide-container">
    <div class="wrapper">
      <TransitionGroup id="list" class="transition-container" name="list">
        <div
          class="slide"
          v-for="(item, index) in itineraryData"
          :key="item.itinerary_id"
          @click="clickslide(index)"
          :class="{
            'is-active': activeIndex == index,
            'img-index': activeIndex != index,
          }"
        >
          <!-- <img src="../../assets/image/itin/ " alt="" /> -->
          <img :src="ITIN_IMG_URL(item.itinerary_img)" alt="" />
        </div>
      </TransitionGroup>
    </div>
  </div>
  <div class="content">
    <div class="itineraryTitle">
      <h3>{{ look.itinerary_name }}</h3>
      <p>{{ look.story_classification }}</p>
    </div>
    <div class="itineraryText">
      <div class="summary">
        <p v-if="look.story_age < 0">
          年代:西元前{{ look.story_age.slice(1) }}年
        </p>
        <p v-if="look.story_age >= 0">年代:西元{{ look.story_age }}年</p>
        <p>{{ look.itinerary_memo }}</p>
      </div>
    </div>
    <div class="more">
      <img v-bind:src="imgsrc" alt="圖騰" />
      <router-link
        class="link"
        :to="
          look.story_classification == '經典行程'
            ? `/itineraryClassicView/c${look.itinerary_id}`
            : `/itineraryPeriodView/p${look.itinerary_id}`
        "
        >了解更多</router-link
      >
    </div>
    <div class="itineraryTeg">
      <p>危險度:{{ look.story_risk }}</p>
      <p>地點:{{ look.story_spot }}</p>
      <p>類型:{{ look.story_specialty }}</p>
    </div>
    <button class="next" @click="nextPage">&gt;</button>
    <button class="previous" @click="previous">&lt;</button>
  </div>
</template>

<script>
// import { ref, computed, reactive, onMounted } from "vue";
// import { Carousel, Slide } from 'vue-carousel';
import { ITIN_IMG_URL } from "@/assets/js/itin_img_path.js";
import { BASE_URL } from "@/assets/js/commom.js";
export default {
  // components: {
  //   Carousel,
  //   Slide,
  // },
  data() {
    return {
      currentPage: 1,
      itineraryData: [],
      look: {},
      imgsrc: require("@/assets/image/home/icon/icon_1.svg"),
      filterExtension: false,
      activeIndex: 1,
    };
  },
  setup() {
    return {
      ITIN_IMG_URL,
    };
  },
  computed: {},
  methods: {
    getItineraryData() {
      fetch(`${BASE_URL}getHomeItinerary.php`)
        .then((res) => res.json())
        .then((jsonData) => {
          this.itineraryData = jsonData;
          this.look = this.itineraryData[this.activeIndex];
          // console.log("itin", this.itineraryData);
          // return ITIN_IMG_URL;
        });
    },

    previous() {
      // 頁面往前，循環補上

      const temp = this.itineraryData[this.itineraryData.length - 1];
      this.itineraryData.pop();
      this.itineraryData.unshift(temp);

      const looktemp = this.itineraryData[this.activeIndex];
      this.look = looktemp;
    },

    nextPage() {
      // 頁面往後，循環補上

      const temp = this.itineraryData[0];
      this.itineraryData.shift();
      this.itineraryData.push(temp);

      const looktemp = this.itineraryData[this.activeIndex];
      this.look = looktemp;
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
    },
  },
  created() {
    this.getItineraryData();
    console.log(this);
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/utils/variables";

h3 {
  font-family: "Cube11";
}
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
    display: flex;
    width: 15vw;
    padding: 15px 5px 15px 15px;
    box-sizing: border-box;
    border: 2px solid map-get($color, "primary");
    border-right: none;
    border-radius: 20px 0 0 20px;
    flex-direction: column;
    justify-content: space-between;
    @media screen and (max-width: $m-breakpoint) {
      flex-direction: row;
      width: 100%;
      padding: 15px;
      border: 2px solid map-get($color, "primary");
      border-bottom: none;
      border-radius: 20px 20px 0 0px;
      order: -1;
    }
  }
  .itineraryText {
    width: 34vw;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    border: 2px solid map-get($color, "primary");
    align-items: center;
    text-overflow: ellipsis;
    border-right: none;
    @media screen and (max-width: $m-breakpoint) {
      width: 100%;
      min-height: 30vh;
      border: 2px solid map-get($color, "primary");
      border-bottom: none;
    }
    .summary {
      padding: 15px 12px;
      margin-bottom: 10px;
      box-sizing: border-box;
      align-self: start;
      line-height: 1.7;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
      :nth-child(1) {
        font-size: 20px;
        @media screen and (max-width: $m-breakpoint) {
          font-size: 18px;
        }
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
    border-right: none;
    @media screen and (max-width: $m-breakpoint) {
      width: 100%;
      border: none;
    }
    img {
      margin: 2rem 1rem;
      @media screen and (max-width: $m-breakpoint) {
        display: none;
      }
    }
    .link {
      width: 100%;
      text-align: center;
      padding: 0.7rem 0rem;
      box-sizing: border-box;
      color: map-get($color, "dark");
      background-color: map-get($color, "accent");
      border: none;
      border-top: 2px solid map-get($color, "primary");
      @media screen and (max-width: $m-breakpoint) {
        width: 100%;
        border-top: none;
        border-radius: 0px 0px 20px 20px;
        border: 2px solid map-get($color, "primary");
        // border-left: 2px solid map-get($color, "primary");
      }
    }
  }
  .itineraryTeg {
    width: 13vw;
    // height: 100%;
    padding: 15px;
    box-sizing: border-box;
    border: 2px solid map-get($color, "primary");
    border-radius: 0 20px 20px 0;
    align-items: center;
    font-size: 20px;
    line-height: 1.7;
    @media screen and (max-width: $m-breakpoint) {
      display: flex;
      justify-content: space-between;
      width: 100%;
      border-bottom: none;
      border-radius: 0;
      font-size: 18px;
      order: -1;
    }
  }
}
</style>
