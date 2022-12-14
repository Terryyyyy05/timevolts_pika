<template>
  <h2>你可能會需要...</h2>
  <div class="cardList">
    <product-card
      v-for="card in cardContext2"
      :key="card.title"
      :id="card.id"
      style="width: 100%"
    >
      <div class="pic">
        <img :src="require('@/assets/image/product/product_1.png')" alt="" />
      </div>
      <h3>{{ card.title }}</h3>
      <span class="p_md price">${{ card.price }}</span>
    </product-card>
  </div>
</template>

<script>
import ProductCard from "../../base/ProductCard.vue";
import { cardContext } from "../../js/data";

export default {
  components: {
    ProductCard,
  },
  setup() {
    const cardContext2 = cardContext.slice(1, 4);

    return {
      cardContext2,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/utils/variables";

img {
  width: 100%;
  vertical-align: top;
}

h2 {
  color: map-get($color, primary);
  font-size: 20px;
  margin: 50px 0 20px;
}

.cardList {
  // width: 60%;
  display: flex;
  flex-direction: column;
  row-gap: 30px;

  margin-left: 30px;

  .pic {
    // width: 90%;
  }

  h3 {
    color: map-get($color, primary);
    text-align: center;
    font-size: 20px;

    margin-bottom: 10px;
  }

  .price {
    color: map-get($color, primary);
    display: block;
    text-align: center;
  }
}
</style>
