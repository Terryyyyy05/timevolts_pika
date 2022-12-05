<template>
  <innerpageHeader></innerpageHeader>
  <div class="container">
    <the-heading heading="關於我們" subheading="About us"></the-heading>
      
  <div class="about">
    <div class="about-title">
      <img src="@/assets/image/about/4lighting.svg"/>
      <h2>{{title[0]}}</h2>
      <img src="@/assets/image/about/4lighting.svg"/>
    </div>

    <div class="about-content">
      <div class="about-pic">
        <img src="@/assets/image/about/member.jpg" alt="">
      </div>
      <p class="content">{{content[0]}}</p>
      </div>
    </div>

    <div class="about">
      <div class="about-title">
        <img src="@/assets/image/about/4lighting.svg"/>
        <h2>{{title[1]}}</h2>
        <img src="@/assets/image/about/4lighting.svg"/>
      </div>

    <div class="about-content">
      <p class="content">{{content[1]}}</p>
      <div class="about-pic">
        <img class="machine" src="@/assets/image/about/timemachine.png" alt="">
      </div>
      </div>
    </div>

    <div class="about">
      <div class="about-title">
        <img src="@/assets/image/about/4lighting.svg"/>
        <h2>{{title[2]}}</h2>
        <img src="@/assets/image/about/4lighting.svg"/>
      </div>

    <div class="about-content">
      <div class="member-list" v-for="item in member" :key="item">
        <div class="member-list-title">
          <img :src="item.img">
          <h4>{{item.title}}</h4>
        </div>
        <ul class="member-list-intro" >
          <li v-for="subitem in item.content" :key="subitem"> {{subitem}}</li>
        </ul>
      </div>
    </div>
  </div>
</div>
</template>

<script>

  export default {
    name:"AboutView",
    data(){
      return{
          title:['組織介紹','機型介紹','會員制度'],
          content:['在現代科學的輔助下，時萬伏特讓時光旅行不再只是空想，探索人類的歷史這個不可能實現的想法，我們現在讓不可能成為可能!!只要是過去發生的年代我們都可以進行穿越，並且在時空管理局的縝密規範之下，我們誠摯地邀請您一同成為遨遊歷史的其中一員!',
          '我們研發出一種新型的技術，利用電流作為驅動導入我們的機器之中，我們製造電流的方式是利用皮卡丘電擊而產生，這同時也是我們品牌的發想概念，請放心，此種方式對您的身體沒有任何損害，過程中您不會感覺到任何疼痛。當皮卡丘的尾巴接觸您身體的當下，您已經在目的地準備開始您宏偉且史詩的旅程了。說而言不如起而行，再多的文字也比不上親身體驗過來得刻骨銘心，馬上報名我們的行程來體驗看看吧!'],
          member:[
          {
            title: '普通會員',
            img: require(`@/assets/image/about/diamond.svg`),
            content:['註冊即可獲得'],
          },
          {
            title: '白金會員',
            img: require(`@/assets/image/about/diamond.svg`),
            content:['穿越次數達3次','累積消費價格達$$$$','搶先得知新上架行程','行程購買9折'],
          },
          {
            title: '鑽石會員',
            img: require(`@/assets/image/about/diamond.svg`),
            content:['穿越次數達10次','累積消費價格達$$$$','搶先得知新上架行程','行程購買8折'],
          },
        ],
      }
  },
 
};
</script>

<style scoped lang="scss">
@import '@/assets/css/utils/variables';

.about{
  width: 80%;
  margin: 50px auto;
  border: 1px solid map-get($color, primary);
  background-color: map-get($color, dark_sub );
  color: map-get($color, primary);
  .about-title{
    display: flex;
    border-bottom: 1px solid map-get($color, primary);
    justify-content: center;
    padding: 10px;
    img{
      width: 15%;
    }
  }
  .about-content{
    display: flex;
    justify-content: space-evenly;
    .about-pic{
      width: 50%;
      margin: auto;
      padding: 10px;
        img{
          width: 100%;
          vertical-align: baseline;
        }
        .machine{
          animation: Move 3s infinite;
        }
      }
    .member-list{
      width: 33.33%;
      margin: 10px;
      padding: 20px;
      .member-list-title{
        display: flex;
        justify-content: center;
        margin: 10px;
        img{
          width: 20%;
        }
        h4{
          margin: auto 0;
        }
      }
        .member-list-intro{
          border: 1px solid map-get($color, primary);
          background-color: map-get($color, primary);
          color: map-get($color, dark);
          height: 200px;
          padding: 10px 30px;
          li{
            list-style:square;
            line-height: 2;
            letter-spacing: 1px;
          }
        }
      }
    }

    @keyframes Move {
      0% {transform: translate(0,0);}
      50% {transform: translate(0,20px);}
      100% {transform: translate(0,0);}
    }
    .content{
      width: 50%;
      margin: 10px;
      font-size: 17px;
      line-height: 1.5;
      letter-spacing: 1px;
      align-self: center;
      text-indent: 2rem;
    }
  }

@media screen and (max-width:768px) {
  .about{
    width: 90%;
  .about-title{
    img{
      width: 20%;
    }
  }
  .about-content{
    flex-direction: column;
    .about-pic{
        width: 90%;
      }
    .content{
      width: 90%;
    }
    .member-list{
      width: 70%;
      margin: auto;
    .member-list-title{
      img{
        width: 10%;
      }
    }
    .member-list-intro{
        height: 150px;
      }
    }
    }
  }
}

</style>
