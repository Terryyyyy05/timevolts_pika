<template>
    <div class="container">
        <the-heading
            heading="時光行程-期間限定"
            subheading="Itinerary"
        ></the-heading>
    </div>
  
    <section class="section">
        <div class="container carouselWrap">
            <div>
                <carousel></carousel>
                <aside-bar @tab0="changeParagraph0" @tab1="changeParagraph1" @tab2="changeParagraph2" @tab3="changeParagraph3" @tab4="changeParagraph4" ></aside-bar>
            </div>
            <div class="infoWrap">
                <div class="infoTitle">{{period[itinerary].title}}</div>
                <div class="tagWrap">
                    <span class="infoDanderLevel">#難度:{{period[itinerary].dangerLevel}}</span>
                    <span class="infoFeature">#{{period[itinerary].feature}}</span>
                    <span class="infoRegion">#{{period[itinerary].region}}</span>
                </div>
                <div class="infoDate">穿越年代:{{period[itinerary].date}}</div>
                <div class="infoContent">{{period[itinerary].content[contentOneToFive]}}</div>
            </div>    
        </div>
    </section>
    <section class="section">
        <div class="container">
            <div class="signup">
                <button class="btn-secondary button">我要參加活動</button>
            </div>
        </div>
    </section>
    <section class="section">
        <div class="container">
            <div class="commentwrap">
                <comments-info></comments-info> 
            </div>
        </div>
    </section>
    <section class="section">
        <div class="container">
            <div class="watchmorewrap">
                <itin-period-card-info></itin-period-card-info>
            </div>
        </div>
    </section>

</template>

<script>
import carousel from "@/components/itineraryPeriod/carousel.vue";
import commentsInfo from "@/components/itineraryPeriod/commentsInfo.vue";
import itinPeriodCardInfo from "@/components/itineraryPeriod/itinPeriodCardInfo.vue";
import asideBar from "@/components/itineraryPeriod/asideBar.vue"

export default {
    name: "itiniraryPeriodView",
    components: {
    carousel,
    commentsInfo,
    itinPeriodCardInfo,
    asideBar
    },
    data(){
        
        return{
            itinerary : 0,
            contentOneToFive: 0,
            period:[
                {   
                    itinerary:1,
                    title: "尼斯湖水怪",
                    dangerLevel: "低",
                    feature: "奇聞軼事",
                    region: "歐洲",
                    date: "??",
                    content: [
                        "尼斯湖水怪絕對是上個世紀最有名的一個不明生物。最早有人看到尼斯湖水怪是在1933年4月份的時候，直到今天80多年過去了，它的目擊情報從來沒有斷過。你相不相信水怪的存在呢?我們將帶您穿越回1933年，讓您親自見證!此行程穿越年份較短，時代背景與現今較無差異，適合新手體驗!",
                        "尼斯湖駕船，帶您觀賞尼斯湖之美。尼斯湖古城冒險。尋找尼斯湖水怪",
                        "蘇格蘭威士忌，獨特風味，是從蒸餾大麥酒和泥炭水中提煉而出。蘇格蘭的黑暗料理Haggis的魅力。",
                        "安全守則安全守則安全守則安全守則安全守則安全守則安全守則安全守則安全守則安全守則安全守則安全守則安全守則",
                        "取消政策取消政策取消政策取消政策取消政策取消政策取消政策取消政策取消政策取消政策取消政策取消政策取消政策取消政策"
                    ]
                },
                {
                    itinerary:2,
                    title: "不存在的車站-如月車站",
                    dangerLevel: "高",
                    feature: "奇聞軼事",
                    region: "亞洲",
                    date: "西元2004年",
                    content: "一名日本網友以葉純（はすみ）的名義進行文字直播，兼尋求協助。她表示自己在新濱松站登上西鹿島線後，列車駛了一段長時間都沒有到站，不久後她停止發文，音訊全無...",
                },
            ],
        }
    },
    mounted() {

    },
    methods: {
        // changeParagraph()
        changeParagraph0() {
            this.contentOneToFive = 0;
        },
        changeParagraph1() {
            this.contentOneToFive = 1;
        },
        changeParagraph2() {
            this.contentOneToFive = 2;
        },
        changeParagraph3() {
            this.contentOneToFive = 3;
        },
        changeParagraph4() {
            this.contentOneToFive = 4;
        }

    },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/app.scss";

.section {
    width: 100%;
    // height: 90vh;
    margin: 100px 0;
}

.container {
    width: map-get($container, each(d_container));
    // height: 100%;
}
.carouselWrap{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
}
.commentwrap{
    margin: 0 auto;
}

.button{
    margin: 0 auto;
}
.watchmorewrap{
    display: flex;
    flex-wrap: wrap;
}
.infoWrap{
    width: fit-content;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #fff;
    background-color: map-get($color, "dark_sub");

}
.infoTitle{
    width: 500px;
    height: 30px;
    margin: 0 0 5px 0;
    padding: 20px 10px;
    font-size: 32px;
    text-align: center;
    border: 2px solid map-get($color, "primary");
    background-color: map-get($color, "dark_sub");
}
.tagWrap{
    width: 500px;
    height: 30px;
    margin: 5px 0;
    padding: 20px 10px;
    font-size: 24px;
    display: flex;
    justify-content: space-between;
    border: 2px solid map-get($color, "primary");
    background-color: map-get($color, "dark_sub");
}
.infoDate{
    width: 500px;
    height: 30px;
    margin: 5px 0;
    padding: 20px 10px;
    font-size: 24px;
    border: 2px solid map-get($color, "primary");
    background-color: map-get($color, "dark_sub");
}
.infoContent{
    width: 500px;
    margin: 5px 0 0 0;
    padding: 20px 10px;
    font-size: 24px;
    line-height: 1.6;
    border: 2px solid map-get($color, "primary");
    background-color: map-get($color, "dark_sub");
}
</style>
