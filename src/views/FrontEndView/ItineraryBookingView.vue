<template>
   <div class="container">
      <the-heading
         heading="行程訂票"
         subheading="itinerary booking "
      ></the-heading>
      <progress-bar
         :secondMode="setSecondMode"
         :thirdMode="setThirdMode"
         :line="setProgressLine"
      ></progress-bar>
      <div class="main-text">{{ currentStep }}</div>
      <keep-alive>
         <component :is="selectedStep"></component>
      </keep-alive>
      <button class="btn-secondary" style="margin: auto" @click="nextStep">
         {{ button }}
      </button>
   </div>
</template>

<script>
import ProgressBar from "../../components/ItineraryBooking/UI/ProgressBar.vue";
import ItineraryInformation from "../../components/ItineraryBooking/ItineraryInformation.vue";
import Checkout from "../../components/ItineraryBooking/Checkout.vue";
import ConfirmOrder from "../../components/ItineraryBooking/ConfirmOrder.vue";

export default {
   components: {
      ProgressBar,
      ItineraryInformation,
      Checkout,
      ConfirmOrder,
   },
   data() {
      return {
         selectedStep: "itinerary-information",
         currentStep: "行程資訊",
         button: "確認訂票",
      };
   },
   computed: {
      setSecondMode() {
         if (
            this.selectedStep === "checkout" ||
            this.selectedStep === "confirm-order"
         ) {
            return "circle progress-active";
         } else {
            return "circle";
         }
      },
      setThirdMode() {
         return this.selectedStep === "confirm-order"
            ? "circle progress-active"
            : "circle";
      },
      setProgressLine() {
         if (this.selectedStep === "checkout") {
            return "width: 50%";
         } else if (this.selectedStep === "confirm-order") {
            return "width: 100%";
         }
      },
   },
   methods: {
      nextStep() {
         if (this.selectedStep === "itinerary-information") {
            this.selectedStep = "checkout";
            this.currentStep = "結帳";
            this.button = "前往付款";
         } else if (this.selectedStep === "checkout") {
            this.selectedStep = "confirm-order";
            this.currentStep = "訂單成立";
            this.button = "開始製作";
         }
         window.scrollTo(0, 0);
      },
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
