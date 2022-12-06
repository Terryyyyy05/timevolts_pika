<template>
  <innerpageHeader></innerpageHeader>
  <div class="container">
    <the-heading heading="會員中心" subheading="Member"></the-heading>
  </div>
  <MemberBoxItineraryOrder />
  <MemberSidebar />
</template>

<script>
import MemberSidebar from "@/components/member/MemberSidebar.vue";
import MemberBoxItineraryOrder from "@/components/member/memberBox/MemberBoxItineraryOrder.vue";
export default {
  components: {
    MemberSidebar,
    MemberBoxItineraryOrder
},
};
</script>

<style lang="scss" scoped>

</style>
