<template>
  <div class="cart" v-show="cartStatus">
    <font-awesome-icon
      class="xmark"
      icon="fa-solid fa-xmark"
      @click="$emit('xmark')"
    />
    <h3>購物車</h3>
    <ul class="cart-content">
      <li v-for="item in items" :key="item.title">
        <div class="cart-item">
          <div class="pic">
            <img
              :src="require('@/assets/image/product/product_1.png')"
              alt=""
            />
          </div>
          <div class="item-content">
            <h4>{{ item.title }}</h4>
            <span>{{ item.price }}</span>
          </div>
          <div class="item-amount">
            <font-awesome-icon
              class="minus-plus"
              icon="fa-solid fa-minus"
              @click="minusNum"
            />
            <span>{{ item.amount }}</span>
            <font-awesome-icon
              class="minus-plus"
              icon="fa-solid fa-plus"
              @click="addNum"
            />
          </div>
          <div class="item-dele">
            <font-awesome-icon icon="fa-solid fa-trash-can" />刪除
          </div>
        </div>
      </li>
    </ul>
    <button class="btn-lightbox">結帳</button>
  </div>
</template>

<script>
import { cardContext } from "@/components/product/js/data";
import { ref, reactive, computed } from "vue";

// cart
import { useStore } from "vuex";

export default {
  name: "cart",
  props: {
    cartStatus: {
      type: Boolean,
      default: true,
    },
  },
  emits: ["xmark"],
  setup(props, { emit }) {
    emit("xmark");

    // cart

    const store = useStore();

    const items = computed(() => {
      return store.getters.cartItems;
    });

    return {
      items,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/utils/variables";
.xmark {
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 1;

  font-size: 28px;
  cursor: pointer;
  color: map-get($color, primary_sub);
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
      }
      .item-dele {
        width: 20%;
        display: flex;
        align-items: center;
        justify-content: center;
        column-gap: 5%;
      }
    }
  }

  > button{
    margin: auto;
  }
}
</style>
