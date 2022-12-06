<template>
   <div class="container">
      <the-heading
         heading="結帳"
         subheading="Checkout"
      ></the-heading>
      <progress-bar
         :secondMode="setSecondMode"
         :thirdMode="setThirdMode"
         :fourthMode="setFourthMode"
         :line="setProgressLine"
      ></progress-bar>
      <div class="main-text">{{ currentStep }}</div>
      <keep-alive>
         <component :is="selectedStep"></component>
      </keep-alive>
      <div class="buttons">
         <button class="btn-primary" style="margin: auto" @click="lastStep">
            {{ buttonLeft }}
         </button>
         <button class="btn-primary" style="margin: auto" @click="nextStep">
            {{ buttonRight }}
         </button>
         <button
            class="btn-secondary"
            style="margin: auto"
            v-if="this.selectedStep === 'done'"
         >
            使用預設樣式，晚點再做
         </button>
      </div>
   </div>
</template>

<script>
import ProgressBar from "../../components/product/checkout/ProgressBar.vue";
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
         selectedStep: "productCheckout",
         currentStep: "確認商品",
         buttonLeft: "返回商品頁",
         buttonRight: "填寫收件人資料",
      };
   },
   computed: {
      setSecondMode() {
         if (
            this.selectedStep === "toPage3" ||
            this.selectedStep === "toPage4" ||
            this.selectedStep === "done"
         ) {
            return "circle progress-active";
         } else {
            return "circle";
         }
      },
      setThirdMode() {
         return this.selectedStep === "toPage4" || this.selectedStep === "done"
            ? "circle progress-active"
            : "circle";
      },
      setProgressLine() {
         if (this.selectedStep === "toPage3") {
            return "width: 50%";
         } else if (this.selectedStep === "toPage4" || this.selectedStep === "done") {
            return "width: 100%";
         }
      },
   },
   methods: {
      nextStep() {
         if (this.selectedStep === "productCheckout") {
            this.selectedStep = "toPage3";
            this.currentStep = "填寫收件人資訊";
            this.buttonLeft = "上一步";
            this.buttonRight = "下一步";
         } else if (this.selectedStep === "toPage3") {
            this.selectedStep = "toPage4";
            this.currentStep = "填寫信用卡資訊";
            this.buttonLeft = "上一步";
            this.buttonRight = "確認購買";
         } else if (this.selectedStep === "toPage4"){
            this.selectedStep = "done";
            this.currentStep = "訂單完成";
            this.buttonLeft.style.display = "none";
            this.buttonRight.style.display = "none";
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

   &::before,
   &::after {
      content: "";
      height: 1px;
      display: block;
      background-color: currentColor;
   }
}

.buttons {
   display: flex;
   gap: 48px;
   width: fit-content;
   margin: 24px auto 0
}
</style>
