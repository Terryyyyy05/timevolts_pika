<template>
  <div class="itinCrslBtn">
    <p class="p_md">{{ msg }}</p>
  </div>
</template>

<script>
export default {
  name: 'itiniraryCrslBtn',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/css/app.scss";
    p{
        text-align: center;
        color:map-get($color, primary)
    }

</style>
