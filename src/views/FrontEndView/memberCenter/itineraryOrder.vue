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
</template>
<script>
import itineraryOrderInfo from "@/components/memberCenter/itineraryOrderInfo.vue";
export default {
  name: "itineraryOrder",
  components: {
    itineraryOrderInfo,
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/app.scss";
.title {
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  line-height: 50px;
}
.wrap {
  width: 100%;
  border: 2px solid map-get($color, "primary");
  padding: 5px;
  box-sizing: border-box;
}
.ulWrap {
  display: flex;
  justify-content: center;
  align-items: center;
}
.ulWrap > li {
  color: #fff;
  font-size: 20px;
  width: 12.5%;
}
</style>
