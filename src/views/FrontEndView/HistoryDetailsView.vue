<template>
   <all-header></all-header>
   <div class="container">
      <the-heading heading="歷史故事" subheading="history"></the-heading>
   </div>
   <history-banner> </history-banner>
   <div class="container grid">
      <font-awesome-icon
         class="switch-p-icon"
         icon="fa-solid fa-chevron-left"
         v-show="this.count !== 0"
         @click="previous"
      />
      <font-awesome-icon
         class="switch-p-icon"
         icon="fa-solid fa-chevron-right"
         v-show="this.count !== this.paragraph.length - 1"
         @click="next"
      />
      <div>
         <div class="small-images">
            <div
               v-for="(img, index) in 5"
               :key="img"
               class="small-image"
               :style="imageBorder(index)"
            >
               <img
                  class="small-image"
                  :src="
                     require(`@/assets/image/history/historyImage_${index}.png`)
                  "
                  alt="historyImage"
                  @click="switchImage(index)"
               />
            </div>
         </div>
         <div class="big-image-container">
            <img
               class="big-image"
               :src="
                  require(`@/assets/image/history/historyImage_${count}.png`)
               "
               alt="historyImage_4"
            />
         </div>
      </div>
      <div class="history-text">
         <h3>十字軍東征</h3>
         <div class="tag">
            <span>#高</span>
            <span>#宗教事件</span>
            <span>#歐洲</span>
         </div>
         <active-paragraph
            :heading="activeParagraph && activeParagraph.title"
            :text="activeParagraph && activeParagraph.content"
         ></active-paragraph>
         <router-link to="/itineraryPeriodView"
            ><button class="btn-secondary">我想參加</button></router-link
         >
      </div>
   </div>
   <all-footer></all-footer>
</template>

<script>
import HistoryBanner from "../../components/history/UI/HistoryBanner.vue";
import ActiveParagraph from "../../components/history/ActiveParagraph.vue";

