<template>
  <div class="cart" v-show="cartStatus">
    <font-awesome-icon
      class="xmark"
      icon="fa-solid fa-xmark"
      @click="$emit('xmark')"
    />
    <h3>購物車</h3>
    <ul>
      <li>
        <div class="cart-item">
          <div class="pic">
            <img
              :src="require('@/assets/image/product/product_1.png')"
              alt=""
            />
          </div>
          <div class="item-content">
            <h4></h4>
            <span></span>
          </div>
          <div class="item-amount">
            <font-awesome-icon
              class="minus-plus"
              icon="fa-solid fa-minus"
              @click="minusNum"
            />
            <span>{{ totalNumber }}</span>
            <font-awesome-icon
              class="minus-plus"
              icon="fa-solid fa-plus"
              @click="addNum"
            />
          </div>
          <div class="item-dele"></div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { cardContext } from "@/components/product/js/data";
import { ref } from "vue";

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
}
</style>
