<template>
  <innerpageHeader></innerpageHeader>
  <div class="container">
    <the-heading heading="會員中心" subheading="Member"></the-heading>
  </div>
  <MemberBoxProductOrder />
  <MemberSidebar />
</template>

<script>
import MemberSidebar from "@/components/member/MemberSidebar.vue";
import MemberBoxProductOrder from "@/components/member/memberBox/MemberBoxProductOrder.vue";
export default {
  components: {
    MemberSidebar,
    MemberBoxProductOrder
},
};
</script>

<style lang="scss" scoped>

</style>
