<template>
    <div class="wrapper">
        
        <div class="carousel" :style=Carousel>
            <div class="slide"
                v-for="(i) in itinerarys" :key="i.id"
                :class="{'is-active': activeId == i.id}"
                @click="clickslide(i),lookis(i)">
                <img v-bind:src="i.story_cover"/>
            </div>
        </div>
        <div class="content">
            <div class="itineraryTitle" >
                <h3>{{look.itinerary_name}}</h3>
            </div>
            <div class="itineraryText">
                <div class="summary">
                <p>年代:{{look.story_age}}</p>
                <p>{{look.itinerary_memo}}</p>
                </div>
            </div>
            <div class="more">
                <img v-bind:src='imgsrc' alt="圖騰">
                <button>了解更多</button>
            </div>
            <div class="itineraryTeg">
                <p>危險度:{{look.story_risk}}</p>
                <p>地點:{{look.story_spot}}</p>
                <p>{{look.tagFeature}}</p>
            </div>
        <button id="radd" @click="nextPage">&gt;</button>
        <button id="ladd" @click="prevPage">&lt;</button>
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
            paginations: 5,
            currentPage: 1,
            clickRight: true,
            clickLeft: false,
            itinerarys:[
                {   
                    id:1,
                    story_cover: require('@/assets/image/itin/titanic.jpg'),
                    itinerary_name : "鐵達尼號沈船事件",
                    story_age : "西元1912年",
                    itinerary_memo:"回到過去的英國，體驗號稱「永不沉沒」的夢幻之船",
                    story_risk:"中",
                    story_spot:"北美洲",
                    tagFeature:null,
                },
                {   
                    id:2,
                    story_cover: require('@/assets/image/itin/culturaMaya.webp'),
                    itinerary_name : "馬雅文化",
                    story_age : "未知",
                    itinerary_memo:"回到過去的英國，體驗號稱「永不沉沒」的夢幻之船",
                    story_risk:"低",
                    story_spot:"南美洲",
                    tagFeature:null,
                },
                {   
                    id:3,
                    story_cover: require('@/assets/image/itin/atlantis.png'),
                    itinerary_name : "亞特蘭提斯",
                    story_age : "西元前12000年",
                    itinerary_memo:`這個地方是個傳說中的地方，存不存在沒人知道，。柏拉圖說，公元前9560年的時候，在直布羅陀海峽的對面有一個非常大的島，也就是現在的非洲大陸，他聲稱這個非洲大陸旁邊還有一個非常大的島，這個島也就是亞特蘭提斯。...`,
                    story_risk:"低",
                    story_spot:null,
                    tagFeature:"奇聞軼事",
                },
                {   
                    id:4,
                    story_cover: require('@/assets/image/itin/titanic.jpg'),
                    itinerary_name : "鐵達尼號沈船事件2",
                    story_age : "西元1912年",
                    itinerary_memo:"回到過去的英國，體驗號稱「永不沉沒」的夢幻之船",
                    story_risk:"中",
                    story_spot:"北美洲",
                    tagFeature:null,
                },
                {   
                    id:5,
                    story_cover: require('@/assets/image/itin/culturaMaya.webp'),
                    itinerary_name : "馬雅文化2",
                    story_age : "西元1912年",
                    itinerary_memo:"回到過去的英國，體驗號稱「永不沉沒」的夢幻之船",
                    story_risk:"中",
                    story_spot:"南美洲",
                    tagFeature:null,
                },
            ],
            look:{   
                //暫用粗暴解法，之後要串接正確內容才可
                    id:2,
                    story_cover: require('@/assets/image/itin/culturaMaya.webp'),
                    itinerary_name : "馬雅文化",
                    story_age : "未知",
                    itinerary_memo:"回到過去的英國，體驗號稱「永不沉沒」的夢幻之船",
                    story_risk:"低",
                    story_spot:"南美洲",
                    tagFeature:null,
            },
            Carousel:{
                // childInfo: {
                //     title: 'PPP',
                //     content: 1000,
                // }
            },
            seat:[],
            imgsrc:require('@/assets/image/home/icon/icon_1.svg'),
            filterExtension: false,
            activeId: 0,
        };
    },
    computed:{
        // pagination(){
        //     this.paginations = itinerarys.index;
        // },
        // prompt(){
        //     console.log(itinerarys);
        //     const itin = itinerarys;
        //     this.look = itin[1];
        // },
    },
    methods: {
        prevPage(){
                //當前頁面是第一頁，不能再往前
                if(this.currentPage === 1) return
                this.clickRight = false
                this.clickLeft = true

                //this.currentPage = this.currentPage - 1
                this.currentPage -= 1
        },
        nextPage(){
                //當前頁面是最後一頁，不能再往後
                if(this.currentPage >= this.paginations) return
                this.clickRight = true
                this.clickLeft = false

                //this.currentPage = this.currentPage + 1
                this.currentPage += 1
        },
        selectPage(val){
                this.currentPage = val
        },
        clickslide(i){
            console.log(i);
            this.look = i;
            this.activeId = i.id;
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
    created() {
    //   pagination();
        this.look = this.itinerarys[0]
    },

}
</script>

<style lang="scss" scoped>
@import "@/assets/css/utils/variables";



.wrapper {
    height: 100vh;
    width: calc(100vw - 17.6px);
    left: -30px;
    padding: -30px;
    display: flex;
    justify-content: center;
    overflow: hidden;
    
    position: relative;
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
        background: map-get($color , "primary" );
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
        height: 170px;
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
        &div{vertical-align: text-top;}
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
            width: 32vw;
            height: 100%;
            // padding: 0 15px 0px;
            box-sizing: border-box;
            display: flex;
            justify-content: space-between;
           
            border: 2px solid map-get($color, "primary");
            align-items: center;
            text-overflow: ellipsis;
            .summary{
                width: 80%;
                height: 100%;
                padding: 20px;
                align-self: start;
                line-height: 1.4;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                :nth-child(1){
                    font-size: 24px;
                }
            }
        }
        .more{
            width: 8vw;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            box-sizing: border-box;
            border: 2px solid map-get($color , "primary" );
            img{
                margin:2rem 1rem;
            }
            button{
                left: -1px;
                width: 8vw;
                padding: .7rem;
                box-sizing: border-box;
                color:map-get($color , "dark" );
                background-color:  map-get($color , "accent" );
                border: 1px solid map-get($color , "primary" );
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
