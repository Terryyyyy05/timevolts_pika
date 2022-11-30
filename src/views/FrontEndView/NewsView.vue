<template>
  <div class="container">
    <h1>最新消息</h1>
    <p>News</p>
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
  // @include title($title:'h1');
}
p{

}
</style>
