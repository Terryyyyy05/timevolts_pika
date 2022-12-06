<template>
  <all-header />
  <innerpageHeader></innerpageHeader>
  <div class="container">
    <the-heading heading="會員中心" subheading="Member"></the-heading>
  </div>
  <MemberItineraryOrder />
  <MemberSidebar />
  <all-footer />
</template>

<script>
import MemberSidebar from "@/components/member/MemberSidebar.vue";
import MemberItineraryOrder from "@/components/member/memberBox/MemberBoxItineraryOrder.vue";
export default {
  components: {
    MemberItineraryOrder,
    MemberSidebar,
  },
};
</script>

<style lang="scss" scoped></style>
