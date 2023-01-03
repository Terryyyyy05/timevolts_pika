<template>
  <div class="grid">
    <main>
      <div
        class="largeImg"
        :style="{ backgroundImage: 'url(' + pics[pos] + ')' }"
      >
        <p class="largeText">{{ itineraryClassic[pos] }}</p>
      </div>
    </main>
    <article class="wheel-wr">
      <div class="prev">
        <button @click="prevSlide"></button>
      </div>

      <div class="scene">
        <div class="carousel">
          <div
            class="face"
            :style="{
              backgroundImage: 'url(' + pics[0] + ')',
            }"
          ></div>
          <div
            class="face"
            :style="{
              backgroundImage: 'url(' + pics[1] + ')',
            }"
          ></div>
          <div
            class="face"
            :style="{
              backgroundImage: 'url(' + pics[2] + ')',
            }"
          ></div>
          <div
            class="face"
            :style="{
              backgroundImage: 'url(' + pics[3] + ')',
            }"
          ></div>
        </div>
      </div>
      <div class="next">
        <button @click="nextSlide"></button>
      </div>
    </article>
  </div>
</template>

<script>
import imgItinPrehistoric from "@/assets/image/itinPrehistoric.jpg";
import imgItinEgypt from "@/assets/image/itinEgypt.jpg";
import imgItinWar from "@/assets/image/itinWar.jpg";
import imgItinColombia from "@/assets/image/itinColombia.jpeg";
export default {
  data() {
    return {
      pics: [imgItinPrehistoric, imgItinEgypt, imgItinWar, imgItinColombia],
      itineraryClassic: ["史前時代", "埃及", "赤壁之戰", "哥倫布發現新大陸"],
      pos: 0,
      carPos: 0,
      slides: 4,
    };
  },
  methods: {
    rotateCarousel: function () {
      let angle = (this.carPos / this.slides) * -360;
      const ctr = document.querySelector(".carousel");
      if (window.matchMedia("(max-width: 800px)").matches) {
        ctr.style.transform =
          "rotate(90deg)translateZ(-105px) rotateY(" + angle + "deg)";
      } else {
        ctr.style.transform =
          "rotate(0deg)translateZ(-105px) rotateY(" + angle + "deg)";
      }
    },
    prevSlide: function () {
      this.carPos--;
      this.rotateCarousel();
      const largeImg = document.querySelector(".largeImg");
      largeImg.classList.add("switching-prev");
      largeImg.addEventListener("animationend", () => {
        largeImg.classList.remove("switching-prev");
      });
      setTimeout(() => {
        if (this.pos - 1 < 0) {
          this.pos = 3;
        } else {
          this.pos--;
        }
      }, 1000);
    },
    nextSlide: function () {
      this.carPos++;
      this.rotateCarousel();
      const largeImg = document.querySelector(".largeImg");
      largeImg.classList.add("switching-next");
      largeImg.addEventListener("animationend", () => {
        largeImg.classList.remove("switching-next");
      });
      setTimeout(() => {
        if (this.pos + 1 > 3) {
          this.pos = 0;
        } else {
          this.pos++;
        }
      }, 1000);
    },
  },
};
</script>

