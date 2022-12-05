<template>
  <innerpageHeader></innerpageHeader>
  <div class="container">
    <the-heading heading="會員中心" subheading="Member"></the-heading>
  </div>
  <MemberBoxCoupon />
  <MemberSidebar />
</template>

<script>
import innerpageHeader from "@/components/innerpageHeader.vue";
import MemberSidebar from "@/components/member/MemberSidebar.vue";
import MemberBoxCoupon from "@/components/member/memberBox/MemberBoxCoupon.vue";
export default {
  components: {
    innerpageHeader,
    MemberSidebar,
    MemberBoxCoupon
},
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/app.scss";
</style>
