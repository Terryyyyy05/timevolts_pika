<template>
  <base-dialog :show="!hasLoggedIn" title="登入訊息" @close="askForLogin">
    <p>請先登入!</p>
  </base-dialog>
  <div v-for="coupon in MyVouchers" :key="coupon.id" class="wrap">
    <!-- {{ coupon }} -->
    <!-- <div class="id">{{ coupon.coupon_id }}</div> -->
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
        to="/product"
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
import { BASE_URL } from "@/assets/js/commom.js";
export default {
  name: "memberCouponInfo",
  data() {
    return {
      informationVisibile: 10,
      page: 10,
      get_mem_id: {
        val: 0,
      },
      userId: null,
      hasLoggedIn: true,
      MyVouchers: [],
    };
  },
  created() {
    console.log(this);
    console.log(this.getUserId);
    this.loginConfirm();
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
    askForLogin() {
      if (this.$route.path !== "/memberLightBox") {
        this.$router.push({ path: "/memberLightBox" });
      } else {
        this.hasLoggedIn = true;
      }
    },
    async loginConfirm() {
      await this.$store.dispatch("getUserId");
      this.userId = this.$store.getters["userId"];
      if (!this.userId) {
        // 找不到會員
        // this.hasLoggedIn = false;
        // console.log("未登入", this.get_mem_id);
      } else {
        // 會員有登入
        this.get_mem_id.val = this.userId;
        await this.giveGetVoucher();
        // console.log("登入了", this.get_mem_id);
      }
    },
    async giveGetVoucher() {
      try {
        const myVoucher = await fetch(`${BASE_URL}getGetCoupon.php`, {
          method: "POST",
          body: JSON.stringify({
            action: "mem_coupon",
            mem_id: this.get_mem_id.val,
          }),
        });

        const myVoucherData = await myVoucher.json();
        this.MyVouchers = myVoucherData;
        console.log(this.MyVouchers);
        return this.MyVouchers;
      } catch (error) {
        console.error(error);
        // this.AgetVoucher();
      }
    },
    useExpired(my_coupon) {
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
// .id {
//   width: 16.666666%;
// }
.coupon_discount_number {
  width: 20%;
}
.coupon_pricing_condition {
  width: 20%;
}
.coupon_valid_date {
  width: 20%;
}
.coupon_exp_date {
  width: 20%;
}
.btnWrap {
  width: 20%;
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
