<template>
  <innerpageHeader></innerpageHeader>
  <div class="container">
    <the-heading heading="會員中心" subheading="Member"></the-heading>
  </div>
  <MemberBoxCoupon />
  <MemberSidebar />
</template>

<script>
import MemberSidebar from "@/components/member/MemberSidebar.vue";
import MemberBoxCoupon from "@/components/member/memberBox/MemberBoxCoupon.vue";
export default {
  components: {
    MemberSidebar,
    MemberBoxCoupon
},
};
</script>

<style lang="scss" scoped>
</style>
