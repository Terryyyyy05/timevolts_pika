<template>
  <div class="container">
    <h1>最新消息</h1>
    <h3>News</h3>
    <Tab/>
  </div>
</template>

<script>
import Tab from '@/components/Tab.vue';
export default {
  components :{
    Tab
  }
};
</script>
<style lang="scss" scoped>
@import '@/assets/css/app.scss';
.container {
  width: map-get($container, each(d_container));
}
h1{
  color: map-get($color,accent);
}
h3{
  color: map-get($color,accent);
  margin: 10px;
}
</style>
