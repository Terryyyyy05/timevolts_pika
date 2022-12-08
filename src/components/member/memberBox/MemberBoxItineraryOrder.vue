<template>
  <div class="member-box">
    <div class="member-box-upper">
      <div class="member-box-img">
        <img
          src="../../../assets/image/member/member-box-corner.png"
          alt="member-box-corner"
        />
      </div>
      <div class="right-angle">&gt;&gt;&gt;&gt;&gt;&gt;&gt;</div>
      <div class="member-data">
        <span>行程訂單</span>
      </div>
      <div class="left-angle">&lt;&lt;&lt;&lt;&lt;&lt;&lt;</div>
      <div class="member-box-img">
        <img
          src="../../../assets/image/member/member-box-corner.png"
          alt="member-box-corner"
        />
      </div>
    </div>
    <table>
      <thead>
        <tr>
          <th>訂單編號</th>
          <th>行程名稱</th>
          <th>訂單日期</th>
          <th>出發日期</th>
          <th>結束日期</th>
          <th>金額</th>
          <th>訂單狀態</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="order in orderList" :key="order.id">
          <td>{{order.id}}</td>
          <td>{{order.itineraryName}}</td>
          <td>{{order.date}}</td>
          <td>{{order.start}}</td>
          <td>{{order.end}}</td>
          <td>{{order.price}}</td>
          <td>{{order.status}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "MemberBoxItineraryOrder",
  data(){
    return{
      informationVisibile: 10,
      orderList:[{
        id: 1,
        itineraryName: '十字軍東征',
        date: '2022/12/30',
        start: '2022/1/1',
        end: '2022/1/5',
        price: 100000,
        status: '訂單成立',
      },
      {
        id: 2,
        itineraryName: '十字軍東征',
        date: '2022/12/30',
        start: '2022/1/1',
        end: '2022/1/5',
        price: 100000,
        status: '訂單成立',
      },
      {
        id: 3,
        itineraryName: '十字軍東征',
        date: '2022/12/30',
        start: '2022/1/1',
        end: '2022/1/5',
        price: 100000,
        status: '訂單成立',
      },
      {
        id: 4,
        itineraryName: '十字軍東征',
        date: '2022/12/30',
        start: '2022/1/1',
        end: '2022/1/5',
        price: 100000,
        status: '訂單成立',
      },
      {
        id: 5,
        itineraryName: '十字軍東征',
        date: '2022/12/30',
        start: '2022/1/1',
        end: '2022/1/5',
        price: 100000,
        status: '訂單成立',
      },
      {
        id: 6,
        itineraryName: '十字軍東征',
        date: '2022/12/30',
        start: '2022/1/1',
        end: '2022/1/5',
        price: 100000,
        status: '訂單成立',
      },
      {
        id: 7,
        itineraryName: '十字軍東征',
        date: '2022/12/30',
        start: '2022/1/1',
        end: '2022/1/5',
        price: 100000,
        status: '訂單成立',
      },
      {
        id: 8,
        itineraryName: '十字軍東征',
        date: '2022/12/30',
        start: '2022/1/1',
        end: '2022/1/5',
        price: 100000,
        status: '訂單成立',
      },
      {
        id: 9,
        itineraryName: '十字軍東征',
        date: '2022/12/30',
        start: '2022/1/1',
        end: '2022/1/5',
        price: 100000,
        status: '訂單成立',
      },
      {
        id: 10,
        itineraryName: '十字軍東征',
        date: '2022/12/30',
        start: '2022/1/1',
        end: '2022/1/5',
        price: 100000,
        status: '訂單成立',
      },
      {
        id: 11,
        itineraryName: '十字軍東征',
        date: '2022/12/30',
        start: '2022/1/1',
        end: '2022/1/5',
        price: 100000,
        status: '訂單成立',
      }
      ]
    }
  },
  computed:{
    orderList(){
      return this.orderList.slice(0, this.informationVisibile);
  }
  }
};
</script>

<style lang="scss" scoped>
table {
  color: #e6dfc7;

}
.member-box {
  position: relative;
  border: 2px solid #e6dfc7;
  width: 50%;
  height: 60vh;
  margin: 50px auto 100px;
  left: 5%;

}
.member-box-upper {
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid #e6dfc7;
}
.member-box-img {
  padding: 10px;
  border-right: 2px solid #e6dfc7;
  border-bottom: 2px solid #e6dfc7;
}
.member-box-img img {
  height: 20px;
  vertical-align: top;
}
.right-angle,
.member-data,
.left-angle {
  display: flex;
  align-items: center;
}
.right-angle,
.left-angle {
  color: #fec570;
}
.member-box-img:last-child {
  border-right: initial;
  border-left: 2px solid #e6dfc7;
}
.member-data {
  color: #313131;
}
.member-data span {
  background-color: #e6dfc7;
  padding: 5px 20px;
}
</style>
