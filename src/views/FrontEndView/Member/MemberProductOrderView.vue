<template>
  <all-header />
  <innerpageHeader></innerpageHeader>
  <div class="container">
    <the-heading heading="會員中心" subheading="Member"></the-heading>
  </div>
    <MemberBoxProductOrder> 
      <table class="order-list">
        <thead>
          <th>訂單編號</th>
          <th>下單日期</th>
          <th>產品名稱</th>
          <th>金額</th>
          <th>狀態</th>
          <th>處理情形</th>
        </thead>
        <tbody>
          <tr v-for="item in data" :key="item">
            <td>{{item.id}}</td>
            <td>{{item.title}}</td>
            <td>{{item.date}}</td>
            <td>{{item.price}}</td>
            <td>{{item.status}}</td>
            <td>{{item.progress}}</td>
          </tr>
        </tbody>
      </table>
      <div class="page">
        <ul class="pagination" v-for="page in 5" :key="page">
          <li>{{page}}</li>
        </ul>
      </div>
    </MemberBoxProductOrder>
  <MemberSidebar />
  <all-footer />
</template>

<script>
import MemberSidebar from "@/components/member/MemberSidebar.vue";
import MemberBoxProductOrder from "@/components/member/memberBox/MemberBoxProductOrder.vue";
export default {
  components: {
    MemberSidebar,
    MemberBoxProductOrder
  },
  data() {
    return {
      data:[
        {
          id:1001,
          title:"翻譯蒟蒻",
          date:"2022/12/12",
          price:100,
          status:"已付款",
          progress:"訂單完成",
        },
        {
          id:1002,
          title:"翻譯蒟蒻",
          date:"2022/12/12",
          price:100,
          status:"已付款",
          progress:"訂單處理中",
        },
        {
          id:1003,
          title:"翻譯蒟蒻",
          date:"2022/12/12",
          price:100,
          status:"已付款",
          progress:"退貨申請中",
        },
      ],
    }
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/css/utils/variables';

  .order-list{
    width: 95%;
    margin: 10px auto;
    thead{
      th{
        text-align: center;
        padding-bottom: 5px;
        border-bottom: 1px solid map-get($color, accent);
        color: map-get($color, accent);
      }
    }
    tbody{
      tr{
        td{
          padding-top: 15px;
          padding-bottom: 5px;
          text-align: center;
          border-bottom: 1px solid map-get($color, accent);
          color: map-get($color, accent);
        }
      }
    }
  }
  .page{
    text-align: center;
  }
  .pagination{
    width: 15px;
    display: inline-block;
    border: 1px solid map-get($color, accent);
    color: map-get($color, accent);
  }
</style>
