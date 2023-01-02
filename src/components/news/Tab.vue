
<template>
    <nav class="select-btn">
        <!-- <button :id="btn.id" v-for="(btn, index) of btns" :key="index" @click="selectTab('btn.click')">
      <img src="@/assets/image/news/lightning.svg" alt="">
      {{btn.text}}
    </button> -->
        <button id="select-item" @click="selectTab('all')">
            <img src="@/assets/image/news/lightning.svg" alt="" />全部消息
        </button>
        <button id="select-item" @click="selectTab('itinerary')">
            <img src="@/assets/image/news/lightning.svg" alt="" />行程預訂
        </button>
        <button id="select-item" @click="selectTab('history')">
            <img src="@/assets/image/news/lightning.svg" alt="" />歷史事件
        </button>
        <button id="select-item" @click="selectTab('shopping')">
            <img src="@/assets/image/news/lightning.svg" alt="" />購物商城
        </button>
        <button id="select-item" @click="selectTab('other')">
            <img src="@/assets/image/news/lightning.svg" alt="" />其他消息
        </button>
    </nav>
    <!-- <nav class="select-btn" v-for="item in tabs" :key="item.title">
    <button id="select-item" @click="selectTab('tabs.key')">
      <img src="@/assets/image/news/lightning.svg" alt="">{{item.title}}
    </button>
  </nav> -->

    <select id="select-item-choose" v-model="currentTab">
        <option value="all">全部消息</option>
        <option value="itinerary">行程預訂</option>
        <option value="history">歷史事件</option>
        <option value="shopping">購物商城</option>
        <option value="other">其他消息</option>
    </select>

    <ul v-if="currentTab == 'all'">
        <li class="news" v-for="item in newsAll" :key="item.news_id">
            <h2>{{ item.news_title }}</h2>
            <p class="date">{{ item.news_add_date }}</p>
            <span class="hashtag">{{ item.news_hashtag }}</span>
            <p class="content">{{ item.news_content }}</p>
            <button type="button" class="more" @click="openBox(item.news_id)">
                看更多...
            </button>
        </li>
    </ul>
    <ul v-if="currentTab == 'itinerary'">
        <li class="news" v-for="item in itineraryData" :key="item.id">
            <h2>{{ item.news_title }}</h2>
            <p class="date">{{ item.news_add_date }}</p>
            <span class="hashtag">{{ item.news_hashtag }}</span>
            <p class="content">{{ item.news_content }}</p>
            <button type="button" class="more" @click="openBox(item.news_id)">
                看更多...
            </button>
        </li>
    </ul>
    <ul v-if="currentTab == 'history'">
        <li class="news" v-for="item in historyData" :key="item.news_id">
            <h2>{{ item.news_title }}</h2>
            <p class="date">{{ item.news_add_date }}</p>
            <span class="hashtag">{{ item.news_hashtag }}</span>
            <p class="content">{{ item.news_content }}</p>
            <button type="button" class="more" @click="openBox(item.news_id)">
                看更多...
            </button>
        </li>
    </ul>
    <ul v-if="currentTab == 'shopping'">
        <li class="news" v-for="item in shoppingData" :key="item.news_id">
            <h2>{{ item.news_title }}</h2>
            <p class="date">{{ item.news_add_date }}</p>
            <span class="hashtag">{{ item.news_hashtag }}</span>
            <p class="content">{{ item.news_content }}</p>
            <button type="button" class="more" @click="openBox(item.news_id)">
                看更多..
            </button>
        </li>
    </ul>
    <ul v-if="currentTab == 'other'">
        <li class="news" v-for="item in otherData" :key="item.news_id">
            <h2>{{ item.news_title }}</h2>
            <p class="date">{{ item.news_add_date }}</p>
            <span class="hashtag">{{ item.news_hashtag }}</span>
            <p class="content">{{ item.news_content }}</p>
            <button type="button" class="more" @click="openBox(item.news_id)">
                看更多...
            </button>
        </li>
    </ul>

    <!-- <show-more-button
    :trueOrFalse="distinguishTrueFalse"
    @show-more="addCardNum"
    class="mb"
  >
