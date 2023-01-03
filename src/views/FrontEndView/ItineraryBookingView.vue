<template>
   <all-header />
   <innerpageHeader></innerpageHeader>
   <base-dialog :show="!hasLoggedIn" title="登入訊息" @close="askForLogin">
      <p>請先登入!</p>
   </base-dialog>
   <base-dialog :show="!!error" title="錯誤訊息" @close="this.$router.go(-1)">
      <p>由於您重整了頁面，請重新來過</p>
   </base-dialog>
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
         <component
            :is="selectedStep"
            :latestDate="info[0].itinerary_start_date"
            :departDate="info[0].itinerary_start_date"
            :returnDate="info[0].itinerary_end_date"
            :classification="info[0].story_classification"
            :dangerLev="info[0].story_risk"
            :region="info[0].story_spot"
            :feature="info[0].story_specialty"
            :singlePrice="info[0].itinerary_price"
            :memLev="info[0].mem_level"
            :itineraryId="info[0].itinerary_id"
            :itineraryName="itineraryName"
            :userId="userId"
            @set-step="toNextStep"
         ></component>
      </keep-alive>
      <div class="buttons" v-if="this.selectedStep === 'confirm-order'">
         <router-link to="/customizetk">
            <button class="btn-primary">開始製作</button>
         </router-link>
         <router-link to="/customizeCanvas"
            ><button class="btn-secondary">
               使用預設樣式，晚點再做
            </button></router-link
         >
      </div>
   </div>
   <all-footer />
</template>

<script>
import ProgressBar from "../../components/ItineraryBooking/UI/ProgressBar.vue";
import ItineraryInformation from "../../components/ItineraryBooking/ItineraryInformation.vue";
import Checkout from "../../components/ItineraryBooking/Checkout.vue";
import ConfirmOrder from "../../components/ItineraryBooking/ConfirmOrder.vue";
import { BASE_URL } from "@/assets/js/commom.js";

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
         userId: null,
         hasLoggedIn: true,
         error: false,
         itineraryName: "",
         info: [],
         orderInfo: {},
         participants: [],
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
   created() {
      this.checkLogin();
   },
   methods: {
      toNextStep(step) {
         if (step === "second") {
            this.selectedStep = "checkout";
            this.currentStep = "結帳";
            window.scrollTo(0, 0);
         } else if (step === "third") {
            this.selectedStep = "confirm-order";
            this.currentStep = "訂單成立";
            window.scrollTo(0, 0);
            this.confirmOrder();
         }
      },
      async checkLogin() {
         await this.$store.dispatch("getUserId");
         this.userId = this.$store.getters["userId"];
         this.itineraryName = this.$store.getters["itinerary/itineraryName"];
         if (this.itineraryName === "") {
            this.error = true;
         }
         // console.log(this.userId);
         // console.log(this.itineraryName);
         if (!this.userId) {
            // 找不到會員
            this.hasLoggedIn = false;
         } else {
            this.getItineraryInfo();
         }
      },
      askForLogin() {
         this.$router.push({ path: "/memberLightBox" });
      },
      async getItineraryInfo() {
         const response = await fetch(`${BASE_URL}getItineraryInfo.php`, {
            method: "POST",
            body: JSON.stringify({
               userId: this.userId,
               // itineraryName: this.itineraryName,
            }),
         });

         if (!response.ok) {
            this.error = true;
         }

         const responseData = await response.json();
         // console.log(responseData);

         this.info = responseData;
         // console.log(this.info);
      },
      async payForOrder() {
         this.orderInfo = this.$store.getters["itineraryBooking/orderInfo"];
         // console.log(this.orderInfo);
         const response = await fetch(`${BASE_URL}Ecpay.php`, {
            method: "POST",
            // body: JSON.stringify({
            //    itineraryId: this.orderInfo.itineraryId,
            //    attendNum: this.orderInfo.attendNum,
            //    totalPrice: this.orderInfo.totalPrice,
            //    itineraryName: this.itineraryName,
            // }),
            headers: {
               "Content-Type": "application/x-www-form-urlencoded",
            },
         });
      },
      async confirmOrder() {
         this.orderInfo = this.$store.getters["itineraryBooking/orderInfo"];
         // console.log(this.orderInfo);
         this.participants =
            this.$store.getters["itineraryBooking/participants"];
         // console.log(this.participants);
         // console.log(this.participants.length);
         try {
            const response = await fetch(`${BASE_URL}sendItinBookingInfo.php`, {
               method: "POST",
               body: JSON.stringify({
                  userId: this.orderInfo.userId,
                  itineraryId: this.orderInfo.itineraryId,
                  attendNum: this.orderInfo.attendNum,
                  originPrice: this.orderInfo.originPrice,
                  totalPrice: this.orderInfo.totalPrice,
                  discoutPrice: this.orderInfo.discoutPrice,
               }),
            });

            const responseData = await response.json();
            // console.log(responseData);

            if (!response.ok) {
               const error = new Error(error.message || "發生錯誤");
               console.log(error);
               throw error;
            }
         } catch (error) {
            console.log(error);
         }

         this.sendParticipants();
      },
      async sendParticipants() {
         const response = await fetch(`${BASE_URL}getItineraryOrderId.php`, {
            method: "POST",
            body: JSON.stringify({
               userId: this.orderInfo.userId,
               itineraryId: this.orderInfo.itineraryId,
            }),
         });

         const responseData = await response.json();
         // console.log(responseData);

         const itineraryOrderId = responseData;
         for (let i = 0; i < this.participants.length; i++) {
            fetch(`${BASE_URL}sendParticipants.php`, {
               method: "POST",
               body: JSON.stringify({
                  itineraryOrderId: itineraryOrderId,
                  name: this.participants[i].name,
                  phone: this.participants[i].phone,
                  email: this.participants[i].email,
               }),
            })
               .then((response) => response.json())
               .then((data) => {
                  console.log(data);
               });
         }
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
   margin: 0 auto;
}
</style>
