<template>
   <div class="container">
      <the-heading heading="歷史故事" subheading="history"></the-heading>

      <history-filter></history-filter>
      
   </div>
</template>

<script>


import HistoryFilter from "../../components/history/HistoryFilter.vue";
export default {
   components: {
      HistoryFilter,
   },
};
</script>

<style lang="scss" scoped></style>
