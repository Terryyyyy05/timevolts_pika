<template>
    <header>
      <div class="icon-container">
        <div><router-link to="/login"><img src="Group604.png" alt=""></router-link></div>
        <div><img src="Group605.png" alt=""></div>
      </div>
      <div class="nav">
        <div class="hbicon"><img src="Group603.png" alt=""></div>
        <div class="link-container">
          <div class="bar"></div>
          <router-link to="/news">最新消息</router-link>
          <div class="bar"></div>
          <router-link to="/itinerary">時光行程</router-link>
          <div class="bar"></div>
          <router-link to="/history">歷史故事</router-link>
          <div class="bar"></div>
          <router-link to="/product">購物商城</router-link>
          <div class="bar"></div>
          <router-link to="/about">關於我們</router-link>
          <div class="bar"></div>
          <router-link to="/member">會員中心</router-link>
          <div class="chatbot"><img src="Group243.png" alt=""></div>
        </div>
      </div>
    </header>
</template>

<script>
export default {
  name: "header",
  
};
</script>

<style scoped lang="scss">
  header{
    display: flex;
    position: fixed;
    top: 2%;
    right: 2%;
    z-index: 100;
    .icon-container{
    display: flex;
    height: fit-content;
    margin-top: calc((85px - 30px) / 2);
    div{
      width: 30px;
      height: 30px;
      margin-right: 20px;
      img{
        width: 100%;
        height: 100%;
      }
    }
    }
    div.nav{
      .hbicon{
        height: 85px;
        width: 85px;
        animation: rotate 1.5s infinite;
        img{
        width: 100%;
        height: 100%;
        }
      }
      .link-container{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        a{
        height: 80px;
        width: 80px;
        text-decoration: none;
        color: #ffe1b5;
        border: 2px solid #ffe1b5;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        &:hover{
          color: #1e1e1e;
          background-color: #ffe1b5;  
          transition: .5s;
          }
        }
        div.bar {
          height: 10px;
          width: 3px;
          background-color: #ffe1b5;
          position: relative;
          margin: 0 40px;
          color: #ffe1b5;
        }
      }
    }
    @keyframes rotate {
      0%{ rotate: (0deg);}
      5%{ rotate: (18deg);}
      10%{ rotate: (36deg);}
      15%{ rotate: (54deg);}
      20%{ rotate: (72deg);}
      25%{ rotate: (90deg);}
      30%{ rotate: (108deg);}
      35%{ rotate: (126deg);}
      40%{ rotate: (144deg);}
      45%{ rotate: (162deg);}
      50%{ rotate: (180deg);}
      55%{ rotate: (198deg);}
      60%{ rotate: (216deg);}
      65%{ rotate: (234deg);}
      70%{ rotate: (252deg);}
      75%{ rotate: (270deg);}
      80%{ rotate: (288deg);}
      85%{ rotate: (306deg);}
      90%{ rotate: (324deg);}
      95%{ rotate: (342deg);}
      100%{ rotate: (360deg);}
    }
  }
  
</style>