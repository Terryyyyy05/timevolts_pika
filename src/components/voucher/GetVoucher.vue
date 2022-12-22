<template>
  <div class="GetVoucherButton">
    <button class="btn-store-detail" @click="showbox()">
      <p>立即領取<br />折扣卷 {{ CouponData.length }}張</p>
    </button>
  </div>

  <div class="GetVoucher" v-show="showModal">
    <font-awesome-icon
      class="xmark"
      icon="fa-solid fa-xmark"
      @click.self="showbox()"
    />
    <h3>領取折扣卷</h3>
    <ul class="cart-content">
      <li v-for="(item, index) in CouponData" :key="item.id">
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
                <p class="title-three" v-if="item.coupon_exp_date != null">
                  有效期限:<br />{{ item.coupon_valid_date }} ~
                  {{ item.coupon_exp_date }}
                </p>
                <p class="title-three" v-else>
                  有效期限:<br />{{ item.coupon_valid_date }} ~ 無期限
                </p>
              </div>
            </div>
            <div class="coupon-card-right">
              <button
                class="getbtn"
                value="快來領取折價卷"
                v-on:click="receive(index)"
                v-if="this.CouponData[index].getNew == null"
              >
                {{ "立即領取" }}
              </button>
              <button
                class="getbtn-1"
                disabled="disabled"
                value="已領取，快去消費吧"
                v-if="this.CouponData[index].getNew != null"
              >
                {{ "已領取" }}
              </button>
            </div>
          </div>
        </div>
      </li>
    </ul>
    <router-link to="/product" class="mid">
      <button class="btn-lightbox">前往購物</button>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      CouponData: [{}],
      // init: { 1: "立即領取", 0: "已領取" },
      unreceivedCoupon: [], //未領取的優惠卷
      showModal: false, //燈箱開關
      login: true, //是否登入
    };
  },

  computed: {},
  created() {
    this.getVoucher();
  },
  methods: {
    getVoucher() {
      fetch("http://localhost/timevolts_pika/public/phpfile/getCoupon.php")
        .then((res) => res.json())
        .then((jsonData) => {
          this.CouponData = jsonData;
          console.log(this.CouponData);
        });
    },
    showbox() {
      // 開關按鈕
      this.showModal = !this.showModal;

      console.log(this.CouponData);
    },
    // afterReceive() {
    //   console.log("AAA");
    //   console.log(this);
    //   this.target.innerText = "已領取";
    // },
    receive(e, index) {
      // 判別是否登入
      console.log(e);
      if (this.login == true) {
        // 判別是否可領取
        if (this.CouponData[e].coupon_status == 1) {
          // if ((e.target = )) {
          // 領取並傳回後端

          console.log("BBB");
          this.CouponData[e].getNew = 1;

          console.log(CouponData[e]);
          alert(`恭喜您獲得優惠卷~`);
          // 計算可以領取數量
        } else {
          // 前往登入頁面
        }
      }
      // this.GetVouchers[index].coupon_status = 0;

      // e.target.innerText = "已領取";
    },
  },

  mounted() {
    // this.unreceivedCoupon = this.CouponData.filter(
    //   (coupon) => coupon.coupon_status === 1
    // );
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

// 開關按鈕
.GetVoucherButton button {
  top: 90px;
  right: 125px;
  position: fixed;
  z-index: 101;
  color: map-get($color, primary_sub);
  background-color: map-get($color, dark_sub);
  border: 2px solid map-get($color, primary_sub);
  @media screen and (max-width: $m-breakpoint) {
    top: 70px;
    right: 70px;
    font-size: 8px;
  }
}

.mid {
  margin: 0 auto;
  display: block;
  width: fit-content;
}

// 燈箱卡片
.GetVoucher {
  aspect-ratio: 3/4;
  width: 25%;
  background-color: map-get($color, dark_sub);
  border: 10px solid map-get($color, primary_sub);
  padding: 10px;
  position: fixed;
  z-index: 103;
  top: 90px;
  left: 37.5%;
  right: 37.5%;

  @media screen and (max-width: $m-breakpoint) {
    width: 90%;
    top: 100px;
    left: 5%;
    right: 5%;
  }

  > h3 {
    font-size: 28px;
    color: aliceblue;
    text-align: center;
    position: relative;
    pointer-events: none;

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
.getbtn,
.getbtn-1 {
  border: 3px solid map-get($color, primary_sub);

  background: none;
  border-radius: 48px;
  padding: 10px 5px;
  margin: 8px;
  font-size: 18px;
  color: map-get($color, primary);
  writing-mode: sideways-lr;
}
.getbtn-1 {
  color: #ccc;
  border: 3px solid #434343;
}
</style>
