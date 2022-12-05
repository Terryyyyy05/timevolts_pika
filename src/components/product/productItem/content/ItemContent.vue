<template>
  <div class="flex">
    <div class="pic">
      <img :src="require('@/assets/image/product/product_1.png')" alt="" />
    </div>
    <div class="content">
      <h2>商品名稱：{{ cardContext[0].title }}</h2>
      <span class="p_md">商品適用年代： {{ cardContext[0].year }}</span>
      <p class="p_lg">商品用途： <br />{{ cardContext[0].purpose }}</p>
      <span class="p_md">價錢： ${{ cardContext[0].price }}</span>
      <div class="num p_md">
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
      <div class="btns">
        <span>
          <img src="@/assets/image/product/heart.svg" alt="" />
        </span>
        <button class="btn-primary">加入購物車</button>
      </div>
    </div>
  </div>
</template>

<script>
// import ProductCard from "../../base/ProductCard.vue";
import { ref } from "vue";

import { cardContext } from "../../js/data";

export default {
  components: {},
  setup() {
    const totalNumber = ref(1);

    const minusNum = () => {
      if (totalNumber.value > 1) {
        return (totalNumber.value -= 1);
      }
    };

    const addNum = () => {
      totalNumber.value += 1;
      console.log(totalNumber.value);
    };

    return {
      cardContext,
      totalNumber,
      minusNum,
      addNum,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/utils/variables";
.pic > img {
  width: 100%;
  vertical-align: top;
}

.minus-plus {
  font-size: 24px;
  cursor: pointer;
  color: #eee;
}

.flex {
  display: flex;
  column-gap: 5%;
  margin-top: 150px;
  .pic {
    width: 50%;
    display: flex;
    align-items: center;
  }
  .content {
    width: 50%;

    > :nth-child(1) {
      font-size: 38px;
      margin-bottom: 20px;
    }

    > :nth-child(2) {
      display: block;
      margin-bottom: 50px;
    }

    > :nth-child(3) {
      margin-bottom: 80px;
    }

    > :nth-child(4) {
      display: block;
      margin-bottom: 50px;
    }

    > :nth-child(5) {
      margin-bottom: 50px;
      display: flex;
      column-gap: 10px;

      > span {
        font-size: 28px;
      }
    }

    > :nth-child(6) {
      display: flex;
      column-gap: 50px;
      // margin-bottom: 50px;
    }
  }
}
</style>
