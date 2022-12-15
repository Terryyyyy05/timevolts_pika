<template>
  <h2 class="title">商品訂單</h2>
  <div class="wrap">
    <ul class="ulWrap">
      <li>訂單編號</li>
      <li>商品名稱</li>
      <li>下單日期</li>
      <li>金額</li>
      <li>訂單狀態</li>
      <li>查看訂單</li>
    </ul>
    <product-order-info />
  </div>
  <pagination />
</template>
<script>
import productOrderInfo from "@/components/memberCenter/productOrderInfo.vue";
import pagination from "@/components/memberCenter/pagination.vue";
export default {
  name: "productOrder",
  components: {
    productOrderInfo,
    pagination,
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
  width: 16.666666%;
}
</style>