</show-more-button> -->

    <div class="l-box" :class="{ 'show-lightbox': isOpen }">
        <button class="close-l-box" @click="close">
            <font-awesome-icon icon="fa-solid fa-xmark" />
        </button>
        <div class="l-box-img">
            <!-- <img :src="`.news/${popupData.news_img}`"/> -->
            <!-- <img :src="require(`/public/news/atlantis_01.png`)"/> -->
            <img :src="`../new_img2/${popupData.news_img}`"/>
            <!-- <img :src="popupData.img" /> -->
            <!-- 自閉合 -->
        </div>
        <div class="l-box-content">
            <h2>{{ popupData.news_title }}</h2>
            <p class="date">{{ popupData.news_add_date }}</p>
            <div class="l-box-content-item">
                <span class="hashtag">{{ popupData.news_hashtag }}</span>
                <p class="content">{{ popupData.news_content }}</p>
                <router-link :to="{path:`/${popupData.news_item_id}`}" class="content-link">>>點我看詳細</router-link>
            </div>
        </div>
    </div>
    
  
</template>

<script>
import { BASE_URL } from '@/assets/js/commom.js';
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
            currentTab: "all",
            activeId: NaN,
            newsAll: [], //測試抓local端資料
            // itineraryData: [
            //     {
            //         id: 1001,
            //         title: "穿梭於史前時代",
            //         date: "2022-12-10",
            //         hashtag: "#經典行程 #高度危險",
            //         content:
            //             "人類的歷史分成：史前時代及信使時代。「文字的出現」為畫分的依據，史前時代沒有文字，信使時代為文字開始。今天，我們將回到史前時代，建立屬於自己的莊園，面對嚴苛的大自然及猛獸努力存活下去。",
            //         content_box: "",
            //         img: require(`@/assets/image/news/prehistoric_01.jpg`),
            //     },
            //     {
            //         id: 1002,
            //         title: "埃及五千年的黃金時代",
            //         date: "2022-11-10",
            //         hashtag: "#經典行程 #中度危險",
            //         content:
            //             "埃及進入第一個「金色時代」，或「黃金時代」。在此期間，太陽作為「偉大的雌雄一體」，毫無疑問地被奉為至高神祇。這位新國王將其父親遺留的壯觀事業進一步發揚光大，完成了埃及史上最宏大且最受美譽的著名地標：吉薩大金字塔。吉薩大金字塔是當今世人所知的名稱，然而，當初的命名是「阿赫特─胡夫」，意即「胡夫的地平線」。",
            //         content_box: "",
            //         img: require(`@/assets/image/news/egypt.jpg`),
            //     },
            //     {
            //         id: 1003,
            //         title: "赤壁之戰",
            //         date: "2022-10-10",
            //         hashtag: "#經典行程 #高度危險 #亞洲",
            //         content:
            //             "根據三國誌記載，曹操因多年北伐征討，將兵早已疲倦不堪，加上青州兵擅長陸戰，南下又水土不服，染上瘟疫，整個曹軍能夠作戰的兵力實則不到二十萬；反觀，周瑜、黃蓋皆是當地人，熟悉水域、氣候，綜觀各樣條件，孫劉聯軍才得以寡擊眾，重創曹軍，開創三國鼎立的局勢。",
            //         content_box: "",
            //         img: require(`@/assets/image/news/chibi.jpg`),
            //     },
            //     {
            //         id: 1004,
            //         title: "哥倫布發現新大陸",
            //         date: "2022-09-10",
            //         hashtag: "#經典行程 #中度危險 #歐洲 #美洲",
            //         content:
            //             "從1492年到1503年間，哥倫布完成了4次從西班牙到美洲的來回航行。這些航行都是由卡斯提亞王國資助的，標誌著歐洲人對美洲大陸的探險和殖民的開始，因此對西方歷史有著不可估量的重要性。儘管哥倫布面對日漸增多反對其觀點的證據，但仍然堅持認為他在歷次航行中所到過的地方就是馬可·波羅以及其他歐洲旅行家說描述過的亞洲大陸的一部分。",
            //         content_box: "",
            //         img: require(`@/assets/image/news/columbus.jpg`),
            //     },
            // ],
            // historyData: [
            //     {
            //         id: 2001,
            //         title: "鐵達尼號沈船",
            //         date: "2022-12-15",
            //         hashtag: "#歷史事件 #歐洲",
            //         content:
            //             "鐵達尼號沉沒事故是1912年4月14日深夜至15日凌晨在北大西洋發生的著名船難，事發時是鐵達尼號從英國南安普敦港至美國紐約港首航的第5天，該船與一座冰山擦撞前，已經收到6次海冰警告，但當瞭望員看到冰山時，由於無法快速轉向，該船右舷側面遭受了一次撞擊，部分船體出現縫隙，使16個水密隔艙中的5個進水。",
            //         content_box: "",
            //         img: require(`@/assets/image/news/egypt.jpg`),
            //     },
            //     {
            //         id: 2002,
            //         title: "鄭和下西洋",
            //         date: "2022-12-01",
            //         hashtag: "#歷史事件 #亞洲",
            //         content:
            //             "鄭和下西洋象徵著中國航海史上的一個高峰。當時明朝在航海技術，船隊規模、航程之遠、持續時間、涉及領域等的規模及高度，在當時的年代均是前所未見，沿途亦有遇上倭寇劫船之風險，可能造成財物損失，甚至有生命危險，請謹慎評估風險後再進行報名。",
            //         content_box: "",
            //         img: require(`@/assets/image/news/egypt.jpg`),
            //     },
            //     {
            //         id: 2003,
            //         title: "馬雅文明",
            //         date: "2022-11-15",
            //         hashtag: "#歷史事件 #南美洲",
            //         content:
            //             "關於「馬雅」文明的傳說，很多人都聽說過。提到馬雅人，大部分人會把他們與美洲叢林聯繫到一起。浮現在腦海中的也是一群印地安人，他們身著鮮豔羽毛服飾，趁著月光進行著神祕的儀式，法術高強的祭司站在中間，其他人繞著轉圈。",
            //         content_box: "",
            //         img: require(`@/assets/image/news/maya.jpg`),
            //     },
            //     {
            //         id: 2004,
            //         title: "澳洲淘金熱",
            //         date: "2022-11-01",
            //         hashtag: "#歷史事件 #低危險度 #大洋洲",
            //         content:
            //             "發生在在1851年開始的澳洲淘金熱，大量工人從澳洲和其他地區前往挖掘黃金的情形。此處在先前已經多次發生挖掘出黃金的情形，但是新南威爾士州的政府一直壓制及隱瞞這個消息，因為他們擔心會因此而減少勞動人力，從而破壞經濟的穩定。但是隨著知情的人越來越多，政府也無法完全管轄，此熱潮才逐漸爆發...",
            //         content_box: "",
            //         img: require(`@/assets/image/news/australia.jpg`),
            //     },
            //     {
            //         id: 2005,
            //         title: "馬利帝國與曼薩．穆薩的朝聖之旅",
            //         date: "2022-10-15",
            //         hashtag: "#歷史事件 #低危險度 #非洲",
            //         content:
            //             "馬利帝國，又名曼丁帝國或曼迪聯邦，是西非中世紀時的一個強大伊斯蘭教帝國，是北部非洲以南的廣闊內陸中歷史最悠久的國家，古代最重要的伊斯蘭文化與財富中心之一。帝國語言為曼丁哥語，為是當時西非最大的國家，其語言、法律及風俗也影響當時西非各國的文化許多。",
            //         content_box: "",
            //         img: require(`@/assets/image/news/mali-empire.jpg`),
            //     },
            //     {
            //         id: 2006,
            //         title: "十字軍東征",
            //         date: "2022-10-01",
            //         hashtag: "#歷史事件 #高危險度 #歐洲",
            //         content:
            //             "十字軍東征，伊斯蘭世界稱為法蘭克人入侵，是一系列在教皇的准許下的戰爭，由西歐的封建領地主和騎士對被他們視為侵略者的伊斯蘭政權發動持續近200年的戰爭。十字軍東征最初參與成員，例如：騎士、商人、農民，多數是自願的，受拜占庭帝國之邀、以及羅馬教廷的認可下，參與奪回聖地戰爭。這些十字軍也非拜占庭帝國主力部隊。東正教徒也參加其中幾次十字軍。",
            //         content_box: "",
            //         img: require(`@/assets/image/news/crusades.jpg`),
            //     },
            //     {
            //         id: 2007,
            //         title: "耶穌被釘十字架",
            //         date: "2022-09-15",
            //         hashtag: "#歷史事件 #中危險度 #西亞",
            //         content:
            //             "耶穌被逮捕後以十字架處死的事件，一般認為發生在公元1世紀的猶太行省，最可能在公元30到33年之間。雖然歷史學家對這個事件的準確細節並沒有達成共識，但這個事件在《聖經》中正統的《四福音》皆有描述，在《新約書信》中有提及，而且也被其他古代資料證實，除了基督徒的資料以外，並也被異教徒的史料證實，學者多數認為這是一個歷史事件。",
            //         content_box: "",
            //         img: require(`@/assets/image/news/jesus.jpg`),
            //     },
            //     {
            //         id: 2008,
            //         title: "穆罕穆德和古蘭經",
            //         date: "2022-09-01",
            //         hashtag: "#歷史事件 #低危險度 #西亞",
            //         content:
            //             "穆罕默德出生在麥加的古萊什族的哈希姆家族，為當時麥加的望族，因此穆罕默德的幼年環境相當地富裕。穆罕默德的父親在穆罕默德出世前就不幸隨商隊病死沙漠，因此穆罕默德的童年是隨他的叔父阿布·塔里布照料至大。古蘭經是先知穆罕默德透過二十三年接受真主啓示並口述記下並傳達給身邊弟子們背誦記下來的。",
            //         content_box: "",
            //         img: require(`@/assets/image/news/muhammad.jpg`),
            //     },
            //     {
            //         id: 2009,
            //         title: "尼斯湖水怪",
            //         date: "2022-08-15",
            //         hashtag: "#奇聞軼事 #低危險度 #蘇格蘭  #近代歷史",
            //         content:
            //             "尼斯湖水怪絕對是上個世紀最有名的一個不明生物。最早有人看到尼斯湖水怪是在1933年4月份的時候，直到今天80多年過去了，它的目擊情報從來沒有斷過。你相不相信水怪的存在呢?我們將帶您穿越回1933年，讓您親自見證!此行程穿越年份較短，時代背景與現今較無差異，適合新手體驗!",
            //         content_box: "",
            //         img: require(`@/assets/image/news/nessiteras.jpg`),
            //     },
            //     {
            //         id: 2010,
            //         title: "不存在的車站-如月車站",
            //         date: "2022-08-01",
            //         hashtag: "#奇聞軼事 #高危險度 #懸疑冒險 #亞洲",
            //         content:
            //             "2004年1月8日，一名日本網友以葉純（はすみ）的名義進行文字直播，兼尋求協助。她表示自己在新濱松站登上西鹿島線後，列車駛了一段長時間都沒有到站，之後列車終於在一個附近完全是荒山野嶺無人的「如月車站」停下，他以電話向警方求救也無法得到協助。她在後文表示，自己在穿過一條隧道後，發現有車主願意送自己到附近的車站。此後她停止發文，音訊全無.... ",
            //         content_box: "",
            //         img: require(`@/assets/image/news/kisaragi.jpg`),
            //     },
            //     {
            //         id: 2011,
            //         title: "亞特蘭提斯",
            //         date: "2022-07-15",
            //         hashtag: "#奇聞軼事 #高危險度 #遠古歷史",
            //         content:
            //             "亞特蘭提斯，一夜之間在地球上消失的亞特蘭提斯。讓我們帶您乘坐時光機前往西元前一萬兩千年，究竟這場大洪水有沒有發生，亦或是帶你一窺究竟亞特蘭提斯的存在吧!穿越年代為西元前一萬兩千年，時空背景與現今差異甚大，生存環境危險，冒險者快來挑戰吧! ",
            //         content_box: "",
            //         img: require(`@/assets/image/news/atlantis_01.png`),
            //     },
            // ],
            // shoppingData: [
            //     {
            //         id: 3001,
            //         title: "購物須知",
            //         date: "2022-11-11",
            //         hashtag: "#最新公告",
            //         content:
            //             "【購物流程】1.點選您需要的商品規格及數量，加入購物車。2.購物車內確認購買項目後，點選前往結帳（請注意：購物車內商品尚未結帳前，如商品已無庫存，進入結帳時系統會取消商品數量，請注意核對結帳數量及項目）。",
            //         content_box: "",
            //         img: require(`@/assets/image/news/shopping.jpg`),
            //     },
            //     {
            //         id: 3002,
            //         title: "新商品出爐囉!!",
            //         date: "2022-12-11",
            //         hashtag: "#新品上架",
            //         content:
            //             "超過上百種語言翻譯，打破溝通障礙，運用本公司獨家秘方【翻譯蒟蒻】，精準翻出生活化的當地語言，就像學會當地語言一樣與人流暢對話。",
            //         content_box: "",
            //         img: require(`@/assets/image/news/jelly.jpeg`),
            //     },
            // ],
            // otherData: [
            //     {
            //         id: 4001,
            //         title: "官網維護公告",
            //         date: "2022-11-09",
            //         hashtag: "#公告 #維修中",
            //         content:
            //             "親愛的用戶您好，為提高您的網站使用品質，本公司將預計2022-09-15進行系統維護作業，期間會造成部分網頁無法使用，造成您的不便，敬請見諒!",
            //         content_box: "",
            //         img: require(`@/assets/image/news/system.png`),
            //     },
            // ],
        }
    },

    created() {
        this.getData(); //測試抓local端資料
    },
    computed: {
        // newsList(){
        //     return this.newsAll.sort((a,b) => {
        //         return new Date(a.news_add_date).valueOf - new Date(b.news_add_date).valueOf();
        //     });
            
        // },
        itineraryData() {
            return this.newsAll.filter(v => v.news_category === "行程預訂");
        },
        historyData() {
            return this.newsAll.filter(v => v.news_category === "歷史故事");
        },
        shoppingData() {
            return this.newsAll.filter(v => v.news_category === "購物商城");
        },
        otherData() {
            return this.newsAll.filter(v => v.news_category === "其他消息");
        },
        // newsData() {
        //     return [...this.itineraryData,...this.historyData,...this.shoppingData,...this.otherData,].sort((a, b) => {
        //         return new Date(a.date).valueOf() - new Date(b.date).valueOf();
        //     });
        // },
        // historyDataSort() {
        //     return [...this.historyData].sort((a, b) => {
        //         return new Date(a.date).valueOf() - new Date(b.date).valueOf();
        //     });
        // },
        popupData() {
            return this.newsAll.find((v) => v.news_id === this.activeId) ?? {};
        },
        isOpen() {
            return !isNaN(this.activeId);
        },
    },
    methods: {
        
        selectTab(selectedTab) {
            this.currentTab = selectedTab;
        },
        openBox(news_id) {
            // this.isOpen = true;
            this.activeId = news_id;
        },
        close() {
            // this.isOpen = false;
            this.activeId = NaN;
        },
        getData() {
            // fetch(
            //     "/api_server/getNews.php"
            // )
            fetch(`${BASE_URL}getNews.php`)
                .then((res) => res.json())
                .then((json) => {
                    this.newsAll = json;
                    // console.log(this.newsAll);
                });
        },
        saveData() {
            // console.log(this.newsAll);
        },

        isOpen() {
            return !isNaN(this.activeId);
        },
    },

};

</script>

<style lang="scss" scoped>
@import "@/assets/css/utils/variables";

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

    #select-item {
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

    .content-link {
        text-decoration: none;
        margin: 10px;
        font-size: 15px;
        color: map-get($color, primary);

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

@media screen and (max-width: 768px) {
    .select-btn {
        display: none;
    }

    #select-item-choose {
        display: block;
        margin: 40px auto 0 ;
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
