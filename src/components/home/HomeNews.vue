<template>
    <div class="news">
        <div class="box" v-for="item in NewsData" :key="item.news_id">
            <h3>{{ item.news_title }}</h3>
            <div class="p_md newsText">
                <p>{{ item.news_content }}</p>
            </div>
            <div class="more">
                <p>{{ item.news_add_date.substr(0, 10) }}</p>
                <router-link class="link" to="/news">了解更多</router-link>
            </div>
            <!-- <div class="img">
        <img v-bind:src="imgsrc" alt="圖騰" />
      </div> -->
        </div>
    </div>
</template>

<script>
export default {
    // components: {
    //     Carousel,
    //     Slide
    // },
    data() {
        return {
            NewsData: [],

            newsData: [
                {
                    id: 1,
                    title: "新商品出爐囉!!",
                    date: "2022-12-11",
                    hashtag: "#新品上架",
                    content:
                        "超過上百種語言翻譯，打破溝通障礙，運用本公司獨家秘方【翻譯蒟蒻】，精準翻出生活化的當地語言，就像學會當地語言一樣與人流暢對話。",
                    content_box: "",
                    img: require(`@/assets/image/news/jelly.jpeg`),
                },
                {
                    id: 2,
                    title: "穿梭於史前時代",
                    date: "2022-12-10",
                    hashtag: "#經典行程 #高度危險",
                    content:
                        "人類的歷史分成：史前時代及信使時代。「文字的出現」為畫分的依據，史前時代沒有文字，信使時代為文字開始。今天，我們將回到史前時代，建立屬於自己的莊園，面對嚴苛的大自然及猛獸努力存活下去。",
                    content_box: "",
                    img: require(`@/assets/image/news/prehistoric_01.jpg`),
                },
                {
                    id: 3,
                    title: "官網維護公告",
                    date: "2022-11-09",
                    hashtag: "#公告 #維修中",
                    content:
                        "親愛的用戶您好，為提高您的網站使用品質，本公司將預計2022-09-15進行系統維護作業，期間會造成部分網頁無法使用，造成您的不便，敬請見諒!",
                    content_box: "",
                    img: require(`@/assets/image/news/system.png`),
                },
            ],
            imgsrc: require("@/assets/image/home/icon/icon_1.svg"),
        };
    },
    created() {
        this.getHomeNewData();
    },
    methods: {
        getHomeNewData() {
            fetch(
                "http://localhost/timevolts_pika/public/phpfiles/getHomeNew.php"
            )
                .then((res) => res.json())
                .then((jsonData) => {
                    this.NewsData = jsonData;
                    console.log(this.NewsData);
                });
        },
    },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/utils/_variables.scss";

.news {
    width: 70vw;
    height: fit-content;
    margin: auto;
    display: flex;
    gap: 10px;

    @media screen and (max-width: $m-breakpoint) {
        height: auto;
        flex-direction: column;
    }
    // border: 2px solid map-get($color , "primary" );
}
.box {
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    line-height: 1.4;
    h3 {
        // height: 4vw;
        padding: 10px;
        display: inline-block;
        color: map-get($color, "accent_sub");
        border: 2px solid map-get($color, "primary");
        background-color: map-get($color, "dark_sub");
        font-family: "Cube11";
    }
    .newsText {
        min-height: 17vw;

        border: 2px solid map-get($color, "primary");
        background-color: map-get($color, "dark_sub");
        p {
            padding: 10px;
        }
    }
    .more {
        // height: 3vw;
        display: flex;
        justify-content: space-between;
        border: 2px solid map-get($color, "primary");
        background-color: map-get($color, "dark_sub");
        @media screen and (max-width: $m-breakpoint) {
            height: auto;
        }
        p {
            padding: 10px;
        }
        .link {
            border-left: 4px solid map-get($color, "primary");
            color: map-get($color, "accent");
            padding: 10px;
        }
    }
    .img {
        height: 7vw;
        padding: auto;
        display: flex;
        justify-content: center;
        // align-self: center;
        border: 2px solid map-get($color, "primary");
        background-color: map-get($color, "dark_sub");
        @media screen and (max-width: $m-breakpoint) {
            display: none;
        }
        img {
            padding: 1rem;
            width: 50%;
        }
    }
}
.box:nth-of-type(2) {
    .img {
        // background-color: #fff;
        order: -3;
        @media screen and (max-width: $m-breakpoint) {
            order: 1;
        }
    }
}
</style>
