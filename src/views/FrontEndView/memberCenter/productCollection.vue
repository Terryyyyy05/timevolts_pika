<template>
    <h2 class="title">商品收藏</h2>
    <div class="wrap">
        <product-collection-card-info />
    </div>
    <pagination />
</template>
<script>
import productCollectionCardInfo from "@/components/memberCenter/productCollectionCardInfo.vue";
import pagination from "@/components/memberCenter/pagination.vue";
export default {
    name: "productCollection",
    components: {
        productCollectionCardInfo,
        pagination,
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
