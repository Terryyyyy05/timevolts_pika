<template>
    <all-header />
    <innerpageHeader></innerpageHeader>
    <div class="container">
        <the-heading heading="期間行程" subheading="Period"></the-heading>
    </div>

    <section class="section">
        <div class="container carouselWrap">
            <div>
                <carousel :test="imgText"></carousel>
                <aside-bar
                    @tab0="changeParagraph0"
                    @tab1="changeParagraph1"
                    @tab2="changeParagraph2"
                    @tab3="changeParagraph3"
                    @tab4="changeParagraph4"
                ></aside-bar>
            </div>
            <div class="infoWrap">
                <div class="infoTitle">{{ result.story_name }}</div>
                <div class="tagWrap">
                    <span class="infoDangerLevel"
                        >#難度:{{ period2.tagDangerLevel }}</span
                    >
                    <span class="infoFeature">#{{ period2.tagFeature }}</span>
                    <span class="infoRegion">#{{ period2.tagRegion }}</span>
                </div>
                <div class="infoDate">穿越年代:{{ period2.tourdate }}</div>
                <div class="infoContent">
                    {{ period2.content[contentOneToFive] }}
                </div>
            </div>
        </div>
    </section>
    <section class="section">
        <div class="container">
            <div class="signup">
                <router-link to="/itinerary-booking">
                    <button class="btn-secondary button">我要參加活動</button>
                </router-link>
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
    <all-footer />
</template>

<script>
import carousel from "@/components/itineraryPeriod/carousel.vue";
import commentsInfo from "@/components/itineraryPeriod/commentsInfo.vue";
import itinPeriodCardInfo from "@/components/itineraryPeriod/itinPeriodCardInfo.vue";
import asideBar from "@/components/itineraryPeriod/asideBar.vue";
import { reactive } from "vue";
import { cardContext } from "@/components/itinerary/js/data.js";
import { onBeforeRouteUpdate, useRoute, useRouter } from "vue-router";

export default {
    name: "itiniraryPeriodView",
    components: {
        carousel,
        commentsInfo,
        itinPeriodCardInfo,
        asideBar,
    },
    setup() {
        const route = useRoute();

        const period2 = reactive(
            cardContext.find((i) => {
                return i.id === parseInt(route.params.id);
            })
        );
        console.log(period2);
        console.log(period2.imgsrc);
        // /img/lochNessMonster.jpg

        console.log(period2.imgsrc.split("/"));
        // ['', 'img', 'titanic.jpg']

        console.log(period2.imgsrc.split("/")[2]);
        // titanic.jpg

        console.log(period2.imgsrc.split("/")[2].split("."));
        // ['titanic','jpg']

        console.log(period2.imgsrc.split("/")[2].split(".")[0]);
        // titanic

        const imgText = period2.imgsrc.split("/")[2].split(".")[0];

        return {
            period2,
            imgText,
        };
    },
    data() {
        return {
            itinerary: 0,
            contentOneToFive: 0,
            result: [],
        };
    },
    created() {
        this.getData();
    },
    mounted() {},
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
        },
        getData() {
            fetch(
                "http://localhost/timevolts/public/phpfile/getItineraries.php"
            )
                .then((res) => res.json())
                .then((json) => {
                    this.result = json;
                    console.log(this.result);
                });
        },
    },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/app.scss";

.section {
    width: 100%;
    margin: 100px 0;
}

.container {
    width: map-get($container, each(d_container));
}
.carouselWrap {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
}
.commentwrap {
    margin: 0 auto;
}

.button {
    margin: 0 auto;
}
.watchmorewrap {
    height: 580px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    overflow: hidden;
}
.infoWrap {
    width: fit-content;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #fff;
    background-color: map-get($color, "dark_sub");
}
.infoTitle {
    width: 500px;
    height: 30px;
    margin: 0 0 5px 0;
    padding: 20px 10px;
    font-size: 32px;
    text-align: center;
    border: 2px solid map-get($color, "primary");
    background-color: map-get($color, "dark_sub");
}
.tagWrap {
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
.infoDate {
    width: 500px;
    height: 30px;
    margin: 5px 0;
    padding: 20px 10px;
    font-size: 24px;
    border: 2px solid map-get($color, "primary");
    background-color: map-get($color, "dark_sub");
}
.infoContent {
    width: 500px;
    height: 300px;
    overflow-y: auto;
    margin: 5px 0 0 0;
    padding: 20px 10px;
    font-size: 24px;
    line-height: 1.6;
    border: 2px solid map-get($color, "primary");
    background-color: map-get($color, "dark_sub");
}
@include m() {
    .infoWrap {
        width: fit-content;
        background-color: map-get($color, "dark_sub");
    }
    .infoTitle,
    .tagWrap,
    .infoDate {
        width: 100%;
        font-size: 18px;
        height: 20px;
        padding: 10px;
    }

    .infoContent {
        width: 100%;
        font-size: 18px;
        overflow-y: auto;
        height: 180px;
    }
}
</style>
