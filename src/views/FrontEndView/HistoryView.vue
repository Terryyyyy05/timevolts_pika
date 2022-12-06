<template>
   <innerpageHeader></innerpageHeader>
   <div class="container">
      <the-heading heading="歷史故事" subheading="history"></the-heading>
      <history-filter></history-filter>
      <history-information></history-information>
   </div>
</template>

<script>
import HistoryFilter from "../../components/history/HistoryFilter.vue";
import HistoryInformation from "../../components/history/HistoryInformation.vue";

export default {
   components: {
      HistoryFilter,
      HistoryInformation,
   },
};
</script>
