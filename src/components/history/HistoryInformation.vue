<template>
   <base-history-card v-for="info in information" :key="info.title">
      <h3>{{ info.title }}</h3>
      <div class="history-content">
         <img :src="require('@/assets/image/history/test.png')" />
         <div class="history-text">
            <div>
               <span class="p_md">#{{ info.tagDanderLevel }}</span>
               <span class="p_md">#{{ info.tagFeature }}</span>
               <span class="p_md">#{{ info.tagRegion }}</span>
            </div>
            <p class="p_md">發生年代 --- {{ info.happenYear }}</p>
            <p class="p_lg">{{ info.description }}</p>
         </div>
      </div>
   </base-history-card>
</template>

<script>
import BaseHistoryCard from "./base/BaseHistoryCard.vue";

export default {
   components: {
      BaseHistoryCard,
   },
   data() {
      return {
         information: [
            {
               title: "史前時代",
               tagDanderLevel: "高",
               tagFeature: "經典事件",
               tagRegion: null,
               happenYear: "西元前5000年左右",
               description:
                  "人類的歷史分成：史前時代及信使時代。「文字的出現」為畫分的依據，史前時代沒有文字，信使時代為文字開始。今天，我們將回到史前時代，建立屬於自己的莊園，面對嚴苛的大自然及猛獸努力存活下去。",
            },
            {
               title: "赤壁之戰",
               tagDanderLevel: "高",
               tagFeature: "經典事件",
               tagRegion: "中國",
               happenYear: "西元208年",
               description:
                  "孫劉為抵抗八十萬曹軍舉兵南下，於烏林、赤壁會面交戰，經武臣黃蓋詐降火計，重創曹軍，劉備緊追在曹操身後，一路緊追到華容道。根據三國誌記載，曹操因多年北伐征討，將兵早已疲倦不堪，加上青州兵擅長陸戰，南下又水土不服，染上瘟疫，整個曹軍能夠作戰的兵力實則不到二十萬；反觀，周瑜、黃蓋皆是當地人，熟悉水域、氣候，綜觀各樣條件，孫劉聯軍才得以寡擊眾，重創曹軍，開創三國鼎立的局勢。",
            },
            {
               title: "哥倫布發現新大陸",
               tagDanderLevel: "中",
               tagFeature: "經典事件",
               tagRegion: "北美洲",
               happenYear: "西元1492年",
               description:
                  "從1492年到1503年間，哥倫布完成了4次從西班牙到美洲的來回航行。這些航行都是由卡斯提亞王國資助的，標誌著歐洲人對美洲大陸的探險和殖民的開始，因此對西方歷史有著不可估量的重要性。儘管哥倫布面對日漸增多反對其觀點的證據，但仍然堅持認為他在歷次航行中所到過的地方就是馬可·波羅以及其他歐洲旅行家說描述過的亞洲大陸的一部分。也因為哥倫布拒絕承認他到過的地方不是亞洲的一部分，可能部分解釋了為什麼美洲大陸不是以他的名字命名，而是以在他之後的到達美洲的佛羅倫斯的探險家亞美利哥·韋斯普奇的名字命名。",
            },
            {
               title: "【埃及五千年】埃及黃金時代：建造史上最宏大的吉薩大金字塔法老－胡夫",
               tagDanderLevel: "低",
               tagFeature: "經典事件",
               tagRegion: "非洲",
               happenYear: "西元???年",
               description:
                  "這位新國王將其父親遺留的壯觀事業進一步發揚光大，完成了埃及史上最宏大且最受美譽的著名地標：吉薩大金字塔。吉薩大金字塔是當今世人所知的名稱，然而，當初的命名是「阿赫特─胡夫」，意即「胡夫的地平線」。",
            },
            {
               title: "尼斯湖水怪",
               tagDanderLevel: "低",
               tagFeature: "奇聞軼事",
               tagRegion: "歐洲",
               happenYear: "近代歷史",
               description:
                  "尼斯湖水怪絕對是上個世紀最有名的一個不明生物。最早有人看到尼斯湖水怪是在1933年4月份的時候，直到今天80多年過去了，它的目擊情報從來沒有斷過。你相不相信水怪的存在呢?我們將帶您穿越回1933年，讓您親自見證!此行程穿越年份較短，時代背景與現今較無差異，適合新手體驗!",
            },
            {
               title: "不存在的車站-如月車站",
               tagDanderLevel: "高",
               tagFeature: "奇聞軼事",
               tagRegion: "亞洲",
               happenYear: "西元2004年",
               description:
                  "2004年1月8日，一名日本網友以葉純（はすみ）的名義進行文字直播，兼尋求協助。她表示自己在新濱松站登上西鹿島線後，列車駛了一段長時間都沒有到站，之後列車終於在一個附近完全是荒山野嶺無人的「如月車站」停下，他以電話向警方求救也無法得到協助。她在後文表示，自己在穿過一條隧道後，發現有車主願意送自己到附近的車站。此後她停止發文，音訊全無...",
            },
            {
               title: "亞特蘭提斯",
               tagDanderLevel: "低",
               tagFeature: "奇聞軼事",
               tagRegion: null,
               happenYear: "西元前一萬兩千年",
               description:
                  "大西洋的英文叫做Atlantic，亞特蘭提斯叫做Atlantis。從這個名稱大家就可以知道亞特蘭提斯應該是在大西洋上的一個地方。這個地方是個傳說中的地方，存不存在沒人知道，但是古書裡都有寫到這個地方，最早提到亞特蘭提斯這個地方的人，是古希臘的知名哲學家柏拉圖。他寫了兩本書，一本叫做《克里提亞篇》，一本叫做《蒂邁歐篇》，兩本書裡都提到了亞特蘭提斯這個地方。柏拉圖說，公元前9560年的時候，在直布羅陀海峽的對面有一個非常大的島，也就是現在的非洲大陸，他聲稱這個非洲大陸旁邊還有一個非常大的島，這個島也就是亞特蘭提斯。",
            },
            {
               title: "耶穌被釘十字架",
               tagDanderLevel: "中",
               tagFeature: "宗教事件",
               tagRegion: "亞洲",
               happenYear: "西元30~33年",
               description:
                  "耶穌被釘十字架，耶穌被逮捕後以十字架處死的事件，一般認為發生在公元1世紀的猶太行省，最可能在公元30到33年之間。雖然歷史學家對這個事件的準確細節並沒有達成共識，但這個事件在《聖經》中正統的《四福音》皆有描述，在《新約書信》中有提及，而且也被其他古代資料證實，除了基督徒的資料以外，並也被異教徒的史料證實，學者多數認為這是一個歷史事件。",
            },
            {
               title: "穆罕默德",
               tagDanderLevel: "低",
               tagFeature: "宗教事件",
               tagRegion: "亞洲",
               happenYear: "西元571~632年",
               description:
                  "穆罕默德出生在麥加的古萊什族的哈希姆家族，為當時麥加的望族，因此穆罕默德的幼年環境相當地富裕。穆罕默德的父親在穆罕默德出世前就不幸隨商隊病死沙漠，因此穆罕默德的童年是隨他的叔父阿布·塔里布照料至大。根據伊斯蘭傳統，嬰孩在出生不久後，就會被送往貝都因人所住在沙漠當中，因為他們相信能在沙漠中生存的孩子是健康的，因此穆罕默德就在他的養母哈利瑪家中度過兩年。而穆罕默德的母親阿米娜也在穆罕默德六歲那年因病逝世，而身為古萊什家族領袖的祖父阿布德·穆塔利卜，也在照顧穆罕默德後相繼去世，因此穆罕默德的祖父將穆罕默德託付給個性相當老實的兒子阿布·塔里布照顧至大。",
            },
            {
               title: "十字軍東征",
               tagDanderLevel: "高",
               tagFeature: "宗教事件",
               tagRegion: "歐洲",
               happenYear: "西元1609年",
               description:
                  "十字軍東征是一系列在教皇的准許下的戰爭，由西歐的封建領地主和騎士對被他們視為侵略者的伊斯蘭政權（地中海東岸）發動持續近200年的戰爭。十字軍東征最初參與成員，例如：騎士、商人、農民，多數是自願的，受拜占庭帝國之邀、以及羅馬教廷的認可下，參與奪回聖地戰爭。這些十字軍也非拜占庭帝國主力部隊。東正教徒也參加其中幾次十字軍。",
            },
            {
               title: "荷蘭的黃金年代",
               tagDanderLevel: "低",
               tagFeature: "歷史事件",
               tagRegion: "歐洲",
               happenYear: "西元1609年",
               description:
                  "在西元1550年至1650年間是荷蘭的黃金年代，有這歐洲最先進的制度，也是最強大的經濟體，而鯡魚就是荷蘭崛起的關鍵之一，究竟為什麼荷蘭能靠小小鯡魚擊敗歐洲列強呢?",
            },
            {
               title: "馬利帝國與曼薩．穆薩的朝聖之旅",
               tagDanderLevel: "低",
               tagFeature: "歷史事件",
               tagRegion: "非洲",
               happenYear: "西元1235~1600年",
               description:
                  "馬利帝國，又名曼丁帝國或曼迪聯邦，是西非中世紀時的一個強大伊斯蘭教帝國，是北部非洲以南的廣闊內陸中歷史最悠久的國家，古代最重要的伊斯蘭文化與財富中心之一。帝國語言為曼丁哥語，為是當時西非最大的國家，其語言、法律及風俗也影響當時西非各國的文化許多。馬利帝國因擁有作為主要貿易中心的優越地理位置，壟斷了對穿越撒哈拉沙漠商路的徵稅權。皇帝被稱為「曼薩」，首都為尼亞尼。 ",
            },
            {
               title: "馬雅文明",
               tagDanderLevel: "低",
               tagFeature: "歷史事件",
               tagRegion: "南美洲",
               happenYear: "未知",
               description:
                  "關於「馬雅」文明的傳說，很多人都聽說過。提到馬雅人，大部分人會把他們與美洲叢林聯繫到一起。浮現在腦海中的也是一群印地安人，他們身著鮮豔羽毛服飾，趁著月光進行著神祕的儀式，法術高強的祭司站在中間，其他人繞著轉圈。的確，今天中美洲幽靜的叢林之中還有著馬雅人神祕的遺跡，那兒正是他們的居住地。他們有著神祕的巨石遺跡及特別的美食和宗教祭祀活動。就讓我們一同去一探神祕的馬雅文明吧。",
            },
            {
               title: "鄭和下西洋",
               tagDanderLevel: "中",
               tagFeature: "歷史事件",
               tagRegion: "亞洲",
               happenYear: "西元1405年",
               description:
                  "鄭和下西洋象徵著中國航海史上的一個高峰。當時明朝在航海技術，船隊規模、航程之遠、持續時間、涉及領域等的規模及高度，在當時的年代均是前所未見。本次旅行將帶你搭上鄭和的遠洋艦隊，由蘇州出發沿途經過福建–〉越南中南部地區–〉爪哇–〉三佛齊的舊港–〉蘇門答臘–〉滿刺加–〉錫蘭–〉古里–〉回程蘇州。沿途亦有遇上倭寇劫船之風險，可能造成財物損失，甚至有生命危險，請謹慎評估風險後再進行報名。",
            },
            {
               title: "澳洲淘金熱",
               tagDanderLevel: "低",
               tagFeature: "歷史事件",
               tagRegion: "大洋洲",
               happenYear: "西元1912年",
               description:
                  "發生在在1851年開始的澳洲淘金熱，大量工人從澳洲和其他地區前往挖掘黃金的情形。此處在先前已經多次發生挖掘出黃金的情形，但是新南威爾士州的政府一直壓制及隱瞞這個消息，因為他們擔心會因此而減少勞動人力，從而破壞經濟的穩定。但是隨著知情的人越來越多，政府也無法完全管轄，此熱潮才逐漸爆發...",
            },
            {
               title: "鐵達尼號沈船事件",
               tagDanderLevel: "中",
               tagFeature: "歷史事件",
               tagRegion: "歐洲",
               happenYear: "西元1912年",
               description:
                  "鐵達尼號沉沒事故是1912年4月14日深夜至15日凌晨在北大西洋發生的著名船難，事發時是鐵達尼號從英國南安普敦港至美國紐約港首航的第5天，而該船當時是世界最大的郵輪。1912年4月14日星期天23時40分與一座冰山擦撞前，已經收到6次海冰警告，但當瞭望員看到冰山時，該船的行駛速度正接近最高速。由於無法快速轉向，該船右舷側面遭受了一次撞擊，部分船體出現縫隙，使16個水密隔艙中的5個進水。鐵達尼號的設計僅能夠承受4個水密隔艙進水，因此沉沒。",
            },
         ],
      };
   },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/utils/variables";

h3 {
   color: #fff;
   display: flex;
   justify-content: center;
   align-items: center;
   margin-bottom: 48px;
}

.history-content {
   display: grid;
   grid-template-columns: 1fr 1fr;
   color: #fff;
}

.history-text {
   padding: 12px 24px 0;
   display: flex;
   flex-direction: column;
   gap: 24px;
}

span {
   margin-right: 8px;
}
</style>
