<template>
  <all-header />
  <innerpageHeader></innerpageHeader>
  <div class="container">
    <the-heading heading="會員中心" subheading="Member"></the-heading>
  </div>
  <MemberBoxProductOrderDetails />
  <MemberSidebar />
  <all-footer />
</template>

<script>
import MemberSidebar from "@/components/member/MemberSidebar.vue";
import MemberBoxProductOrderDetails from "@/components/member/memberBox/MemberBoxProductOrderDetails.vue";
export default {
  components: {
    MemberSidebar,
    MemberBoxProductOrderDetails,
  },
};
</script>

<style lang="scss" scoped></style>
