<template>
  <nav class="select-btn">
    <button :id="btn.id" v-for="(btn, index) of btns" :key="index" @click="currentBtn=btn" class="select-item">
      <img src="@/assets/image/news/lightning.svg" alt="">
      {{btn.text}}
    </button>

  </nav>
  <!-- <nav class="select-btn" v-for="item in tabs" :key="item.title">
    <button id="select-item" @click="selectTab('tabs.key')">
      <img src="@/assets/image/news/lightning.svg" alt="">{{item.title}}
    </button>
  </nav> -->


  <!-- <select id="select-item-choose" v-model="currentTab">
    <option value="all">全部消息</option>
    <option value="itinerary">行程預訂</option>
    <option value="history">歷史事件</option>
    <option value="shopping">購物商城</option>
    <option value="other">其他消息</option>
  </select> -->
  <ul>
    <li class="news" v-for="(item,index) of newsData" :key="index">
      <h2>{{ item.news_title }}</h2>
      <p class="date">{{ item.news_add_date }}</p>
      <span class="hashtag">{{ item.news_hashtag }}</span>
      <p class="content">{{ item.news_content }}</p>
      <button type="button" class="more" @click="openBox(item.news_id)">
        看更多...
      </button>
    </li>
  </ul>

  <div class="l-box" :class="{ 'show-lightbox': isOpen }">
    <button class="close-l-box" @click="close">
      <font-awesome-icon icon="fa-solid fa-xmark" />
    </button>
    <div class="l-box-img">
      <img :src="`${popupData.news_img}`"/>
    </div>
    <div class="l-box-content">
      <h2>{{ popupData.news_title }}</h2>
      <p class="date">{{ popupData.news_add_date }}</p>
      <div class="l-box-content-item">
        <span class="hashtag">{{ popupData.news_hashtag }}</span>
        <p class="content">{{ popupData.news_content }}</p>
      </div>
    </div>
  </div>


</template>

<script>
export default {
  components: {
  },
  props: {
    img: String,
    title: String,
    date: Number,
    hashtag: String,
    content: String,

  },
  data() {
    return {
      btns:[
        {text:'全部消息',id:'01'},
        {text:'行程預訂',id:'02'},
        {text:'歷史事件',id:'03'},
        {text:'購物商城',id:'04'},
        {text:'其他消息',id:'05'},
        
      ],
      // newsData:[
      //   [
      //     {title:'十字軍東征',date:'AC202',hashtag:'#西洋史',content:'十字軍東征十字軍東征十字軍東征十字軍東征十字軍東征',},
      //     {title:'鄭和下西洋',date:'AC1002',hashtag:'#中國史',content:'十字軍東征十字軍東征十字軍東征十字軍東征十字軍東征',},
      //     {title:'文藝復興',date:'AC802',hashtag:'#藝術史',content:'十字軍東征十字軍東征十字軍東征十字軍東征十字軍東征',},
      //   ],
      //   [
      //     {title:'鄭和下西洋',date:'AC202',hashtag:'#西洋史',content:'十字軍東征十字軍東征十字軍東征十字軍東征十字軍東征',},
      //     {title:'鄭和下西洋',date:'AC1002',hashtag:'#中國史',content:'十字軍東征十字軍東征十字軍東征十字軍東征十字軍東征',},
      //     {title:'文藝復興',date:'AC802',hashtag:'#藝術史',content:'十字軍東征十字軍東征十字軍東征十字軍東征十字軍東征',},
      //   ],
      //   [
      //     {title:'文藝復興',date:'AC202',hashtag:'#西洋史',content:'十字軍東征十字軍東征十字軍東征十字軍東征十字軍東征',},
      //     {title:'鄭和下西洋',date:'AC1002',hashtag:'#中國史',content:'十字軍東征十字軍東征十字軍東征十字軍東征十字軍東征',},
      //     {title:'文藝復興',date:'AC802',hashtag:'#藝術史',content:'十字軍東征十字軍東征十字軍東征十字軍東征十字軍東征',},
      //   ],
      
      // ],
      newsList:[],
      currentBtn:'',
      activeId: NaN,
    }
  },
    
  created() {
    this.getData();  //測試抓local端資料
  },
  computed: {
    newsData() {
      const index =this.btns.indexOf(this.currentBtn);
      if(index> -1){
        return this.newsList[index];
      }
      return this.newsList;
     },
    popupData() {
      return this.newsList.find((v) => v.news_id === this.activeId) ?? {};
    },
    isOpen() {
      return !isNaN(this.activeId);
    },
  },
  methods: {
    selectTab(id) {
      this.currentTab = id
    },
    openBox(id) {
      // this.isOpen = true;
      this.activeId = id;
    },
    close() {
      // this.isOpen = false;
      this.activeId = NaN;
    },
    //測試抓local端資料
    getData() {
      fetch('http://localhost/timevolts_pika/public/phpfile/getNews.php')
        .then((res) => res.json())
        .then((json) => {
          this.newsList = json;
          console.log(this.newsList);
        })
    },
    saveData() {
      console.log(this.newsList);
    },
  }
}

