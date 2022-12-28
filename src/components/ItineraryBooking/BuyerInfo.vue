<template>
   <base-card class="base-card">
      <h3>訂購人資訊</h3>
      <div class="buyer-info">
         <div class="checkbox">
            <label class="check-container"
               >同會員資料
               <input type="checkbox" @change="sameAsMember" />
               <span class="checkmark"></span>
            </label>
         </div>
         <div>
            <label class="p_lg">姓名</label>
            <input
               class="p_lg"
               type="text"
               ref="buyerName"
               v-model="buyerName"
            />
         </div>
         <div>
            <label class="p_lg">電話</label>
            <input
               class="p_lg"
               type="text"
               ref="buyerPhone"
               v-model="buyerPhone"
            />
         </div>
         <div>
            <label class="p_lg">信箱</label>
            <input
               class="p_lg"
               type="text"
               ref="buyerEmail"
               v-model="buyerEmail"
            />
         </div>
      </div>
   </base-card>

   <base-card class="base-card">
      <h3>填寫旅客資料</h3>
      <span class="p_xl attend-num">參團人數 : {{ attendNum }}</span>
      <div class="buyer-info">
         <div class="info-top">
            <span class="p_lg">旅客1</span>
            <div class="checkbox">
               <label class="check-container"
                  >同訂購人資料
                  <input type="checkbox" @change="sameAsBuyer" />
                  <span class="checkmark"></span>
               </label>
            </div>
         </div>
         <div>
            <label class="p_lg">姓名</label>
            <input class="p_lg" type="text" v-model="traveler.name" />
         </div>
         <div>
            <label class="p_lg">電話</label>
            <input class="p_lg" type="text" v-model="traveler.phone" />
         </div>
         <div>
            <label class="p_lg">信箱</label>
            <input class="p_lg" type="text" v-model="traveler.email" />
         </div>
      </div>

      <div v-if="this.attendNum > 1">
         <div
            class="buyer-info"
            v-for="(participant, index) in restParticipants"
            :key="participant"
         >
            <div class="info-top">
               <span class="p_lg">旅客 {{ index + 2 }}</span>
            </div>
            <div>
               <label class="p_lg">姓名</label>
               <input
                  class="p_lg"
                  type="text"
                  v-model="restParticipants[index].name"
               />
            </div>
            <div>
               <label class="p_lg">電話</label>
               <input
                  class="p_lg"
                  type="text"
                  v-model="restParticipants[index].phone"
               />
            </div>
            <div>
               <label class="p_lg">信箱</label>
               <input
                  class="p_lg"
                  type="text"
                  v-model="restParticipants[index].email"
               />
            </div>
         </div>
      </div>
   </base-card>
</template>

<script>
import BaseCheckbox from "../history/base/BaseCheckbox.vue";
import { BASE_URL } from "@/assets/js/commom.js";

export default {
   components: {
      BaseCheckbox,
   },
   props: ["attendNum"],
   data() {
      return {
         traveler: {
            name: "",
            phone: "",
            email: "",
         },
         buyerName: "",
         buyerEmail: "",
         buyerPhone: "",
         restParticipants: [],
         participants: [],
         allParticipants: [],
         // restParticipants: new Array(this.attendNum - 1),
      };
   },
   methods: {
      sameAsBuyer(event) {
         if (event.target.checked === true) {
            this.copyInfo();
         } else {
            this.removeInfo();
         }
      },
      async sameAsMember(event) {
         if (event.target.checked === true) {
            const response = await fetch(`${BASE_URL}sameAsMember.php`);

            const responseData = await response.json();
            // console.log(responseData);

            this.buyerName = responseData[0].mem_name;
            this.buyerEmail = responseData[0].mem_email;
            this.buyerPhone = responseData[0].mem_phone;
         } else {
            this.buyerName = "";
            this.buyerEmail = "";
            this.buyerPhone = "";
         }
      },
      copyInfo() {
         this.traveler.name = this.$refs.buyerName.value;
         this.traveler.email = this.$refs.buyerEmail.value;
         this.traveler.phone = this.$refs.buyerPhone.value;
      },
      removeInfo() {
         this.traveler.name = "";
         this.traveler.email = "";
         this.traveler.phone = "";
      },
      sendParticipants() {
         this.participants.push(this.traveler);
         for (const key in this.restParticipants) {
            const participant = {
               name: this.restParticipants[key].name,
               phone: this.restParticipants[key].phone,
               email: this.restParticipants[key].email,
            };
            this.participants.push(participant);
         }
         // console.log(this.participants);
         this.$store.dispatch(
            "itineraryBooking/sendParticipants",
            this.participants
         );
      },
   },
   updated() {
      this.restParticipants = [...new Array(this.attendNum - 1)].map(
         () => ({})
      );
   },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/utils/variables";
@import "@/assets/css/utils/mixin";

.base-card {
   background-color: transparent;
   position: relative;
   padding-top: 96px;
   height: fit-content;
   color: map-get($color, "primary");
   h3 {
      border: 1px solid map-get($color, "accent");
      padding: 12px 24px;
      position: absolute;
      top: 0%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 1;
      background-color: map-get($color, "dark_sub");
   }
   .attend-num {
      margin-left: 15%;
   }
}

.buyer-info {
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 36px;
   height: fit-content;
   .info-top {
      display: flex;
      justify-content: space-between;
      margin: 80px 0 12px;
      width: 70%;
      border-bottom: 1px solid currentColor;
      padding-bottom: 12px;
   }
   label {
      margin-right: 24px;
   }
   input {
      width: 800px;
      font-size: 24px;
      outline: none;
      background-color: map-get($color, "dark_sub");
      color: #fff;
   }
}

.check-container {
   display: block;
   position: relative;
   padding-left: 35px;
   margin-bottom: 12px;
   cursor: pointer;
   font-size: 16px;
   -webkit-user-select: none;
   -moz-user-select: none;
   -ms-user-select: none;
   user-select: none;
}

/* Hide the browser's default checkbox */
.check-container input {
   position: absolute;
   opacity: 0;
   cursor: pointer;
   height: 0;
   width: 0;
}

/* Create a custom checkbox */
.checkmark {
   position: absolute;
   top: 0;
   left: 0;
   height: 15px;
   width: 15px;
   background-color: transparent;
   border: 2px solid map-get($color, "accent");
}

/* When the checkbox is checked, add a blue background */
.check-container input:checked ~ .checkmark {
   background-color: #eee;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
   content: "";
   position: absolute;
   display: none;
}

/* Show the checkmark when checked */
.check-container input:checked ~ .checkmark:after {
   display: block;
}

/* Style the checkmark/indicator */
.check-container .checkmark:after {
   left: 3px;
   top: 1px;
   width: 5px;
   height: 10px;
   border: solid white;
   border-width: 0 3px 3px 0;
   -webkit-transform: rotate(45deg);
   -ms-transform: rotate(45deg);
   transform: rotate(45deg);
}

@include m() {
   .buyer-info {
      input {
         width: 200px;
      }
   }
}
</style>
