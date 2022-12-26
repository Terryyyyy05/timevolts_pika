<template>
    <model-lightbox
        v-if="modalStatus"
        @closeModal="() => (modalStatus = false)"
    >
        <detail-lightbox></detail-lightbox>
    </model-lightbox>
    <h2 class="title">行程訂單</h2>
    <div class="wrap">
        <ul class="ulWrap">
            <li>訂單編號</li>
            <li>行程名稱</li>
            <li>訂單日期</li>
            <li>出發日期</li>
            <li>結束日期</li>
            <li>金額</li>
            <li>訂單狀態</li>
            <li>查看訂單</li>
        </ul>
        <itinerary-order-info @clickOpenModal="changeStatus" />
    </div>
    <pagination />
</template>
<script>
import itineraryOrderInfo from "@/components/memberCenter/itineraryOrderInfo.vue";
import pagination from "@/components/memberCenter/pagination.vue";
import detailLightbox from "@/components/memberCenter/detailLightbox.vue";
import modelLightbox from "@/components/memberCenter/modalLightbox.vue";
export default {
    name: "itineraryOrder",
    components: {
        itineraryOrderInfo,
        pagination,
        detailLightbox,
        modelLightbox,
    },
    data() {
        return {
            modalStatus: false,
        };
    },
    computed: {},
    methods: {
        changeStatus() {
            this.modalStatus = !this.modalStatus;
        },
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
    width: 12.5%;
}
.sub-content {
    position: relative;
}
.modal-container {
    width: 70%;
    position: fixed;
    left: 0;
    right: 0;
    top: 80px;
    bottom: 0;
    margin: 0 auto;
    overflow: auto;
    height: 80vh;
    z-index: 100000;
}
</style>
