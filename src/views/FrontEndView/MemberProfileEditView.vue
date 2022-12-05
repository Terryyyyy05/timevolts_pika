<template>
  <innerpageHeader></innerpageHeader>
  <div class="container">
    <the-heading heading="會員中心" subheading="Member"></the-heading>
  </div>
  <MemberBoxProfileEdit />
  <MemberSidebar />
</template>

<script>
import innerpageHeader from "@/components/innerpageHeader.vue";
import MemberSidebar from "@/components/member/MemberSidebar.vue";
import MemberBoxProfileEdit from "@/components/member/memberBox/MemberBoxProfileEdit.vue";
export default {
  components: {
    innerpageHeader,
    MemberSidebar,
    MemberBoxProfileEdit,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/app.scss";
</style>
