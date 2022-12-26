<template>
    <all-header />
    <innerpageHeader></innerpageHeader>
    <div class="container">
        <the-heading heading="時光行程" subheading="Itinerary"></the-heading>
    </div>

    <section class="section bannersec">
        <div class="container">
            <div class="banner1">
                <div class="word_wrap">
                    <p class="text">準備來場頭暈目眩的穿越吧</p>
                </div>
                <div class="globe_wrap" id="globe_container">
                    <canvas class="canvas_globe"></canvas>
                </div>
            </div>
        </div>
    </section>
    <section class="section">
        <div class="container">
            <div class="btnwrap">
                <itin-crsl-btn msg="經典行程" />
            </div>
            <div class="clsCrslWrap">
                <itinerary-classic-carousel />
            </div>
        </div>
    </section>
    <section class="section">
        <div class="container">
            <div class="btnwrap">
                <itin-crsl-btn msg="期間限定" />
            </div>
            <div class="clsCrslWrap">
                <itin-prd-crsl />
            </div>
        </div>
    </section>
    <section class="section">
        <div class="container">
            <itinerary-filter />
            <div class="cardwrap">
                <itin-card-info />
            </div>
        </div>
    </section>
    <all-footer />
</template>
<script type="module">
import { animate, sceneInit } from "@/components/itinerary/js/globe.js";
import itinCrslBtn from "@/components/itinerary/itinCrslBtn.vue";
import itinClsCrsl from "@/components/itinerary/itinClsCrsl.vue";
import itinPrdCrsl from "@/components/itinerary/itinPrdCrsl.vue";
import itineraryFilter from "@/components/itinerary/filter/itineraryFilter.vue";
import itinCardInfo from "@/components/itinerary/card/itinCardInfo.vue";
import itineraryClassicCarousel from "@/components/itinerary/itineraryClassicCarousel.vue";
export default {
    name: "itiniraryView",
    components: {
        itinCrslBtn,
        itinClsCrsl,
        itinPrdCrsl,
        itineraryFilter,
        itinCardInfo,
        itineraryClassicCarousel,
    },
    data() {
        return {
            // result: {},
        };
    },
    mounted() {
        sceneInit();
        animate();
    },
    created() {
        // this.getData();
    },
    methods: {
        // getData() {
        //     fetch("http://localhost/timevolts/public/phpfiles/getProducts.php")
        //         .then((res) => res.json())
        //         .then((json) => {
        //             this.result = json;
        //             console.log(this.result);
        //         });
        // },
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
.bannersec {
    height: 90vh;
    // outline:  1px solid red;
    margin-top: 30px;
}
.container {
    width: map-get($container, each(d_container));
    // height: 100%;
}
.banner1 {
    display: flex;
    height: 90vh;
}
.globe_wrap {
    width: 70%;
}
.word_wrap {
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.text {
    color: #fff;
    font-size: 28px;
    text-align: center;
}
.btnwrap {
    margin: 0 auto;
    width: fit-content;
}
.clsCrslWrap {
    overflow: hidden;
}
.cardwrap {
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    justify-content: center;
}
@include m() {
    .banner1 {
        flex-direction: column;
    }
    .globe_wrap {
        width: 100%;
        height: 80vh;
        margin: 50px auto;
    }
    .word_wrap {
        width: 100%;
        margin: 50px auto 0;
    }
}
</style>
