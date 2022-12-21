<template>
   <all-header />
   <innerpageHeader></innerpageHeader>
   <div class="container">
      <the-heading heading="歷史故事" subheading="history"></the-heading>
      <history-filter @change-filter="setFilters"></history-filter>
      <history-item
         v-for="history in VisibleHistory"
         :key="history.id"
         :id="history.id"
         :title="history.title"
         :tag-danderLevel="history.tagDanderLevel"
         :tag-feature="history.tagFeature"
         :tag-region="history.tagRegion"
         :happen-year="history.happenYear"
         :description="history.description"
      ></history-item>
      <button class="btn-primary" v-if="isActive" @click="showmore">
         查看更多
      </button>
   </div>
   <all-footer />
</template>

<script>
import HistoryFilter from "../../components/history/HistoryFilter.vue";
import HistoryItem from "../../components/history/HistoryItem.vue";

export default {
   components: {
      HistoryFilter,
      HistoryItem,
   },
   data() {
      return {
         activeFilters: {
            low: true,
            medium: true,
            high: true,
            religion: true,
            history: true,
            anecdote: true,
            asia: true,
            europe: true,
            northAmerica: true,
            southAmerica: true,
            africa: true,
            oceania: true,
         },
         visible: 4,
      };
   },
   computed: {
      filteredHistories() {
         const histories = this.$store.getters["history/histories"];
         console.log(histories);
         const filteredDangerLevel = histories.filter((history) => {
            if (this.activeFilters.low && history.tagDanderLevel === "低") {
               return true;
            }
            if (this.activeFilters.medium && history.tagDanderLevel === "中") {
               return true;
            }
            if (this.activeFilters.high && history.tagDanderLevel === "高") {
               return true;
            }
            return false;
         });
         const filteredFeatures = filteredDangerLevel.filter((history) => {
            if (
               this.activeFilters.religion &&
               history.tagFeature === "宗教事件"
            ) {
               return true;
            }
            if (
               this.activeFilters.history &&
               history.tagFeature === "歷史事件"
            ) {
               return true;
            }
            if (
               this.activeFilters.anecdote &&
               history.tagFeature === "奇聞軼事"
            ) {
               return true;
            }
            return false;
         });
         const filteredRegion = filteredFeatures.filter((history) => {
            if (this.activeFilters.asia && history.tagRegion === "亞洲") {
               return true;
            }
            if (this.activeFilters.europe && history.tagRegion === "歐洲") {
               return true;
            }
            if (
               this.activeFilters.northAmerica &&
               history.tagRegion === "北美洲"
            ) {
               return true;
            }
            if (
               this.activeFilters.southAmerica &&
               history.tagRegion === "南美洲"
            ) {
               return true;
            }
            if (this.activeFilters.africa && history.tagRegion === "非洲") {
               return true;
            }
            if (this.activeFilters.oceania && history.tagRegion === "大洋洲") {
               return true;
            }
            return false;
         });
         return filteredRegion;
      },
      VisibleHistory() {
         return this.filteredHistories.slice(0, this.visible);
         // slice() 方法會回傳一個新陣列物件，為原陣列選擇之 begin 至 end（不含 end）部分的淺拷貝（shallow copy）。而原本的陣列將不會被修改。
      },
      isActive() {
         return this.visible < this.filteredHistories.length &&
            this.filteredHistories.length > 4
            ? true
            : false;
      },
   },
   created() {
      this.$store.dispatch("history/getHistories");
   },
   methods: {
      setFilters(updatedFilters) {
         this.activeFilters = updatedFilters;
         this.visible = 4;
      },
      showmore() {
         this.visible += 4;
      },
   },
};
</script>

<style lang="scss" scoped></style>
