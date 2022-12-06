<template>
    <div class="wrapper">

        <div class="carousel" :style=Carousel>
            <div class="slide"
            v-for="(i) in itinerarys" :key="i.id"
            @click="clicklook(i),lookis(i)">
                <img v-bind:src="i.story_cover"/>
            </div>
        </div>
        <div class="content">
            <div class="itineraryTitle" >
                <h3>{{look.itinerary_name}}</h3>
            </div>
            <div class="itineraryText">
                <div class="summary">
                <p>{{look.story_age}}</p>
                <p>{{look.itinerary_memo}}</p>
                </div>
                <div class="more">
                    <img v-bind:src=imgsrc alt="圖騰">
                    <button>了解更多</button>
                </div>
            </div>
            <div class="itineraryTeg">
                <p>危險度:{{look.story_risk}}</p>
                <p>地點:{{look.story_spot}}</p>
            </div>
        <button id="radd" @click=rightadd(index,1)>&gt;</button>
        <button id="ladd" @click=leftadd(index)>&lt;</button>
        </div>
   </div>
</template>

<script>
// import { Carousel, Slide } from 'vue-carousel';

export default {
    // components: {
    //     Carousel,
    //     Slide
    // },
    data() {
        return {
            itinerarys:[
                {   
                    id:1,
                    story_cover: require('@/assets/image/itin/titanic.jpg'),
                    itinerary_name : "鐵達尼號沈船事件",
                    story_age : "西元1912年",
                    itinerary_memo:"回到過去的英國，體驗號稱「永不沉沒」的夢幻之船",
                    story_risk:"中",
                    story_spot:"北美洲",
                },
                {   
                    id:2,
                    story_cover: require('@/assets/image/itin/crusades.webp'),
                    itinerary_name : "馬雅文化",
                    story_age : "西元前2000年",
                    itinerary_memo:"回到過去的英國，體驗號稱「永不沉沒」的夢幻之船",
                    story_risk:"中",
                    story_spot:"南美洲",
                },
                {   
                    id:3,
                    story_cover: require('@/assets/image/itin/atlantis.png'),
                    itinerary_name : "亞特蘭提斯",
                    story_age : "西元前12000年",
                    itinerary_memo:`亞特蘭提斯，一夜之間在地球上消失的亞特蘭提斯。
    讓我們帶您乘坐時光機前往西元前一萬兩千年，究竟這場大洪水有沒有發生，亦或是帶你一窺究竟亞特蘭提斯的存在吧!
    穿越年代為西元前一萬兩千年，時空背景與現今差異甚大，生存環境危險，冒險者快來挑戰吧!`,
                    story_risk:"中",
                    story_spot:"姆大陸",
                },
                {   
                    id:4,
                    story_cover: require('@/assets/image/itin/titanic.jpg'),
                    itinerary_name : "鐵達尼號沈船事件2",
                    story_age : "西元1912年",
                    itinerary_memo:"回到過去的英國，體驗號稱「永不沉沒」的夢幻之船",
                    story_risk:"中",
                    story_spot:"北美洲",
                },
                {   
                    id:5,
                    story_cover: require('@/assets/image/itin/crusades.webp'),
                    itinerary_name : "馬雅文化2",
                    story_age : "西元1912年",
                    itinerary_memo:"回到過去的英國，體驗號稱「永不沉沒」的夢幻之船",
                    story_risk:"中",
                    story_spot:"南美洲",
                },
            ],
            look:{   
                //暫用粗暴解法，之後要串接正確內容才可
                    id:3,
                    story_cover: require('@/assets/image/itin/atlantis.png'),
                    itinerary_name : "亞特蘭提斯",
                    story_age : "西元前12000年",
                    itinerary_memo:`亞特蘭提斯，一夜之間在地球上消失的亞特蘭提斯。
    讓我們帶您乘坐時光機前往西元前一萬兩千年，究竟這場大洪水有沒有發生，亦或是帶你一窺究竟亞特蘭提斯的存在吧!
    穿越年代為西元前一萬兩千年，時空背景與現今差異甚大，生存環境危險，冒險者快來挑戰吧!`,
                    story_risk:"中",
                    story_spot:"姆大陸",
            },
            Carousel:{
                childInfo: {
                    title: 'PPP',
                    // content: 1000,
                }
            },
            seat:[],
            imgsrc:require('@/assets/image/home/icon/icon_1.svg'),
            filterExtension: false,
        };
    },
    computed:{
        prompt(){
            console.log(itinerarys);
            // this.look = itinerarys[1]
        },
    },
    methods: {
        clicklook(i){
            console.log(i);
            this.look = i

        },
        lookis(i){

        },
        rightadd(index){
            this.seat[index] +=1;
            console.log(this.seat[index]);
        },
        leftadd(index){
            this.seat[index] -=1;
            console.log(this.seat[index]);
        },
        
    },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/utils/variables";



.wrapper {
    height: 100vh;
    width: calc(100vw - 17.6px);
    left: -30px;
    padding: -30px;
    display: flex;
    // flex-direction: column;
    justify-content: center;
    // align-self: column;
    overflow: hidden;
    
    position: relative;
    // padding: 10px 20px;
    margin: 0 auto;
    #ladd,#radd{
        left: -5%;
        right: 105%;
        top: 50%;
        bottom: 50%;
        width: 40px;
        height: 40px;
        padding: 3px;
        font-size: 30px;
        transform: translate(-50% , -50%);
        position: absolute;
        background: map-get($color , "accent" );
        border:  1px solid map-get($color, "primary");
        border-radius: 20px;
    }
    #radd{
        left: 105%;
        right: -5%;
        }
    .carousel{
        position: absolute;
        display: flex;
        overflow: visible;
        transform: translateX(calc(40vw + 30px));
        transition: .7s;
        .slide{ 
            margin:15px;
            width: 40vw;
            height: 20vw;
            border-radius: 20px;
            img{
                width: 100%;
                height: 20vw;
                border-radius: 20px;
                border: 1px solid map-get($color, "primary");
                object-fit: cover;
            }
        }
        &.click{
            width: 60vw;
            height: 30vw;
            transition: .7s;
            img{
                height: 30vw;
            }
            
        }
    }    
    .content{
        width: fit-content;
        height: 180px;
        margin-top: calc(25vw);
        margin-left: 15px;
        margin-right: 15px;
        border-radius: 20px;
        // border: 2px solid map-get($color, "primary");
        background: map-get($color, "dark_sub");
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: top;
        position: relative;
        .itineraryTitle{
            width: 15vw;
            height: 100%;
            padding: 15px;
            box-sizing: border-box;
            border: 2px solid map-get($color, "primary");
            border-radius:20px 0 0 20px ;
            align-items: top;
        }
        .itineraryText{
            width: 40vw;
            // height: 100%;
            padding: 0 15 0px;
            box-sizing: border-box;
            display: flex;
            justify-content: space-between;
            border: 2px solid map-get($color, "primary");
            align-items: center;
            .summary{
                width: 80%;
                :nth-child(1){
                    font-size: 24px;
                    line-height: 33px;
                }
            }
            .more{
                width: 20%;
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                border-left: 2px solid map-get($color , "primary" );
                img{
                    margin: 20px;
                }
                button{
                    width: 100%;
                    padding: 10px;
                    background-color:  map-get($color , "accent" );
                    color:map-get($color , "dark" );
                    border: 2px solid map-get($color , "primary" );
                }
            }
        }
        .itineraryTeg{
            width: 15vw;
            // height: 100%;
            padding: 15px;
            box-sizing: border-box;
            border: 2px solid map-get($color, "primary");
            border-radius: 0 20px 20px 0;
            align-items: center;
            font-size: 24px;
            line-height: 33px;
        }
    }
    }

</style>
