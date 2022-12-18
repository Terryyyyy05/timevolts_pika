<template>
  <div v-for="coupon in Vouchers" :key="coupon.id" class="wrap">
    <div class="id">{{ item.id }}</div>
    <div class="coupon_discount_number">
      {{ coupon.coupon_discount_number }}
    </div>
    <div class="coupon_pricing_condition">
      {{ coupon.coupon_pricing_condition }}
    </div>
    <div class="coupon_issue_date">{{ coupon.coupon_issue_date }}</div>
    <div class="coupon_valid_date">{{ coupon.coupon_valid_date }}</div>
    <div class="btnWrap">
      <button v-if="coupon.my_coupon_status == 1" class="btn-lightbox btn">
        可使用
      </button>
      <button v-if="coupon.my_coupon_status == 0" class="btn-lightbox btn">
        不可使用
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: "memberCouponInfo",
  data() {
    return {
      informationVisibile: 10,

      MyVouchers: [
        {
          coupon_id: 1, //編號
          coupon_discount_number: 200, //折扣金額
          coupon_issue_date: "2022-12-20", //發送日期
          coupon_valid_date: "2022-12-25", //生效日期
          coupon_exp_date: "2023-01-15", //到期日期
          coupon_quantity: 1000, //發行數量
          coupon_given_numbers: 0, //已發數量
          coupon_pricing_condition: 1000, //消費門檻
          my_coupon_status: 1, // 1=可使用,0=不可使用
        },
        {
          coupon_id: 2, //編號
          coupon_discount_number: 5, //折扣金額
          coupon_issue_date: "2022-12-18", //發送日期
          coupon_valid_date: "2022-12-18", //生效日期
          coupon_exp_date: "null", //到期日期
          coupon_quantity: 2000, //發行數量
          coupon_given_numbers: 0, //已發數量
          coupon_pricing_condition: 100, //消費門檻
          my_coupon_status: 1, // 1=可使用,0=不可使用
        },
        {
          coupon_id: 3, //編號
          coupon_discount_number: 5000, //折扣金額
          coupon_issue_date: "2022-12-18", //發送日期
          coupon_valid_date: "2022-12-18", //生效日期
          coupon_exp_date: "null", //到期日期
          coupon_quantity: 2000, //發行數量
          coupon_given_numbers: 0, //已發數量
          coupon_pricing_condition: 80000, //消費門檻
          my_coupon_status: 0, // 1=可使用,0=不可使用
        },
      ],
    };
  },
  computed: {
    orderList() {
      return this.orderList.slice(0, this.informationVisibile);
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/utils/variables";
.wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #fff;
  padding: 5px;
  border-bottom: 1px dashed map-get($color, primary);
}
.id {
  width: 16.666666%;
}
.coupon_discount_number {
  width: 16.666666%;
}
.coupon_pricing_condition {
  width: 16.666666%;
}
.coupon_issue_date {
  width: 16.666666%;
}
.coupon_valid_date {
  width: 16.666666%;
}
.btnWrap {
  width: 16.666666%;
}
.btn {
  width: 100%;
  margin: 0;
  padding: 0;
}
</style>
