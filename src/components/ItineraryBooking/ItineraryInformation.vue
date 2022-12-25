<template>
   <div class="information p_md">
      <calendar :selected-date="departDate"></calendar>
      <div>
         <div class="info-list">
            <div>
               <p>最近出團日 : {{ latestDate }}</p>
               <p>出發日期 : {{ departDate }}</p>
               <p>歸來日期 : {{ returnDate }}</p>
            </div>
            <div>
               <p>行程分類 : {{ classification }}</p>
               <p>危險度 : {{ dangerLev }}</p>
               <p>地區 : {{ region }}</p>
            </div>
         </div>
         <base-card class="base-card">
            <div class="info-list">
               <div>
                  <p>行程單價 : {{ singlePrice }}</p>
                  <p>現在會員等級 : {{ memLev }}</p>
               </div>
               <div>
                  <p class="attend-num">
                     參加人數 :
                     <div>
                        <font-awesome-icon
                           class="minus-plus"
                           icon="fa-solid fa-minus"
                           @click="minusAttNum"
                        />
                        <span>{{ attendNum }}</span>
                        <font-awesome-icon
                           class="minus-plus"
                           icon="fa-solid fa-plus"
                           @click="addAttNum"
                        />
                     </div>
                  </p>
                  <p>原始費用 : {{ computeOriginPrice }}</p>
                  <p>
                     會員優惠 : {{ memDiscout }}折
                     <span>- {{ computeDiscoutPrice }}元</span>
                  </p>
               </div>
            </div>
            <div class="total-price p_xl">
               <p>實付總額 : {{ computeTotalPrice }} 元</p>
            </div>
         </base-card>
      </div>
   </div>
   <buyer-info :number="this.attendNum"></buyer-info>
</template>

<script>
import Calendar from "./Calendar.vue";
import BuyerInfo from "./BuyerInfo.vue";

export default {
   components: {
      Calendar,
      BuyerInfo,
   },
   data() {
      return {
         // userId: null,
         // hasLoggedIn: true,
         latestDate: "2023-01-01",
         departDate: "2022-12-04",
         returnDate: "2022-12-08",
         classification: "期間限定行程",
         dangerLev: "高",
         region: "歐洲",
         singlePrice: 50000,
         memLev: "白金",
         attendNum: 1,
         originPrice: null,
         memDiscout: 9,
         discoutPrice: null,
         totalPrice: null,
         orderNum: "O26572548",
         feature: "宗教事件",
         itineraryName: "十字軍東征",
      };
   },
   provide() {
      return {
         orderNum: this.orderNum,
         totalPrice: this.totalPrice,
         attendNum: this.attendNum,
         classification: this.classification,
         feature: this.feature,
         itineraryName: this.itineraryName,
         dangerLev: this.dangerLev,
      };
   },
   computed: {
      computeOriginPrice() {
         this.originPrice = this.singlePrice * this.attendNum;
         return this.originPrice;
      },
      computeDiscoutPrice() {
         this.discoutPrice = this.originPrice * this.memDiscout * 0.01;
         return this.discoutPrice;
      },
      computeTotalPrice() {
         this.totalPrice = this.originPrice - this.discoutPrice;
         return this.totalPrice;
      },
   },
   methods: {
      minusAttNum() {
         if (this.attendNum > 1) {
            this.attendNum -= 1;
         }
      },
      addAttNum() {
         this.attendNum += 1;
      },
   },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/utils/variables";
@import "@/assets/css/utils/mixin";

@mixin grid($column, $gap) {
   display: grid;
   grid-template-columns: $column;
   gap: $gap;
}

.information {
   @include grid(2fr 3fr, 80px);
   color: map-get($color, "primary");
}

.info-list {
   @include grid(1fr 1fr, 48px);
   p {
      margin-bottom: 12px;
   }
}

.base-card {
   height: fit-content;
}

.attend-num {
   color: #fff;
   display: flex;
   div {
      display: flex;
      align-items: center;
   }
}

.minus-plus {
   font-size: 24px;
   padding: 0 24px;
   cursor: pointer;
   color: #eee;
}

.total-price {
   border-top: 1px solid map-get($color, "accent");
   padding-top: 24px;
   display: flex;
   justify-content: flex-end;
   align-items: center;
}

@include m() {
   .information {
      @include grid(1fr, 48px);
   }

   .info-list {
      @include grid(1fr, 24px)
   }

   .attend-num {
      flex-direction: column;
      gap: 12px;
   }

   .minus-plus {
      padding: 0 20px;
   }
}
</style>
