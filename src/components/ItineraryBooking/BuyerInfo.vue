<template>
   <base-card class="base-card">
      <h3>訂購人資訊</h3>
      <div class="buyer-info">
         <div class="checkbox">
            <base-checkbox text="同會員資料"></base-checkbox>
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
            <label class="p_lg">生日</label>
            <input
               class="p_lg"
               type="text"
               ref="buyerBirthday"
               v-model="buyerBirthday"
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
         <div>
            <label class="p_lg">地址</label>
            <input
               class="p_lg"
               type="text"
               ref="buyerAddress"
               v-model="buyerName"
            />
         </div>
      </div>
   </base-card>

   <base-card class="base-card">
      <h3>填寫旅客資料</h3>
      <span class="p_xl attend-num">參團人數 : {{ number }}</span>
      <div class="buyer-info" v-for="(num, index) in number" :key="num">
         <div class="info-top">
            <span class="p_lg">旅客 {{ index + 1 }}</span>
            <div class="checkbox" v-if="index === 0">
               <label class="check-container"
                  >同訂購人資料
                  <input
                     type="checkbox"
                     v-model="checked"
                     @click="clickCheckbox($event)"
                  />
                  <span class="checkmark"></span>
               </label>
            </div>
         </div>
         <div>
            <label class="p_lg">姓名</label>
            <input class="p_lg" type="text" v-model="travelerName" />
         </div>
         <div>
            <label class="p_lg">生日</label>
            <input class="p_lg" type="text" v-model="travelerBirthday" />
         </div>
         <div>
            <label class="p_lg">電話</label>
            <input class="p_lg" type="text" v-model="travelerPhone" />
         </div>
         <div>
            <label class="p_lg">信箱</label>
            <input class="p_lg" type="text" v-model="travelerEmail" />
         </div>
         <div>
            <label class="p_lg">地址</label>
            <input class="p_lg" type="text" v-model="travelerAddress" />
         </div>
      </div>
   </base-card>
</template>

<script>
import BaseCheckbox from "../history/base/BaseCheckbox.vue";

export default {
   components: {
      BaseCheckbox,
   },
   props: ["number"],
   inject: ["attendNum"],
   data() {
      return {
         checked: false,
      };
   },
   methods: {
      clickCheckbox(event) {
         if (event.target.checked === true) {
            this.copyInfo();
         } else {
            this.removeInfo();
         }
      },
      copyInfo() {
         const enteredName = this.$refs.buyerName.value;
         const enteredBirthday = this.$refs.buyerBirthday.value;
         const enteredEmail = this.$refs.buyerEmail.value;
         const enteredPhone = this.$refs.buyerPhone.value;
         const enteredAddress = this.$refs.buyerAddress.value;

         this.travelerName = enteredName;
         this.travelerBirthday = enteredBirthday;
         this.travelerEmail = enteredEmail;
         this.travelerPhone = enteredPhone;
         this.travelerAddress = enteredAddress;
      },
      removeInfo() {
         this.travelerName = null;
         this.travelerBirthday = null;
         this.travelerEmail = null;
         this.travelerPhone = null;
         this.travelerAddress = null;
      },
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
