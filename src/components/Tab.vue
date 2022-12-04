<template>
<nav class="select-btn">
  <button id="select-item" @click="selectTab('all')">
    <img src="../assets/image/news/lightning.svg" alt="">全部消息
  </button>
  <button id="select-item" @click="selectTab('itinerary')">
    <img src="../assets/image/news/lightning.svg" alt="">行程預訂
  </button>
  <button id="select-item" @click="selectTab('history')">
    <img src="../assets/image/news/lightning.svg" alt="">歷史事件
  </button>
  <button id="select-item" @click="selectTab('shopping')">
    <img src="../assets/image/news/lightning.svg" alt="">購物商城
  </button>
  <button id="select-item" @click="selectTab('other')">
    <img src="../assets/image/news/lightning.svg" alt="">其他消息
  </button>
</nav>
<select id="select-item-choose">
  <option>全部消息</option>
  <option>行程預訂</option>
  <option>歷史事件</option>
  <option>購物商城</option>
  <option>其他消息</option>
</select>



  <ul v-if="currentTab == 'all'">
    <li class="news" v-for="(item, index) in newsData" :key="index">
      <h2>{{item.title}}</h2>
      <p class="date">{{item.date}}</p>
      <span class="hashtag">{{item.hashtag}}</span>
      <p class="content">{{item.content}}</p>
      <button type="button" class="more" @click="openBox">
        看更多...
      </button>
    </li>
  </ul>
  <ul v-if="currentTab == 'itinerary'">
    <li class="news" v-for="(item, index) in itineraryData" :key="index">
      <h2>{{item.title}}</h2>
      <p class="date">{{item.date}}</p>
      <span class="hashtag">{{item.hashtag}}</span>
      <p class="content">{{item.content}}</p>
      <button type="button" class="more" @click="openBox">
        看更多...
      </button>
    </li>
  </ul>
  <ul v-if="currentTab == 'history'">
    <li class="news" v-for="(item, index) in historyDataSort" :key="index">
      <h2>{{item.title}}</h2>
      <p class="date">{{item.date}}</p>
      <span class="hashtag">{{item.hashtag}}</span>
      <p class="content">{{item.content}}</p>     
      <button type="button" class="more" @click="openBox">
        看更多...
      </button>
    </li>
  </ul>
  <ul v-if="currentTab == 'shopping'">
    <li class="news" v-for="(item, index) in shoppingData" :key="index">
      <h2>{{item.title}}</h2>
      <p class="date">{{item.date}}</p>
      <span class="hashtag">{{item.hashtag}}</span>
      <p class="content">{{item.content}}</p>     
      <button type="button" class="more" @click="openBox">
        看更多..
      </button>
    </li>
  </ul>
  <ul v-if="currentTab == 'other'">
    <li class="news" v-for="(item, index) in otherData" :key="index">
      <h2>{{item.title}}</h2>
      <p class="date">{{item.date}}</p>
      <span class="hashtag">{{item.hashtag}}</span>
      <p class="content">{{item.content}}</p>     
      <button type="button" class="more" @click="openBox">
        看更多...
      </button>
    </li>
  </ul>

  <div class="l-box" v-for="(item,index) in newsData" :key="index" :style="modalStyle">
    <button class="close-l-box" @click="close">
      <font-awesome-icon icon="fa-solid fa-xmark" />
    </button>
    <div class="l-box-img">
      <img :src="item.img" />  <!-- 自閉合 -->
    </div>
    <div class="l-box-content">
      <h2>{{item.title}}</h2>
      <p class="date">{{item.date}}</p>
      <span class="hashtag">{{item.hashtag}}</span>
      <p class="content">{{item.content}}</p>     
    </div>
  </div>


</template>

