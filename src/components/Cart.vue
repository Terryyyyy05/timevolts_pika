<template>
  <div class="cart" v-show="cartStatus">
    <font-awesome-icon
      class="xmark"
      icon="fa-solid fa-xmark"
      @click="closeCart"
    />
    <h3>購物車</h3>
    <ul class="cart-content">
      <li v-for="item in items" :key="item.title">
        <div class="cart-item" :data-item="item.title">
          <div class="pic">
            <img :src="item.imgSrc" alt="" />
          </div>
          <div class="item-content">
            <h4>{{ item.title }}</h4>
            <span>$ {{ item.price }}</span>
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
          <div
            class="item-dele"
            :data-title="item.title"
            @click="removeFromCart"
          >
            <font-awesome-icon icon="fa-solid fa-trash-can" />刪除
          </div>
        </div>
      </li>
    </ul>
    <!-- <router-link to="/ProductCheckOut" class="mid">
    </router-link> -->
    <button class="btn-lightbox" @click="goCheckOut">結帳</button>
  </div>
</template>

<script>
import { cardContext } from "@/components/product/js/data";
import { computed } from "vue";

// cart
import { useStore } from "vuex";

export default {
  name: "cart",
  props: {
    cartStatus: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["xmark", "goCheckOut"],
  setup(props, { emit }) {
    const store = useStore();

    // computed
    const items = computed(() => {
      return store.getters.cartItems;
    });

    // methods
    const removeFromCart = (e) => {
      console.log(e.target.dataset.title);
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

    const closeCart = () => {
      emit("xmark");
    };

    const goCheckOut = () => {
      emit("goCheckOut");
    };

    return {
      items,
      removeFromCart,
      // DOM
      // dele,
      // methods
      addNum,
      minusNum,
      closeCart,
      goCheckOut,
    };
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

.minus-plus {
  pointer-events: none;
}

.cart {
  aspect-ratio: 3/4;
  width: 25%;
  background-color: map-get($color, dark_sub);
  border: 10px solid map-get($color, primary_sub);
  padding: 10px;

  position: fixed;
  z-index: 103;
  right: 140px;
  top: 90px;

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
    height: 75%;
    margin: 5% 0;

    display: flex;
    flex-direction: column;
    row-gap: 5%;

    overflow: scroll;

    .cart-item {
      display: flex;
      font-size: 20px;
      color: aliceblue;

      .pic {
        width: 30%;
        img {
          width: 100%;
        }
      }

      .item-content {
        width: 30%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        row-gap: 15%;
        h4 {
          font-size: 20px;
        }
      }

      .item-amount {
        width: 20%;
        display: flex;
        align-items: center;
        justify-content: center;
        column-gap: 5%;

        > div {
          cursor: pointer;
        }
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

        .pic {
          width: 25%;
        }

        .item-content {
          width: 35%;

          h4 {
            font-size: 16px;
          }
        }
      }
    }
  }
}
</style>
