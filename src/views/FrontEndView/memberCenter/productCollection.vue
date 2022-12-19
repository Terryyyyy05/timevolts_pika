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
@import '@/assets/css/utils/variables';
.title {
    color: #fff;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 10px;
    line-height: 50px;
    border-bottom: 2px solid map-get($color, primary);
    font-family:"Cube11" ;
}
.wrap {
    display: flex;
}
.page {
    margin-bottom: 0;
    padding-bottom: 0;
}
</style>