<script>
export default {
  props:{
        img:String,
        title:String,
        date:Number,
        hashtag:String,
        content:String,
        
    },
  data(){
    return{
      currentTab:'all',
      isShow: false,
      itineraryData:[
        {
          title:'穿梭於史前時代',
          date:'2022-12-10',
          hashtag:'#經典行程 #高度危險',
          content:'人類的歷史分成：史前時代及信使時代。「文字的出現」為畫分的依據，史前時代沒有文字，信使時代為文字開始。今天，我們將回到史前時代，建立屬於自己的莊園，面對嚴苛的大自然及猛獸努力存活下去。',
          content_box:'',
          img: require(`@/assets/image/news/egypt.jpg`),
        },
        {
          title:'埃及五千年的黃金時代',
          date:'2022-11-10',
          hashtag:'#經典行程 #中度危險',
          content:'埃及進入第一個「金色時代」，或「黃金時代」。在此期間，太陽作為「偉大的雌雄一體」，毫無疑問地被奉為至高神祇。這位新國王將其父親遺留的壯觀事業進一步發揚光大，完成了埃及史上最宏大且最受美譽的著名地標：吉薩大金字塔。吉薩大金字塔是當今世人所知的名稱，然而，當初的命名是「阿赫特─胡夫」，意即「胡夫的地平線」。',
          content_box:'',
          img: require(`@/assets/image/news/egypt.jpg`),
        },
        {
          title:'赤壁之戰',
          date:'2022-10-10',
          hashtag:'#經典行程 #高度危險 #亞洲',
          content:'根據三國誌記載，曹操因多年北伐征討，將兵早已疲倦不堪，加上青州兵擅長陸戰，南下又水土不服，染上瘟疫，整個曹軍能夠作戰的兵力實則不到二十萬；反觀，周瑜、黃蓋皆是當地人，熟悉水域、氣候，綜觀各樣條件，孫劉聯軍才得以寡擊眾，重創曹軍，開創三國鼎立的局勢。',
          content_box:'',
          img: require(`@/assets/image/news/egypt.jpg`),
        }
      ],
      historyData:[
        {
          title:'鐵達尼號沈船',
          date:'2022-12-12',
          hashtag:'#歷史事件 #歐洲',
          content:'鐵達尼號沉沒事故是1912年4月14日深夜至15日凌晨在北大西洋發生的著名船難，事發時是鐵達尼號從英國南安普敦港至美國紐約港首航的第5天，該船與一座冰山擦撞前，已經收到6次海冰警告，但當瞭望員看到冰山時，由於無法快速轉向，該船右舷側面遭受了一次撞擊，部分船體出現縫隙，使16個水密隔艙中的5個進水。',
          content_box:'',
          img: require(`@/assets/image/news/egypt.jpg`),
        },
        {
          title:'鄭和下西洋',
          date:'2022-12-10',
          hashtag:'#歷史事件 #亞洲',
          content:'鄭和下西洋象徵著中國航海史上的一個高峰。當時明朝在航海技術，船隊規模、航程之遠、持續時間、涉及領域等的規模及高度，在當時的年代均是前所未見，沿途亦有遇上倭寇劫船之風險，可能造成財物損失，甚至有生命危險，請謹慎評估風險後再進行報名。',
          content_box:'',
          img: require(`@/assets/image/news/egypt.jpg`),
        },
        {
          title:'馬雅文明',
          date:'2022-11-30',
          hashtag:'#歷史事件 #南美洲',
          content:'關於「馬雅」文明的傳說，很多人都聽說過。提到馬雅人，大部分人會把他們與美洲叢林聯繫到一起。浮現在腦海中的也是一群印地安人，他們身著鮮豔羽毛服飾，趁著月光進行著神祕的儀式，法術高強的祭司站在中間，其他人繞著轉圈。',
          content_box:'',
          img: require(`@/assets/image/news/egypt.jpg`),
        }
      ],
      shoppingData:[
        {
        title:'購物須知',
        date:'2022-11-11',
        hashtag:'#最新公告',
        content:'【購物流程】1.點選您需要的商品規格及數量，加入購物車。2.購物車內確認購買項目後，點選前往結帳（請注意：購物車內商品尚未結帳前，如商品已無庫存，進入結帳時系統會取消商品數量，請注意核對結帳數量及項目）。',
        content_box:'',
        img: require(`@/assets/image/news/egypt.jpg`),
        
        },
        {
          title:'新商品出爐囉!!',
          date:'2022-12-11',
          hashtag:'#新品上架',
          content:'超過上百種語言翻譯，打破溝通障礙，運用本公司獨家秘方【翻譯蒟蒻】，精準翻出生活化的當地語言，就像學會當地語言一樣與人流暢對話。',
          content_box:'',
          img: require(`@/assets/image/news/egypt.jpg`),
        }
      ],
      otherData:[
        {
          title:'官網維護公告',
          date:'2022-11-09',
          hashtag:'#公告 #維修中',
          content:'親愛的用戶您好，為提高您的網站使用品質，本公司將預計2022-09-15進行系統維護作業，期間會造成部分網頁無法使用，造成您的不便，敬請見諒!',
          content_box:'',
          img: require(`@/assets/image/news/egypt.jpg`),
        }
      ],
    }
  },
  computed: {
    newsData(){
      return[...this.itineraryData,...this.historyData,...this.shoppingData,...this.otherData].sort((a,b)=>{
        return new Date(a.date).valueOf()-new Date(b.date).valueOf()
      })
    },
    historyDataSort() {
      return [...this.historyData].sort((a,b)=>{
        return new Date(a.date).valueOf()-new Date(b.date).valueOf()
      })
    },
    
    
  },
  methods: {
    selectTab(selectedTab){
      this.currentTab = selectedTab
    },
    openBox(){
      let lightBox = document.querySelector('.l-box');
      lightBox.classList.add('show-lightbox');
    },
    close(){
      let lightBox = document.querySelector('.l-box');
      lightBox.classList.remove('show-lightbox');
    }
  },
 }

