<template>
  <div class="container">
    <h1>最新消息</h1>
    <h3>News</h3>
    <Tab/>
  </div>
  
  <Lightbox/>
</template>

<script>
import Tab from '@/components/Tab.vue'
import Lightbox from '@/components/Lightbox.vue'
export default {
  components :{
    Tab,
    Lightbox,
  }
};
</script>
<style lang="scss" scoped>
@import '@/assets/css/app.scss';
.container {
  width: map-get($container, d);
}
h1{
  color: map-get($color,accent);
}
h3{
  color: map-get($color,accent);
  margin: 10px;
}
</style>
