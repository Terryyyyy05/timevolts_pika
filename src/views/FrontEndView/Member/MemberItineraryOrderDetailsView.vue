<template>
  <all-header />
  <innerpageHeader></innerpageHeader>
  <div class="container">
    <the-heading heading="會員中心" subheading="Member"></the-heading>
  </div>
  <MemberItineraryOrderDetails />
  <MemberSidebar />
  <all-footer />
</template>

<script>
import MemberItineraryOrderDetails from "@/components/member/memberBox/MemberBoxItineraryOrderDetails.vue";
export default {
  components: {
    MemberItineraryOrderDetails,
  },
};
</script>

<style lang="scss" scoped></style>
