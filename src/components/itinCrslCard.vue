<template>
    <div>
        <img :alt="imgalt" :src="imgsrc">
        <p>{{msg}}</p>
    </div>
</template>

<script>
export default {
  name: 'itinCrslCard',
  props: {
    imgsrc: String,
    imgalt: String,
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/css/app.scss";

</style>
