<template>
    <div v-for="order in orderList" :key="order.id" class="wrap">
        <div class="id">{{ order.id }}</div>
        <div class="itineraryName">{{ order.itineraryName }}</div>
        <div class="date">{{ order.date }}</div>
        <div class="start">{{ order.start }}</div>
        <div class="end">{{ order.end }}</div>
        <div class="price">{{ order.price }}</div>
        <div class="status">{{ order.status }}</div>
        <div class="btnWrap">
            <button class="btn-lightbox btn" @click="changeDisplay">
                查看訂單
            </button>
        </div>
    </div>
</template>
<script>
export default {
    name: "itineraryOrderInfo",
    emits: ["clickOpenModal"],

    data() {
        return {
            informationVisibile: 10,
            orderList: [
                {
                    id: 1,
                    itineraryName: "十字軍東征",
                    date: "2022/12/30",
                    start: "2022/1/1",
                    end: "2022/1/5",
                    price: 100000,
                    status: "訂單成立",
                },
                {
                    id: 2,
                    itineraryName: "十字軍東征",
                    date: "2022/12/30",
                    start: "2022/1/1",
                    end: "2022/1/5",
                    price: 100000,
                    status: "訂單成立",
                },
                {
                    id: 3,
                    itineraryName: "十字軍東征",
                    date: "2022/12/30",
                    start: "2022/1/1",
                    end: "2022/1/5",
                    price: 100000,
                    status: "訂單成立",
                },
                {
                    id: 4,
                    itineraryName: "十字軍東征",
                    date: "2022/12/30",
                    start: "2022/1/1",
                    end: "2022/1/5",
                    price: 100000,
                    status: "訂單成立",
                },
                {
                    id: 5,
                    itineraryName: "十字軍東征",
                    date: "2022/12/30",
                    start: "2022/1/1",
                    end: "2022/1/5",
                    price: 100000,
                    status: "訂單成立",
                },
                {
                    id: 6,
                    itineraryName: "十字軍東征",
                    date: "2022/12/30",
                    start: "2022/1/1",
                    end: "2022/1/5",
                    price: 100000,
                    status: "訂單成立",
                },
                {
                    id: 7,
                    itineraryName: "十字軍東征",
                    date: "2022/12/30",
                    start: "2022/1/1",
                    end: "2022/1/5",
                    price: 100000,
                    status: "訂單成立",
                },
                {
                    id: 8,
                    itineraryName: "十字軍東征",
                    date: "2022/12/30",
                    start: "2022/1/1",
                    end: "2022/1/5",
                    price: 100000,
                    status: "訂單成立",
                },
                {
                    id: 9,
                    itineraryName: "十字軍東征",
                    date: "2022/12/30",
                    start: "2022/1/1",
                    end: "2022/1/5",
                    price: 100000,
                    status: "訂單成立",
                },
                {
                    id: 10,
                    itineraryName: "十字軍東征",
                    date: "2022/12/30",
                    start: "2022/1/1",
                    end: "2022/1/5",
                    price: 100000,
                    status: "訂單成立",
                },
                {
                    id: 11,
                    itineraryName: "十字軍東征",
                    date: "2022/12/30",
                    start: "2022/1/1",
                    end: "2022/1/5",
                    price: 100000,
                    status: "訂單成立",
                },
            ],
        };
    },
    computed: {
        orderList() {
            return this.orderList.slice(0, this.informationVisibile);
        },
    },
    methods: {
        changeDisplay() {
            this.$emit("clickOpenModal");
        },
    },
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/utils/variables";
.wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    padding: 5px;
    text-align: center;
    border-bottom: 1px dashed map-get($color, primary);
}
.id {
    width: 12.5%;
}
.itineraryName {
    width: 12.5%;
}
.date {
    width: 12.5%;
}
.start {
    width: 12.5%;
}
.end {
    width: 12.5%;
}
.price {
    width: 12.5%;
}
.status {
    width: 12.5%;
}
.btnWrap {
    width: 12.5%;
}
.btn {
    width: 100%;
    margin: 0;
    padding: 0;
}
</style>
