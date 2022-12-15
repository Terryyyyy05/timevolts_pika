<template>
   <section class="banner">
      <div class="banner-containter">
         <div id="scene">
            <div class="layer" data-depth="0.05">
               <img
                  :src="require('@/assets/image/history/egypt_03.png')"
                  alt=""
               />
            </div>
            <div class="layer" data-depth="0.1">
               <img
                  :src="require('@/assets/image/history/egypt_02.png')"
                  alt=""
               />
            </div>
         </div>
      </div>
   </section>
</template>

<script type="module">
import Parallax from "parallax-js";

export default {
   mounted() {
      this.intscence();
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
   background-image: url("@/assets/image/history/egypt_04.png");
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