<style lang="scss" scoped>
button {
  border: none;
  cursor: pointer;
  background: #493a24;
  width: 100%;
  height: 100%;
}
.grid {
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: calc(100% - 300px) 300px;
  grid-template-rows: 100%;
  background: #131313;
  main {
    grid-column: 0/1;
    grid-row: 1;
    display: flex;
    filter: drop-shadow(0px 0px 2px #e0d040) drop-shadow(2px 2px 1px #e0d040)
      drop-shadow(-2px -2px 1px #e0d040);
    .largeImg {
      margin: auto;
      width: 75%;
      height: 75%;
      background-size: cover;
      background-position: center;
      position: relative;
      border-radius: 5px;
      @keyframes trans {
        0% {
          background: transparent;
        }
        30% {
          background: white;
        }
        70% {
          background: white;
        }
        100% {
          background: transparent;
        }
      }
      @keyframes leaving {
        0% {
          clip-path: polygon(
            0 100%,
            0 0,
            14.29% 0,
            14.29% 0,
            28.58% 0,
            28.58% 0,
            42.87% 0,
            42.87% 0,
            57.16% 0,
            57.16% 0,
            71.45% 0,
            71.45% 0,
            85.74% 0,
            85.74% 0,
            100% 0,
            100% 100%,
            0 100%
          );
        }
        25% {
          clip-path: polygon(
            0 100%,
            0 75%,
            14.29% 75%,
            14.29% 55%,
            28.58% 55%,
            28.58% 25%,
            42.87% 25%,
            42.87% 0,
            57.16% 0,
            57.16% 25%,
            71.45% 25%,
            71.45% 55%,
            85.74% 55%,
            85.74% 75%,
            100% 75%,
            100% 100%,
            0 100%
          );
        }
        50% {
          clip-path: polygon(
            0 100%,
            0 100%,
            14.29% 100%,
            14.29% 100%,
            28.58% 100%,
            28.58% 100%,
            42.87% 100%,
            42.87% 100%,
            57.16% 100%,
            57.16% 100%,
            71.45% 100%,
            71.45% 100%,
            85.74% 100%,
            85.74% 100%,
            100% 100%,
            100% 100%,
            0 100%
          );
        }
        51% {
          clip-path: polygon(
            0 0,
            0 0,
            100% 0,
            100% 0,
            85.74% 0,
            85.74% 0,
            71.45% 0,
            71.45% 0,
            57.16% 0,
            57.16% 0,
            42.87% 0,
            42.87% 0,
            28.58% 0,
            28.58% 0,
            14.29% 0,
            14.29% 0,
            0 0
          );
        }
        76% {
          clip-path: polygon(
            0 25%,
            0 0,
            100% 0,
            100% 25%,
            85.74% 25%,
            85.74% 45%,
            71.45% 45%,
            71.45% 75%,
            57.16% 75%,
            57.16% 100%,
            42.87% 100%,
            42.87% 75%,
            28.58% 75%,
            28.58% 45%,
            14.29% 45%,
            14.29% 25%,
            0 25%
          );
        }
        100% {
          clip-path: polygon(
            0 100%,
            0 0,
            100% 0,
            100% 100%,
            85.74% 100%,
            85.74% 100%,
            71.45% 100%,
            71.45% 100%,
            57.16% 100%,
            57.16% 100%,
            42.87% 100%,
            42.87% 100%,
            28.58% 100%,
            28.58% 100%,
            14.29% 100%,
            14.29% 100%,
            0 100%
          );
        }
      }

      &::after {
        width: 100%;
        height: 100%;
        background: transparent;
        content: "";
        position: absolute;
        transition: all 0.25s linear;
      }
      &.switching-prev {
        animation: leaving 2s ease-in-out forwards;
        &::after {
          animation: trans 2s ease-in-out forwards;
        }
      }
      &.switching-next {
        animation: leaving 1.5s ease-in-out reverse forwards;
        &::after {
          animation: trans 1.5s ease-in-out forwards;
        }
      }
    }
    .largeText {
      color: rgb(255, 255, 255);
      text-align: center;
      font-size: 28px;
      text-shadow: 4px 4px 3px #493a24;
      padding: 10px;
    }
  }
  .wheel-wr {
    grid-column: 2/3;
    grid-row: 1;
    display: flex;
    flex-wrap: wrap;
    padding-top: 30px;
    padding-bottom: 30px;
    justify-content: center;
    .prev,
    .next {
      width: 90px;
      height: 150px;
      filter: drop-shadow(0 0 1px #fec570) drop-shadow(1px 1px 1px #fec570)
        drop-shadow(-1px -1px 1px #fec570);
    }
    .prev {
      align-self: flex-start;
      button {
        clip-path: polygon(
          25% 100%,
          25% 45%,
          3% 45%,
          0 35%,
          45% 0,
          55% 0,
          100% 35%,
          97% 45%,
          75% 45%,
          75% 100%,
          25% 100%
        );
      }
    }
    .next {
      align-self: flex-end;
      button {
        clip-path: polygon(
          25% 0,
          25% 55%,
          3% 55%,
          0 65%,
          45% 100%,
          55% 100%,
          100% 65%,
          97% 55%,
          75% 55%,
          75% 0,
          25% 0
        );
      }
    }
    .scene {
      z-index: 1;
      width: 220px;
      height: 200px;
      align-self: center;
      position: relative;
      top: 0;
      left: 0;
      perspective: 3000px;

      .carousel {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0px;
        transform: rotate(0deg) translateZ(-105px);
        transform-style: preserve-3d;
        transition: transform 1.5s ease-in-out;
        .face {
          position: absolute;
          width: 210px;
          height: 100%;
          top: 0;
          left: 0;
          background-size: cover;
          background-position: center;
          border: 2px solid #e0d040;
          border-radius: 5px;
          box-shadow: 0 0 1px #ffe1b5, 1px 1px 2px #ffe1b5,
            -1px -1px 2px #ffe1b5;
          &:nth-of-type(1) {
            transform: rotate(0deg) translateZ(105px);
          }
          &:nth-of-type(2) {
            transform: rotateY(90deg) rotate(0deg) translateZ(105px);
          }
          &:nth-of-type(3) {
            transform: rotateY(180deg) rotate(0deg) translateZ(105px);
          }
          &:nth-of-type(4) {
            transform: rotateY(270deg) rotate(0deg) translateZ(105px);
          }
        }
      }
    }
  }
}
@media (max-width: 800px) {
  .grid {
    grid-template-columns: 100%;
    grid-template-rows: calc(100% - 220px) 220px;
    main {
      grid-column: 1;
      grid-row: 0/1;
    }
    .wheel-wr {
      grid-column: 1;
      grid-row: 2/3;
      display: flex;
      padding-top: 30px;
      padding-bottom: 30px;
      justify-content: space-evenly;
      align-items: center;
      .prev,
      .next {
        align-self: center;
        transform: rotate(-90deg);
      }
      .prev {
        button {
          clip-path: polygon(
            25% 100%,
            25% 45%,
            3% 45%,
            0 35%,
            45% 0,
            55% 0,
            100% 35%,
            97% 45%,
            75% 45%,
            75% 100%,
            25% 100%
          );
        }
      }
      .next {
        button {
          clip-path: polygon(
            25% 0,
            25% 55%,
            3% 55%,
            0 65%,
            45% 100%,
            55% 100%,
            100% 65%,
            97% 55%,
            75% 55%,
            75% 0,
            25% 0
          );
        }
      }
      .scene {
        width: 220px;
        height: 200px;
        perspective: 3000px;
        top: 40%;
        left: 0.5%;
        .carousel {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          transform: rotate(90deg) translateZ(-190px);
          transform-style: preserve-3d;
          transition: transform 2s ease-in-out;
          .face {
            position: absolute;
            width: 210px;
            height: 100%;
            top: 0;
            left: 5px;
            background-size: cover;
            background-position: center;
            opacity: 1;
            &:nth-of-type(1) {
              transform: rotate(-90deg) translateZ(190px);
            }
            &:nth-of-type(2) {
              transform: rotateY(60deg) rotate(-90deg) translateZ(190px);
            }
            &:nth-of-type(3) {
              transform: rotateY(120deg) rotate(-90deg) translateZ(190px);
            }
            &:nth-of-type(4) {
              transform: rotateY(180deg) rotate(-90deg) translateZ(190px);
            }
            &:nth-of-type(5) {
              transform: rotateY(240deg) rotate(-90deg) translateZ(190px);
            }
            &:nth-of-type(6) {
              transform: rotateY(300deg) rotate(-90deg) translateZ(190px);
            }
          }
        }
      }
    }
  }
}
body {
  height: 100vh;
  overflow: hidden;
}
</style>
