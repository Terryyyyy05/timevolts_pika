<template>
  <div class="sidebar">
    <div class="sidebar-container">
      <ul class="menu-iist">
        <li
          v-for="sidebarList in sideBar"
          :key="sidebarList.id"
          class="menu-item"
        >
          <router-link
            :to="{ path: sidebarList.router }"
            @click="changeSidebar(sidebarList.id)"
            >{{ sidebarList.menuList }}</router-link
          >
        </li>

      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ["changeSidebar"],
  name: "sidebar",
  data() {
    return {
      sideBar: [
        {
          id: 0,
          router: "/profile",
          menuList: "會員基本資料",
        },
        {
          id: 1,
          router: "/itineray-order",
          menuList: "行程訂單",
        },
        {
          id: 2,
          router: "/product-order",
          menuList: "商品訂單",
        },
        {
          id: 3,
          router: "/coupon",
          menuList: "商品折扣券",
        },
        {
          id: 4,
          router: "/itinerary-wishlist",
          menuList: "我的行程收藏",
        },
        {
          id: 5,
          router: "/product-wishlist",
          menuList: "我的商品收藏",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.sidebar {
  position: fixed;
  margin: 20px;
  top: 25%;
  left: 1%;
}
.menu-item {
  min-width: 230px;
  width: 20%;
}
a {
  list-style-type: none;
  text-decoration: none;
  color: #fff;
  border: 1px solid #e6dfc7;
  display: block;
  padding: 10px 20px 10px 10px;
  width: 80%;
}
a:active {
  color: #fff;
}
a::before {
  content: ">";
  margin-right: 5px;
}
.router-link-exact-active {
  color: #313131;
  background-color: #e6dfc7;
}
</style>
