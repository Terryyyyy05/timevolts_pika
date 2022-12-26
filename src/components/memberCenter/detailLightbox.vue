<template>
    <div class="wrap">
        

        <h3 class="title">訂單明細</h3>
        <div class="imgBlock"></div>
        <div class="infoBlock">
            <div>
                <h3 class="infoBlockTitle">訂單編號:{{ itineray_order_id }}</h3>
            </div>
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
                        <label class="label">會員優惠:</label>
                        <input class="input" type="text" />
                    </div>
                    <div>
                        <span class="hrSpan"></span>
                    </div>
                    <div>
                        <label class="label">實付金額:</label>
                        <input class="input" type="text" />
                    </div>
                </div>
            </div>
        </div>
        <div class="participantBlock">
            <div>
                <h3 class="infoBlockTitle">參加者資訊</h3>
            </div>
            <div class="wrap">
                <ul class="ulWrap">
                    <li>姓名</li>
                    <li>e-mail</li>
                    <li>生日</li>
                    <li>手機</li>
                    <li>地址</li>
                </ul>
                <participants-info />
            </div>
        </div>
    </div>
</template>
<script>
import participantsInfo from "@/components/memberCenter/participantsInfo.vue";
export default {
    name: "detailLightbox",
    components: {
        participantsInfo,
    },
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
.infoWrap,
.priceWrap {
    display: flex;
    flex-direction: column;
    width: 50%;
    margin: 30px 5px 30px 5px;
}

.infoWrap > div,
.priceWrap > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    height: 50px;
    margin: 5px 0 5px 0;
}
.label {
    align-items: center;
    height: 30px;
}
.input {
    width: 70%;
    height: 20px;
    align-items: center;
}
.hrSpan {
    border-bottom: 3px solid map-get($color, primary);
    width: 100%;
    height: 5px;
    color: #fff;
    align-self: center;
}
.infoBlock,
.participantBlock {
    display: flex;
    flex-direction: column;
    border-top: 3px solid map-get($color, primary);
}
.infoBlockTitle {
    color: #fff;
    font-size: 28px;
    padding: 10px;
    border: 3px solid map-get($color, primary);
    display: inline-block;
    vertical-align: top;
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
.wrap {
    width: 100%;
    padding: 5px;
    box-sizing: border-box;
}
.ulWrap {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 0;
    text-align: center;
    border-bottom: 2px solid map-get($color, primary);
}
.ulWrap > li {
    color: #fff;
    font-size: 20px;
    width: 20%;
}
</style>
