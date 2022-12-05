<template>
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

// import { reactive } from "vue";

export default {
  components: {
    Need,
    ItemContent,
  },
  setup() {
    return {
      // cardContext,
    };
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
  width: 60%;
  color: map-get($color, "primary");
  .btn-secondary {
    margin: 100px auto;
  }
}
</style>
