<template>
  <router-link class="experience" to="/home"></router-link>
  <div class="img" @click="stop">
    <img id="loadingSvg" src="@/assets/image/home/loading.svg" alt="時光穿梭" />
  </div>
</template>

<script>
export default {
  beforeCreate() {
    let i = true;
    if ((i = true)) {
      (stop) => {
        let mo = function (e) {
          this.passive = false;
        };
        document.body.style.overflow = "hidden";
        document.addEventListener("touchmove", mo, false); //禁止頁面滾動
      };
    } else {
      (move) => {
        let mo = function (e) {
          this.passive = false;
        };
        document.body.style.overflow = ""; //出現滾動條
        document.removeEventListener("touchmove", mo, false);
      };
    }
  },
  data() {
    return {
      loadsvg: require("@/assets/image/home/icon/icon_1.svg"),
    };
  },
  components: {},
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/utils/variables";

html {
  overflow: hidden;
}
// .experience {
//   display: block;
//   width: 100vw;
//   height: 80vh;
//   background-color: #131313;
//   position: absolute;
//   z-index: 1001;
// }
.img {
  z-index: auto;
}
#loadingSvg {
  width: 100vw;
  height: 80vh;
  z-index: 500;
  object-fit: cover;
  position: fixed;
}
</style>
