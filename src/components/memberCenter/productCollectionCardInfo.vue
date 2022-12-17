<template>
    <product-collection-card
        v-for="info in visibleInformation"
        :key="info.title"
    >
        <div class="wrap">
            <div class="imgblock">
                <img :src="info.imgsrc" :alt="info.imgalt" />
            </div>
            <h3>{{ info.title }}</h3>
            <div class="p_md price">${{ info.price }}</div>
        </div>
    </product-collection-card>
</template>
<script>
import productCollectionCard from "@/components/memberCenter/productCollectionCard.vue";
export default {
    name: "productCollectionCardInfo",
    components: {
        productCollectionCard,
    },
    data() {
        return {
            information: [
                {
                    imgsrc: require("@/assets/image/product/product_1.png"),
                    imgalt: "經典行程-史前時代",
                    title: "打扣機器人",
                    price: " 1000",
                },
                {
                    imgsrc: require("@/assets/image/product/product_1.png"),
                    imgalt: "經典行程-埃及",
                    title: "打扣機器人",
                    price: " 1000",
                },
                {
                    imgsrc: require("@/assets/image/product/product_1.png"),
                    imgalt: "經典行程-赤壁之戰",
                    title: "打扣機器人",
                    price: " 1000",
                },
                {
                    imgsrc: require("@/assets/image/product/product_1.png"),
                    imgalt: "經典行程-赤壁之戰",
                    title: "打扣機器人",
                    price: " 1000",
                },
                {
                    imgsrc: require("@/assets/image/product/product_1.png"),
                    imgalt: "經典行程-赤壁之戰",
                    title: "打扣機器人",
                    price: " 1000",
                },
            ],
            informationVisible: 4,
        };
    },
    computed: {
        visibleInformation() {
            return this.information.slice(0, this.informationVisible);
        },
    },
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/utils/variables";
@import "@/assets/css/layout/rwd.scss";
h3 {
    color: #fff;
    text-align: center;
    width: 100%;
    font-size: 28px;
    margin: 3px;
    padding: 3px;
    height: 50px;
}
.wrap {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
}
.imgblock {
    width: 100%;
    height: 150px;
    padding: 3px;
    margin: 3px;
    box-sizing: border-box;
}
img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.price {
    color: #fff;
    height: 20px;
    margin: 0 0 3px 0;
    padding: 3px;
    font-size: 24px;
}
</style>
