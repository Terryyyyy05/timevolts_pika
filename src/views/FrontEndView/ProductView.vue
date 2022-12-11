<template>
  <all-header />
  <innerpageHeader></innerpageHeader>
  <section class="product-wrap">
    <div class="container">
      <the-heading heading="購物商城" subheading="product"></the-heading>
      <product-information />
    </div>
  </section>
  <all-footer />
</template>

<script>
import ProductInformation from "@/components/product/ProductInformation.vue";
export default {
  components: {
    // BaseCard,
    ProductInformation,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/utils/variables";
</style>
