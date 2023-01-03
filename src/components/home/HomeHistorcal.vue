<template>
  <div class="historcal-slide">
    <div class="content">
      <div class="title">EGYPT</div>
      <div class="historcalText">
        <div>
          <h3>{{ look.story_name }}</h3>
        </div>
        <div class="historcalTeg">
          <span v-if="look.story_risk != null"
            >危險度:{{ look.story_risk }}
          </span>
          <span v-if="look.story_specialty != null">
            | {{ look.story_specialty }}</span
          >
          <span v-if="look.story_spot != null">
            | 地點:{{ look.story_spot }}</span
          >
        </div>
        <div class="summary">
          <p v-if="look.story_age < 0">
            年代:西元前{{ look.story_age.slice(1) }}年
          </p>
          <p v-if="look.story_age >= 0">年代:西元{{ look.story_age }}年</p>
          <p>{{ look.story_intro }}</p>
        </div>
        <div class="more">
          <router-link class="link" v-bind:to="'/history/' + look.story_id"
            >了解更多</router-link
          >
        </div>
      </div>
    </div>
    <div class="slide-container">
      <div class="wrapper">
        <TransitionGroup id="list" class="transition-container" name="list">
          <div
            class="slide"
            v-for="(item, index) in HistoriesData"
            :key="item.story_id"
            @click="clickslide(index)"
            :class="{
              'is-active': activeIndex == index,
              'img-index': activeIndex != index,
            }"
          >
            <!-- <img v-bind:src="'/image/history/banner/' + item.story_cover" /> -->

            <img :src="`/cgd103/g3/new_img2/${item.story_cover}`" alt="" />
          </div>
        </TransitionGroup>
      </div>
      <button class="next" @click="nextPage">&gt;</button>
    </div>
  </div>
</template>

<script>
// import { Carousel, Slide } from 'vue-carousel';
// import { STORY_IMG_URL } from "@/assets/js/story_img_path.js";
import { BASE_URL } from "@/assets/js/commom.js";
export default {
  // components: {
  //     Carousel,
  //     Slide
  // },
  data() {
    return {
      currentPage: 1,
      HistoriesData: [],
      look: {},
      filterExtension: false,
      activeIndex: 0,
    };
  },
  // setup() {
  //   return {
  //     STORY_IMG_URL,
  //   };
  // },
  computed: {},
  methods: {
    getHistoriesData() {
      fetch(`${BASE_URL}getHistories.php`)
        .then((res) => res.json())
        .then((jsonData) => {
          this.HistoriesData = jsonData;
          this.look = this.HistoriesData[this.activeIndex];
        });
    },
    nextPage() {
      // 頁面往後，循環補上

      const temp = this.HistoriesData[0];
      this.HistoriesData.shift();
      this.HistoriesData.push(temp);

      const looktemp = this.HistoriesData[this.activeIndex];
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
  p {
    line-height: 1.7;
  }
}

// 輪播圖

.slide-container {
  // width: calc(100vw - 17.6px);
  //   top: -30px;
  left: 30px;
  padding: 20px;
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
  top: calc(15vw + 23px);
  left: calc(27px);
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
  // margin: 20px auto;
  //   display: flex;
  .img-index {
    z-index: 5;
  }
  .slide {
    //left控制滑走的移動速度
    left: -30vw;
    transition: 0.7s;
    position: absolute;
    z-index: 21;
    box-shadow: 5px solid map-get($color, "body");
    opacity: 0;
    img {
      width: 30vw;
      height: 30vw;
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
    transition: 0s;
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
    opacity: 1;
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
    line-height: 1.7;
    :nth-child(1) {
      font-size: 24px;
    }
    @media screen and (max-width: $m-breakpoint) {
      font-size: 12px;
      :nth-child(1) {
        font-size: 14px;
      }
    }
  }

  .historcalTeg {
    box-sizing: border-box;
    align-items: center;
    margin-top: 20px;
    font-size: 24px;
    line-height: 1.7;
    @media screen and (max-width: $m-breakpoint) {
      font-size: 16px;
    }
  }
  .more {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-sizing: border-box;
    .link {
      margin-top: 10px;
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
