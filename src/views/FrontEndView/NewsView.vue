<template>
  <innerpageHeader></innerpageHeader>
  <div class="container">
    <the-heading heading="最新消息" subheading="News"></the-heading>
    <tab/>
  </div>
</template>

<script>
<<<<<<< HEAD
import Tab from '@/components/news/Tab.vue'

=======
import Tab from '@/components/Tab.vue'
import innerpageHeader from "@/components/innerpageHeader.vue";
>>>>>>> 97356efa7a72c9c1cc84edfa111cd393fcf19286
export default {
  components :{
    Tab,
    innerpageHeader,
  }
};
</script>
<style lang="scss" scoped>
@import '@/assets/css/utils/variables';
.container {
  width: map-get($container, d);

}

</style>
