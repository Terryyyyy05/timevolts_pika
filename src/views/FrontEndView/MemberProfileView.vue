<template>
  <innerpageHeader></innerpageHeader>
  <div class="container">
    <the-heading heading="會員中心" subheading="Member"></the-heading>
  </div>
  <MemberBoxProfile />
  <MemberSidebar />
</template>

<script>
import MemberSidebar from "@/components/member/MemberSidebar.vue";
import MemberBoxProfile from "@/components/member/memberBox/MemberBoxProfile.vue";
export default {
  components: {
    MemberSidebar,
    MemberBoxProfile,
  },
};
</script>

<style lang="scss" scoped></style>
