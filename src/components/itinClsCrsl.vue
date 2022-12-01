<template>
    <itinCrslCard imgalt="經典行程-史前時代" imgsrc="require('../assets/image/itinPrehistoric.jpg')" msg="經典行程-史前時代"/>
    <itinCrslCard imgalt="經典行程-埃及" imgsrc="require('../assets/image/itinEgypt.jpg')" msg="經典行程-埃及"/>
    <itinCrslCard imgalt="經典行程-赤壁之戰" imgsrc="require('../assets/image/itinWar.jpg')" msg="經典行程-赤壁之戰"/>
    <itinCrslCard imgalt="經典行程-哥倫布發現新大陸" imgsrc="require('../assets/image/itinColombia.jpeg.jpg')" msg="經典行程-哥倫布發現新大陸"/>
    <itinCrslCard imgalt="經典行程-哥倫布發現新大陸" imgsrc="src" msg="經典行程-哥倫布發現新大陸"/>
</template>

<script>
import itinCrslCard from "@/components/itinCrslCard.vue";

export default {
    name: 'itinClsCrsl',
    components:{
        itinCrslCard
    },
    props : ['src'],
    data(){
        return{
            src: 100,
        }
    }
    
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/css/app.scss";

</style>
