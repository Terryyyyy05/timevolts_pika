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
    path: "/history",
    name: "history",
    component: () => import("../views/FrontEndView/HistoryView.vue"),
  },
  {
    path: "/product",
    name: "product",
    component: () => import("../views/FrontEndView/ProductView.vue"),
  },
  {
    path: "/member",
    name: "member",
    component: () => import("../views/FrontEndView/MemberView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
