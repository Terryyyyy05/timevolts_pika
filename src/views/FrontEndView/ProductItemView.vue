<template>
  <!-- test -->
  <!-- <div
    style="width: 50px; height: 50px; background-color: aliceblue"
    @click="toggleCart"
  ></div> -->
  <!-- <cart :cartStatus="cartStatus" /> -->
  <!-- test -->
  <div class="product-item">
    <section class="need-wrap">
      <Need />
    </section>
    <section class="item-content-wrap">
      <div class="container">
        <ItemContent />
      </div>
      <router-link to="/product">
        <button class="btn-secondary">返回商品頁</button>
      </router-link>
    </section>
  </div>
</template>

<script>
import Need from "../../components/product/productItem/need/Need.vue";
import ItemContent from "@/components/product/productItem/content/ItemContent.vue";

// test
// import { ref } from "vue";
// import Cart from "@/components/Cart.vue";

export default {
  components: {
    Need,
    ItemContent,

    // test
    // Cart,
  },
  setup() {
    // const cartStatus = ref(true);
    // const toggleCart = () => {
    //   return (cartStatus.value = !cartStatus.value);
    // };
    // return {
    //   cartStatus,
    //   toggleCart,
    // };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/utils/variables";

.product-item {
  display: flex;
  column-gap: 5%;
}
.need-wrap {
  width: 12%;
  margin-left: 30px;
}

.item-content-wrap {
  width: 65%;
  color: map-get($color, "primary");
  .btn-secondary {
    margin: 100px auto;
  }
}
</style>
