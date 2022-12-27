<template>
  <div v-for="coupon in MyVouchers" :key="coupon.id" class="wrap">
    <!-- {{ coupon }} -->
    <div class="id">{{ coupon.coupon_id }}</div>
    <div class="coupon_discount_number">
      {{ coupon.coupon_discount_number }}
    </div>
    <div class="coupon_pricing_condition">
      {{ coupon.coupon_pricing_condition }}
    </div>
    <div class="coupon_valid_date">
      {{ coupon.coupon_valid_date }}
    </div>
    <!-- <div class="coupon_exp_date" v-if="coupon.coupon_valid_date"></div> -->
    <div class="coupon_exp_date">
      <p v-if="coupon.coupon_exp_date != null">
        {{ coupon.coupon_exp_date }}
      </p>
      <p v-else>無期限</p>
    </div>
    <div class="btnWrap">
      <router-link
        v-if="useExpired(coupon) == 1"
        class="btn-lightbox btn"
        to="/news"
        @click="time"
      >
        可使用
      </router-link>
      <a v-if="useExpired(coupon) == 2" class="btn-lightbox btn-none">
        未生效
      </a>
      <a v-if="useExpired(coupon) == 3" class="btn-lightbox btn-none">
        已過期
      </a>
      <a v-if="useExpired(coupon) == 4" class="btn-lightbox btn-none">
        已使用
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: "memberCouponInfo",
  data() {
    return {
      informationVisibile: 10,
      page: 10,
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
          coupon_exp_date: null, //到期日期
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
          coupon_exp_date: null, //到期日期
          coupon_quantity: 2000, //發行數量
          coupon_given_numbers: 0, //已發數量
          coupon_pricing_condition: 80000, //消費門檻
          my_coupon_status: 0, // 1=可使用,0=不可使用
        },
      ],
    };
  },
  created() {
    console.log(this);
  },
  computed: {
    pageVisibile() {
      this.informationVisibile = Math.ceil(this.MyVouchers.length / this.page);
    },
    Vouchers() {
      return this.MyVouchers.slice(0, this.page);
    },
    today() {
      return new Date();
    },
  },
  methods: {
    useExpired(my_coupon) {
      console.log(Date.parse(this.today));
      console.log(my_coupon.coupon_exp_date == 0);
      if (my_coupon.my_coupon_status == 0) {
        // 如果已使用
        return 4;
      } else if (
        Date.parse(my_coupon.coupon_exp_date) < Date.parse(this.today) ||
        my_coupon.coupon_exp_date == 0
      ) {
        // 如果已過期
        return 3;
      } else if (
        Date.parse(my_coupon.coupon_valid_date) >= Date.parse(this.today)
      ) {
        // 如果未達生效日
        return 2;
      } else {
        // 如果以上都達成
        return 1;
      }
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
.coupon_valid_date {
  width: 16.666666%;
}
.coupon_exp_date {
  width: 16.666666%;
}
.btnWrap {
  width: 16.666666%;
}
.btn,
.btn-none {
  width: 100%;
  margin: 0;
  padding: 5px 0;
}
.btn-none {
  color: map-get($color, light);
  background-color: map-get($color, muted);
  border: none;
  pointer-events: none;
}
</style>
