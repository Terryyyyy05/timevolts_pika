<template>
    <div class="cardAnimationWrap">
        <div class="cardWrap animation1">
            <itinCrslCard imgalt="期間限定-尼斯湖水怪" :imgsrc="require('@/assets/image/itin/lochNessMonster.jpg')" msg="期間限定-尼斯湖水怪"/>
            <itinCrslCard imgalt="期間限定-如月車站" :imgsrc="require('@/assets/image/itin/kisaragiStation.jpg')" msg="期間限定-如月車站"/>
            <itinCrslCard imgalt="期間限定-亞特蘭提斯" :imgsrc="require('@/assets/image/itin/atlantis.png')" msg="期間限定-亞特蘭提斯"/>
            <itinCrslCard imgalt="期間限定-十字軍東征" :imgsrc="require('@/assets/image/itin/crusades.webp')" msg="期間限定-十字軍東征"/>
            <itinCrslCard imgalt="期間限定-耶穌被釘十字架" :imgsrc="require('@/assets/image/itin/jesusOnCross.jpg')" msg="期間限定-耶穌被釘十字架"/>
            <itinCrslCard imgalt="期間限定-默汗默德" :imgsrc="require('@/assets/image/itin/mohammad.jpg')" msg="期間限定-默汗默德"/>
            <itinCrslCard imgalt="期間限定-馬利帝國" :imgsrc="require('@/assets/image/itin/maliEmpire.png')" msg="期間限定-馬利帝國"/>
            <itinCrslCard imgalt="期間限定-馬雅文明" :imgsrc="require('@/assets/image/itin/culturaMaya.webp')" msg="期間限定-馬雅文明"/>
            <itinCrslCard imgalt="期間限定-鄭和下西洋" :imgsrc="require('@/assets/image/itin/zhengHeVoyages.jpeg')" msg="期間限定-鄭和下西洋"/>
            <itinCrslCard imgalt="期間限定-澳洲淘金熱" :imgsrc="require('@/assets/image/itin/goldRush.jpg')" msg="期間限定-澳洲淘金熱"/>
            <itinCrslCard imgalt="期間限定-鐵達尼號沈船事故" :imgsrc="require('@/assets/image/itin/titanic.jpg')" msg="期間限定-鐵達尼號沈船事故"/>
            <itinCrslCard imgalt="期間限定-荷蘭的黃金年代" :imgsrc="require('@/assets/image/itin/goldenAge.jpg')" msg="期間限定-荷蘭的黃金年代"/>
        </div>
        <div class="cardWrap animation1">
            <itinCrslCard imgalt="期間限定-尼斯湖水怪" :imgsrc="require('@/assets/image/itin/lochNessMonster.jpg')" msg="期間限定-尼斯湖水怪"/>
            <itinCrslCard imgalt="期間限定-如月車站" :imgsrc="require('@/assets/image/itin/kisaragiStation.jpg')" msg="期間限定-如月車站"/>
            <itinCrslCard imgalt="期間限定-亞特蘭提斯" :imgsrc="require('@/assets/image/itin/atlantis.png')" msg="期間限定-亞特蘭提斯"/>
            <itinCrslCard imgalt="期間限定-十字軍東征" :imgsrc="require('@/assets/image/itin/crusades.webp')" msg="期間限定-十字軍東征"/>
            <itinCrslCard imgalt="期間限定-耶穌被釘十字架" :imgsrc="require('@/assets/image/itin/jesusOnCross.jpg')" msg="期間限定-耶穌被釘十字架"/>
            <itinCrslCard imgalt="期間限定-默汗默德" :imgsrc="require('@/assets/image/itin/mohammad.jpg')" msg="期間限定-默汗默德"/>
            <itinCrslCard imgalt="期間限定-馬利帝國" :imgsrc="require('@/assets/image/itin/maliEmpire.png')" msg="期間限定-馬利帝國"/>
            <itinCrslCard imgalt="期間限定-馬雅文明" :imgsrc="require('@/assets/image/itin/culturaMaya.webp')" msg="期間限定-馬雅文明"/>
            <itinCrslCard imgalt="期間限定-鄭和下西洋" :imgsrc="require('@/assets/image/itin/zhengHeVoyages.jpeg')" msg="期間限定-鄭和下西洋"/>
            <itinCrslCard imgalt="期間限定-澳洲淘金熱" :imgsrc="require('@/assets/image/itin/goldRush.jpg')" msg="期間限定-澳洲淘金熱"/>
            <itinCrslCard imgalt="期間限定-鐵達尼號沈船事故" :imgsrc="require('@/assets/image/itin/titanic.jpg')" msg="期間限定-鐵達尼號沈船事故"/>
            <itinCrslCard imgalt="期間限定-荷蘭的黃金年代" :imgsrc="require('@/assets/image/itin/goldenAge.jpg')" msg="期間限定-荷蘭的黃金年代"/>
        </div>
    </div>
    
</template>

<script>
import itinCrslCard from "@/components/itinerary/itinCrslCard.vue";

export default {
    name: 'itinPrdCrsl',
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
        animation: classicScroll 36s linear 0s infinite;
        animation-play-state: running;
        animation-delay: 0s;
        animation-direction: normal;
    }
    .animation2{
        animation: classicScroll 36s linear 18s infinite;
        animation-play-state: running;
        animation-delay: 0s;
        animation-direction: normal;
    }
    // .cardWrap:hover {
    //     animation-play-state: paused;
    // }
    @keyframes classicScroll {
        0% {
            transform: translateX(0%);
        }
        100% {
            transform: translateX(-100%);
        }
    }

</style>
