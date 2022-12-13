<template>
   <section class="banner">
      <div class="containter">
         <div id="scene">
            <div class="layer" data-depth="0.2">
               <img
                  src="@/assets/image/history/test.png"
                  alt="hirtory main image"
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

.containter {
   // position: absolute;
   // width: 100%;
   // height: 100vh;
   // background-image: url("@/assets/image/history/test.png");
   // &::before {
   //    content: "";
   //    background-position: center;
   //    background-size: cover;
   //    background-attachment: fixed;
   //    background-image: url("@/assets/image/history/test.png");
   //    // position: absolute;
   //    display: block;
   //    left: 0;
   //    top: 0;
   //    height: 100vh;
   //    z-index: -1;
   // }
}

.containter #scene {
   width: 100vw;
   height: 100vh;
   overflow: hidden;
}

.containter #scene .layer {
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 100vh;
}

.containter #scene .layer img {
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 100vh;
   object-fit: cover;
}
</style>
