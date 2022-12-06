<template>
  <innerpageHeader></innerpageHeader>
  <div class="container">
    <the-heading heading="會員中心" subheading="Member"></the-heading>
  </div>
  <MemberSidebar />
  <MemberBoxProfileEdit />
</template>

<script>
import MemberSidebar from "@/components/member/MemberSidebar.vue";
import MemberBoxProfileEdit from "@/components/member/memberBox/MemberBoxProfileEdit.vue";
export default {
  components: {
    MemberSidebar,
    MemberBoxProfileEdit,
  },
};
</script>

<style lang="scss" scoped>

</style>
