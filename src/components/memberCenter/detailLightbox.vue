<template>
    <div class="wrap">
        <h3 class="title">訂單明細</h3>
        <div class="imgBlock"></div>
        <div class="infoBlock">
            <h3 class="infoBlockTitle">訂單編號:{{ itineray_order_id }}</h3>
            <div class="infoOutterWrap">
                <div class="infoWrap">
                    <div>
                        <label class="label">姓名:</label>
                        <input class="input" type="text" />
                    </div>
                    <div>
                        <label class="label">電話:</label>
                        <input class="input" type="text" />
                    </div>
                    <div>
                        <label class="label">e-mail:</label>
                        <input class="input" type="text" />
                    </div>
                    <div>
                        <label class="label">行程單價:</label>
                        <input class="input" type="text" />
                    </div>
                    <div>
                        <label class="label">參加人數:</label>
                        <input class="input" type="text" />
                    </div>
                </div>
                <div class="priceWrap">
                    <div>
                        <label class="label">原始費用:</label>
                        <input class="input" type="text" />
                    </div>
                    <div>
                        <label class="label">會員價格:</label>
                        <input class="input" type="text" />
                    </div>
                    <span></span>
                    <div>
                        <label class="label">實付金額:</label>
                        <input class="input" type="text" />
                    </div>
                </div>
            </div>
        </div>
        <div class="participantBlock"></div>
    </div>
</template>
<script>
export default {
    name: "detailLightbox",
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/utils/variables";

.wrap {
    width: 700px;
    border: 2px solid map-get($color, "primary");
    background-color: map-get($color, "dark_sub");
    display: flex;
    flex-direction: column;
    align-content: center;
}
.title {
    color: #fff;
    font-size: 20px;
    margin: auto;
    text-align: center;
}
.imgBlock {
    width: 100%;
    height: 300px;
}
.infoOutterWrap {
    display: flex;
}
.infoWrap {
    display: flex;
    flex-direction: column;
    width: 50%;
}
.infoWrap > div {
    display: flex;
    justify-content: space-between;
    padding: 0 10px;
    height: 50px;
}
.label {
    align-self: center;
    // line-height: 2;
    
}
.input {
    width: 70%;
    height: 20px;
    align-self: center;
}
.infoBlock,
.priceWrap {
    display: flex;
    flex-direction: column;
}
.infoBlockTitle {
    color: #fff;
    font-size: 20px;
}
.label {
    display: flex;
    justify-content: space-between;
    color: #fff;
    height: 30px;
}
.label > input {
    margin-left: 0;
}
</style>
