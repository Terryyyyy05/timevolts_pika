import { createRouter, createWebHistory } from "vue-router";
import Switchpage from "../views/SwitchpageView.vue";

const routes = [
  {
    path: "/",
    name: "Switchpage",
    component: Switchpage,
  },
  {
    path: "/home",
    name: "FrontEndHome",
    component: () => import("../views/FrontEndView/HomeView.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/FrontEndView/AboutView.vue"),
  },
  {
    path: "/experience",
    name: "experience",
    component: () => import("../views/FrontEndView/ExperienceView.vue"),
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
    path: "/history/:id",
    name: "historyDetails",
    props: true,
    component: () => import("../views/FrontEndView/HistoryDetailsView.vue"),
  },
  {
    path: "/product",
    name: "product",
    component: () => import("../views/FrontEndView/ProductView.vue"),
  },
  {
    path: "/product/:id",
    name: "product-item",
    component: () => import("../views/FrontEndView/ProductItemView.vue"),
  },
  {
    path: "/ProductCheckOut",
    name: "ProductCheckOut",
    component: () => import("../views/FrontEndView/ProductCheckOutView.vue"),
  },

  {
    path: "/ProductCheckOut",
    name: "productCheckOut",
    component: () => import("../views/FrontEndView/ProductCheckOutView.vue"),
  },
  {
    path: "/customizetk",
    name: "customizetk",
    component: () => import("../components/ItineraryBooking/Customizetk.vue"),
  },
  {
    path: "/managelogin",
    name: "managelogin",
    component: () => import("../views/BackEndView/manageloginView.vue"),
  },
  {
    path: "/memberLightBox",
    name: "memberLightBox",
    component: () => import("../views/FrontEndView/MemberLightBoxView.vue"),
  },
  {
    path: "/memberCenter",
    name: "memberCenter",
    component: () => import("../views/FrontEndView/memberCenterView.vue"),
    redirect: "/memberCenter/memberInfo",
    children: [
      {
        path: "memberInfo",
        name: "memberInfo",
        component: () =>
          import("../views/FrontEndView/memberCenter/memberInfo.vue"),
      },
      {
        path: "itineraryOrder",
        name: "itineraryOrder",
        component: () =>
          import("../views/FrontEndView/memberCenter/itineraryOrder.vue"),
      },
      {
        path: "productOrder",
        name: "productOrder",
        component: () =>
          import("../views/FrontEndView/memberCenter/productOrder.vue"),
      },
      {
        path: "memberCoupon",
        name: "memberCoupon",
        component: () =>
          import("../views/FrontEndView/memberCenter/memberCoupon.vue"),
      },
      {
        path: "itineraryCollection",
        name: "itineraryCollection",
        component: () =>
          import("../views/FrontEndView/memberCenter/itineraryCollection.vue"),
      },
      {
        path: "productCollection",
        name: "productCollection",
        component: () =>
          import("../views/FrontEndView/memberCenter/productCollection.vue"),
      },
    ],
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
