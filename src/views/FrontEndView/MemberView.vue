<template>
  <innerpageHeader />
  <div class="container">
    <the-heading heading="會員中心" subheading="Member"></the-heading>
  </div> 
  <Login />
</template>

<script>
import innerpageHeader from "@/components/innerpageHeader.vue";
import MemberLoginView from './MemberLoginView.vue';

export default {
  components: {
    "innerpageHeader": innerpageHeader,
    "Login": MemberLoginView,
  },
};
</script>

<style lang="scss" scoped></style>
