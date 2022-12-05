<template>
    <div class="carousel">
        <ul class="imageul">
            <li><img src="@/assets/image/itin/lochNessMonster.jpg" alt="圖片1" class="img1"></li>
            <li><img src="@/assets/image/itin/lochNessMonster02.jpg" alt="圖片2" class="img2"></li>
            <li><img src="@/assets/image/itin/lochNessMonster03.jpg" alt="圖片3" class="img3"></li>
            <li><img src="@/assets/image/itin/lochNessMonster01.jpg" alt="圖片4" class="img4"></li>
        </ul>
        <div class="button">
            <input type="button" id="btnLeft" value="<<"  @click="carouselMoveLeft">
            <input type="button" id="btnRight" value=">>" @click="carouselMoveRight">
        </div>
    </div>
</template>

<script>
// import "@/components/itineraryPeriod/JS/itinerary";

export default {
    components:{
        
    },
    data(){
        return{
            curIndex: 0
        }
    },
    methods:{
        carouselMoveRight (){
            
            let ul = document.querySelector(".imageul");
            let btnRight = document.querySelector("#btnRight");
            if(this.curIndex<3){
                this.curIndex++;
            }else{
                this.curIndex = 3;
            }
            ul.style.left = -400*this.curIndex + "px";
            //console.log(this.curIndex);
            console.log(ul.style.left);
        },
        carouselMoveLeft (){
            
            let ul = document.querySelector(".imageul");
            let btnLeft = document.querySelector("#btnRight");
            if(this.curIndex>0){
                this.curIndex--;
            }else{
                this.curIndex = 0;
            }
            ul.style.left = -400*this.curIndex + "px";
            //console.log(this.curIndex);
            console.log(ul.style.left);
        }
        
    },
    
}

</script>

<style lang="scss" scoped>
@import "@/assets/css/utils/variables";
.carousel{
    margin: 50px;
    outline: 3px solid red;
    width: 400px;
    height: 450px;
    position: relative;
    // overflow: hidden;
}
img{
    width: 400px;
    height: 400px;
}
.imageul{
    position: absolute;
    left: 0px;
    width: 1600px;
    display: flex;
}
li{
    list-style: none;
}
.button{
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