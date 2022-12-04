<template>
    <itin-card v-for="info in visibleInformation" :key="info.title" >
        <div class="imgblock">
            <img :src="info.imgsrc" :alt="info.imgalt">
        </div>
        <div class="textblock">
            <h3>{{ info.title }}</h3>
            <div>
                <span class="p_md">#{{ info.tagDanderLevel }}</span>
                <span class="p_md">#{{ info.tagFeature }}</span>
                <span class="p_md">#{{ info.tagRegion }}</span>
            </div>
            <p class="p_md">出團日期： {{ info.tourdate }}</p>
            <p class="p_lg">{{ info.description }}</p>
        </div>
    </itin-card>
</template>

<script>
import itinCard from "@/components/itinerary/card/itinCard.vue";

export default{
    components:{
        itinCard
    },
    data(){
        return{
            information:[
                {
                    imgsrc: "",
                    imgalt: "經典行程-史前時代",
                    title: "經典行程-史前時代",
                    tagDanderLevel: "高",
                    tagFeature: "經典事件",
                    tagRegion: null,
                    tourdate: "",
                    description: "人類的歷史分成：史前時代及信使時代。「文字的出現」為畫分的依據，史前時代沒有文字，信使時代為文字開始。今天，我們將回到史前時代，建立屬於自己的莊園，面對嚴苛的大自然及猛獸努力存活下去。"
                },
                {
                    imgsrc: "",
                    imgalt: "經典行程-埃及",
                    title: "",
                    tagDanderLevel: "",
                    tagFeature: "",
                    tagRegion: "",
                    tourdate: "",
                    description: ""
                },
                {
                    imgsrc: "",
                    imgalt: "經典行程-赤壁之戰",
                    title: "",
                    tagDanderLevel: "",
                    tagFeature: "",
                    tagRegion: "",
                    tourdate: "",
                    description: ""
                },
                {
                    imgsrc: "",
                    imgalt: "經典行程-哥倫布發現新大陸",
                    title: "",
                    tagDanderLevel: "",
                    tagFeature: "",
                    tagRegion: "",
                    tourdate: "",
                    description: ""
                },
                {
                    imgsrc: "",
                    imgalt: "期間限定-尼斯湖水怪",
                    title: "",
                    tagDanderLevel: "",
                    tagFeature: "",
                    tagRegion: "",
                    tourdate: "",
                    description: ""
                },
                {
                    imgsrc: "",
                    imgalt: "期間限定-如月車站",
                    title: "",
                    tagDanderLevel: "",
                    tagFeature: "",
                    tagRegion: "",
                    tourdate: "",
                    description: ""
                },
                {
                    imgsrc: "",
                    imgalt: "期間限定-亞特蘭提",
                    title: "",
                    tagDanderLevel: "",
                    tagFeature: "",
                    tagRegion: "",
                    tourdate: "",
                    description: ""
                },
                {
                    imgsrc: "",
                    imgalt: "期間限定-十字軍東征",
                    title: "",
                    tagDanderLevel: "",
                    tagFeature: "",
                    tagRegion: "",
                    tourdate: "",
                    description: ""
                },
                {
                    imgsrc: "",
                    imgalt: "期間限定-耶穌被釘十字架",
                    title: "",
                    tagDanderLevel: "",
                    tagFeature: "",
                    tagRegion: "",
                    tourdate: "",
                    description: ""
                },
                {
                    imgsrc: "",
                    imgalt: "期間限定-默汗默德",
                    title: "",
                    tagDanderLevel: "",
                    tagFeature: "",
                    tagRegion: "",
                    tourdate: "",
                    description: ""
                },
                {
                    imgsrc: "",
                    imgalt: "期間限定-馬利帝國",
                    title: "",
                    tagDanderLevel: "",
                    tagFeature: "",
                    tagRegion: "",
                    tourdate: "",
                    description: ""
                },
                {
                    imgsrc: "",
                    imgalt: "期間限定-馬雅文明",
                    title: "",
                    tagDanderLevel: "",
                    tagFeature: "",
                    tagRegion: "",
                    tourdate: "",
                    description: ""
                },
                {
                    imgsrc: "",
                    imgalt: "期間限定-鄭和下西洋",
                    title: "",
                    tagDanderLevel: "",
                    tagFeature: "",
                    tagRegion: "",
                    tourdate: "",
                    description: ""
                },
                {
                    imgsrc: "",
                    imgalt: "期間限定-澳洲淘金熱",
                    title: "",
                    tagDanderLevel: "",
                    tagFeature: "",
                    tagRegion: "",
                    tourdate: "",
                    description: ""
                },
                {
                    imgsrc: "",
                    imgalt: "期間限定-鐵達尼號沈船事故",
                    title: "",
                    tagDanderLevel: "",
                    tagFeature: "",
                    tagRegion: "",
                    tourdate: "",
                    description: ""
                },
                {
                    imgsrc: "",
                    imgalt: "期間限定-荷蘭的黃金年代",
                    title: "",
                    tagDanderLevel: "",
                    tagFeature: "",
                    tagRegion: "",
                    tourdate: "",
                    description: ""
                }
            ],
            informationVisible: 4,
        };
    },
    computed:{
        visibleInformation() {
            return this.information.slice(0, this.informationVisible);
        },
    },
    methods:{

    },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/utils/variables";

    
</style>