export default {
   components: {
      HistoryBanner,
      ActiveParagraph,
   },
   data() {
      return {
         paragraph: [
            {
               id: 0,
               title: "穆斯林的擴張",
               content:
                  "7世紀，伊斯蘭教在阿拉伯半島興起，先知穆罕默德的後繼者——四大哈里發時期的穆斯林們迅速向阿拉伯半島以外的地區擴張，中東的歷史格局從此發生巨變。而此時拜占廷帝國和波斯的薩珊帝國因彼此的連年戰爭而筋疲力竭，人民厭戰，新興的穆斯林從中得利，輕易擊敗兩位帝國。穆斯林在636年的約旦擊敗拜占廷軍隊，並於638年占領了聖地耶路撒冷穆斯林稱為古都斯。在7世紀的剩餘時間裡，阿拉伯人不可阻擋地向北方和西方驅進。阿拉伯軍隊於711年渡過直布羅陀海峽，並擊敗了西哥特人；次年擴張至伊比利亞半島中部（今西班牙）；到8世紀30年代，在歐洲西面，以北非柏柏爾人為主的穆斯林征服者挺進到法蘭克王國的心臟地帶，卻在732年的圖爾戰役中被查理·馬特挫敗，其在西歐的擴張步伐遂被遏止。而在東面，717年—718年君士坦丁堡重挫了烏邁耶王朝阿拉伯人的圍攻，到9世紀時西西里島和許多其他地中海島嶼已被阿拉伯人奪取。",
            },
            {
               id: 1,
               title: "拜占庭帝國",
               content:
                  "馬其頓王朝開始後，國勢恢復的東羅馬對法蒂瑪王朝等西亞回教諸國的戰爭開始再度白熱化。1025年，巴西爾二世駕崩後，由於連年內戰，東羅馬國勢日衰。1071年，塞爾柱帝國在曼齊刻爾特戰役中大勝拜占庭帝國軍隊，結果使拜占庭喪失了大半的國土，其版圖只限於巴爾幹半島一隅和安納托利亞西北角。至此東羅馬無力單獨對抗穆斯林威脅，君士坦丁堡方面因為失去安納托利亞作為屏障，不得不尋求西方的軍事援助。作為對曼齊刻爾特局勢的回應，1074年，教宗額我略七世發出名為「上帝的士兵」（milites Christi）呼籲，而這常常為當時的西歐所忽視。",
            },
            {
               id: 2,
               title: "朝聖的世俗化",
               content:
                  "11世紀的歐洲正處於克呂尼運動的高峰期，宗教的思想觀念與感情已深入到人們的骨髓，人們的時空觀、財富觀、勞動觀以及其他一切行為，無不受到基督教的深刻而持久的作用，在幾乎任何一個教堂或小村莊都會聽到人們發自內心的對天國的追求和對地獄的恐懼。十字軍東徵發生前的10—11世紀之交，正值基督教史上的所謂「世界末日」，而這時的西歐也正處於長期的荒年。人們瘋狂地相信《啟示錄》中提到的基督在十字架上被釘死以來的千年末日已經來臨，類似「世界末日之時，西方皇帝會在耶路撒冷加冕，並與反基督的異教徒在那裡戰鬥」的傳言在歐洲各地到處散播。在這種壓力下，一種強烈的「贖罪」與「修來世」的意識成為當時的社會時尚，人們把現實苦難看作是上帝對其的懲罰，積極提倡苦修、禁慾、補贖，並由此引發出狂熱的對物崇拜和聖地朝聖。在歐洲聖地朝聖早已有之，但此刻的朝聖被教會賦予了新的含義，即朝聖本身也是一種補贖，朝聖者啟程之始要象教士一樣立誓信教，朝聖期間要過獨身生活，並要朝聖者到達聖地進行祈禱時，「他本身已具有了一種權力，可殺一個邪惡的人或治癒一個病人」。到11世紀時，歐洲朝聖者的人數空前增長。原先小規模的朝聖被大規模的懺悔朝聖所代替。1054年康布雷主教率領3000名朝聖者前往耶路撒冷；1064年—1065年德國科隆、美因茲等地的主教率領上萬名基督徒和一支擁有相當人數軍隊組成的朝聖大軍前往耶路撒冷，結果約有3000人在途中倒斃。在當時宗教文化濃厚的時代氛圍中，去往聖地進行「聖戰」成為一條便捷的贖罪途徑，對於窮苦又無援的民眾來說，朝聖或到東方去「聖戰」也是他們改善命運的出路。",
            },
            {
               id: 3,
               title: "教會政治鬥爭",
               content:
                  "東歐的拜占庭帝國長期奉行的東正教派，並與羅馬的天主派在神學、教會組織等各方面的分歧不斷擴大。1053年，拜占庭帝國基督教會君士坦丁堡牧首米海爾一世，因君士坦丁堡的拉丁禮教堂拒絕使用希臘禮拜儀式，遂將其全數關閉。聖座提出抗議。彌格耳反而質問西方教會彌撒用無酵餅源自猶太人實為異端（新約聖經格林多前書5:8 所以我們過節，不可用舊酵母，也不可用奸詐和邪惡的酵母，而只可用純潔和真誠的無酵餅）。教宗良九世派了亨拜樞機至君士坦丁堡，與彌格耳談判，但是雙方各不相讓，談判破裂。1054年7月14日亨拜進入聖索非亞大教堂，將開除彌格耳教籍的判書放到祭台上，出了教堂。而彌格耳不肯屈服，當眾把教宗送來的詔書燒毀。之後教宗和君士坦丁堡牧首相互絕罰，基督宗教正式分裂為西方天主教（拉丁教會）和東方東正教（希臘教會）。有歷史學家認為，雖然發起第一次十字軍東征的教宗烏爾巴諾二世沒有提及聖座謀求在東方的影響力，但不失為號召十字軍的目的之一。從羅馬帝國晚期到11世紀，教會官員的任命儘管理論上是羅馬天主教會的任務，但實際上由世俗權威履行。主教和修道院長們接受世俗權利，買賣聖職活動泛濫，甚至神聖羅馬帝國皇帝對聖座施加影響。教宗額我略七世（1073年—1085年在位）因應當時的宗教改革呼聲，提出的教會的權柄高於政治的權柄，並下令禁止貴族私自封立主教及指派教會職位，要求聖品人員嚴守獨身的誓言。然而，這對西方基督教世界的封建統治者們，尤其是靠日耳曼主教和倫巴底主教支持的神聖羅馬帝國皇帝亨利四世構成威脅，因此發生了敘任權鬥爭。教宗和皇帝雙方勢力都需要引導輿論獲取民眾支持，而號召人們對聖地的宗教熱情對確立教宗的「普世權威」是有利的。",
            },
            {
               id: 4,
               title: "克萊芒會議",
               content:
                  "教宗烏爾巴諾二世在1095年11月在義大利皮亞琴察召開宗教會議，正好東正教的拜占庭皇帝派來特使在會議上痛陳突厥人西侵的壓迫，於是教宗在會議上疾呼西歐應收復聖地並解救同為基督教兄弟的危難，但對抗強大的穆斯林勢力必須有更多的團結勢力，於是教宗在同年12月冬天在法國克萊芒召開更大的基督教會議發表演說以號召更多響應者，此次參與會議多達數萬人並且包含了各地大主教與封建貴族騎士與平民，造成貴族與平民間熱烈響應，並且確立以十字記號為軍隊徽幟，制訂大量徽章大量發放，十字軍的名稱由此而來。",
            },
         ],
         count: 0,
         activeParagraph: null,
      };
   },
   methods: {
      next() {
         if (this.count >= 0 && this.count < this.paragraph.length) {
            this.count += 1;
            this.updateParagraph();
         }
      },
      previous() {
         if (this.count >= 0 && this.count < this.paragraph.length) {
            this.count -= 1;
            this.updateParagraph();
         }
      },
      updateParagraph() {
         this.activeParagraph = this.paragraph.find((p) => p.id === this.count);
      },
      imageBorder(index) {
         if (this.count === index) {
            return "border: 5px solid #fab042";
         }
      },
      switchImage(index) {
         this.count = index;
         this.activeParagraph = this.paragraph.find((p) => p.id === index);
         console.log(this.activeParagraph);
      },
   },
   created() {
      this.updateParagraph();
   },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/utils/variables";
@import "@/assets/css/utils/mixin";

.container {
   margin-bottom: 48px;
}

.grid {
   display: grid;
   grid-template-columns: 2fr 1fr;
   justify-items: center;
   column-gap: 48px;
   margin-top: 96px;
   position: relative;
}

.switch-p-icon {
   position: absolute;
   font-size: 128px;
   top: 50%;
   transform: translate(-50%, -50%);
   color: map-get($color, "accent");
   opacity: 30%;
   transition: opacity 0.3s ease;
   cursor: pointer;
   &:nth-of-type(1) {
      left: 0;
   }
   &:nth-of-type(2) {
      left: 100%;
   }
   &:hover {
      opacity: 100%;
      transition: opacity 0.3s ease;
   }
}

.small-images {
   display: flex;
   align-items: center;
   gap: 24px;
   margin-bottom: 48px;
}

.small-image {
   width: 150px;
   height: 100px;
   cursor: pointer;
}

.big-image-container {
   display: flex;
   justify-content: center;
   align-items: center;
   height: 600px;

   .big-image {
      width: 100%;
      height: 100%;
   }
}

.history-text {
   color: #fff;
}

h3 {
   display: flex;
   justify-content: center;
}

.tag {
   display: flex;
   gap: 8px;
   margin: 24px auto 0;
   padding: 24px 48px;
   border-top: 2px solid map-get($color, "primary");
}

.btn-secondary {
   margin: 24px auto 0;
}

@include m() {
   .grid {
      grid-template-columns: 1fr;
   }

   .switch-p-icon {
      font-size: 48px;
      &:nth-of-type(1) {
         left: 10%;
         top: 95%;
      }
      &:nth-of-type(2) {
         left: 90%;
         top: 95%;
      }
   }

   .small-images {
      display: none;
   }

   .big-image-container {
      height: 300px;
   }

   .big-image-container.big-image {
      width: 100%;
   }

   .tag {
      justify-content: center;
   }
}
</style>
