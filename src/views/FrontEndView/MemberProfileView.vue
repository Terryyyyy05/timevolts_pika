<template>
  <innerpageHeader></innerpageHeader>
  <div class="container">
    <the-heading heading="會員中心" subheading="Member"></the-heading>
  </div>
  <MemberSidebar />
</template>

<script>
import innerpageHeader from "@/components/innerpageHeader.vue";
import MemberSidebar from "@/components/member/MemberSidebar.vue";
export default {
  name: "MemberProfile",
  components: {
    innerpageHeader,
    MemberSidebar,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/app.scss";
</style>
