<template>
    <h2 class="title">行程收藏</h2>
    <div class="wrap">
        <itinerary-collection-card-info />
    </div>
    <detail-lightbox></detail-lightbox>
    <pagination />
</template>
<script>
import itineraryCollectionCardInfo from "@/components/memberCenter/itineraryCollectionCardInfo.vue";
import pagination from "@/components/memberCenter/pagination.vue";
import detailLightbox from "@/components/memberCenter/detailLightbox.vue";

export default {
    name: "itineraryCollection",
    components: {
        itineraryCollectionCardInfo,
        pagination,
        detailLightbox,
    },
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/utils/variables";
.title {
    color: #fff;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 10px;
    line-height: 50px;
    border-bottom: 2px solid map-get($color, primary);
    color: #fff;
    font-family: "Cube11";
}
.wrap {
    display: flex;
}
</style>
