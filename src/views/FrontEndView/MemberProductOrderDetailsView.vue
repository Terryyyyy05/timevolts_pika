<template>
  <innerpageHeader></innerpageHeader>
  <div class="container">
    <the-heading heading="會員中心" subheading="Member"></the-heading>
  </div>
  <MemberBoxProductOrderDetails />
  <MemberSidebar />
</template>

<script>
import innerpageHeader from "@/components/innerpageHeader.vue";
import MemberSidebar from "@/components/member/MemberSidebar.vue";
import MemberBoxProductOrderDetails from "@/components/member/memberBox/MemberBoxProductOrderDetails.vue";
export default {
  components: {
    innerpageHeader,
    MemberSidebar,
    MemberBoxProductOrderDetails
},
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/app.scss";
</style>
