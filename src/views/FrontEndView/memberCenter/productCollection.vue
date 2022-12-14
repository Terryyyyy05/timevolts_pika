<template>
    <h2 class="title">商品收藏</h2>
    <div class="wrap">
        <product-collection-card-info />
    </div>
</template>
<script>
import productCollectionCardInfo from "@/components/memberCenter/productCollectionCardInfo.vue";
export default {
    name: "productCollection",
    components: {
        productCollectionCardInfo,
    },
};
</script>
<style lang="scss" scoped>
.title {
    color: #fff;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 10px;
    line-height: 50px;
}
.wrap {
    display: flex;
}
</style>
