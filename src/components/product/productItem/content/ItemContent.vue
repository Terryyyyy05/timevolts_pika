<template>
  <div class="flex">
    <div class="pic">
      <img
        :src="require('@/assets/image/product/product_1.png')"
        alt=""
        ref="img"
      />
    </div>
    <div class="content">
      <h2 id="title" ref="title">{{ cardContext[0].title }}</h2>
      <p class="p_lg">商品用途： <br />{{ cardContext[0].purpose }}</p>
      <div>
        <span class="p_md">價錢： $</span>
        <span class="p_md" id="price" ref="price">{{
          cardContext[0].price * totalNumber
        }}</span>
      </div>

      <div class="num p_md">
        <font-awesome-icon
          class="minus-plus"
          icon="fa-solid fa-minus"
          @click="minusNum"
        />
        <span id="amount" ref="amount">{{ totalNumber }}</span>
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
        <button class="btn-primary" @click="addToCart()">加入購物車</button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { cardContext } from "../../js/data";

// test
import { storage } from "@/components/product/js/localStorage";
import { useStore } from "vuex";

export default {
  components: {},
  setup() {
    const store = useStore();
    const totalNumber = ref(1);

    const minusNum = () => {
      if (totalNumber.value > 1) {
        return (totalNumber.value -= 1);
      }
    };

    const addNum = () => {
      totalNumber.value += 1;
    };

    // test
    // const title = ref(null);
    // const price = ref(null);
    // const amount = ref(null);
    // const img = ref(null);

    const addItem = () => {
      // let newItemData = {
      //   title: title.value.innerText,
      //   price: price.value.innerText,
      //   amount: amount.value.innerText,
      //   imgSrc: img.value.src,
      // };

      let totalItemData = [];

      if (storage.get("memId")) {
        totalItemData = storage.get("memId");
      }

      totalItemData.push(newItemData);
      storage.set("memId", totalItemData);

      console.log(totalItemData);
      // console.log(storage.get("memId"));

      store.commit("addItem", totalItemData);
    };

    const title = ref(null);
    const price = ref(null);
    const amount = ref(null);
    const img = ref(null);
    const addToCart = () => {
      let newProduct = {
        title: title.value.innerText,
        price: price.value.innerText,
        amount: amount.value.innerText,
        imgSrc: img.value.src,
      };

      store.commit("addToCart", newProduct);
    };

    // onMounted(() => {

    // });

    return {
      cardContext,
      totalNumber,
      minusNum,
      addNum,
      addItem,
      addToCart,
      // DOM
      title,
      price,
      amount,
      img,
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
