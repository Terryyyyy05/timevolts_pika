<template>
    <div class="cardWrap">
        <img :alt="imgalt" :src="imgsrc">
        <p class="p_lg">{{msg}}</p>
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
    .cardWrap{
        margin: 50px;
        display: flex;
        flex-direction: column;
        width: 500px;
        height: fit-content;
        // outline: 1px solid rgb(166, 0, 255);

    }
    img{
        width: 500px;
        height: 300px;
        background: #fdfdfd;
        // outline: 1px solid red;
    }
    p{
        width: 500px;
        height: 100px;
        // outline: 1px solid red;
        text-align: center;
        color: map-get($color, primary);
        padding: 20px;
        box-sizing: border-box;
    }
</style>
