<template>
  <div>
    <h2 class="title">商品折扣券</h2>
  </div>
  <div class="wrap">
    <ul class="ulWrap">
      <!-- <li>折扣卷編號</li> -->
      <li>折抵金額</li>
      <li>門檻金額</li>
      <li>使用日期</li>
      <li>到期日期</li>
      <li>使用狀態</li>
    </ul>
    <member-coupon-info />
  </div>
  <pagination />
</template>
<script>
import memberCouponInfo from "@/components/memberCenter/memberCouponInfo.vue";
import pagination from "@/components/memberCenter/pagination.vue";
export default {
  name: "memberCoupon",
  components: {
    memberCouponInfo,
    pagination,
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/utils/variables";
.title {
  color: #fff;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 10px;
  line-height: 50px;
  border-bottom: 2px solid map-get($color, primary);
  font-family: "Cube11";
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
  border-bottom: 2px solid map-get($color, primary);
}
.ulWrap > li {
  color: #fff;
  font-size: 20px;
  width: 20%;
}
</style>
