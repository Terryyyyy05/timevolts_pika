<template>
  <all-header/>
  <innerpageHeader></innerpageHeader>
  <div class="container">
    <the-heading heading="最新消息" subheading="News"></the-heading>
    <tab />
    
  </div>
  <all-footer/>
</template>

<script>
import Tab from '@/components/news/Tab.vue'

export default {
  components: {
    Tab,
  },
};

</script>
<style lang="scss" scoped>
@import "@/assets/css/utils/variables";
.container {
  width: map-get($container, d);
}
.mb {
  margin-bottom: 100px;
}
</style>
