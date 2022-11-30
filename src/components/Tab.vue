<template>
<div class="select-btn">
  <button id="select-item" @click="selectTab(1)">
    <img src="../assets/image/news/lightning.svg" alt="">全部消息
  </button>
  <button id="select-item" @click="selectTab(2)">
    <img src="../assets/image/news/lightning.svg" alt="">行程預訂
  </button>
  <button id="select-item" @click="selectTab(3)">
    <img src="../assets/image/news/lightning.svg" alt="">歷史事件
  </button>
  <button id="select-item" @click="selectTab(4)">
    <img src="../assets/image/news/lightning.svg" alt="">購物商城
  </button>
  <button id="select-item" @click="selectTab(5)">
    <img src="../assets/image/news/lightning.svg" alt="">其他消息
  </button>
</div>

<div class="container">
  <ul v-if="currentTab ==1">
    <li class="news" v-for="(item, index) in newsData" :key="index">
      <h2>{{item.title}}</h2>
      <p class="date">2022-11-21</p>
      <span>#行程預訂</span>
      <span>#十字軍東征</span>
      <p class="content">
        行程預訂行程預訂行程預訂行程預訂行程預訂行程預訂行程預訂行程預訂行程預訂行程預訂行程預訂行程預訂行程預訂行程預訂行程預訂
      </p>
      <button class="more">
        <a href="">看更多</a>
      </button>
    </li>
  </ul>
  <ul v-if="currentTab ==2">
    <li class="news" v-for="(item, index) in itineraryData" :key="index">
      <h2>{{item.title}}</h2>
      <p class="date">2022-11-21</p>
      <span>#行程預訂</span>
      <span>#十字軍東征</span>
      <p class="content">
        行程預訂行程預訂行程預訂行程預訂行程預訂行程預訂行程預訂行程預訂行程預訂行程預訂行程預訂行程預訂行程預訂行程預訂行程預訂
      </p>
      <button class="more">
        <a href="">看更多</a>
      </button>
    </li>
  </ul>
  <ul v-if="currentTab ==3">
    <li class="news" v-for="(item, index) in historyData" :key="index">
      <h2>{{item.title}}</h2>
      <p class="date">2022-11-21</p>
      <span>#行程預訂</span>
      <span>#十字軍東征</span>
      <p class="content">
        行程預訂行程預訂行程預訂行程預訂行程預訂行程預訂行程預訂行程預訂行程預訂行程預訂行程預訂行程預訂行程預訂行程預訂行程預訂
      </p>
      <button class="more">
        <a href="">看更多</a>
      </button>
    </li>
  </ul>
  <ul v-if="currentTab ==4">
    <li class="news" v-for="(item, index) in shoppingData" :key="index">
      <h2>{{item.title}}</h2>
      <p class="date">2022-11-21</p>
      <span>#行程預訂</span>
      <span>#十字軍東征</span>
      <p class="content">
        行程預訂行程預訂行程預訂行程預訂行程預訂行程預訂行程預訂行程預訂行程預訂行程預訂行程預訂行程預訂行程預訂行程預訂行程預訂
      </p>
      <button class="more">
        <a href="">看更多</a>
      </button>
    </li>
  </ul>
  <ul v-if="currentTab ==5">
    <li class="news" v-for="(item, index) in otherData" :key="index">
      <h2>{{item.title}}</h2>
      <p class="date">2022-11-21</p>
      <span>#行程預訂</span>
      <span>#十字軍東征</span>
      <p class="content">
        行程預訂行程預訂行程預訂行程預訂行程預訂行程預訂行程預訂行程預訂行程預訂行程預訂行程預訂行程預訂行程預訂行程預訂行程預訂
      </p>
      <button class="more">
        <a href="">看更多</a>
      </button>
    </li>
  </ul>
</div>


</template>

<script>
export default {
  name: "Tab",
  data(){
    return{
      currentTab:1,
      newsData:[
        {
          title:'全部消息',
          
        },
        {
          title:'全部消息1',
          
        }
      ],
      itineraryData:[
        {
          title:'行程消息',
        },
        {
          title:'行程消息1',
        }
      ],
      historyData:[
        {
          title:'歷史預訂',
        },
        {
          title:'歷史預訂1',
        }
      ],
      shoppingData:[
        {
          title:'購物商城',
        },
        {
          title:'購物商城1',
        }
      ],
      otherData:[
        {
          title:'其他消息',
        },
        {
          title:'其他消息1',
        }
      ],
    }
  },
  methods: {
    selectTab(selectedTab){
      this.currentTab = selectedTab
    }
  },
 }

</script>
<style lang="scss" scoped>
@import '@/assets/css/app.scss';

*{
  font-family: "Cube11";
  list-style: none;
}
.select-btn{
  width: 50%;
  border: 1px solid map-get($color, accent);
  margin: 30px auto;
  padding: 30px;
  display: flex;
  justify-content: space-around;
}
#select-item{
  display: flex;
  border: none;
  text-decoration: none;
  background: none;
  font-size: 20px;
  color: map-get($color, accent);
  cursor: pointer;
}
img{
  margin: auto 5px;
}
.news{
  width: 80%;
  margin: 20px auto;
  border: 1px solid map-get($color, primary);
  color: map-get($color, primary);
}
h2{
  
  margin: 10px;
}
.date{
  font-size: 15px;
  text-align: right;
  margin: 10px;
}
span{
  
  margin: 10px;
}
.content{
  margin: 10px;
  font-size: 15px;
  line-height: 1.2;
}
.more{
  width: 100%;
  text-align: right;
  border: none;
  background: none;
  margin:10px;
  
}
.more a{
  text-decoration: none;
  margin:10px;
  color: map-get($color, primary);
}
  
</style>

