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
        "商品折價券",
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
  justify-content: flex-start;
  align-items: center;
  margin: 50px auto;
//   outline: 1px solid red;
  nav {
    width: 20%;
    height: fit-content;
    margin: 5% 3% 0 0;
    text-align: center;
    border: 2px solid #ffe1b5;
    a {
        width: 100%;
        display: inline-block;
        font-size: 12px;
        padding: 10px 2px;
        border-bottom: 2px solid #ffe1b5;
        box-sizing: border-box;
        &:last-child {
            border-bottom: 0;
        }
    }
  }
  .sub-content {
    border: 2px solid #ffe1b5;
    width: 100%;
    // height: 80vh;
    box-sizing: border-box;
    margin: auto;
    position: relative;
  }
}
@media screen and (min-width: 768px) {
  .container.main-content {
    nav {
        width: 25%;
      a {
        font-size: 20px;
      }
    }
  }
}
</style>
