<template>
  <div class="flex">
    <div class="pic">
      <img
        :src="`../new_img2/${productInfo2.list.pro_img}`"
        alt=""
        ref="img"
        v-if="productInfo2.list.pro_img !== undefined"
      />
      <!-- <img
        :src="IMG_URL(productInfo2.list.pro_img)"
        alt=""
        ref="img"
        v-if="productInfo2.list.pro_img !== undefined"
      /> -->
    </div>
    <div class="content">
      <h2 id="title" ref="title">{{ productInfo2.list.pro_name }}</h2>
      <p class="p_lg">商品用途： <br />{{ productInfo2.list.pro_info }}</p>
      <div>
        <span class="p_md">價錢： $</span>
        <span class="p_md" id="price" ref="price">{{
          productInfo2.list.pro_price * totalNumber
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
        <button class="btn-secondary" @click="addToCart()">加入購物車</button>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, ref, onMounted } from "vue";
import { cardContext } from "../../js/data";
import { useStore } from "vuex";
import { IMG_URL } from "@/assets/js/img_path.js";
import { BASE_URL } from "@/assets/js/commom.js";

// test
import { onBeforeRouteUpdate, onBeforeRouteLeave, useRoute } from "vue-router";

export default {
  components: {},
  setup() {
    const store = useStore();
    const route = useRoute();

    const totalNumber = ref(1);

    const minusNum = () => {
      if (totalNumber.value > 1) {
        return (totalNumber.value -= 1);
      }
    };

    const addNum = () => {
      totalNumber.value += 1;
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

    // test
    const productInfo2 = reactive({ list: [] });
    const fetchAbc = (id) => {
      const formData = new FormData();
      formData.append("pro_id", id);

      fetch(`${BASE_URL}getOneProduct.php`, {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((res) => {
          const result = res;
          productInfo2.list = result[0];

          store.commit("addItemClassName", productInfo2.list.pro_class_name);
        })
        .catch((error) => console.log(error));
    };

    onMounted(() => {
      fetchAbc(route.params.id);
    });

    onBeforeRouteUpdate(async (to, from) => {
      // console.log("QQ");
      // console.log(productInfo);
      // console.log(cardContext);

      // Object.assign(
      //   productInfo,
      //   cardContext.find((i) => i.id === parseInt(to.params.id))
      // );

      // console.log(productInfo);
      // console.log(cardContext);

      fetchAbc(to.params.id);
    });

    onBeforeRouteLeave(() => {
      store.commit("addItemClassName", "");
    });

    return {
      cardContext,
      totalNumber,
      minusNum,
      addNum,
      addToCart,
      // test
      productInfo2,
      IMG_URL,
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
@import "@/assets/css/utils/mixin";
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
      align-items: center;
    }
  }
}

@include m() {
  .flex {
    margin-top: 50px;
    flex-direction: column;
    align-items: center;
    .pic {
      width: 80%;
    }
    .content {
      width: 90%;

      > :nth-child(1) {
        font-size: 26px;
        margin-bottom: 30px;
        margin-top: 30px;
      }

      > :nth-child(2) {
        margin-bottom: 50px;
      }

      > :nth-child(3) {
        margin-bottom: 30px;

        > span {
          font-size: 20px;
        }
      }

      > :nth-child(4) {
        align-items: flex-end;
      }

      > :nth-child(5) {
        margin-bottom: 50px;
      }
    }
  }
}
</style>
