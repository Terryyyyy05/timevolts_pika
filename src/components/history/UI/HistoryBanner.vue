<template>
   <section class="banner">
      <div
         class="banner-containter"
         :style="{
            backgroundImage: `url(/cgd103/g3/new_img2/${banner})`,
         }"
      >
         <div id="scene">
            <div class="layer" data-depth="0.1" v-if="hasParallax">
               <img
                  :src="require(`@/assets/image/history/parallax_${id}01.png`)"
                  alt=""
               />
            </div>
            <div class="layer" data-depth="0.2" v-if="hasParallax">
               <img
                  :src="require(`@/assets/image/history/parallax_${id}02.png`)"
                  alt=""
               />
            </div>
         </div>
      </div>

      <div
         v-if="notClassic"
         class="banner-containter"
         :style="{
            backgroundImage: `url(/cgd103/g3/new_img2/${banner})`,
         }"
      >
         <div id="scene">
            <div class="layer" data-depth="0.1" v-if="hasParallax">
               <img
                  :src="require(`@/assets/image/history/parallax_${id}01.png`)"
                  alt=""
               />
            </div>
            <div class="layer" data-depth="0.2" v-if="hasParallax">
               <img
                  :src="require(`@/assets/image/history/parallax_${id}02.png`)"
                  alt=""
               />
            </div>
         </div>
      </div>
   </section>
</template>

<script type="module">
import Parallax from "parallax-js";
import { IMG_URL } from "@/assets/js/img_path.js";

export default {
   props: ["banner", "id"],
   setup() {
      return {
         IMG_URL,
      };
   },
   mounted() {
      this.intscence();
   },
   computed: {
      hasParallax() {
         return this.id >= 1 && this.id <= 4 ? true : false;
      },
      notClassic() {
         if (this.id > 16) {
            return true;
         }
      },
   },
   methods: {
      intscence() {
         var scene = document.getElementById("scene");
         var parallaxInstance = new Parallax(scene);
      },
   },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/utils/variables";
@import "@/assets/css/utils/mixin";

* {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
}

.banner {
   position: relative;
   width: 100%;
   height: 100vh;
}

.banner-containter {
   position: absolute;
   width: 100%;
   height: 100vh;
   // background-image: url(`../../../../public/image/history/banner/${banner}`);
   background-size: cover;
   overflow: hidden;
}

.banner-containter #scene {
   width: 100vw;
   height: 100vh;
   overflow: hidden;
}

.banner-containter #scene .layer {
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 100vh;
}

.banner-containter #scene .layer img {
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 100vh;
   object-fit: cover;
   transform: translateY(20px);
}
</style>
