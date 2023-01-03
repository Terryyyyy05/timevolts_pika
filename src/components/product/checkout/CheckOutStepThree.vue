<template>
  <div class="wrap">
    <base-card-check class="base-card">
      <form class="buyer-info">
        <div class="buyer-form-content">
          <div>
            <label class="p_lg">姓名</label>
            <span>{{ curBuyerInfo.buyerName }}</span>
          </div>
          <div>
            <label class="p_lg">電話</label>
            <span>{{ curBuyerInfo.buyerPhone }}</span>
          </div>
          <div>
            <label class="p_lg">信箱</label>
            <span>{{ curBuyerInfo.buyerEmail }}</span>
          </div>
          <div>
            <label class="p_lg">地址</label>
            <span>{{ curBuyerInfo.buyerAddress }}</span>
          </div>
          <div>
            <label class="p_lg">配送<br />時間</label>
            <span>{{ curBuyerInfo.buyerTime }}</span>
          </div>
        </div>
      </form>
    </base-card-check>
  </div>

  <div class="wrap">
    <div class="title">
      <span>商品資訊</span>
      <span>數量</span>
      <span>金額</span>
    </div>
    <ul class="content">
      <li class="item" v-for="item in items" :key="item.title">
        <div class="item-info">
          <div class="pic">
            <img :src="item.imgSrc" alt="" />
          </div>
          <div class="item-name">{{ item.title }}</div>
        </div>
        <div class="item-amount">
          <span>{{ item.amount }}</span>
        </div>
        <div class="price">
          $&nbsp;
          <span>{{ item.price }}</span>
        </div>
      </li>
    </ul>
    <div class="total-price" v-if="items[0]">
      <div class="before-discount">
        小計:
        <span
          >$
          <span>{{
            items.reduce((acu, cur) => {
              return acu + parseInt(cur.price);
            }, 0)
          }}</span></span
        >
      </div>
      <div class="discount-amount" v-if="couponAmount !== ''">
        折扣金額:
        <span
          >$ <span>-{{ couponAmount }}</span></span
        >
      </div>
      <div class="after-discount" v-if="couponAmount !== ''">
        折扣後金額:
        <span
          >$ <span>{{ afterTotalPrice + 888 }}</span></span
        >
      </div>
      <div class="freight-amount">
        運費: <span>$ <span>888</span></span>
      </div>
      <div class="total-amount">
        總金額:
        <span
          >$ <span>{{ afterTotalPrice }}</span></span
        >
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

// componnents
import BaseCardCheck from "@/components/product/checkout/BaseCardCheck.vue";

export default {
  name: "CheckOutStepThree",
  components: {
    BaseCardCheck,
  },
  setup() {
    const store = useStore();

    const curBuyerInfo = computed(() => {
      return store.state.curBuyerInfo.addressee;
    });

    const items = computed(() => {
      return store.getters.cartItems;
    });

    const afterTotalPrice = computed(() => {
      return store.state.curBuyerInfo.totalAmount;
    });

    const couponAmount = computed(() => {
      return store.state.curBuyerInfo.couponAmount;
    });

    return {
      items,
      curBuyerInfo,
      afterTotalPrice,
      couponAmount,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/utils/variables";
@import "@/assets/css/utils/mixin";

// 變數
$info-width: 50%;
$amount-width: 25%;
$price-width: 25%;

* {
  box-sizing: border-box;
}

.base-card {
  background-color: rgba(map-get($color, light_sub), 10%);
  color: map-get($color, "light");
  margin: auto;
}

.buyer-form-content {
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 36px;
  height: fit-content;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  label {
    margin-right: 50px;
  }
  span {
    width: 800px;
    font-size: 28px;
    outline: none;
    color: map-get($color, primary);
  }
}

.wrap {
  padding: 2% 4%;
}
.title {
  display: flex;
  border-bottom: 3px solid currentColor;
  padding: 0 1% 1%;

  > span:nth-child(1) {
    width: $info-width;
  }
  > span:nth-child(2) {
    width: $amount-width;
    text-align: center;
  }
  > span:nth-child(3) {
    width: $price-width;
    text-align: center;
  }
}
.content {
  font-size: 24px;
  .item:last-child {
    border-bottom: 3px solid currentColor;
  }
  .item {
    display: flex;
    margin: 1% 0;

    .item-info {
      width: $info-width;
      display: flex;
      align-items: center;
      justify-content: space-between;

      img {
        width: 100%;
      }

      .item-name {
        margin-right: 25%;
      }
    }
    .item-amount {
      width: $amount-width;
      display: flex;
      align-items: center;
      justify-content: center;
      column-gap: 5%;
    }
    .price {
      width: $price-width;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}

.total-price {
  padding: 2% 5% 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin: auto;
  width: 40%;
  row-gap: 15px;
  font-size: 24px;

  > div {
    display: flex;
    justify-content: space-between;
    // column-gap: 100px;
  }

  > div:last-child {
    padding-top: 15px;
    position: relative;
    font-size: 28px;
    background-color: map-get($color, dark_sub);
    color: map-get($color, primary);
    width: 120%;
    padding: 3% 10%;
    right: 10%;

    &::before {
      content: "";
      height: 2px;
      background-color: currentColor;
      width: 120%;

      position: absolute;
      top: 0;
      right: -10%;
    }
  }
}

@include m() {
  .base-card {
    padding: 20px 0;
  }
  .buyer-form-content {
    gap: 20px;

    label {
      margin-right: 20px;
    }
    span {
      width: 180px;
      font-size: 16px;
    }
  }

  // QQ
  $info-width: 35%;
  $amount-width: 25%;
  $price-width: 40%;
  .title {
    display: flex;
    border-bottom: 3px solid currentColor;
    padding: 0 1% 2%;

    > span:nth-child(2),
    > span:nth-child(3) {
      display: none;
    }
  }

  .content {
    font-size: 16px;

    .item {
      display: flex;
      padding: 3% 0;

      .item-info {
        width: $info-width;

        flex-direction: column;

        .pic {
          width: 70%;

          img {
            width: 100%;
          }
        }

        .item-name {
          margin-right: 0%;
        }
      }
      .item-amount {
        width: $amount-width;

        justify-content: center;
      }
      .price {
        width: $price-width;
      }
    }
  }

  .total-price {
    padding: 5% 5% 0;
    width: 80%;
    .discount {
      .btn-primary {
        font-size: 14px;
        padding: 5px 5px;
        margin: 10px 0;
      }
    }
    > div {
      column-gap: 0px;
      font-size: 14px;
    }

    > div:last-child {
      font-size: 16px;
      width: 110%;
      right: 5%;

      &::before {
        width: 110%;
        right: -5%;
      }
    }
  }
}
</style>
