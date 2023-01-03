<template>
   <base-history-card class="hirtory-card">
      <slot></slot>
      <h3>{{ title }}</h3>
      <div class="history-content">
         <img :src="`/cgd103/g3/new_img2/${image}`" />
         <div class="history-text">
            <div>
               <span class="p_md">#{{ tagDanderLevel }}</span>
               <span class="p_md">#{{ tagFeature }}</span>
               <span class="p_md">#{{ tagRegion }}</span>
            </div>
            <p class="p_md">發生年代 --- 西元{{ happenYear }}年</p>
            <p class="p_lg">{{ description }}</p>
            <router-link :to="historyDetailsLink" class="more-button">
               <div class="bg_accent">
                  <span>more</span>
               </div>
            </router-link>
         </div>
      </div>
   </base-history-card>
</template>

<script>
import BaseHistoryCard from "./base/BaseHistoryCard.vue";
import { IMG_URL } from "@/assets/js/img_path.js";

export default {
   components: {
      BaseHistoryCard,
   },
   props: [
      "id",
      "title",
      "tagDanderLevel",
      "tagFeature",
      "tagRegion",
      "happenYear",
      "description",
      "image",
   ],
   setup() {
      return {
         IMG_URL,
      };
   },
   computed: {
      historyDetailsLink() {
         return this.$route.path + "/" + this.id;
      },
   },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/utils/variables";
@import "@/assets/css/utils/mixin";

h3 {
   color: #fff;
   display: flex;
   justify-content: center;
   align-items: center;
   margin-bottom: 48px;
}

.history-content {
   display: grid;
   grid-template-columns: 1fr 1fr;
   color: #fff;
}

img {
   width: 100%;
   height: 400px;
}

.history-text {
   padding: 12px 24px 0;
   display: flex;
   flex-direction: column;
   gap: 24px;
}

span {
   margin-right: 8px;
}

a {
   text-decoration: none;
   color: #000;
}

.more-button {
   margin: auto 0 0 auto;
   div {
      width: 80px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      span {
         margin: auto;
         font-size: 20px;
      }
   }
}

@include m() {
   .history-content {
      grid-template-columns: 1fr;
   }

   img {
      width: 100%;
      height: 200px;
   }
}
</style>
