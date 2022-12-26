<template>
    <model-lightbox></model-lightbox>
    <h2 class="title">商品訂單</h2>
    <div class="wrap">
        <ul class="ulWrap">
            <li>訂單編號</li>
            <li>商品名稱</li>
            <li>下單日期</li>
            <li>金額</li>
            <li>訂單狀態</li>
            <li>查看訂單</li>
        </ul>
        <product-order-info />
    </div>
    <pagination />
</template>
<script>
import productOrderInfo from "@/components/memberCenter/productOrderInfo.vue";
import pagination from "@/components/memberCenter/pagination.vue";
import modelLightbox from "@/components/memberCenter/modalLightbox.vue";
export default {
    name: "productOrder",
    components: {
        productOrderInfo,
        pagination,
        modelLightbox,
    },
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/utils/variables";
.title {
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    line-height: 50px;
    border-bottom: 2px solid map-get($color, primary);
    font-family: "Cube11";
}
.wrap {
    width: 100%;
    padding: 5px;
    box-sizing: border-box;
}
.ulWrap {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 0;
    text-align: center;
    border-bottom: 2px solid map-get($color, primary);
}
.ulWrap > li {
    color: #fff;
    font-size: 20px;
    width: 16.666666%;
}
</style>
