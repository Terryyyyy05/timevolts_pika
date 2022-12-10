<template>
  <cart :cartStatus="cartStatus" @xmark="() => (cartStatus = false)" />
  <header>
    <div v-if="show" class="icon-container">
      <div>
        <router-link to="/member"><img src="Group604.png" alt="" /></router-link>
      </div>
      <div @click="toggleCart"><img src="Group605.png" alt="" /></div>
    </div>

    <div class="nav">
      <div @click="shownav" class="hbicon">
        <img src="Group603.png" alt="寶貝球" />
      </div>
      <div class="vertical-nav" v-if="show">
        <div
          v-for="(item, index) in pageName"
          :key="index"
          class="link-container"
        >
          <div class="bar"></div>
          <router-link
            @mouseover="changeColor"
            @mouseleave="changeBack"
            :to="item.router"
            :data-item="index"
            >
            <p class="glitched">{{ item.ch }}</p>
            </router-link
          >
        </div>
        <div class="chatbot"><img src="Group243.png" alt="時空管理局" /></div>
      </div>
    </div>
  </header>
</template>
<script>
import Cart from "@/components/Cart.vue";

export default {
  name: "all-header",
  components: {
    Cart,
  },
  data() {
    return {
      pageName: [
        {
          router: "/news",
          ch: "最新消息",
          en: "NEWS",
        },
        {
          router: "/itinerary",
          ch: "時光行程",
          en: "ITINERARY",
        },
        {
          router: "/history",
          ch: "歷史故事",
          en: "HISTORY",
        },
        {
          router: "/product",
          ch: "購物商城",
          en: "PRODUCTS",
        },
        {
          router: "/about",
          ch: "關於我們",
          en: "ABOUT US",
        },
      ],
      cartStatus: true,
      show: false,
    };
  },
  methods: {
    changeColor(e) {
      e.target.style.transition = "all .3s";
      e.target.style.backgroundColor = "#ffe1b5";
      e.target.style.color = "#1e1e1e";

      e.target.innerText = this.pageName[e.target.dataset.item].en;
    },
    changeBack(e) {
      e.target.style.transition = "all .3s";
      e.target.style.color = "#ffe1b5";
      e.target.style.backgroundColor = "transparent";
      e.target.style.backdropFilter = "blur(5px)";
      e.target.innerText = this.pageName[e.target.dataset.item].ch;
    },
    toggleCart() {
      return (this.cartStatus = !this.cartStatus);
    },
    shownav() {
      this.show = !this.show;
    },
  },
};
</script>

<style scoped lang="scss">
header {
  display: flex;
  position: fixed;
  top: 2%;
  right: 2%;
  z-index: 101;
  pointer-events: none;
  .icon-container {
    display: flex;
    height: fit-content;
    margin-top: calc((55px - 15px) / 2);
    pointer-events: none;
    div {
      width: 15px;
      height: 15px;
      margin-right: 10px;
      pointer-events: auto;
      img{
        width: 100%;
        height: 100%;
      }
    }
    }
    div.nav{
      pointer-events: none;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .hbicon{
        pointer-events: auto;
        cursor: pointer;
        height: 55px;
        width: 55px;
        animation: rotate 1.5s infinite;
        img{
        width: 100%;
        height: 100%;
        pointer-events: auto;
      }
    }
    .vertical-nav {
      pointer-events: auto;
      .link-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        a {
          font-size: 14px;
          font-weight: bold;
          height: 54px;
          width: 54px;
          text-decoration: none;
          color: #ffe1b5;
          backdrop-filter: blur(5px);
          border: 2px solid #ffe1b5;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        div.bar {
          height: 3px;
          width: 1.5px;
          background-color: #ffe1b5;
          position: relative;
          margin: 0 20px;
          color: #ffe1b5;
        }
      }
    }
  }
  .chatbot {
    img {
      width: 100%;
      height: 100%;
    }
  }
  @keyframes rotate {
    0% {
      rotate: (0deg);
    }
    5% {
      rotate: (18deg);
    }
    10% {
      rotate: (36deg);
    }
    15% {
      rotate: (54deg);
    }
    20% {
      rotate: (72deg);
    }
    25% {
      rotate: (90deg);
    }
    30% {
      rotate: (108deg);
    }
    35% {
      rotate: (126deg);
    }
    40% {
      rotate: (144deg);
    }
    45% {
      rotate: (162deg);
    }
    50% {
      rotate: (180deg);
    }
    55% {
      rotate: (198deg);
    }
    60% {
      rotate: (216deg);
    }
    65% {
      rotate: (234deg);
    }
    70% {
      rotate: (252deg);
    }
    75% {
      rotate: (270deg);
    }
    80% {
      rotate: (288deg);
    }
    85% {
      rotate: (306deg);
    }
    90% {
      rotate: (324deg);
    }
    95% {
      rotate: (342deg);
    }
    100% {
      rotate: (360deg);
    }
  }
}
@media screen and (min-width: 768px) {
  header {
    .icon-container {
      margin-top: calc((85px - 30px) / 2);
      div {
        width: 30px;
        height: 30px;
        margin-right: 20px;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    div.nav {
      .hbicon {
        height: 85px;
        width: 85px;
      }
      .vertical-nav {
        .link-container {
          a {
            height: 80px;
            width: 80px;
          }
          div.bar {
            height: 10px;
            width: 3px;
            margin: 0 40px;
          }
        }
      }
    }
  }
}
.glitched {
  animation-name: glitched;
  animation-duration: calc(.9s * 1.4);
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}
@keyframes glitched {
    0% {left: -4px;
        transform: skew(-20deg);}

    11% {left: 2px;
        transform: skew(0deg);}

    50% {transform: skew(0deg);}

    51% {transform: skew(10deg);}

    60% {transform: skew(0deg);}

    100% {transform: skew(0deg);}
}
</style>
