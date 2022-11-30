<template>
<div class="select-btn">
  <button @click="selectTab(1)"><img src="../assets/image/news/lightning.svg" alt="">全部消息</button>
  <button @click="selectTab(2)"><img src="../assets/image/news/lightning.svg" alt="">行程預訂</button>
  <button @click="selectTab(3)"><img src="../assets/image/news/lightning.svg" alt="">歷史事件</button>
  <button @click="selectTab(4)"><img src="../assets/image/news/lightning.svg" alt="">購物商城</button>
  <button @click="selectTab(5)"><img src="../assets/image/news/lightning.svg" alt="">其他消息</button>
</div>

<div class="container">
  <ul>
    <!-- v-for="(news,index) in newsdata" -->
    <li class="news" v-if="currentTab ==1">
      <h2>全部消息</h2>
      <p class="date">2022-11-21</p>
      <span>#行程預訂</span>
      <span>#十字軍東征</span>
      <p class="content">行程預訂行程預訂行程預訂行程預訂行程預訂行程預訂行程預訂行程預訂行程預訂行程預訂行程預訂行程預訂行程預訂行程預訂行程預訂</p>
      <button class="more"><a href="">看更多</a></button>
    </li>
    <li class="news" v-if="currentTab ==2">
      <h2>行程預訂</h2>
      <p class="date">2022-11-21</p>
      <span>#行程預訂</span>
      <span>#十字軍東征</span>
      <p class="content">行程預訂行程預訂行程預訂行程預訂行程預訂行程預訂行程預訂行程預訂行程預訂行程預訂行程預訂行程預訂行程預訂行程預訂行程預訂</p>
      <button class="more"><a href="">看更多</a></button>
    </li>
    <li class="news" v-if="currentTab ==3">
      <h2>歷史事件</h2>
      <p class="date">2022-11-21</p>
      <span>#行程預訂</span>
      <span>#十字軍東征</span>
      <p class="content">行程預訂行程預訂行程預訂行程預訂行程預訂行程預訂行程預訂行程預訂行程預訂行程預訂行程預訂行程預訂行程預訂行程預訂行程預訂</p>
      <button class="more"><a href="">看更多</a></button>
    </li>
    <li class="news" v-if="currentTab ==4">
      <h2>購物商城</h2>
      <p class="date">2022-11-21</p>
      <span>#行程預訂</span>
      <span>#十字軍東征</span>
      <p class="content">行程預訂行程預訂行程預訂行程預訂行程預訂行程預訂行程預訂行程預訂行程預訂行程預訂行程預訂行程預訂行程預訂行程預訂行程預訂</p>
      <button class="more"><a href="">看更多</a></button>
    </li>
    <li class="news" v-if="currentTab ==5">
      <h2>其他消息</h2>
      <p class="date">2022-11-21</p>
      <span>#行程預訂</span>
      <span>#十字軍東征</span>
      <p class="content">行程預訂行程預訂行程預訂行程預訂行程預訂行程預訂行程預訂行程預訂行程預訂行程預訂行程預訂行程預訂行程預訂行程預訂行程預訂</p>
      <button class="more"><a href="">看更多</a></button>
    </li>
  </ul>
</div>


</template>

<script>
export default {
  name: "Tab",
  data(){
    return{
      currentTab:1
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

.select-btn{
  width: 50%;
  border: 1px solid map-get($color, accent);
  margin: 30px auto;
  padding: 30px;
  display: flex;
  justify-content: space-around;
}
button{
  display: flex;
  border: none;
  font-family: "Cube11";
  text-decoration: none;
  background: none;
  font-size: 20px;
  color: map-get($color, accent);
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
button.more{
  width: 80%;
  text-align: center;
  border: none;
}
button.more a{
  text-decoration: none;
  margin:10px;
  color: map-get($color, primary);
}
  
</style>

