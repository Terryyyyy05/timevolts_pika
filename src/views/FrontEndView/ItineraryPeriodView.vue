<template>
   <all-header />
   <innerpageHeader></innerpageHeader>
   <base-dialog :show="!hasLoggedIn" title="登入訊息" @close="askForLogin">
      <p>請先登入!</p>
   </base-dialog>
   <div class="container">
      <the-heading heading="期間行程" subheading="Period"></the-heading>
   </div>

   <section class="section">
      <div class="container carouselWrap">
         <div>
            <carousel :test="imgText"></carousel>
            <aside-bar
               @tab0="changeParagraph0"
               @tab1="changeParagraph1"
               @tab2="changeParagraph2"
               @tab3="changeParagraph3"
               @tab4="changeParagraph4"
            ></aside-bar>
         </div>
         <div class="infoWrap">
            <div class="infoTitle">{{ p2.list.story_name }}</div>
            <div class="tagWrap">
               <span class="infoDangerLevel"
                  >#難度:{{ p2.list.story_risk }}</span
               >
               <span class="infoFeature">#{{ p2.list.story_specialty }}</span>
               <span class="infoRegion">#{{ p2.list.story_spot }}</span>
            </div>
            <div class="infoDate">
               穿越年代:{{ p2.list.itinerary_number_of_years }}
            </div>
            <div class="infoContent">
               {{ strList[contentOneToFive] }}
            </div>
         </div>
      </div>
   </section>
   <section class="section">
      <div class="container">
         <div class="signup">
            <button class="btn-secondary button" @click="bookItinerary">
               我要參加活動
            </button>
         </div>
      </div>
   </section>
   <section class="section">
      <div class="container">
         <div class="commentwrap">
            <comments-info></comments-info>
         </div>
      </div>
   </section>
   <section class="section">
      <div class="container">
         <div class="watchmorewrap">
            <itin-period-card-info></itin-period-card-info>
         </div>
      </div>
   </section>
   <all-footer />
</template>

<script>
import carousel from "@/components/itineraryPeriod/carousel.vue";
import commentsInfo from "@/components/itineraryPeriod/commentsInfo.vue";
import itinPeriodCardInfo from "@/components/itineraryPeriod/itinPeriodCardInfo.vue";
import asideBar from "@/components/itineraryPeriod/asideBar.vue";
import { onMounted, reactive } from "vue";
import { cardContext } from "@/components/itinerary/js/data.js";
// import { cardContext } from "../../../public/js/datatest.js";
import { onBeforeRouteUpdate, useRoute, useRouter } from "vue-router";
import { BASE_URL } from "@/assets/js/commom";

