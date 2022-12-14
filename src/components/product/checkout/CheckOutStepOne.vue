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
        <button class="btn-primary">使用折扣券</button>
      </div>
      <div class="count-total-price">
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
        <div class="discount-amount">
          折扣金額: <span>$ <span>-200</span></span>
        </div>
        <div class="after-discount">
          折扣後金額: <span>$ <span>1800</span></span>
        </div>
        <div class="freight-amount">
          運費: <span>$ <span>200</span></span>
        </div>
        <div class="total-amount">
          總金額: <span>$ <span>2000</span></span>
        </div>
      </div>
    </div>
    <div class="no-item" v-else>
      <span>你是不是買不起?</span>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

// test
import modal from "@/components/modal.vue";

export default {
  name: "CheckOutStepOne",
  components: {
    modal,
  },
  setup() {
    const store = useStore();

    // computed
    const items = computed(() => {
      return store.getters.cartItems;
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

    return {
      items,
      removeFromCart,
      minusNum,
      addNum,
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
