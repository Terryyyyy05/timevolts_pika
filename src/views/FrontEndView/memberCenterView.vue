<template>
  <all-header />
  <innerpageHeader></innerpageHeader>
  <div class="container">
    <the-heading heading="會員中心" subheading="Member"></the-heading>
  </div>

  <div class="container main-content">
    <nav>
      <router-link to="/memberCenter/memberInfo">{{ title[0] }}</router-link>
      <router-link to="/memberCenter/itineraryOrder">{{
        title[1]
      }}</router-link>
      <router-link to="/memberCenter/productOrder">{{ title[2] }}</router-link>
      <router-link to="/memberCenter/memberCoupon">{{ title[3] }}</router-link>
      <router-link to="/memberCenter/itineraryCollection">{{
        title[4]
      }}</router-link>
      <router-link to="/memberCenter/productCollection">{{
        title[5]
      }}</router-link>
    </nav>
    <div class="sub-content">
      <!-- <div class="content-deco">
        <div>{{ title }}</div>
      </div> -->
      <router-view />
    </div>
  </div>
  <all-footer />
</template>
<script>
export default {
  data() {
    return {
      title: [
        "會員資料",
        "行程訂單",
        "商品訂單",
        "商品折價眷",
        "行程收藏",
        "商品收藏",
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.container.main-content {
  display: flex;
  align-items: flex-start;
  margin: 50px auto;
  outline: 1px solid red;
  nav {
    width: 30%;
    margin: 5% 5% 5% 0;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-content: center;
    border: 1px solid #ffe1b5;
    a {
      font-size: 12px;
      padding: 10% 2%;
      border-bottom: 1px solid #ffe1b5;
      &:last-child {
        border-bottom: 0;
      }
    }
  }
  .sub-content {
    border: 1px solid #ffe1b5;
    outline: 1px solid yellow;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    .content-deco {
      border-bottom: 1px solid #ffe1b5;
      height: 50px;
    }
  }
}
@media screen and (min-width: 768px) {
  .container.main-content {
    nav {
      width: 20%;
      a {
        padding: 10% 5%;
        font-size: 20px;
      }
    }
  }
}
</style>
