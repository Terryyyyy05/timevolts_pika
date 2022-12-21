export default {
   namespaced: true,
   state() {
      return {
         histories: [
            // {
            //    id: "h1",
            //    title: "史前時代",
            //    tagDanderLevel: "高",
            //    tagFeature: "歷史事件",
            //    tagRegion: "亞洲",
            //    happenYear: "西元前5000年左右",
            //    description:
            //       "人類的歷史分成：史前時代及信使時代。「文字的出現」為畫分的依據，史前時代沒有文字，信使時代為文字開始。今天，我們將回到史前時代，建立屬於自己的莊園，面對嚴苛的大自然及猛獸努力存活下去。",
            // },
            // {
            //    id: "h2",
            //    title: "赤壁之戰",
            //    tagDanderLevel: "高",
            //    tagFeature: "歷史事件",
            //    tagRegion: "亞洲",
            //    happenYear: "西元208年",
            //    description:
            //       "孫劉為抵抗八十萬曹軍舉兵南下，於烏林、赤壁會面交戰，經武臣黃蓋詐降火計，重創曹軍。根據三國誌記載，曹操因多年北伐征討，將兵早已疲倦不堪，整個曹軍能夠作戰的兵力實則不到二十萬...",
            // },
            // {
            //    id: "h3",
            //    title: "哥倫布發現新大陸",
            //    tagDanderLevel: "中",
            //    tagFeature: "歷史事件",
            //    tagRegion: "北美洲",
            //    happenYear: "西元1492年",
            //    description:
            //       "從1492年到1503年間，哥倫布完成了4次從西班牙到美洲的來回航行，標誌著歐洲人對美洲大陸的探險和殖民的開始，因此對西方歷史有著不可估量的重要性。",
            // },
            // {
            //    id: "h4",
            //    title: "【埃及五千年】埃及黃金時代：建造史上最宏大的吉薩大金字塔法老－胡夫",
            //    tagDanderLevel: "低",
            //    tagFeature: "歷史事件",
            //    tagRegion: "非洲",
            //    happenYear: "西元???年",
            //    description:
            //       "這位新國王將其父親遺留的壯觀事業進一步發揚光大，完成了埃及史上最宏大且最受美譽的著名地標：吉薩大金字塔。當初的命名是「阿赫特─胡夫」，意即「胡夫的地平線」。",
            // },
            // {
            //    id: "h5",
            //    title: "尼斯湖水怪",
            //    tagDanderLevel: "低",
            //    tagFeature: "奇聞軼事",
            //    tagRegion: "歐洲",
            //    happenYear: "近代歷史",
            //    description:
            //       "尼斯湖水怪絕對是上個世紀最有名的一個不明生物。最早有人看到尼斯湖水怪是在1933年4月份的時候，直到今天80多年過去了，它的目擊情報從來沒有斷過。你相不相信水怪的存在呢?",
            // },
            // {
            //    id: "h6",
            //    title: "不存在的車站-如月車站",
            //    tagDanderLevel: "高",
            //    tagFeature: "奇聞軼事",
            //    tagRegion: "亞洲",
            //    happenYear: "西元2004年",
            //    description:
            //       "一名日本網友以葉純（はすみ）的名義進行文字直播，兼尋求協助。她表示自己在新濱松站登上西鹿島線後，列車駛了一段長時間都沒有到站，不久後她停止發文，音訊全無...",
            // },
            // {
            //    id: "h7",
            //    title: "亞特蘭提斯",
            //    tagDanderLevel: "低",
            //    tagFeature: "奇聞軼事",
            //    tagRegion: "北美洲",
            //    happenYear: "西元前一萬兩千年",
            //    description:
            //       "這個地方是個傳說中的地方，存不存在沒人知道，。柏拉圖說，公元前9560年的時候，在直布羅陀海峽的對面有一個非常大的島，也就是現在的非洲大陸，他聲稱這個非洲大陸旁邊還有一個非常大的島，這個島也就是亞特蘭提斯。...",
            // },
            // {
            //    id: "h8",
            //    title: "耶穌被釘十字架",
            //    tagDanderLevel: "中",
            //    tagFeature: "宗教事件",
            //    tagRegion: "亞洲",
            //    happenYear: "西元30~33年",
            //    description:
            //       "耶穌被釘十字架，耶穌被逮捕後以十字架處死的事件，一般認為發生在公元1世紀的猶太行省，最可能在公元30到33年之間。雖然歷史學家對這個事件的準確細節並沒有達成共識，學者多數認為這是一個歷史事件。",
            // },
            // {
            //    id: "h9",
            //    title: "穆罕默德",
            //    tagDanderLevel: "低",
            //    tagFeature: "宗教事件",
            //    tagRegion: "亞洲",
            //    happenYear: "西元571~632年",
            //    description:
            //       "穆罕默德出生在麥加的古萊什族的哈希姆家族，為當時麥加的望族，因此穆罕默德的幼年環境相當地富裕。",
            // },
            // {
            //    id: "h10",
            //    title: "十字軍東征",
            //    tagDanderLevel: "高",
            //    tagFeature: "宗教事件",
            //    tagRegion: "歐洲",
            //    happenYear: "西元1609年",
            //    description:
            //       "十字軍東征是一系列在教皇的准許下的戰爭，由西歐的封建領地主和騎士對被他們視為侵略者的伊斯蘭政權（地中海東岸）發動持續近200年的戰爭。受拜占庭帝國之邀、以及羅馬教廷的認可下，參與奪回聖地戰爭。",
            // },
            // {
            //    id: "h11",
            //    title: "荷蘭的黃金年代",
            //    tagDanderLevel: "低",
            //    tagFeature: "歷史事件",
            //    tagRegion: "歐洲",
            //    happenYear: "西元1609年",
            //    description:
            //       "在西元1550年至1650年間是荷蘭的黃金年代，有這歐洲最先進的制度，也是最強大的經濟體，而鯡魚就是荷蘭崛起的關鍵之一，究竟為什麼荷蘭能靠小小鯡魚擊敗歐洲列強呢?",
            // },
            // {
            //    id:'h12',
            //    title: "馬利帝國與曼薩．穆薩的朝聖之旅",
            //    tagDanderLevel: "低",
            //    tagFeature: "歷史事件",
            //    tagRegion: "非洲",
            //    happenYear: "西元1235~1600年",
            //    description:
            //       "馬利帝國，又名曼丁帝國或曼迪聯邦，是西非中世紀時的一個強大伊斯蘭教帝國，是北部非洲以南的廣闊內陸中歷史最悠久的國家，古代最重要的伊斯蘭文化與財富中心之一。其語言、法律及風俗也影響當時西非各國的文化許多。",
            // },
            // {
            //    id: "h13",
            //    title: "馬雅文明",
            //    tagDanderLevel: "低",
            //    tagFeature: "歷史事件",
            //    tagRegion: "南美洲",
            //    happenYear: "未知",
            //    description:
            //       "關於「馬雅」文明的傳說，很多人都聽說過。提到馬雅人，大部分人會把他們與美洲叢林聯繫到一起。浮現在腦海中的也是一群印地安人，他們身著鮮豔羽毛服飾，趁著月光進行著神祕的儀式，他們有著神祕的巨石遺跡及特別的美食和宗教祭祀活動。就讓我們一同去一探神祕的馬雅文明吧。",
            // },
            // {
            //    id: "h14",
            //    title: "鄭和下西洋",
            //    tagDanderLevel: "中",
            //    tagFeature: "歷史事件",
            //    tagRegion: "亞洲",
            //    happenYear: "西元1405年",
            //    description:
            //       "鄭和下西洋象徵著中國航海史上的一個高峰。當時明朝在航海技術，船隊規模、航程之遠、持續時間、涉及領域等的規模及高度，在當時的年代均是前所未見。本次旅行將帶你搭上鄭和的遠洋艦隊，可能造成財物損失，甚至有生命危險，請謹慎評估風險後再進行報名。",
            // },
            // {
            //    id: "h15",
            //    title: "澳洲淘金熱",
            //    tagDanderLevel: "低",
            //    tagFeature: "歷史事件",
            //    tagRegion: "大洋洲",
            //    happenYear: "西元1912年",
            //    description:
            //       "發生在在1851年開始的澳洲淘金熱，大量工人從澳洲和其他地區前往挖掘黃金的情形。雖然新南威爾士州的政府一直壓制及隱瞞這個消息，但是隨著知情的人越來越多，政府也無法完全管轄，此熱潮才逐漸爆發...",
            // },
            // {
            //    id: "h16",
            //    title: "鐵達尼號沈船事件",
            //    tagDanderLevel: "中",
            //    tagFeature: "歷史事件",
            //    tagRegion: "歐洲",
            //    happenYear: "西元1912年",
            //    description:
            //       "鐵達尼號沉沒事故是個著名船難，事發時是鐵達尼號從英國南安普敦港至美國紐約港首航的第5天，而該船當時是世界最大的郵輪。當瞭望員看到冰山時，該船的行駛速度正接近最高速。因此無法快速轉向...",
            // },
         ],
      };
   },
   getters: {
      histories(state) {
         return state.histories;
      },
   },
   actions: {
      async getHistories(context) {
         const response = await fetch(
            "http://localhost/timevolts_pika/public/phpfiles/getHistories.php"
         );

         const responseData = await response.json();

         const histories = [];

         for (const key in responseData) {
            const history = {
               id: String(responseData[key].story_id),
               title: responseData[key].story_name,
               tagDanderLevel: responseData[key].story_risk,
               tagFeature: responseData[key].story_specialty,
               tagRegion: responseData[key].story_spot,
               happenYear: responseData[key].story_age,
               description: responseData[key].story_intro,
            };
            histories.push(history);
         }

         context.commit("getHistories", histories);
      },
   },
   mutations: {
      getHistories(state, payload) {
         state.histories = payload;
      },
   },
};
