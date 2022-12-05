<template>
  <innerpageHeader></innerpageHeader>
  <section class="product-wrap">
    <div class="container">
      <the-heading heading="購物商城" subheading="product"></the-heading>
      <product-information />
    </div>
  </section>
</template>

<script>
// import BaseCard from "@/components/all_UI/BaseCard.vue";
import ProductInformation from "@/components/product/ProductInformation.vue";
import innerpageHeader from "@/components/innerpageHeader.vue"
export default {
  components: {
    // BaseCard,
    ProductInformation,
    innerpageHeader,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/utils/variables";
</style>
