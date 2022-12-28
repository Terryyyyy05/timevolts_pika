<template>
  <all-header />
  <innerpageHeader></innerpageHeader>
  <div class="product-item">
    <section class="need-wrap">
      <Need v-if="itemClassName !== ''" />
    </section>
    <section class="item-content-wrap">
      <div class="container">
        <ItemContent />
      </div>
      <router-link to="/product" class="btn-location">
        <button class="btn-primary">返回商品頁</button>
      </router-link>
    </section>
  </div>
  <all-footer />
</template>

<script>
import Need from "../../components/product/productItem/need/Need.vue";
import ItemContent from "@/components/product/productItem/content/ItemContent.vue";
import { useStore } from "vuex";
import { computed } from "vue";

export default {
  components: {
    Need,
    ItemContent,
  },
  setup() {
    const store = useStore();
    const itemClassName = computed(() => store.state.itemClassName || "");

    return {
      itemClassName,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/utils/variables";
@import "@/assets/css/utils/mixin";

.btn-location {
  width: fit-content;
  display: block;
  margin: 0 auto;
}
.product-item {
  display: flex;
  column-gap: 5%;
  padding-top: 200px;
  margin-bottom: 150px;
}
.need-wrap {
  width: 12%;
  margin-left: 30px;
  padding-bottom: 50px;
}

.item-content-wrap {
  width: 65%;
  color: map-get($color, "primary");
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .btn-secondary {
    margin: 100px auto;
  }
}

@include m() {
  .product-item {
    padding-top: 50px;
    margin-bottom: 50px;
  }
  .need-wrap {
    display: none;
  }

  .product-item {
    display: flex;
    column-gap: 5%;

    // flex-direction: column;
  }

  .item-content-wrap {
    width: 100%;
    color: map-get($color, "primary");
    .btn-secondary {
      display: none;
    }
  }
}
</style>
