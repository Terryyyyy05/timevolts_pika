<template>
  <innerpageHeader></innerpageHeader>
  <div class="container">
    <the-heading heading="會員中心" subheading="Member"></the-heading>
  </div>
  <MemberBoxItineraryOrderDetails />
  <MemberSidebar />
</template>

<script>
import MemberSidebar from "@/components/member/MemberSidebar.vue";
import MemberBoxItineraryOrderDetails from "@/components/member/memberBox/MemberBoxItineraryOrderDetails.vue";
export default {
  components: {
    MemberSidebar,
    MemberBoxItineraryOrderDetails
},
};
</script>

<style lang="scss" scoped>

</style>
