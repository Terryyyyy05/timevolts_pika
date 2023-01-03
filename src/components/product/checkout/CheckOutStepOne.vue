<template>
  <div class="wrap">
    <div class="title">
      <span>商品資訊</span>
      <span>數量</span>
      <span>金額</span>
    </div>
    <ul class="content">
      <li
        class="item"
        v-for="item in items"
        :key="item.title"
        :data-item="item.title"
      >
        <div class="item-info">
          <div class="pic">
            <img :src="item.imgSrc" alt="" />
          </div>
          <div class="item-name">{{ item.title }}</div>
        </div>
        <div class="item-amount">
          <div @click="minusNum">
            <font-awesome-icon class="minus-plus" icon="fa-solid fa-minus" />
          </div>
          <span>{{ item.amount }}</span>
          <div @click="addNum">
            <font-awesome-icon class="minus-plus" icon="fa-solid fa-plus" />
          </div>
        </div>
        <div class="price-and-dele">
          <div class="price">
            $
            <span>{{ item.price }}</span>
          </div>
          <div
            class="item-dele"
            :data-title="item.title"
            @click="removeFromCart"
          >
            <font-awesome-icon
              icon="fa-solid fa-trash-can"
              :data-title="item.title"
            />
            <span :data-title="item.title"> 刪除 </span>
          </div>
        </div>
      </li>
    </ul>
    <div class="total-price" v-if="items[0]">
      <div class="discount">
        <button class="btn-primary" @click="clickOpenModal">使用折扣券</button>
      </div>
      <div class="count-total-price">
        <div class="before-discount">
          小計:
          <span
            >$ <span>{{ originTotalPrice }}</span></span
          >
        </div>
        <div class="discount-amount" v-if="couponStatus">
          折扣金額:
          <span
            >$ <span>-{{ couponUse.price }}</span></span
          >
        </div>
        <div class="after-discount" v-if="couponStatus">
          折扣後金額:
          <span
            >$ <span>{{ originTotalPrice - couponUse.price }}</span></span
          >
        </div>
        <div class="freight-amount">
          運費:
          <span
            >$ <span>{{ freight }}</span></span
          >
        </div>
        <div class="total-amount">
          總金額:
          <span
            >$ <span>{{ afterTotalPrice }}</span></span
          >
        </div>
      </div>
    </div>
    <div class="no-item" v-else>
      <span>你是不是買不起?</span>
    </div>
  </div>
  <modal
    :modalStatus="modalStatus"
    class="modal-location"
    @closeModal="() => (modalStatus = false)"
  >
    <coupon @coupon="useCoupon" />
  </modal>
  <div v-show="modalStatus" class="muted-background"></div>
</template>

<script>
import { computed, reactive, ref, watchEffect } from "vue";
import { useStore } from "vuex";

// test
import modal from "@/components/modal.vue";
import coupon from "@/components/product/coupon/coupon.vue";

export default {
  name: "CheckOutStepOne",
  components: {
    modal,
    coupon,
  },
  setup() {
    const store = useStore();

    // test
    const modalStatus = ref(false);
    const couponStatus = ref(false);

    const freight = ref(888);
    const couponUse = reactive({
      price: "",
      condition: "",
    });

    // computed
    const items = computed(() => {
      return store.getters.cartItems;
    });

    const originTotalPrice = computed(() =>
      store.getters.cartItems.reduce((acu, cur) => {
        return acu + parseInt(cur.price);
      }, 0)
    );

    const afterTotalPrice = computed(() => {
      return (
        store.getters.cartItemsTotalAmount - freight.value - couponUse.price
      );
    });

    // watchEffect
    watchEffect(() => {
      store.commit("cartTotalAmount", afterTotalPrice.value);
    });

    // methods
    const removeFromCart = (e) => {
      console.log(e.target.dataset.title);
      console.log(e.target);
      store.commit("removeFromCart", e.target.dataset.title);
    };

    const minusNum = (e) => {
      const clickTitle = e.target.parentNode.parentNode.dataset.item;
      store.commit("minusAmount", clickTitle);
    };

    const addNum = (e) => {
      const clickTitle = e.target.parentNode.parentNode.dataset.item;
      store.commit("addAmount", clickTitle);
    };

    const clickOpenModal = () => {
      return (modalStatus.value = !modalStatus.value);
    };

    const useCoupon = (item) => {
      modalStatus.value = false;
      couponStatus.value = true;
      couponUse.price = item.coupon_discount_number;
      couponUse.condition = item.coupon_pricing_condition;

      store.commit("cartCouponAmount", couponUse.price);

      console.log(couponUse);
      console.log(item);
    };

    return {
      items,
      removeFromCart,
      minusNum,
      addNum,
      // test
      modalStatus,
      couponStatus,
      clickOpenModal,
      useCoupon,
      originTotalPrice,
      freight,
      couponUse,
      afterTotalPrice,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/utils/variables";
@import "@/assets/css/utils/mixin";

// 變數
$info-width: 45%;
$amount-width: 20%;
$price-width: 35%;

* {
  box-sizing: border-box;
}

// 父層設定modal位置與寬高
.modal-location {
  aspect-ratio: 49/50;
  width: 30%;
  // height: fit-content;

  position: fixed;
  z-index: 103;
  right: 0px;
  left: 0px;
  top: 0px;
  bottom: 0px;
  margin: auto;
}

@include m() {
  .modal-location {
    width: unset;
    aspect-ratio: unset;
    height: 100vh;
  }
}

// modal打開後背景壓暗
.muted-background {
  width: 100vw;
  height: 100vh;
  background-color: rgba(map-get($color, body_dark), 0.6);

  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
}

.minus-plus {
  pointer-events: none;
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
  }
  > span:nth-child(3) {
    width: $price-width;
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
      // justify-content: space-between;
      box-sizing: border-box;

      .pic {
        width: 50%;
      }

      img {
        width: 100%;
      }

      .item-name {
        width: 45%;
        // margin-right: 10%;
        // margin-left: 10%;
        padding: 0 5% 0 5%;
        // text-align: center;
      }
    }
    .item-amount {
      width: $amount-width;
      display: flex;
      align-items: center;
      column-gap: 5%;

      > div {
        cursor: pointer;
      }
    }
    .price-and-dele {
      width: $price-width;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-right: 5%;

      .item-dele {
        margin-right: 5%;
        cursor: pointer;
      }
    }
  }
}

.total-price {
  display: flex;
  justify-content: space-between;
  padding: 2% 5% 0;

  .count-total-price {
    display: flex;
    flex-direction: column;
    row-gap: 15px;
    font-size: 24px;

    > div {
      display: flex;
      justify-content: space-between;
      column-gap: 100px;
    }

    > div:last-child {
      padding-top: 15px;
      position: relative;
      font-size: 28px;
      background-color: map-get($color, dark_sub);
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
}

.no-item {
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 48px;
  padding: 10% 0;
}

@include m() {
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
    font-size: 14px;

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
          width: unset;
        }
      }
      .item-amount {
        width: $amount-width;

        justify-content: center;
      }
      .price-and-dele {
        width: $price-width;
        padding-right: 0%;
        justify-content: space-around;
        .item-dele {
          margin-right: 0%;
        }
      }
    }
  }

  .total-price {
    .discount {
      .btn-primary {
        font-size: 14px;
        padding: 5px 5px;
        margin: 10px 0;
      }
    }
    .count-total-price {
      row-gap: 10px;
      font-size: 14px;
      width: 60%;

      > div {
        column-gap: 0px;
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

  .no-item {
    font-size: 28px;
    padding: 10% 0;
  }
}
</style>
