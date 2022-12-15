<template>
  <h2 class="title">行程訂單</h2>
  <div class="wrap">
    <ul class="ulWrap">
      <li>訂單編號</li>
      <li>行程名稱</li>
      <li>訂單日期</li>
      <li>出發日期</li>
      <li>結束日期</li>
      <li>金額</li>
      <li>訂單狀態</li>
      <li>查看訂單</li>
    </ul>
    <itinerary-order-info />
  </div>
  <pagination />
</template>
<script>
import itineraryOrderInfo from "@/components/memberCenter/itineraryOrderInfo.vue";
import pagination from "@/components/memberCenter/pagination.vue";
export default {
  name: "itineraryOrder",
  components: {
    itineraryOrderInfo,
    pagination,
  },
};
</script>
<style lang="scss" scoped>
@import '@/assets/css/utils/variables';
.title {
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  line-height: 50px;
  border-bottom: 2px solid map-get($color, primary);
}
.wrap {
  width: 100%;
  padding: 5px;
  box-sizing: border-box;
}
.ulWrap {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
  text-align: center;
  border-bottom: 2px solid map-get($color , primary)
}
.ulWrap > li {
  color: #fff;
  font-size: 20px;
  width: 12.5%;
}
</style>
