<template>
   <div class="container">
      <the-heading
         heading="行程訂票"
         subheading="itinerary booking "
      ></the-heading>
      <progress-bar></progress-bar>
      <div class="main-text">行程資訊</div>
      <itinerary-information></itinerary-information>
   </div>
</template>

<script>
import ProgressBar from "../../components/ItineraryBooking/UI/ProgressBar.vue";
import ItineraryInformation from "../../components/ItineraryBooking/ItineraryInformation.vue";

export default {
   components: {
      ProgressBar,
      ItineraryInformation
   },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/utils/variables";

.main-text {
   display: grid;
   grid-template-columns: 1fr max-content 1fr;
   column-gap: 1.5rem;
   align-items: center;
   font-size: 36px;
   color: map-get($color, "primary");
   margin: 4.8rem 0;
}

.main-text::before,
.main-text::after {
   content: "";
   height: 1px;
   display: block;
   background-color: currentColor;
}
</style>
