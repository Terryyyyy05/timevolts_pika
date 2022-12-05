<template>
    <div class="container">
        <the-heading
            heading="時光行程-期間限定"
            subheading="Itinerary"
        ></the-heading>
    </div>
  
    <section class="section">
        <div class="container">
            <carousel></carousel>
        </div>
    </section>
    <section class="section">
        <div class="container">
            <div class="commentwrap">
                <comments-info></comments-info> 
            </div>
        </div>
    </section>

</template>

<script>
import carousel from "@/components/itineraryPeriod/carousel.vue";
import commentsInfo from "@/components/itineraryPeriod/commentsInfo.vue";
export default {
  name: "itiniraryPeriodView",
  components: {
    carousel,
    commentsInfo,
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/app.scss";

.section {
    width: 100%;
    // height: 90vh;
    margin: 100px 0;
}

.container {
    width: map-get($container, each(d_container));
    // height: 100%;
}
.commentwrap{
    margin: 0 auto;
}
</style>
