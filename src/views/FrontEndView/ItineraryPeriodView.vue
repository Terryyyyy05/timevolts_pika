<template>
    <div class="container">
        <the-heading
            heading="時光行程-期間限定"
            subheading="Itinerary"
        ></the-heading>
    </div>
  
    <section class="section">
        <div class="container carouselWrap">
            <carousel></carousel>
            <div class="infoWrap">
                <div class="infoTitle">{{period[itinerary].title}}</div>
                <div class="tagWrap">
                    <span class="infoDanderLevel">{{period[itinerary].dangerLevel}}</span>
                    <span class="infoFeature">{{period[itinerary].feature}}</span>
                    <span class="infoRegion">{{period[itinerary].region}}</span>
                </div>
                <div class="infoDate">{{period[itinerary].date}}</div>
                <div class="infoContent">{{period[itinerary].content}}</div>
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

export default {
    name: "itiniraryPeriodView",
    components: {
    carousel,
    commentsInfo,
    itinPeriodCardInfo
    },
    data(){
        
        return{
            itinerary : 0,
            period:[
                {
                    title: "尼斯湖水怪",
                    dangerLevel: "低",
                    feature: "奇聞軼事",
                    region: "歐洲",
                    data: "??",
                    content: "尼斯湖水怪絕對是上個世紀最有名的一個不明生物。最早有人看到尼斯湖水怪是在1933年4月份的時候，直到今天80多年過去了，它的目擊情報從來沒有斷過。你相不相信水怪的存在呢?",
                },
                {
                    title: "eeeeee",
                    dangerLevel: "低",
                    feature: "奇聞軼事",
                    region: "歐洲",
                    data: "??",
                    content: "尼斯湖水怪絕對是上個世紀最有名的一個不明生物。最早有人看到尼斯湖水怪是在1933年4月份的時候，直到今天80多年過去了，它的目擊情報從來沒有斷過。你相不相信水怪的存在呢?",
                },
            ]
        }
    },
    mounted() {

    },
    methods: {

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
    border: 3px solid red;
    width: 500px;
    height: 500px;
    display: flex;
    flex-direction: column;
}
</style>
