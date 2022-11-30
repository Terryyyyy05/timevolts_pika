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
      <p class="date">{{item.date}}</p>
      <span class="hashtag">{{item.hashtag}}</span>
      <span class="hashtag">{{item.hashtag1}}</span>
      <p class="content">{{item.content}}</p>
      <button class="more">
        <a href="">看更多</a>
      </button>
    </li>
  </ul>
  <ul v-if="currentTab ==2">
    <li class="news" v-for="(item, index) in itineraryData" :key="index">
      <h2>{{item.title}}</h2>
      <p class="date">{{item.date}}</p>
      <span class="hashtag">{{item.hashtag}}</span>
      <span class="hashtag">{{item.hashtag1}}</span>
      <p class="content">{{item.content}}</p>
      <button class="more">
        <a href="">看更多</a>
      </button>
    </li>
  </ul>
  <ul v-if="currentTab ==3">
    <li class="news" v-for="(item, index) in historyData" :key="index">
      <h2>{{item.title}}</h2>
      <p class="date">{{item.date}}</p>
      <span class="hashtag">{{item.hashtag}}</span>
      <span class="hashtag">{{item.hashtag1}}</span>
      <p class="content">{{item.content}}</p>     
      <button class="more">
        <a href="">看更多</a>
      </button>
    </li>
  </ul>
  <ul v-if="currentTab ==4">
    <li class="news" v-for="(item, index) in shoppingData" :key="index">
      <h2>{{item.title}}</h2>
      <p class="date">{{item.date}}</p>
      <span class="hashtag">{{item.hashtag}}</span>
      <span class="hashtag">{{item.hashtag1}}</span>
      <p class="content">{{item.content}}</p>     
      <button class="more">
        <a href="">看更多</a>
      </button>
    </li>
  </ul>
  <ul v-if="currentTab ==5">
    <li class="news" v-for="(item, index) in otherData" :key="index">
      <h2>{{item.title}}</h2>
      <p class="date">{{item.date}}</p>
      <span class="hashtag">{{item.hashtag}}</span>
      <span class="hashtag">{{item.hashtag1}}</span>
      <p class="content">{{item.content}}</p>     
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
          title:'鐵達尼號沈船事件',
          date:'2022-12-12',
          hashtag:'#歷史事件',
          hashtag1:'#歐洲',
          content:'鐵達尼號沉沒事故是1912年4月14日深夜至15日凌晨在北大西洋發生的著名船難，事發時是鐵達尼號從英國南安普敦港至美國紐約港首航的第5天，而該船當時是世界最大的郵輪。1912年4月14日星期天23時40分與一座冰山擦撞前，已經收到6次海冰警告，但當瞭望員看到冰山時，該船的行駛速度正接近最高速。由於無法快速轉向，該船右舷側面遭受了一次撞擊，部分船體出現縫隙，使16個水密隔艙中的5個進水。',
        },
        {
          title:'鐵達尼號沈船事件',
          date:'2022-12-12',
          hashtag:'#歷史事件',
          hashtag1:'#歐洲',
          content:'鐵達尼號沉沒事故是1912年4月14日深夜至15日凌晨在北大西洋發生的著名船難，事發時是鐵達尼號從英國南安普敦港至美國紐約港首航的第5天，而該船當時是世界最大的郵輪。1912年4月14日星期天23時40分與一座冰山擦撞前，已經收到6次海冰警告，但當瞭望員看到冰山時，該船的行駛速度正接近最高速。由於無法快速轉向，該船右舷側面遭受了一次撞擊，部分船體出現縫隙，使16個水密隔艙中的5個進水。',
        }
      ],
      itineraryData:[
        {
          title:'鐵達尼號沈船事件',
          date:'2022-12-12',
          hashtag:'#歷史事件',
          hashtag1:'#歐洲',
          content:'鐵達尼號沉沒事故是1912年4月14日深夜至15日凌晨在北大西洋發生的著名船難，事發時是鐵達尼號從英國南安普敦港至美國紐約港首航的第5天，而該船當時是世界最大的郵輪。1912年4月14日星期天23時40分與一座冰山擦撞前，已經收到6次海冰警告，但當瞭望員看到冰山時，該船的行駛速度正接近最高速。由於無法快速轉向，該船右舷側面遭受了一次撞擊，部分船體出現縫隙，使16個水密隔艙中的5個進水。',
        },
        {
          title:'鐵達尼號沈船事件',
          date:'2022-12-12',
          hashtag:'#歷史事件',
          hashtag1:'#歐洲',
          content:'鐵達尼號沉沒事故是1912年4月14日深夜至15日凌晨在北大西洋發生的著名船難，事發時是鐵達尼號從英國南安普敦港至美國紐約港首航的第5天，而該船當時是世界最大的郵輪。1912年4月14日星期天23時40分與一座冰山擦撞前，已經收到6次海冰警告，但當瞭望員看到冰山時，該船的行駛速度正接近最高速。由於無法快速轉向，該船右舷側面遭受了一次撞擊，部分船體出現縫隙，使16個水密隔艙中的5個進水。',
        }
      ],
      historyData:[
        {
          title:'鐵達尼號沈船事件',
          date:'2022-12-12',
          hashtag:'#歷史事件',
          hashtag1:'#歐洲',
          content:'鐵達尼號沉沒事故是1912年4月14日深夜至15日凌晨在北大西洋發生的著名船難，事發時是鐵達尼號從英國南安普敦港至美國紐約港首航的第5天，而該船當時是世界最大的郵輪。1912年4月14日星期天23時40分與一座冰山擦撞前，已經收到6次海冰警告，但當瞭望員看到冰山時，該船的行駛速度正接近最高速。由於無法快速轉向，該船右舷側面遭受了一次撞擊，部分船體出現縫隙，使16個水密隔艙中的5個進水。',
        },
        {
          title:'鐵達尼號沈船事件',
          date:'2022-12-12',
          hashtag:'#歷史事件',
          hashtag1:'#歐洲',
          content:'鐵達尼號沉沒事故是1912年4月14日深夜至15日凌晨在北大西洋發生的著名船難，事發時是鐵達尼號從英國南安普敦港至美國紐約港首航的第5天，而該船當時是世界最大的郵輪。1912年4月14日星期天23時40分與一座冰山擦撞前，已經收到6次海冰警告，但當瞭望員看到冰山時，該船的行駛速度正接近最高速。由於無法快速轉向，該船右舷側面遭受了一次撞擊，部分船體出現縫隙，使16個水密隔艙中的5個進水。',
        }
      ],
      shoppingData:[
        {
          title:'鐵達尼號沈船事件',
          date:'2022-12-12',
          hashtag:'#歷史事件',
          hashtag1:'#歐洲',
          content:'鐵達尼號沉沒事故是1912年4月14日深夜至15日凌晨在北大西洋發生的著名船難，事發時是鐵達尼號從英國南安普敦港至美國紐約港首航的第5天，而該船當時是世界最大的郵輪。1912年4月14日星期天23時40分與一座冰山擦撞前，已經收到6次海冰警告，但當瞭望員看到冰山時，該船的行駛速度正接近最高速。由於無法快速轉向，該船右舷側面遭受了一次撞擊，部分船體出現縫隙，使16個水密隔艙中的5個進水。',
        },
        {
          title:'鐵達尼號沈船事件',
          date:'2022-12-12',
          hashtag:'#歷史事件',
          hashtag1:'#歐洲',
          content:'鐵達尼號沉沒事故是1912年4月14日深夜至15日凌晨在北大西洋發生的著名船難，事發時是鐵達尼號從英國南安普敦港至美國紐約港首航的第5天，而該船當時是世界最大的郵輪。1912年4月14日星期天23時40分與一座冰山擦撞前，已經收到6次海冰警告，但當瞭望員看到冰山時，該船的行駛速度正接近最高速。由於無法快速轉向，該船右舷側面遭受了一次撞擊，部分船體出現縫隙，使16個水密隔艙中的5個進水。',
        }
      ],
      otherData:[
        {
          title:'鐵達尼號沈船事件',
          date:'2022-12-12',
          hashtag:'#歷史事件',
          hashtag1:'#歐洲',
          content:'鐵達尼號沉沒事故是1912年4月14日深夜至15日凌晨在北大西洋發生的著名船難，事發時是鐵達尼號從英國南安普敦港至美國紐約港首航的第5天，而該船當時是世界最大的郵輪。1912年4月14日星期天23時40分與一座冰山擦撞前，已經收到6次海冰警告，但當瞭望員看到冰山時，該船的行駛速度正接近最高速。由於無法快速轉向，該船右舷側面遭受了一次撞擊，部分船體出現縫隙，使16個水密隔艙中的5個進水。',
        },
        {
          title:'鐵達尼號沈船事件',
          date:'2022-12-12',
          hashtag:'#歷史事件',
          hashtag1:'#歐洲',
          content:'鐵達尼號沉沒事故是1912年4月14日深夜至15日凌晨在北大西洋發生的著名船難，事發時是鐵達尼號從英國南安普敦港至美國紐約港首航的第5天，而該船當時是世界最大的郵輪。1912年4月14日星期天23時40分與一座冰山擦撞前，已經收到6次海冰警告，但當瞭望員看到冰山時，該船的行駛速度正接近最高速。由於無法快速轉向，該船右舷側面遭受了一次撞擊，部分船體出現縫隙，使16個水密隔艙中的5個進水。',
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

