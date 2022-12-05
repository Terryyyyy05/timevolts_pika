<template>
    <div class="wrapper">
        <div class="carousel">
            <div class="slide"
            v-for="i in itinerarys" :key="i.id"
            @click="slat(i)">
                <img :src="require('@/assets/image/itin/titanic.jpg')" :key="i.story_cover"/>
            </div>
        </div>
        <div>
            <h3>{{eye.itinerary_name}}</h3>
        </div>
        <div>
            <div>
            <p>{{eye.story_age}}</p>
            <p>{{eye.itinerary_memo}}</p>
            </div>
            <div>
                <img src="#" alt="">
                <button>了解更多</button>
            </div>
            <div>
                <p>危險度:{{eye.story_risk}}</p>
            </div>
        </div>
   </div>
</template>

<script>

export default {
//    components: {
//             HomeItinerary,
//    },
   data() {
      return {
        itinerarys:[
            {   
                id:1,
                story_cover:'@/assets/image/itin/titanic.jpg',
                itinerary_name : "鐵達尼號沈船事件",
                story_age : "西元1912年",
                itinerary_memo:"回到過去的英國，體驗號稱「永不沉沒」的夢幻之船",
                story_risk:"中",
                story_spot:"北美洲",
            },
            {   
                id:2,
                story_cover:'@',
                itinerary_name : "鐵達尼號沈船事件2",
                story_age : "西元1912年",
                itinerary_memo:"回到過去的英國，體驗號稱「永不沉沒」的夢幻之船",
                story_risk:"中",
                story_spot:"北美洲",
            },
            {   
                id:3,
                story_cover:'@',
                itinerary_name : "鐵達尼號沈船事件3",
                story_age : "西元1912年",
                itinerary_memo:`回到過去的英國，體驗號稱「永不沉沒」的夢幻之船`,
                story_risk:"中",
                story_spot:"北美洲",
            },
        ],
        eye:{},
        filterExtension: false,
      };
   },
   methods: {
    slat(i){
        console.log(i);
        this.atttt = i
    }
    
      
   },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/utils/variables";
.wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    padding: 10px 20px;
    width: fit-content;
    margin: 0 auto;
    .carousel{
        width: calc(100vw - 17px);
        display: flex;
        overflow: hidden;
        .slide{
            img{
                border: 1px solid map-get($color, "primary");
                width: 50vw;
            }
        }
    }    
    
    }

</style>
