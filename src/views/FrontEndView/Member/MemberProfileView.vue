<template>
  <all-header />
  <innerpageHeader></innerpageHeader>
  <div class="container">
    <the-heading heading="會員中心" subheading="Member"></the-heading>
  </div>
  <MemberBoxProfile />
  <MemberSidebar />
  <all-footer />
</template>

<script>
import MemberBoxProfile from "@/components/member/memberBox/MemberBoxProfile.vue";
import MemberSidebar from "@/components/member/MemberSidebar.vue";
export default {
  components: {
    MemberSidebar,
    MemberBoxProfile,
  },
};
</script>

<style lang="scss" scoped></style>
