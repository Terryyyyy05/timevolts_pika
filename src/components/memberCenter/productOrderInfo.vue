<template>
  <div v-for="order in orderList" :key="order.id" class="wrap">
    <div class="id">{{ order.id }}</div>
    <div class="productName">{{ order.productName }}</div>
    <div class="date">{{ order.date }}</div>
    <div class="price">{{ order.price }}</div>
    <div class="status">{{ order.status }}</div>
    <div class="btnWrap">
      <button class="btn-lightbox btn">查看訂單</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "productOrderInfo",
  data() {
    return {
      informationVisibile: 10,
      orderList: [
        {
          id: 1,
          productName: "寫扣機器人",
          date: "2022/12/30",
          price: 100000,
          status: "訂單成立",
        },
        {
          id: 2,
          productName: "寫扣機器人",
          date: "2022/12/30",
          price: 100000,
          status: "訂單成立",
        },
        {
          id: 3,
          productName: "寫扣機器人",
          date: "2022/12/30",
          price: 100000,
          status: "訂單成立",
        },
        {
          id: 4,
          productName: "寫扣機器人",
          date: "2022/12/30",
          price: 100000,
          status: "訂單成立",
        },
        {
          id: 5,
          productName: "寫扣機器人",
          date: "2022/12/30",
          price: 100000,
          status: "訂單成立",
        },
        {
          id: 6,
          productName: "寫扣機器人",
          date: "2022/12/30",
          price: 100000,
          status: "訂單成立",
        },
        {
          id: 7,
          productName: "寫扣機器人",
          date: "2022/12/30",
          price: 100000,
          status: "訂單成立",
        },
        {
          id: 8,
          productName: "寫扣機器人",
          date: "2022/12/30",
          price: 100000,
          status: "訂單成立",
        },
        {
          id: 9,
          productName: "寫扣機器人",
          date: "2022/12/30",
          price: 100000,
          status: "訂單成立",
        },
        {
          id: 10,
          productName: "寫扣機器人",
          date: "2022/12/30",
          price: 100000,
          status: "訂單成立",
        },
        {
          id: 11,
          productName: "寫扣機器人",
          date: "2022/12/30",
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
};
</script>
<style lang="scss" scoped>
@import '@/assets/css/utils/variables';
.wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #fff;
  padding: 5px;
  border-bottom: 1px dashed map-get($color, primary);
}
.id {
  width: 16.666666%;
}
.productName {
  width: 16.666666%;
}
.date {
  width: 16.666666%;
}
.price {
  width: 16.666666%;
}
.status {
  width: 16.666666%;
}
.btnWrap {
  width: 16.666666%;
}
.btn {
  width: 100%;
  margin: 0;
  padding: 0;
}
</style>
