<template>
  <div class="flex">
    <div class="pic">
      <img :src="require('@/assets/image/product/product_1.png')" alt="" />
    </div>
    <div class="content">
      <h2>{{ cardContext[0].title }}</h2>
      <p class="p_lg">商品用途： <br />{{ cardContext[0].purpose }}</p>
      <div>
        <span class="p_md">價錢： </span>
        <span class="p_md">${{ cardContext[0].price }}</span>
      </div>

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
      color: map-get($color, accent);
      font-size: 38px;
      margin-bottom: 50px;
    }

    > :nth-child(2) {
      margin-bottom: 100px;
    }

    > :nth-child(3) {
      margin-bottom: 30px;

      > span {
        font-size: 24px;
      }
      > span:nth-child(2) {
        color: map-get($color, accent);
      }
    }

    > :nth-child(4) {
      margin-bottom: 50px;
      display: flex;
      column-gap: 10px;

      > span {
        color: map-get($color, accent);
        font-size: 28px;
      }
    }

    > :nth-child(5) {
      display: flex;
      column-gap: 50px;
      // margin-bottom: 50px;
    }
  }
}
</style>
