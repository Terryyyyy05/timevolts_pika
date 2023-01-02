<template>
    <div v-for="(order, index) in orderData" :key="order.id" class="wrap">
        <div class="id">{{ order.order_id }}</div>
        <div class="itineraryName">{{ order.itinerary_name }}</div>
        <div class="date">{{ order.order_date }}</div>
        <div class="start">{{ order.start }}</div>
        <div class="end">{{ order.end }}</div>
        <div class="price">{{ order.total }}</div>
        <div class="status">{{ order.status }}</div>
        <div class="btnWrap">
            <button class="btn-lightbox btn" @click="changeDisplay">
                查看訂單
            </button>
        </div>
    </div>
</template>
<script>
import { BASE_URL } from "@/assets/js/commom";

export default {
    
    name: "itineraryOrderInfo",
    emits: ["clickOpenModal"],

    data() {
        return {
            informationVisibile: 10,
            orderData: [],
            // 這邊也要getData
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
                // {
                //     id: 2,
                //     itineraryName: "十字軍東征",
                //     date: "2022/12/30",
                //     start: "2022/1/1",
                //     end: "2022/1/5",
                //     price: 100000,
                //     status: "訂單成立",
                // },
                // {
                //     id: 3,
                //     itineraryName: "十字軍東征",
                //     date: "2022/12/30",
                //     start: "2022/1/1",
                //     end: "2022/1/5",
                //     price: 100000,
                //     status: "訂單成立",
                // },
                // {
                //     id: 4,
                //     itineraryName: "十字軍東征",
                //     date: "2022/12/30",
                //     start: "2022/1/1",
                //     end: "2022/1/5",
                //     price: 100000,
                //     status: "訂單成立",
                // },
                // {
                //     id: 5,
                //     itineraryName: "十字軍東征",
                //     date: "2022/12/30",
                //     start: "2022/1/1",
                //     end: "2022/1/5",
                //     price: 100000,
                //     status: "訂單成立",
                // },
                // {
                //     id: 6,
                //     itineraryName: "十字軍東征",
                //     date: "2022/12/30",
                //     start: "2022/1/1",
                //     end: "2022/1/5",
                //     price: 100000,
                //     status: "訂單成立",
                // },
                // {
                //     id: 7,
                //     itineraryName: "十字軍東征",
                //     date: "2022/12/30",
                //     start: "2022/1/1",
                //     end: "2022/1/5",
                //     price: 100000,
                //     status: "訂單成立",
                // },
                // {
                //     id: 8,
                //     itineraryName: "十字軍東征",
                //     date: "2022/12/30",
                //     start: "2022/1/1",
                //     end: "2022/1/5",
                //     price: 100000,
                //     status: "訂單成立",
                // },
                // {
                //     id: 9,
                //     itineraryName: "十字軍東征",
                //     date: "2022/12/30",
                //     start: "2022/1/1",
                //     end: "2022/1/5",
                //     price: 100000,
                //     status: "訂單成立",
                // },
                // {
                //     id: 10,
                //     itineraryName: "十字軍東征",
                //     date: "2022/12/30",
                //     start: "2022/1/1",
                //     end: "2022/1/5",
                //     price: 100000,
                //     status: "訂單成立",
                // },
                // {
                //     id: 11,
                //     itineraryName: "十字軍東征",
                //     date: "2022/12/30",
                //     start: "2022/1/1",
                //     end: "2022/1/5",
                //     price: 100000,
                //     status: "訂單成立",
                // },
            ],
        };
    },
    computed: {
        orderList() {
            return this.orderList.slice(0, this.informationVisibile);
        },
    },
    methods: {
        async getData() {
            await this.$store.dispatch("getUserId");
            this.userId = this.$store.getters["userId"];
            // alert(this.userId);

            if (this.userId) {
                fetch(`${BASE_URL}/getMemberInfo.php`, {
                    method: "POST",
                    body: JSON.stringify({
                        userId: this.userId,
                    }),
                })
                    .then((res) => res.json())
                    .then((json) => {
                        console.log(json);

                        this.result = json;

                        this.formInput[0].value = json[0].mem_name;
                        this.formInput[1].value = json[0].mem_bday;
                        this.formInput[2].value = json[0].mem_phone;
                        this.formInput[3].value = json[0].mem_address;
                        this.formInput[4].value = json[0].mem_email;
                        this.memLevel = json[0].mem_level;
                    })
                    .then(
                        fetch(`${BASE_URL}/getItineraryOrder.php`)
                            .then((res) => res.json())
                            .then((data) => {
                                // this.data = data;

                                // console.log(this.data[0].itinerary_order_id);
                                const itineraryOrders = [];
                                for (const key in data) {
                                    const itineraryOrder = {
                                        order_id: data[key].itinerary_order_id,
                                        itinerary_name:
                                            data[key].itinerary_name,
                                        order_date:
                                            data[key].itinerary_order_date,
                                        start: data[key].itinerary_start_date,
                                        end: data[key].itinerary_end_date,
                                        total: data[key].itinerary_order_total,
                                        status: data[key]
                                            .itinerary_order_status,
                                    };
                                    itineraryOrders.push(itineraryOrder);
                                }
                                this.orderData = itineraryOrders;
                                console.log(this.orderData);
                            })
                    );
            }
        },
        changeDisplay() {
            this.$emit("clickOpenModal");
        },
    },
    mounted() {
        this.getData();
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
