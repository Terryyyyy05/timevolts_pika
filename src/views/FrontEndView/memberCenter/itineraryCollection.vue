<template>
    <h2 class="title">行程收藏</h2>
    <div class="wrap">
        <itinerary-collection-card-info />
    </div>
</template>
<script>
import itineraryCollectionCardInfo from "@/components/memberCenter/itineraryCollectionCardInfo.vue";
export default {
    name: "itineraryCollection",
    components: {
        itineraryCollectionCardInfo,
    },
};
</script>
<style lang="scss" scoped>
.title {
    width: 100%;
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
