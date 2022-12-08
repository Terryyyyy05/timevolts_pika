<template>
    <div class="cardAnimationWrap">
        <div class="cardWrap animation1">
            <itinCrslCard imgalt="經典行程-史前時代" :imgsrc="require('@/assets/image/itinPrehistoric.jpg')" msg="經典行程-史前時代"/>
            <itinCrslCard imgalt="經典行程-埃及" :imgsrc="require('@/assets/image/itinEgypt.jpg')" msg="經典行程-埃及"/>
            <itinCrslCard imgalt="經典行程-赤壁之戰" :imgsrc="require('@/assets/image/itinWar.jpg')" msg="經典行程-赤壁之戰"/>
            <itinCrslCard imgalt="經典行程-哥倫布發現新大陸" :imgsrc="require('@/assets/image/itinColombia.jpeg')" msg="經典行程-哥倫布發現新大陸"/>
        </div>
        <div class="cardWrap animation2">
            <itinCrslCard imgalt="經典行程-史前時代" :imgsrc="require('@/assets/image/itinPrehistoric.jpg')" msg="經典行程-史前時代"/>
            <itinCrslCard imgalt="經典行程-埃及" :imgsrc="require('@/assets/image/itinEgypt.jpg')" msg="經典行程-埃及"/>
            <itinCrslCard imgalt="經典行程-赤壁之戰" :imgsrc="require('@/assets/image/itinWar.jpg')" msg="經典行程-赤壁之戰"/>
            <itinCrslCard imgalt="經典行程-哥倫布發現新大陸" :imgsrc="require('@/assets/image/itinColombia.jpeg')" msg="經典行程-哥倫布發現新大陸"/>
        </div>
    </div>
    
</template>

<script>
import itinCrslCard from "@/components/itinerary/itinCrslCard.vue";

export default {
    name: 'itinClsCrsl',
    components:{
        itinCrslCard
    },    
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/css/app.scss";
    .cardAnimationWrap{
        display: flex;
    }
    .cardWrap{
        display: flex;
        
    }
    .animation1{
        animation: classicScroll 10s linear 0s infinite;
        animation-play-state: running;
        animation-delay: 0s;
        animation-direction: normal;
    }
    .animation2{
        animation: classicScroll 10s linear 5s infinite;
        animation-play-state: running;
        animation-delay: 0s;
        animation-direction: normal;
    }
    
    @keyframes classicScroll {
        0% {
            transform: translateX(0%);
        }
        100% {
            transform: translateX(-100%);
        }
    }

</style>
