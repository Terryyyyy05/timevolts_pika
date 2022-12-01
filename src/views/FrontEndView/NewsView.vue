<template>
  <div class="container">
    <the-heading heading="最新消息" subheading="News"></the-heading>
      
    <!-- <h1>最新消息</h1>
    <h3></h3> -->
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
@import '@/assets/css/app.scss';
.container {
  width: map-get($container, d);
}
h1{
  // color: map-get($color,accent);
}
h3{
  color: map-get($color,accent);
  margin: 10px;
}
</style>
