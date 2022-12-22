<template lang="">
    <div class="wrap">
        <h3 class="title">訂單明細</h3>
        <div class="imgBlock"></div>
        <div class="infoBlock">
            <h3 class="infoBlockTitle">訂單編號:{{ itineray_order_id }}</h3>
            <div class="infoOutterWrap">
                <div class="infoWrap">
                    <label class="label" for=""
                        >姓名:<input type="text"
                    /></label>
                    <label class="label" for=""
                        >電話:<input type="text"
                    /></label>
                    <label class="label" for=""
                        >e-mail:<input type="text"
                    /></label>
                    <label class="label" for=""
                        >行程單價:<input type="text"
                    /></label>
                    <label class="label" for=""
                        >參加人數:<input type="text"
                    /></label>
                </div>
                <div class="priceWrap">
                    <label class="label" for=""
                        >原始費用:<input type="text"
                    /></label>
                    <label class="label" for=""
                        >會員價格:<input type="text"
                    /></label>
                    <span></span>
                    <label class="label" for=""
                        >實付金額:<input type="text"
                    /></label>
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
    width: 500px;
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
.infoBlock,
.infoWrap,
.priceWrap {
    display: flex;
    flex-direction: column;
}
.infoBlockTitle {
    color: #fff;
    font-size: 20px;
}
.label {
    width: 15%;
}
.label > input {
    width: 35%;
}
</style>