</script>
<style lang="scss" scoped>
@import '@/assets/css/utils/variables';

body {
  position: relative;
}

.select-btn {
  width: 50%;
  border: 1px solid map-get($color, accent);
  margin: 30px auto;
  padding: 30px;
  display: flex;
  justify-content: space-around;

  .select-item {
    display: flex;
    border: none;
    text-decoration: none;
    background: none;
    font-size: 18px;
    color: map-get($color, accent);
    cursor: pointer;

    img {
      margin: auto 5px;
    }
  }
}

#select-item-choose {
  display: none;
}

ul {
  .news {
    width: 80%;
    margin: 20px auto;
    border: 1px solid map-get($color, primary);
    background-color: map-get($color, dark_sub);
    color: map-get($color, primary);

    h2 {
      margin: 10px;
    }

    .date {
      font-size: 15px;
      text-align: right;
      margin: 10px;
    }

    .hashtag {
      display: flex;
      flex-wrap: wrap;
      margin: 10px;
      line-height: 1.5;
    }

    .content {
      margin: 10px;
      font-size: 15px;
      line-height: 1.5;
    }

    .more {
      width: 100%;
      border: none;
      background: none;
      text-align: right;
      margin-bottom: 10px;
      color: map-get($color, primary);
      cursor: pointer;
    }

  }

}

.l-box {
  display: none;
  width: 600px;
  height: 95vh;
  border: 1px solid map-get($color, accent);
  color: map-get($color, accent);
  background-color: map-get($color, dark_sub);
  margin: auto;
  position: fixed;
  right: 0;
  left: 0;
  bottom: 0;
  top: 0;

  .close-l-box {
    width: 100%;
    text-align: right;
    color: map-get($color, accent);
    background: none;
    border: none;
    font-size: 30px;
    cursor: pointer;
    padding: 10px 15px 0 0;
  }

  .l-box-img {
    margin: 10px;
    height: 300px;

    img {
      width: 100%;
      height: 100%;
    }
  }

  h2 {
    margin: 5px 10px;
  }

  .date {
    font-size: 15px;
    text-align: right;
    margin: 10px;
  }

  .l-box-content-item {
    height: 230px;
    overflow-y: auto;

    .hashtag {
      margin: 10px;
    }

    .content {
      margin: 10px;
      font-size: 15px;
      line-height: 1.5;
    }
  }
}

//捲軸寬度
::-webkit-scrollbar {
  width: 13px;
}

//捲軸底色
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 3px grey;
  border-radius: 10px;
}

//捲軸本體顏色
::-webkit-scrollbar-thumb {
  background: map-get($color, muted);
  border-radius: 10px;
}

.show-lightbox {
  display: block;
}

@media screen and (max-width:768px) {
  .select-btn {
    display: none;
  }

  #select-item-choose {
    display: block;
    margin: 20px auto;
    width: 70%;
    height: 30px;
    background: map-get($color, dark);
    color: map-get($color, accent);
    border: 1px solid map-get($color, accent);
    font-size: 15px;

    &:focus {
      outline: none;
    }
  }
  
  .l-box {
    width: 70%;
    height: 80vh;
    .l-box-img {
    height: auto;
    }
    .l-box-content-item {
    height: 310px;
    }
    
  
}
}
</style>

