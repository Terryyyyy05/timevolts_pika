<template>
    <div class="carousel">
        <ul class="imageul">
            <!-- <li><img src="@/assets/image/itin/lochNessMonster00.jpg" alt="圖片1" class="img1"></li>
            <li><img src="@/assets/image/itin/lochNessMonster02.jpg" alt="圖片2" class="img2"></li>
            <li><img src="@/assets/image/itin/lochNessMonster03.jpg" alt="圖片3" class="img3"></li>
            <li><img src="@/assets/image/itin/lochNessMonster01.jpg" alt="圖片4" class="img4"></li> -->
            <li>
                <img
                    :src="require(`@/assets/image/itin/${test}00.jpg`)"
                    alt="圖片1"
                    class="img1"
                />
            </li>
            <li>
                <img
                    :src="require(`@/assets/image/itin/${test}01.jpg`)"
                    alt="圖片2"
                    class="img2"
                />
            </li>
            <li>
                <img
                    :src="require(`@/assets/image/itin/${test}02.jpg`)"
                    alt="圖片3"
                    class="img3"
                />
            </li>
            <li>
                <img
                    :src="require(`@/assets/image/itin/${test}03.jpg`)"
                    alt="圖片4"
                    class="img4"
                />
            </li>
        </ul>
        <div class="button">
            <input
                type="button"
                id="btnLeft"
                value="<<"
                @click="carouselMoveLeft"
            />
            <input
                type="button"
                id="btnRight"
                value=">>"
                @click="carouselMoveRight"
            />
        </div>
    </div>
</template>

<script>
export default {
    components: {},
    props: {
        /* imgsrc00: {
            type: String,
        },
        imgsrc01: {
            type: String,
        },
        imgsrc02: {
            type: String,
        },
        imgsrc03: {
            type: String,
        }, */
        test: {
            type: String,
        },
    },
    data() {
        return {
            curIndex: 0,
        };
    },
    methods: {
        carouselMoveRight() {
            let ul = document.querySelector(".imageul");
            if (this.curIndex < 3) {
                this.curIndex++;
            } else {
                this.curIndex = 3;
            }
            ul.style.left = -500 * this.curIndex + "px";
            //console.log(this.curIndex);
            console.log(ul.style.left);
        },
        carouselMoveLeft() {
            let ul = document.querySelector(".imageul");
            if (this.curIndex > 0) {
                this.curIndex--;
            } else {
                this.curIndex = 0;
            }
            ul.style.left = -500 * this.curIndex + "px";
            //console.log(this.curIndex);
            console.log(ul.style.left);
        },
    },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/utils/variables";
.carousel {
    margin: 50px;
    border: 2px solid map-get($color, "primary");
    width: 500px;
    height: 450px;
    position: relative;
    overflow: hidden;
}
img {
    width: 500px;
    height: 400px;
}
.imageul {
    position: absolute;
    left: 0px;
    width: 1600px;
    display: flex;
}
li {
    list-style: none;
}
.button {
    position: absolute;
    bottom: 0;
    transform: translateX(50%);
    width: 50%;
    padding: 15px 0;
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
}
</style>