</script>
<style lang="scss" scoped>
@import '@/assets/css/utils/variables';

*{
  font-family: "Cube11";
  list-style: none;
}
body{
  position: relative;
}
.select-btn{
  width: 50%;
  border: 1px solid map-get($color, accent);
  margin: 30px auto;
  padding: 30px;
  display: flex;
  justify-content: space-around;

    #select-item{
      display: flex;
      border: none;
      text-decoration: none;
      background: none;
      font-size: 20px;
      color: map-get($color, accent);
      cursor: pointer;
        img{
          margin: auto 5px;
        }
  }
}
#select-item-choose{
  display: none;
}
ul{
  .news{
    width: 80%;
    margin: 20px auto;
    border: 1px solid map-get($color, primary);
    background-color: map-get($color, dark_sub );
    color: map-get($color, primary);
      h2{
        margin:10px;
      }
      .date{
        font-size: 15px;
        text-align: right;
        margin: 10px;
      }
      .hashtag{
        
        margin: 10px;
      }
      .content{
        margin: 10px;
        font-size: 15px;
        line-height: 1.5;
      }
      .more{
        width: 100%;
        text-align: right;
        border: none;
        background: none;
        margin-bottom: 10px;
        color: map-get($color, primary);
        cursor: pointer;
      }
      
  }

}
  
.l-box{
  display: none;
  width: 500px;
  height: 90vh;
  border: 1px solid map-get($color, accent);
  color: map-get($color, accent);
  background-color: map-get($color, dark_sub );
  margin: auto;
  position: fixed;
  right: 0;
  left: 0;
  bottom: 0;
  top: 0;
.close-l-box{
  float: right;
  color: map-get($color, accent);
  background: none;
  border: none;
  font-size: 30px;
  cursor: pointer;
  margin: 5px;
}
.l-box-img{
  margin: 20px;
    img{
      width: 100%;
    }
  }
h2{
    margin: 5px 10px;
  }
  .date{
    font-size: 15px;
    text-align: right;
    margin: 10px;
  }
  .hashtag{
    
    margin: 10px;
  }
  .content{
    margin: 10px;
    font-size: 15px;
    line-height: 1.2;
  }
}
.show-lightbox{
  display: block;
}

@media screen and (max-width:768px) {
  .select-btn{
    display: none;
  }
  #select-item-choose{
    display: block;
    margin: 20px auto;
    width: 300px;
    height: 30px;
    background: map-get($color, dark);
    color: map-get($color, accent);
    border: 1px solid map-get($color, accent);
    font-size: 16px;
    &:focus{
      outline: none;
    }
  }
}

</style>

