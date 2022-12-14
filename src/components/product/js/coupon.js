import { reactive } from "vue";
export const couponList = reactive([
  {
    coupon_id: 1, //編號
    coupon_discount_number: 200, //折扣金額
    coupon_issue_date: "2022-12-20", //發送日期
    coupon_valid_date: "2022-12-25", //生效日期
    coupon_exp_date: "2023-01-15", //到期日期
    coupon_quantity: 1000, //發行數量
    coupon_given_numbers: 0, //已發數量
    coupon_pricing_condition: 1000, //消費門檻
    my_coupon_status: 1, // 1=上架,0=下架
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
    my_coupon_status: 0, // 1=上架,0=下架
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
    my_coupon_status: 0, // 1=上架,0=下架
  },
]);
