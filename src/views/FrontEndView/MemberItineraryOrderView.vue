<template>
  <innerpageHeader></innerpageHeader>
  <div class="container">
    <the-heading heading="會員中心" subheading="Member"></the-heading>
  </div>
  <MemberBoxItineraryOrder />
  <MemberSidebar />
</template>

<script>
import innerpageHeader from "@/components/innerpageHeader.vue";
import MemberSidebar from "@/components/member/MemberSidebar.vue";
import MemberBoxItineraryOrder from "@/components/member/memberBox/MemberBoxItineraryOrder.vue";
export default {
  components: {
    innerpageHeader,
    MemberSidebar,
    MemberBoxItineraryOrder
},
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/app.scss";
</style>
