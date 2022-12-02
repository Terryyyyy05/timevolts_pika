<template>
  <div class="container">
    <the-heading heading="最新消息" subheading="News"></the-heading>
    <Tab/>
  </div>
  
  <!-- <Lightbox/> -->
</template>

<script>
import Tab from '@/components/Tab.vue'
import Box from '@/components/Box.vue'
import TheHeading from '@/components/layout/TheHeading.vue'

export default {
  components :{
    Tab,
    Box,
    TheHeading
  }
};
</script>
<style lang="scss" scoped>
@import '@/assets/css/utils/variables';
.container {
  width: map-get($container, d);

}

</style>
