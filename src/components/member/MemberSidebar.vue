<template>
  <div class="sidebar">
    <div class="sidebar-container">
      <ul class="menu-items">
        <li>
            <router-link to="/member">>會員資料管理</router-link>
        </li>
        <li>
            <router-link to="/itineray-order">>行程訂單</router-link>
        </li>
        <li>
            <router-link to="/product-order">>商品訂單</router-link>
        </li>
        <li>
            <router-link to="/coupon">>商品折扣碼</router-link>
        </li>
        <li>
            <router-link to="/itinerary-wishlist">>我的行程收藏</router-link>
        </li>
        <li>
            <router-link to="/product-wishlist">>我的商品收藏</router-link>
        </li>
        <router-view />
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "sidebar",
};
</script>

<style lang="scss" scoped>

</style>
