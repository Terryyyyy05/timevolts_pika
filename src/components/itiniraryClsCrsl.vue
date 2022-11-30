<template>
    <div>
        <img src="{{imgsrc}}" alt="經典行程-史前時代">
        <p>{{msg}}</p>
    </div>
    <div>
        <img src="{{imgsrc}}" alt="經典行程-埃及">
        <p>{{msg}}</p>
    </div>
    <div>
        <img src="{{imgsrc}}" alt="經典行程-赤壁之戰">
        <p>{{msg}}</p>
    </div>
    <div>
        <img src="{{imgsrc}}" alt="經典行程-哥倫布發現新大陸">
        <p>{{msg}}</p>
    </div>
</template>

<script>
export default {
  name: 'itiniraryClsCrsl',
  props: {
    msg: String,
    imgsrc: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/css/app.scss";

</style>
