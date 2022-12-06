<template>
  <innerpageHeader></innerpageHeader>
  <div class="container">
    <the-heading heading="最新消息" subheading="News"></the-heading>
    <tab />
  </div>
</template>

<script>
import Tab from '@/components/news/Tab.vue'
import innerpageHeader from '@/components/innerpageHeader.vue'
export default {
  components: {
    Tab,
    innerpageHeader,
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/utils/variables";
.container {
  width: map-get($container, d);
}
</style>
