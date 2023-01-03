<template>
    <itin-card
        v-for="itinerary in visibleInformation"
        :key="itinerary.title"
        :id="itinerary.id"
    >
        <div class="outterwrap">
            <h3>{{ itinerary.title }}</h3>
            <div class="wrap">
                <div class="imgblock">
                    <router-link
                        :to="
                            itinerary.type == '經典事件'
                                ? `/itineraryClassicView/c${itinerary.id}`
                                : `/itineraryPeriodView/p${itinerary.id}`
                        "
                    >
                        <img :src="itinerary.imgsrc" :alt="itinerary.imgalt" />
                        <div class="bg_accent morewrap">
                            <span class="morespan">more</span>
                        </div>
                    </router-link>
                </div>
                <div class="textblock">
                    <div>
                        <span class="p_md" v-if="itinerary.tagDangerLevel"
                            >#{{ itinerary.tagDangerLevel }}危險</span
                        >
                        <span class="p_md" v-if="itinerary.tagFeature"
                            >#{{ itinerary.tagFeature }}</span
                        >
                        <span class="p_md" v-if="itinerary.tagRegion"
                            >#{{ itinerary.tagRegion }}</span
                        >
                    </div>
                    <p class="p_md tourdate">
                        出團日期： {{ itinerary.tourdate }}
                    </p>
                    <p class="p_md description">{{ itinerary.description }}</p>
                </div>
            </div>
        </div>
    </itin-card>
    <show-more-button
        :trueOrFalse="distinguishTrueFalse"
        @show-more="AddvisibleInformation"
    ></show-more-button>
</template>

<script>
import itinCard from "@/components/itinerary/card/itinCard.vue";
import showMoreButton from "@/components/itinerary/card/showMoreButton.vue";
import { ref, computed } from "vue";
import { cardContext } from "../js/data.js";
import { BASE_URL } from "@/assets/js/commom";

export default {
    components: {
        itinCard,
        showMoreButton,
    },
    setup() {
        const informationVisible = ref(4);

        const AddvisibleInformation = () => {
            return (informationVisible.value += 4);
        };

        const visibleInformation = computed(() => {
            return cardContext.slice(0, informationVisible.value);
        });

        const distinguishTrueFalse = computed(() => {
            return informationVisible.value !== 16 ? true : false;
        });
        // const storyData = reactive([]);
        // const fetchStory = () => {
        //     fetch(`${BASE_URL}/getItineraries.php`)
        //         .then((res) => res.json)
        //         .then((data) => {
        //             const storyInfos = [];
        //             for (const key in data) {
        //                 const storyInfo = {
        //                     name: data[key].story_name,
        //                     risk: data[key].story_risk,
        //                     specialty: data[key].story_specialty,
        //                     spot: data[key].story_spot,
        //                     years: data[key].itinerary_number_of_years,
        //                     intro: data[key].story_intro,
        //                     image: data[key].story_cover,
        //                 };
        //                 storyInfos.push(storyInfo);
        //             }
        //             storyData.value = storyInfos;
        //             console.log(storyInfos);
        //         });
        // };
        return {
            informationVisible,
            visibleInformation,
            AddvisibleInformation,
            distinguishTrueFalse,
        };
    },
    data() {
        return {
            storyData: [],
        };
    },
    created() {
        this.fetchStory();
    },
    methods: {
        fetchStory() {
            fetch(`${BASE_URL}/getItineraries.php`)
                .then((res) => res.json())
                .then((data) => {
                    const storyInfos = [];
                    for (const key in data) {
                        const storyInfo = {
                            name: data[key].story_name,
                            risk: data[key].story_risk,
                            specialty: data[key].story_specialty,
                            spot: data[key].story_spot,
                            years: data[key].itinerary_number_of_years,
                            intro: data[key].story_intro,
                            image: data[key].story_cover,
                        };
                        storyInfos.push(storyInfo);
                    }
                    this.storyData = storyInfos;
                    console.log(this.storyData);
                });
        },
    },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/utils/variables";
@import "@/assets/css/layout/rwd.scss";

.wrap {
    display: flex;
    height: 80%;
}
.imgblock {
    width: 50%;
    height: 100%;
    object-fit: cover;
    align-self: center;
    margin: 2%;
    box-sizing: border-box;
    position: relative;
}
img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.textblock {
    color: #fff;
    width: 50%;
    padding: 1%;
    margin: 1%;
    box-sizing: border-box;
}
h3 {
    color: #fff;
    text-align: center;
    width: 100%;
    font-size: 32px;
    height: 60px;
    margin-bottom: 10px;
    border-bottom: 1px solid #fff;
}
span {
    display: inline-block;
    height: 20px;
    margin: 3px 10px 3px 0;
    padding: 3px;
    font-size: 16px;
}
.tourdate {
    height: 50px;
    margin: 2% 0;
    padding: 5px;
    font-size: 16px;
}
.description {
    margin: 2% 0;
    height: 250px;
    overflow-y: auto;
    padding: 5px;
    font-size: 16px;

    //捲軸底色
    &::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        background-color: map-get($color, "dark");
    }
    //捲軸寬度
    &::-webkit-scrollbar {
        width: 6px;
        background-color: black;
    }
    //捲軸本體顏色
    &::-webkit-scrollbar-thumb {
        background-color: map-get($color, "muted");
    }
}
// .outterwrap {
//   position: relative;
// }
.morewrap {
    width: 80px;
    height: 30px;
    display: flex;
    position: absolute;
    bottom: 0;
    right: 0;
    margin-left: auto;
}
.morespan {
    color: map-get($color, "dark");
    text-align: center;
    margin: auto;
    font-size: 20px;
}
@include m() {
    h3 {
        font-size: 28px;
        line-height: 70px;
    }
}
</style>
