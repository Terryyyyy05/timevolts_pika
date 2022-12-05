<template>
  <div class="container">
    <the-heading heading="會員中心" subheading="Member"></the-heading>
  </div> 
  <Login />
</template>

<script>
import MemberLoginView from './MemberLoginView.vue';

export default {
  components: {
    "Login": MemberLoginView,
  },
};
</script>

<style lang="scss" scoped></style>
