import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/FrontEndView/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/FrontEndView/AboutView.vue"),
  },
  {
    path: "/news",
    name: "news",
    component: () => import("../views/FrontEndView/NewsView.vue"),
  },
  {
    path: "/itinerary",
    name: "itinerary",
    component: () => import("../views/FrontEndView/ItineraryView.vue"),
  },
  {
    path: "/itiItineraryClassicView",
    name: "ItineraryClassicView",
    component: () => import("../views/FrontEndView/ItineraryClassicView.vue"),
  },
  {
    path: "/itineraryPeriodView",
    name: "itineraryPeriodView",
    component: () => import("../views/FrontEndView/ItineraryPeriodView.vue"),
  },
  {
    path: "/itinerary-booking",
    name: "itinerary-booking",
    component: () => import("../views/FrontEndView/ItineraryBookingView.vue"),
  },
  {
    path: "/history",
    name: "history",
    component: () => import("../views/FrontEndView/HistoryView.vue"),
  },
  {
    path: "/history-details",
    name: "history-details",
    component: () => import("../views/FrontEndView/HistoryDetailsView.vue"),
  },
  {
    path: "/product",
    name: "product",
    component: () => import("../views/FrontEndView/ProductView.vue"),
  },
  {
    path: "/product-item",
    name: "product-item",
    component: () => import("../views/FrontEndView/ProductItemView.vue"),
  },
  {
    path: "/member",
    name: "member",
    component: () => import("../views/FrontEndView/MemberView.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/FrontEndView/MemberLoginView.vue"),
  },
  {
    path: "/signup",
    name: "signup",
    component: () => import("../views/FrontEndView/MemberSignupView.vue"),
  },
  {
    path: "/profile",
    name: "profile",
    component: () => import("../views/FrontEndView/MemberProfileView.vue"),
  },
  {
    path: "/profile-edit",
    name: "profile-edit",
    component: () => import("../views/FrontEndView/MemberProfileEditView.vue"),
  },
  {
    path: "/itineray-order",
    name: "itineray-order",
    component: () =>
      import("../views/FrontEndView/MemberItineraryOrderView.vue"),
  },
  {
    path: "/itinerary-order-details",
    name: "itinerary-order-details",
    component: () =>
      import("../views/FrontEndView/MemberItineraryOrderDetailsView.vue"),
  },
  {
    path: "/product-order",
    name: "product-order",
    component: () => import("../views/FrontEndView/MemberProductOrderView.vue"),
  },
  {
    path: "/product-order-details",
    name: "product-order-details",
    component: () =>
      import("../views/FrontEndView/MemberProductOrderDetailsView.vue"),
  },
  {
    path: "/coupon",
    name: "coupon",
    component: () => import("../views/FrontEndView/MemberCouponView.vue"),
  },
  {
    path: "/itinerary-wishlist",
    name: "itinerary-wishlist",
    component: () =>
      import("../views/FrontEndView/MemberItineraryWishlistView.vue"),
  },
  {
    path: "/product-wishlist",
    name: "product-wishlist",
    component: () =>
      import("../views/FrontEndView/MemberProductWishlistView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // return 期望滚动到哪个的位置
    // 始终滚动到顶部
    return { top: 0 };
  },
});

export default router;
