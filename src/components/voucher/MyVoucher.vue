<template>
  <div class="MyVoucher" v-show="showModal">
    <font-awesome-icon
      class="xmark"
      icon="fa-solid fa-xmark"
      @click.self="showbox"
    />
    <h3>選擇折價卷</h3>
    <ul class="cart-content">
      <li v-for="item in CouponData" :key="item.id">
        <div class="cart-item">
          <div class="coupon-card">
            <div class="coupon-card-left">
              <div class="title">
                <p class="title-one">
                  &#36;{{ item.coupon_discount_number }}元<br />現金券
                </p>
                <p class="title-two">
                  &#40;滿&#36;{{ item.coupon_pricing_condition }}元 可使用&#41;
                </p>
                <p class="title-three"></p>
                <p class="title-three" v-if="item.coupon_exp_date == 'null'">
                  有效期限:<br />{{ item.coupon_valid_date }} ~ 無期限
                </p>
                <p class="title-three" v-else>
                  有效期限:<br />{{ item.coupon_valid_date }} ~
                  {{ item.coupon_exp_date }}
                </p>
              </div>
            </div>
            <div class="coupon-card-right">
              <a v-on:click="choose" href="#">立即使用</a>
            </div>
          </div>
        </div>
      </li>
    </ul>
    <router-link to="/product" class="mid">
      <button class="btn-lightbox">繼續選擇商品</button>
    </router-link>
  </div>
</template>

<script>
import { BASE_URL } from "@/assets/js/commom.js";

export default {
  data() {
    return {
      CouponData: [],
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
          coupon_status: 1, // 1=上架,0=下架
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
          coupon_status: 0, // 1=上架,0=下架
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
          coupon_status: 0, // 1=上架,0=下架
        },
      ],
      up_state: [{}],
      showModal: false,
      login: true, //是否登入
    };
  },
  computed: {},
  methods: {
    async getVoucher() {
      try {
        let selt = this;

        const myVoucher = await fetch(`${BASE_URL}getGetCoupon.php`, {
          method: "POST",
          body: JSON.stringify({
            action: "mem_coupon",
            mem_id: selt.get_mem_id.val,
          }),
        });

        const myVoucherData = await myVoucher.json();
        selt.MyVouchers = myVoucherData;
      } catch (error) {
        console.error(error);
      }
    },

    showbox() {
      // 開關按鈕
      this.showModal = !this.showModal;
    },
    choose(e) {
      // 如果未登入，引導登入
      // 寫入領取
      this.getV = true;
      e.target.innerText = "已選擇";
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/utils/variables";
@import "@/assets/css/utils/mixin";
.xmark {
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 1;

  font-size: 28px;
  cursor: pointer;
  color: map-get($color, primary_sub);
}

.mid {
  margin: 0 auto;
  display: block;
  width: fit-content;
}

.MyVoucher {
  aspect-ratio: 3/4;
  width: 25%;
  background-color: map-get($color, dark_sub);
  border: 10px solid map-get($color, primary_sub);
  padding: 10px;

  position: fixed;
  z-index: 103;
  margin: 0 auto;
  top: 90px;
  left: 50%;
  right: 50%;
  transform: translateX(-50%);

  > h3 {
    font-size: 28px;
    color: aliceblue;
    text-align: center;
    position: relative;

    &:after {
      content: "";
      height: 1px;
      width: 30%;
      background-color: aliceblue;

      position: absolute;
      bottom: -10px;
      left: 0;
      right: 0;
      margin: auto;
    }
  }
  > .cart-content {
    height: 80%;
    margin: 5% 0;

    display: flex;
    flex-direction: column;
    row-gap: 5%;

    overflow: scroll;

    .cart-item {
      display: flex;
      // justify-content: space-around;
      font-size: 20px;
      color: aliceblue;

      .pic {
        width: 30%;
        img {
          width: 100%;
        }
      }

      .item-content {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        row-gap: 15%;
        h4 {
          font-size: 20px;
        }
        span {
          font-size: 12px;
        }
      }

      .item-amount {
        width: 20%;
        display: flex;
        align-items: center;
        justify-content: center;
        column-gap: 5%;
      }
      .item-dele {
        width: 20%;
        display: flex;
        align-items: center;
        justify-content: center;
        column-gap: 5%;
        cursor: pointer;
      }
    }
  }
}

.cart-content::-webkit-scrollbar {
  width: 0px;
}

@include m() {
  * {
    box-sizing: border-box;
  }

  .cart {
    aspect-ratio: none;
    width: 100%;
    height: 100%;
    padding: 15px;
    right: 0px;
    top: 0px;

    > h3 {
      &:after {
        width: 40%;
      }
    }
    > .cart-content {
      height: 80%;

      .cart-item {
        font-size: 16px;

        margin: 2% 0;

        .item-content {
          width: 10%;

          h4 {
            font-size: 16px;
          }
        }
      }
    }
  }
}

// 折價卷卡片

// member-box-upper
.coupon-card-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
.coupon-card {
  color: #fff;
  display: flex;
  background-color: #545454;
  width: 80%;
  border-radius: 10px;
  margin: auto;
}
.coupon-card-left {
  border-right: dotted;
  width: 80%;
  position: relative;
}
.coupon-card-left::after {
  content: "";
  background-color: #333333;
  border-radius: 0 0 10px 10px;
  position: absolute;
  top: 0;
  right: -10px;
  width: 20px;
  height: 10px;
}

.title {
  margin: 20px;
  line-height: 1.4;
}
.title-one {
  font-size: 1.3rem;

  margin-bottom: 8px;
}
.title-two,
.title-three {
  font-size: 0.6rem;
}
.title-two {
  margin-bottom: 10px;
}
.coupon-card-right {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
  position: relative;
}
.coupon-card-right::before {
  content: "";
  background-color: #333333;
  border-radius: 10px 10px 0 0;
  position: absolute;
  bottom: 0;
  left: -10px;
  width: 20px;
  height: 10px;
}
.coupon-card-right a {
  writing-mode: vertical-lr;
  border: 3px solid #434343;
  border-radius: 48px;
  padding: 5px;
  margin: 0 auto;
  text-decoration: none;
  color: #fff;
}
</style>
