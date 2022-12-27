<template>
   <p class="p_lg">此筆訂單將於15:00內失效</p>
   <div class="info">
      <base-card class="info-card p_md">
         <span>行程訂單編號 : {{ itineraryId }}</span>
         <span>實付金額 : {{ totalPrice }}</span>
         <span>參加人數 : {{ attendNum }}</span>
      </base-card>
      <base-card class="info-card p_md">
         <span>行程種類 : {{ classification }} / {{ feature }}</span>
         <span>行程名稱 : {{ itineraryName }}</span>
         <span>危險度 : {{ dangerLev }}</span>
      </base-card>
   </div>
   <button class="btn-primary" @click="$emit('setStep', 'third')">
      前往付款
   </button>
</template>

<script>
import BaseCard from "../all_UI/BaseCard.vue";

export default {
   components: {
      BaseCard,
   },
   props: ["classification", "dangerLev", "itineraryName", "feature"],
   emits: ["setStep"],
   computed: {
      itineraryId() {
         return this.$store.getters["itineraryBooking/itineraryId"];
      },
      totalPrice() {
         return this.$store.getters["itineraryBooking/totalPrice"];
      },
      attendNum() {
         return this.$store.getters["itineraryBooking/attendNum"];
      },
   },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/utils/variables";

p {
   color: #fff;
}

.info {
   display: flex;
   justify-content: center;
}

.info-card {
   width: fit-content;
   background-color: transparent;
   display: flex;
   flex-direction: column;
   gap: 12px;
   width: 300px;
   height: fit-content;
   margin: 48px 0;
   color: map-get($color, "primary");
}
</style>
