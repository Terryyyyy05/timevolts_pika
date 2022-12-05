<template>
  <innerpageHeader></innerpageHeader>
  <div class="container">
    <the-heading heading="會員中心" subheading="Member"></the-heading>
  </div>
  <MemberBoxItinerayWishlist />
  <MemberSidebar />
</template>

<script>
import innerpageHeader from "@/components/innerpageHeader.vue";
import MemberSidebar from "@/components/member/MemberSidebar.vue";
import MemberBoxItinerayWishlist from "@/components/member/memberBox/MemberBoxItinerayWishlist.vue";
export default {
  components: {
    innerpageHeader,
    MemberSidebar,
    MemberBoxItinerayWishlist
},
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/app.scss";
</style>
