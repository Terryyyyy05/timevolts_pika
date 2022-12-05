<template>
  <innerpageHeader></innerpageHeader>
  <div class="container">
    <the-heading heading="會員中心" subheading="Member"></the-heading>
  </div>
  <MemberBoxItineraryOrderDetails />
  <MemberSidebar />
</template>

<script>
import innerpageHeader from "@/components/innerpageHeader.vue";
import MemberSidebar from "@/components/member/MemberSidebar.vue";
import MemberBoxItineraryOrderDetails from "@/components/member/memberBox/MemberBoxItineraryOrderDetails.vue";
export default {
  components: {
    innerpageHeader,
    MemberSidebar,
    MemberBoxItineraryOrderDetails
},
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/app.scss";
</style>
