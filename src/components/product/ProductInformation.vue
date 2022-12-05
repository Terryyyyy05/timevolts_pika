<template>
  <div class="cardList">
    <product-card v-for="card in cardList" :key="card.title">
      <div class="pic">
        <img :src="require('@/assets/image/product/product_1.png')" alt="" />
      </div>
      <h3>{{ card.title }}</h3>
      <span class="p_md price">${{ card.price }}</span>
    </product-card>
  </div>
  <show-more-button
    :trueOrFalse="distinguishTrueFalse"
    @show-more="addCardNum"
  ></show-more-button>
</template>

<script>
import { ref, reactive, computed } from "vue";
// import BaseHistoryCard from "./base/BaseHistoryCard.vue";
import ShowMoreButton from "../../components/history/UI/ShowMoreButton.vue";
import ProductCard from "./base/ProductCard.vue";

export default {
  components: {
    ShowMoreButton,
    ProductCard,
  },
  setup() {
    const perPageCardNum = ref(8);
    const cardContext = reactive([
      {
        title: "翻譯蒟蒻",
        price: 1000,
      },
      {
        title: "翻譯蒟蒻1",
        price: 1000,
      },
      {
        title: "翻譯蒟蒻2",
        price: 1000,
      },
      {
        title: "翻譯蒟蒻3",
        price: 1000,
      },
      {
        title: "翻譯蒟蒻4",
        price: 1000,
      },
      {
        title: "翻譯蒟蒻5",
        price: 1000,
      },
      {
        title: "翻譯蒟蒻6",
        price: 1000,
      },
      {
        title: "翻譯蒟蒻7",
        price: 1000,
      },
      {
        title: "翻譯蒟蒻8",
        price: 1000,
      },
      {
        title: "翻譯蒟蒻9",
        price: 1000,
      },
      {
        title: "翻譯蒟蒻10",
        price: 1000,
      },
      {
        title: "翻譯蒟蒻11",
        price: 1000,
      },
      {
        title: "翻譯蒟蒻12",
        price: 1000,
      },
      {
        title: "翻譯蒟蒻13",
        price: 1000,
      },
      {
        title: "翻譯蒟蒻14",
        price: 1000,
      },
    ]);

    const addCardNum = () => {
      return (perPageCardNum.value += 4);
    };

    const cardList = computed(() => {
      return cardContext.slice(0, perPageCardNum.value);
    });
    const distinguishTrueFalse = computed(() => {
      return perPageCardNum.value < cardContext.length ? true : false;
    });

    return {
      cardContext,
      perPageCardNum,
      cardList,
      addCardNum,
      distinguishTrueFalse,
    };
  },

  // methods: {
  //   AddVisibleInformation() {
  //     this.informationVisible += 4;
  //   },
  //   scrollToTop() {
  //     window.scrollTo(0, 0);
  //   },
  // },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/utils/variables";

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
  margin: 100px 0 50px;

  .pic {
    // width: 90%;
  }

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

.more-button {
  margin: auto 0 0 auto;
  div {
    width: 80px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      margin: auto;
      font-size: 20px;
    }
  }
}
</style>
