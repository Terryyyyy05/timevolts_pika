<template>
  <h2>你可能會需要...</h2>
  <div class="cardList">
    <product-card
      v-for="card in cardContext2.list"
      :key="card.pro_name"
      :id="card.pro_id"
      style="width: 100%"
    >
      <div class="pic">
        <img :src="require('@/assets/image/product/product_1.png')" alt="" />
      </div>
      <h3>{{ card.pro_name }}</h3>
      <span class="p_md price">${{ card.pro_price }}</span>
    </product-card>
  </div>
</template>

<script>
import { reactive } from "@vue/reactivity";
import { onMounted } from "vue";
import ProductCard from "../../base/ProductCard.vue";
import { cardContext } from "../../js/data";
import { BASE_URL } from "@/assets/js/commom";

export default {
  components: {
    ProductCard,
  },
  setup() {
    // const cardContext2 = cardContext.slice(0, 5);
    const cardContext2 = reactive({ list: [] });
    const fetchAbc = () => {
      fetch(`/api_server/getProducts.php`)
        .then((res) => res.json())
        .then((result) => {
          cardContext2.list = result;
        });
    };
    onMounted(() => {
      fetchAbc();
      console.log(cardContext2);
    });
    return {
      cardContext2,
      // cardContext3,
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
