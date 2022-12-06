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
        <span>商品折扣券</span>
      </div>
      <div class="left-angle">&lt;&lt;&lt;&lt;&lt;&lt;&lt;</div>
      <div class="member-box-img">
        <img
          src="../../../assets/image/member/member-box-corner.png"
          alt="member-box-corner"
        />
      </div>
    </div>
    <div class="coupon-card-container">
      <MemberCouponCard v-for="card in cards" :key="card.id">
        <div class="coupon-card">
          <div class="coupon-card-left">
            <div class="title">
              <p class="title-one">&#36;200元現金券</p>
              <p class="title-two">&#40;滿&#36;1000可使用&#41;</p>
              <p class="title-three">
                使用期限&#58;2022&#47;12&#47;15&#45;2022&#47;12&#47;25
              </p>
            </div>
          </div>
          <div class="coupon-card-right">
            <p>立即使用</p>
          </div>
        </div>
      </MemberCouponCard>
    </div>
    <div class="pagination-container">
      <ul class="pagination">
        <li class="page-item">1</li>
        <li class="page-item">2</li>
        <li class="page-item">3</li>
        <li class="page-item">4</li>
        <li class="page-item">5</li>
      </ul>
    </div>
  </div>
</template>

<script>
import MemberCouponCard from "../MemberCouponCard.vue";
export default {
  name: "MemberBoxCoupon",
  components: {
    MemberCouponCard,
  },
  data() {
    return {
      cards: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
    };
  },
  methods: {
    clickCallback(pageNum) {
      console.log(pageNum);
    },
  },
};
</script>

<style lang="scss" scoped>
.member-box {
  position: relative;
  border: 2px solid #e6dfc7;
  width: 50%;
  margin: 50px auto 100px;
  height: 60vh;
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

// member-box-upper
.coupon-card-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-bottom: 40px;
}
.coupon-card {
  color: #fff;
  display: flex;
  background-color: #545454;
  width: 80%;
  border-radius: 10px;
  margin: 60px 40px 0 40px;
}
.coupon-card-left {
  border-right: dotted;
  width: 80%;
  position: relative;
}
.coupon-card-left::after {
  content: "";
  background-color: #000;
  border-radius: 0 0 10px 10px;
  position: absolute;
  top: 0;
  right: -10px;
  width: 20px;
  height: 10px;
}

.title {
  margin: 20px;
}
.title-one {
  font-size: 1.3rem;
  margin-bottom: 8px;
}
.title-two,
.title-three {
  font-size: 0.6rem;
}
.title-two {
  margin-bottom: 10px;
}
.coupon-card-right {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
  position: relative;
}
.coupon-card-right::before {
  content: "";
  background-color: #000;
  border-radius: 10px 10px 0 0;
  position: absolute;
  bottom: 0;
  left: -10px;
  width: 20px;
  height: 10px;
}
.coupon-card-right p {
  writing-mode: vertical-lr;
  border: 3px solid #434343;
  border-radius: 48px;
  padding: 10px;
  margin: 0 auto;
}

// coupon-card
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffe1b5;
}
.page-item {
  border: 1px solid #ffe1b5;
  padding: 10px;
}
</style>
