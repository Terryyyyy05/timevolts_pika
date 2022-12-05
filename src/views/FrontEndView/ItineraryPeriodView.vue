<template>
  <div class="container">
    <the-heading
      heading="時光行程-期間限定"
      subheading="Itinerary"
    ></the-heading>
  </div>
  <carousel></carousel>

  <comments-info></comments-info>
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
</style>
