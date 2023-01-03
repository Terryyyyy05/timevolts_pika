<template>
   <all-header />
   <innerpageHeader></innerpageHeader>
   <div class="container">
      <the-heading heading="歷史故事" subheading="history"></the-heading>
   </div>
   <history-banner :banner="selectedHistory.cover" :id="id"> </history-banner>
   <div class="container grid">
      <font-awesome-icon
         class="switch-p-icon"
         icon="fa-solid fa-chevron-left"
         v-show="this.count !== 0"
         @click="previous"
      />
      <font-awesome-icon
         class="switch-p-icon"
         icon="fa-solid fa-chevron-right"
         v-show="this.count !== this.selectedDetails.length - 1"
         @click="next"
      />
      <div>
         <div class="small-images">
            <div
               v-for="(detail, index) in selectedDetails"
               :key="detail.articalId"
               class="small-image"
               :style="imageBorder(index)"
            >
               <img
                  class="small-image"
                  :src="`/cgd103/g3/new_img2/${detail.image}`"
                  alt="historyImage"
                  @click="switchImage(index)"
               />
            </div>
         </div>
         <div class="big-image-container">
            <img
               class="big-image"
               :src="`/cgd103/g3/new_img2/${selectedDetails[count].image}`"
               alt="historyImage"
            />
         </div>
      </div>
      <div class="history-text">
         <h3>{{ selectedHistory.name }}</h3>
         <div class="tag">
            <span>#{{ selectedHistory.tagDanderLevel }}</span>
            <span>#{{ selectedHistory.tagFeature }}</span>
            <span>#{{ selectedHistory.tagRegion }}</span>
         </div>
         <active-paragraph
            :heading="activeTitle"
            :text="activeContent"
         ></active-paragraph>
         <router-link to="/itineraryPeriodView"
            ><button class="btn-secondary">我想參加</button></router-link
         >
      </div>
   </div>
   <div class="container">
      <button class="btn-lightbox btn-last-page" @click="backToLastPage">
         回上一頁
      </button>
   </div>
   <all-footer />
</template>

<script>
import HistoryBanner from "../../components/history/UI/HistoryBanner.vue";
import ActiveParagraph from "../../components/history/ActiveParagraph.vue";
import { BASE_URL } from "@/assets/js/commom.js";
import { IMG_URL } from "@/assets/js/img_path.js";

export default {
   components: {
      HistoryBanner,
      ActiveParagraph,
   },
   props: ["id"],
   setup() {
      return {
         IMG_URL,
      };
   },
   data() {
      return {
         count: 0,
         selectedHistory: [],
         selectedDetails: [],
         activeTitle: null,
         activeContent: null,
      };
   },
   created() {
      // this.$store.dispatch("history/getHistories");
      this.getHistoryDetails();
      console.log(this.activeTitle);
      console.log(this.activeContent);
      // this.selectedHistory = this.$store.getters["history/histories"].find(
      //    (history) => this.id === history.id
      // );
   },
   mounted() {
      this.updateTitle();
      this.updateContent();
   },
   methods: {
      next() {
         if (this.count >= 0 && this.count < this.selectedDetails.length) {
            this.count += 1;
            this.updateTitle();
            this.updateContent();
         }
      },
      previous() {
         if (this.count >= 0 && this.count < this.selectedDetails.length) {
            this.count -= 1;
            this.updateTitle();
            this.updateContent();
         }
      },
      updateTitle() {
         this.activeTitle = this.selectedDetails[this.count].title;
      },
      updateContent() {
         this.activeContent = this.selectedDetails[this.count].content;
      },
      imageBorder(index) {
         if (this.count === index) {
            return "border: 5px solid #fab042";
         }
      },
      switchImage(index) {
         this.count = index;
         this.updateTitle();
         this.updateContent();
      },
      backToLastPage() {
         this.$router.go(-1);
      },
      async getHistoryDetails() {
         const response = await fetch(`${BASE_URL}getHistoryDetails.php`);

         const responseData = await response.json();
         console.log(responseData);

         const histories = [];

         for (const key in responseData) {
            const history = {
               id: String(responseData[key].story_id),
               name: responseData[key].story_name,
               tagDanderLevel: responseData[key].story_risk,
               tagFeature: responseData[key].story_specialty,
               tagRegion: responseData[key].story_spot,
               cover: responseData[key].story_cover,
            };
            histories.push(history);
         }

         this.selectedHistory = histories.find(
            (history) => history.id === this.id
         );

         const details = [];

         for (const key in responseData) {
            const detail = {
               id: String(responseData[key].story_id),
               articalId: String(responseData[key].story_article_id),
               title: responseData[key].story_title,
               image: responseData[key].story_img,
               content: responseData[key].story_content,
            };
            details.push(detail);
         }

         this.selectedDetails = details.filter(
            (detail) => detail.id === this.id
         );

         console.log(this.selectedDetails);
      },
   },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/utils/variables";
@import "@/assets/css/utils/mixin";

.container {
   margin-bottom: 48px;
}

.grid {
   display: grid;
   grid-template-columns: 2fr 1fr;
   justify-items: center;
   column-gap: 48px;
   margin-top: 96px;
   position: relative;
}

.switch-p-icon {
   position: absolute;
   font-size: 128px;
   top: 50%;
   transform: translate(-50%, -50%);
   color: map-get($color, "accent");
   opacity: 30%;
   transition: opacity 0.3s ease;
   cursor: pointer;
   &:nth-of-type(1) {
      left: 0;
   }
   &:nth-of-type(2) {
      left: 100%;
   }
   &:hover {
      opacity: 100%;
      transition: opacity 0.3s ease;
   }
}

.small-images {
   display: flex;
   align-items: center;
   gap: 24px;
   margin-bottom: 48px;
}

.small-image {
   width: 125px;
   height: 100px;
   cursor: pointer;
}

.big-image-container {
   display: flex;
   justify-content: center;
   align-items: center;
   height: 600px;

   .big-image {
      width: 100%;
      height: 100%;
   }
}

.history-text {
   color: #fff;
}

h3 {
   display: flex;
   justify-content: center;
}

.tag {
   display: flex;
   gap: 8px;
   margin: 24px auto;
   padding: 24px;
   border-top: 2px solid map-get($color, "primary");
}

.btn-secondary {
   margin: 24px auto 0;
}

.btn-last-page {
   border-radius: 5px;
}

@include m() {
   .grid {
      grid-template-columns: 1fr;
   }

   .switch-p-icon {
      font-size: 48px;
      &:nth-of-type(1) {
         left: 10%;
         top: 95%;
      }
      &:nth-of-type(2) {
         left: 90%;
         top: 95%;
      }
   }

   .small-images {
      display: none;
   }

   .big-image-container {
      height: 300px;
   }

   .big-image-container.big-image {
      width: 100%;
   }

   .tag {
      justify-content: center;
   }
}
</style>
