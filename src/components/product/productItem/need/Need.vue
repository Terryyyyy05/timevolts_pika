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
        <img :src="`/cgd103/g3/new_img2/${card.pro_img}`" alt="" />
        <!-- <img :src="IMG_URL(card.pro_img)" alt="" /> -->
      </div>
      <h3>{{ card.pro_name }}</h3>
      <span class="p_md price">${{ card.pro_price }}</span>
    </product-card>
  </div>
</template>

<script>
import { reactive } from "@vue/reactivity";
import { computed, onMounted } from "vue";
import ProductCard from "../../base/ProductCard.vue";
import { BASE_URL } from "@/assets/js/commom";
import { IMG_URL } from "@/assets/js/img_path.js";
import { useStore } from "vuex";
import { onBeforeRouteUpdate, useRoute } from "vue-router";

export default {
  components: {
    ProductCard,
  },
  setup() {
    const store = useStore();
    const route = useRoute();

    const cardContext2 = reactive({ list: [] });
    const itemClassName = computed(() => store.state.itemClassName);

    const fetchAbc = () => {
      fetch(`${BASE_URL}getProducts.php`)
        .then((res) => res.json())
        .then((result) => {
          cardContext2.list = result;

          cardContext2.list = cardContext2.list.filter(
            (item) =>
              item.pro_class_name === itemClassName.value &&
              item.pro_id != route.params.id
          );

          if (cardContext2.list.length > 2) {
            cardContext2.list = cardContext2.list.slice(0, 2);
          }
        });
    };

    onBeforeRouteUpdate(() => {
      fetchAbc();
    });

    onMounted(() => {
      fetchAbc();
    });
    return {
      cardContext2,
      IMG_URL,
      itemClassName,
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
  margin: 0px 0 20px;
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
