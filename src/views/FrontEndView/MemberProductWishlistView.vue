<template>
  <innerpageHeader></innerpageHeader>
  <div class="container">
    <the-heading heading="會員中心" subheading="Member"></the-heading>
  </div>
  <MemberBoxProductWishlist />
  <MemberSidebar />
</template>

<script>
import MemberSidebar from "@/components/member/MemberSidebar.vue";
import MemberBoxProductWishlist from "@/components/member/memberBox/MemberBoxProductWishlist.vue";
export default {
  components: {
    MemberSidebar,
    MemberBoxProductWishlist
},
};
</script>

<style lang="scss" scoped>

</style>
