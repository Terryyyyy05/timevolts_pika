<template>
  <div class="news">
    <div class="box" v-for="item in NewsData" :key="item.news_id">
      <h3>{{ item.news_title }}</h3>
      <div class="p_md newsText">
        <p>{{ item.news_content }}</p>
      </div>
      <div class="more">
        <p>{{ item.news_add_date.substr(0, 10) }}</p>
        <router-link class="link" to="/news">了解更多</router-link>
      </div>
      <!-- <div class="img">
        <img v-bind:src="imgsrc" alt="圖騰" />
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  // components: {
  //     Carousel,
  //     Slide
  // },
  data() {
    return {
      NewsData: [],
      imgsrc: require("@/assets/image/home/icon/icon_1.svg"),
    };
  },
  created() {
    this.getHomeNewData();
  },
  methods: {
    getHomeNewData() {
      fetch("http://localhost/timevolts_pika/public/phpfile/getHomeNew.php")
        .then((res) => res.json())
        .then((jsonData) => {
          this.NewsData = jsonData;
          // console.log(this.NewsData);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/utils/_variables.scss";

.news {
  width: 70vw;
  height: fit-content;
  margin: auto;
  display: flex;
  gap: 10px;

  @media screen and (max-width: $m-breakpoint) {
    height: auto;
    flex-direction: column;
  }
  // border: 2px solid map-get($color , "primary" );
}
.box {
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  line-height: 1.4;
  h3 {
    // height: 4vw;
    padding: 10px;
    display: inline-block;
    color: map-get($color, "accent_sub");
    border: 2px solid map-get($color, "primary");
    background-color: map-get($color, "dark_sub");
    font-family: "Cube11";
  }
  .newsText {
    min-height: 17vw;

    border: 2px solid map-get($color, "primary");
    background-color: map-get($color, "dark_sub");
    p {
      padding: 10px;
    }
  }
  .more {
    // height: 3vw;
    display: flex;
    justify-content: space-between;
    border: 2px solid map-get($color, "primary");
    background-color: map-get($color, "dark_sub");
    @media screen and (max-width: $m-breakpoint) {
      height: auto;
    }
    p {
      padding: 10px;
    }
    .link {
      border-left: 4px solid map-get($color, "primary");
      color: map-get($color, "accent");
      padding: 10px;
    }
  }
  .img {
    height: 7vw;
    padding: auto;
    display: flex;
    justify-content: center;
    // align-self: center;
    border: 2px solid map-get($color, "primary");
    background-color: map-get($color, "dark_sub");
    @media screen and (max-width: $m-breakpoint) {
      display: none;
    }
    img {
      padding: 1rem;
      width: 50%;
    }
  }
}
.box:nth-of-type(2) {
  .img {
    // background-color: #fff;
    order: -3;
    @media screen and (max-width: $m-breakpoint) {
      order: 1;
    }
  }
}
</style>
