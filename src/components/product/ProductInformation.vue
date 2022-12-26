<template>
  <div class="cardList">
    <product-card
      v-for="card in cardContext2.list"
      :key="card.pro_name"
      :id="card.pro_id"
    >
      <div class="pic">
        <img :src="require('@/assets/image/product/product_1.png')" alt="" />
      </div>
      <h3>{{ card.pro_name }}</h3>
      <span class="p_md price">${{ card.pro_price }}</span>
    </product-card>
  </div>
  <show-more-button
    :trueOrFalse="distinguishTrueFalse"
    @show-more="addCardNum"
    class="mb"
  ></show-more-button>
</template>

<script>
import { ref, computed, reactive, onMounted } from "vue";
import { cardContext } from "./js/data.js";
import { BASE_URL } from "@/assets/js/commom";

import ShowMoreButton from "../../components/history/UI/ShowMoreButton.vue";
import ProductCard from "./base/ProductCard.vue";

export default {
  components: {
    ShowMoreButton,
    ProductCard,
  },
  setup() {
    const perPageCardNum = ref(8);

    const addCardNum = () => {
      return (perPageCardNum.value += 4);
    };

    // const cardList = computed(() => {
    //   return cardContext.slice(0, perPageCardNum.value);
    // });

    const distinguishTrueFalse = computed(() => {
      return perPageCardNum.value < cardContext.length ? true : false;
    });

    // test
    const cardContext2 = reactive({ list: [] });
    const fetchAbc = () => {
      fetch(`${BASE_URL}/getProducts.php`)
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
      perPageCardNum,
      // cardList,
      addCardNum,
      distinguishTrueFalse,
      cardContext2,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/utils/variables";
@import "@/assets/css/utils/mixin";

img {
  width: 100%;
  vertical-align: top;
}

.cardList {
  display: flex;
  flex-wrap: wrap;
  column-gap: 6%;
  padding-left: 3%;
  row-gap: 100px;
  margin: 100px 0 100px;

  h3 {
    color: map-get($color, primary);
    text-align: center;
    font-size: 24px;

    margin-bottom: 10px;
  }

  .price {
    color: map-get($color, primary);
    display: block;
    text-align: center;
  }
}

// .more-button {
//   margin: auto 0 0 auto;
//   div {
//     width: 80px;
//     height: 40px;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     span {
//       margin: auto;
//       font-size: 20px;
//     }
//   }
// }

.mb {
  margin-bottom: 100px;
}

@include m() {
  .cardList {
    justify-content: space-between;
    column-gap: 0%;
    padding-left: 0%;
    row-gap: 50px;
    margin: 80px 0 50px;

    h3 {
      font-size: 16px;
      margin-bottom: 15px;
    }
  }

  .mb {
    margin-bottom: 50px;
  }
}
</style>
