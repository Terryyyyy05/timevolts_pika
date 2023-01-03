<template>
   <itinerary-collection-card
      v-for="info in visibleInformation"
      :key="info.title"
   >
      <div class="outterwrap">
         <h3>{{ info.title }}</h3>
         <div class="wrap">
            <div class="imgblock">
               <img :src="`../new_img2/${info.imgsrc}`" :alt="info.imgalt" />
            </div>
            <div class="textblock">
               <div>
                  <span class="p_md">#{{ info.tagDangerLevel }}危險</span>
                  <span class="p_md">#{{ info.tagFeature }}</span>
                  <span class="p_md">#{{ info.tagRegion }}</span>
               </div>
               <p class="p_md tourdate">出團日期： {{ info.tourdate }}</p>
               <p class="p_md description">{{ info.description }}</p>
            </div>
         </div>
      </div>
   </itinerary-collection-card>
</template>

<script>
import itineraryCollectionCard from "@/components/memberCenter/itineraryCollectionCard.vue";
import { BASE_URL } from "@/assets/js/commom.js";

export default {
   name: "itineraryCollectionCardInfo",
   components: {
      itineraryCollectionCard,
   },
   data() {
      return {
         information: [
            //  {
            //      type: "經典事件",
            //      imgsrc: require(`@/assets/image/itinPrehistoric.jpg`),
            //      imgalt: "經典行程-史前時代",
            //      title: "史前時代",
            //      tagDangerLevel: "高",
            //      tagFeature: "經典事件",
            //      tagRegion: null,
            //      tourdate: " 西元前5000年11月22日",
            //      description:
            //          "人類的歷史分成：史前時代及信使時代。「文字的出現」為畫分的依據，史前時代沒有文字，信使時代為文字開始。今天，我們將回到史前時代，建立屬於自己的莊園，面對嚴苛的大自然及猛獸努力存活下去。",
            //  },
            //  {
            //      type: "經典事件",
            //      imgsrc: require(`@/assets/image/itinEgypt.jpg`),
            //      imgalt: "經典行程-埃及",
            //      title: "埃及五千年",
            //      tagDangerLevel: "低",
            //      tagFeature: "經典事件",
            //      tagRegion: "非洲",
            //      tourdate: "西元???年",
            //      description:
            //          "這位新國王將其父親遺留的壯觀事業進一步發揚光大，完成了埃及史上最宏大且最受美譽的著名地標：吉薩大金字塔。當初的命名是「阿赫特─胡夫」，意即「胡夫的地平線」。",
            //  },
            //  {
            //      type: "經典事件",
            //      imgsrc: require(`@/assets/image/itinWar.jpg`),
            //      imgalt: "經典行程-赤壁之戰",
            //      title: "赤壁之戰",
            //      tagDangerLevel: "高",
            //      tagFeature: "經典事件",
            //      tagRegion: "中國",
            //      tourdate: "西元208年",
            //      description:
            //          "孫劉為抵抗八十萬曹軍舉兵南下，於烏林、赤壁會面交戰，經武臣黃蓋詐降火計，重創曹軍。根據三國誌記載，曹操因多年北伐征討，將兵早已疲倦不堪，整個曹軍能夠作戰的兵力實則不到二十萬...",
            //  },
            //  {
            //      type: "經典事件",
            //      imgsrc: require(`@/assets/image/itinWar.jpg`),
            //      imgalt: "經典行程-赤壁之戰",
            //      title: "赤壁之戰",
            //      tagDangerLevel: "高",
            //      tagFeature: "經典事件",
            //      tagRegion: "中國",
            //      tourdate: "西元208年",
            //      description:
            //          "孫劉為抵抗八十萬曹軍舉兵南下，於烏林、赤壁會面交戰，經武臣黃蓋詐降火計，重創曹軍。根據三國誌記載，曹操因多年北伐征討，將兵早已疲倦不堪，整個曹軍能夠作戰的兵力實則不到二十萬...",
            //  },
         ],
         informationVisible: 3,
      };
   },
   computed: {
      visibleInformation() {
         return this.information.slice(0, this.informationVisible);
      },
   },
   created() {
      this.getItineraryCollection();
   },
   methods: {
      async getItineraryCollection() {
         const response = await fetch(`${BASE_URL}getItineraryCollection.php`);

         const responseData = await response.json();
         // console.log(responseData);
         const collections = [];

         for (const key in responseData) {
            const collection = {
               type: responseData[key].story_classification,
               imgsrc: responseData[key].story_cover,
               imgalt: responseData[key].story_name,
               title: responseData[key].story_name,
               tagDangerLevel: responseData[key].story_risk,
               tagFeature: responseData[key].story_specialty,
               tagRegion: responseData[key].story_spot,
               tourdate: responseData[key].story_age,
               description: responseData[key].story_intro,
            };
            collections.push(collection);
         }
         this.information = collections;
      },
   },
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/utils/variables";
@import "@/assets/css/layout/rwd.scss";
h3 {
   color: #fff;
   text-align: center;
   width: 100%;
   font-size: 16px;
   margin: 3px;
   padding: 3px;
   line-height: 1;
   height: 20px;
}
.wrap {
   display: flex;
   flex-direction: column;
   align-items: center;
}
.imgblock {
   width: 100%;
   height: 130px;
   padding: 3px;
   margin: 3px;
   box-sizing: border-box;
}
img {
   width: 100%;
   height: 100%;
   object-fit: cover;
}

.textblock {
   color: #fff;
   width: 100%;
   padding: 3px;
   margin: 3px;
   box-sizing: border-box;
   height: 200px;
}
span {
   display: inline-block;
   height: 20px;
   margin: 3px 10px 3px 0;
   padding: 3px;
   font-size: 12px;
}
.tourdate {
   height: 20px;
   margin: 0 0 3px 0;
   padding: 3px;
   font-size: 12px;
}
.description {
   margin: 5px 0 3px 0;
   height: 120px;
   padding: 3px;
   font-size: 14px;
   overflow-y: hidden;
}
</style>
