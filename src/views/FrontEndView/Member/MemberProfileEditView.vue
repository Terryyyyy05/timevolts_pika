<template>
  <all-header />
  <innerpageHeader></innerpageHeader>
  <div class="container">
    <the-heading heading="會員中心" subheading="Member"></the-heading>
  </div>
  <MemberBoxProfileEdit />
  <MemberSidebar />
  <all-footer />
</template>

<script>
import MemberBoxProfileEdit from "@/components/member/memberBox/MemberBoxProfileEdit.vue";
import MemberSidebar from "@/components/member/MemberSidebar.vue";
export default {
  components: {
    MemberSidebar,
    MemberBoxProfileEdit,
  },
};
</script>

<style lang="scss" scoped></style>
