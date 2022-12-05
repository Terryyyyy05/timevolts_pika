<template>
  <innerpageHeader></innerpageHeader>
  <div class="container">
    <the-heading heading="會員中心" subheading="Member"></the-heading>
  </div>
  <MemberBoxProductWishlist />
  <MemberSidebar />
</template>

<script>
import innerpageHeader from "@/components/innerpageHeader.vue";
import MemberSidebar from "@/components/member/MemberSidebar.vue";
import MemberBoxProductWishlist from "@/components/member/memberBox/MemberBoxProductWishlist.vue";
export default {
  components: {
    innerpageHeader,
    MemberSidebar,
    MemberBoxProductWishlist
},
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/app.scss";
</style>