export default {
   name: "itiniraryPeriodView",
   components: {
      carousel,
      commentsInfo,
      itinPeriodCardInfo,
      asideBar,
   },
   setup() {
      const route = useRoute();

      const period2 = reactive(
         cardContext.find((i) => {
            return i.id === parseInt(route.params.id);
         })
      );
      const imgText = period2.imgsrc.split("/")[2].split(".")[0];
      console.log(imgText);

      const p2 = reactive({ list: "" });
      const cardContext2 = reactive([]);
      const strList = reactive(Array.from({ length: 5 }, () => ""));
      const getData = () => {
         fetch(`${BASE_URL}/getItineraries.php`)
            .then((res) => res.json())
            .then((result) => {
               cardContext2.value = result;
               // console.log(cardContext2.value[0]);
               p2.list = cardContext2.value.find((item) => {
                  return `${item.story_id}` === route.params.id;
               });
               // console.log(route.params.id);
               // console.log(`${cardContext2.value[0].story_id}`);
               // console.log(cardContext2.value);
               console.log(p2.list.itinerary_memo);
               strList[0] = p2.list.itinerary_memo;
               strList[1] = p2.list.itinerary_content;
               strList[2] = p2.list.itinerary_delicacy;
               strList[3] = "安全守則";
               strList[4] = "取消政策";
            });
      };

      // const strList = computed(() => [
      //     p2.list['str1'],
      //   p2.list['str2'],
      //   p2.list['str3'],
      //     "",
      //     "",
      // ]
      // )
      onMounted(() => {
         getData();
         // console.log(cardContext2.value);
         // const p2 = reactive(
         //     cardContext2.find((item) => {
         //         return `p${item.story_id}` === route.params.id;
         //     })
         // );
         // console.log(p2);
      });

      // console.log(result.value);

      // console.log(period2);
      console.log(period2.imgsrc);
      // // /img/lochNessMonster.jpg

      // console.log(period2.imgsrc.split("/"));
      // // ['', 'img', 'titanic.jpg']

      // console.log(period2.imgsrc.split("/")[2]);
      // // titanic.jpg

      // console.log(period2.imgsrc.split("/")[2].split("."));
      // // ['titanic','jpg']

      // console.log(period2.imgsrc.split("/")[2].split(".")[0]);
      // // titanic

      return {
         period2,
         imgText,
         cardContext2,
         p2,
         strList,
      };
   },

   data() {
      return {
         itinerary: 0,
         contentOneToFive: 0,
         // result: [],
         userId: null,
         hasLoggedIn: true,
         storyId: "",
      };
   },

   beforeUpdate() {
      this.saveItineraryName();
   },
   methods: {
      // changeParagraph();
      changeParagraph0() {
         this.contentOneToFive = 0;
      },
      changeParagraph1() {
         this.contentOneToFive = 1;
      },
      changeParagraph2() {
         this.contentOneToFive = 2;
      },
      changeParagraph3() {
         this.contentOneToFive = 3;
      },
      changeParagraph4() {
         this.contentOneToFive = 4;
      },
      // getData() {
      //     fetch(
      //         "http://localhost/timevolts/public/phpfile/getItineraries.php"
      //     )
      //         .then((res) => res.json())
      //         .then((json) => {
      //             this.result = json;
      //             console.log(this.result);
      //         });
      // },
      async bookItinerary() {
         await this.$store.dispatch("getUserId");
         this.userId = this.$store.getters["userId"];
         // console.log(this.userId);
         if (!this.userId) {
            // 找不到會員
            this.hasLoggedIn = false;
            // console.log(this.p2.list.story_name);
         } else {
            // 會員有登入
            await this.$store.dispatch("itinerary/bookItinerary", {
               itineraryName: this.p2.list.story_name,
               userId: this.userId,
            });
            this.$router.push({ path: "/itinerary-booking" });
         }
      },
      askForLogin() {
         this.$router.push({ path: "/memberLightBox" });
      },
      saveItineraryName() {
         fetch(`${BASE_URL}saveStoryId.php`, {
            method: "POST",
            body: JSON.stringify({
               story_id: this.p2.list.story_id,
            }),
         });
      },
   },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/app.scss";

.section {
   width: 100%;
   margin: 100px 0;
}

.container {
   width: map-get($container, each(d_container));
}
.carouselWrap {
   display: flex;
   justify-content: center;
   flex-wrap: wrap;
   align-items: center;
}
.commentwrap {
   margin: 0 auto;
}

.button {
   margin: 0 auto;
}
.watchmorewrap {
   height: 580px;
   display: flex;
   flex-wrap: wrap;
   justify-content: space-evenly;
   overflow: hidden;
}
.infoWrap {
   width: fit-content;
   height: fit-content;
   display: flex;
   flex-direction: column;
   justify-content: center;
   color: #fff;
   background-color: map-get($color, "dark_sub");
}
.infoTitle {
   width: 500px;
   height: 30px;
   margin: 0 0 5px 0;
   padding: 20px 10px;
   font-size: 32px;
   text-align: center;
   border: 2px solid map-get($color, "primary");
   background-color: map-get($color, "dark_sub");
}
.tagWrap {
   width: 500px;
   height: 30px;
   margin: 5px 0;
   padding: 20px 10px;
   font-size: 24px;
   display: flex;
   justify-content: space-between;
   border: 2px solid map-get($color, "primary");
   background-color: map-get($color, "dark_sub");
}
.infoDate {
   width: 500px;
   height: 30px;
   margin: 5px 0;
   padding: 20px 10px;
   font-size: 24px;
   border: 2px solid map-get($color, "primary");
   background-color: map-get($color, "dark_sub");
}
.infoContent {
   width: 500px;
   height: 300px;
   overflow-y: auto;
   margin: 5px 0 0 0;
   padding: 20px 10px;
   font-size: 24px;
   line-height: 1.6;
   border: 2px solid map-get($color, "primary");
   background-color: map-get($color, "dark_sub");
}
@include m() {
   .infoWrap {
      width: fit-content;
      background-color: map-get($color, "dark_sub");
   }
   .infoTitle,
   .tagWrap,
   .infoDate {
      width: 100%;
      font-size: 18px;
      height: 20px;
      padding: 10px;
   }

   .infoContent {
      width: 100%;
      font-size: 18px;
      overflow-y: auto;
      height: 180px;
   }
}
</style>
