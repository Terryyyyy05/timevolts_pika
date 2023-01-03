import { createStore } from "vuex";
import { storage } from "@/components/product/js/localStorage";

import historyModule from "./history/index.js";
import itineraryModule from "./itinerary/index.js";
import authModule from "./auth/index.js";
import itineraryBookingModule from "./itineraryBooking/index.js";

export default createStore({
  modules: {
    history: historyModule,
    itinerary: itineraryModule,
    auth: authModule,
    itineraryBooking: itineraryBookingModule,
  },
  state: {
    cart: [],
    buyerOrder: [],
    curBuyerInfo: {
      addressee: {},
      checkOutCart: {},
      totalAmount: "",
      couponAmount: "",
    },
    itemClassName: "",
  },
  getters: {
    cartItems(state) {
      return state.cart;
    },
    cartItemsTotalAmount(state) {
      return state.cart.reduce((acu, cur) => {
        return acu + parseInt(cur.price);
      }, 0);
    },
  },
  mutations: {
    addAmount(state, title) {
      let item = state.cart.find((i) => i.title === title);
      if (item) {
        item.amount = parseInt(item.amount) + 1;
        item.price = (parseInt(item.price) / (item.amount - 1)) * item.amount;
      }
      storage.set("cart", state.cart);
    },
    minusAmount(state, title) {
      let item = state.cart.find((i) => i.title === title);
      if (item && parseInt(item.amount) > 1) {
        item.amount = parseInt(item.amount) - 1;
        item.price = (parseInt(item.price) / (item.amount + 1)) * item.amount;
      }
      storage.set("cart", state.cart);
    },
    addToCart(state, newData) {
      let item = state.cart.find((i) => i.title === newData.title);

      if (item) {
        item.amount = parseInt(item.amount) + parseInt(newData.amount);
        item.price = parseInt(item.price) + parseInt(newData.price);
      } else {
        state.cart.push({ ...newData });
      }

      storage.set("cart", state.cart);
    },
    removeFromCart(state, title) {
      // let item = state.cart.find((i) => i.title === newData.title);
      // state.cart = state.cart.filter((i) => i.title !== newData.title);
      state.cart = state.cart.filter((i) => i.title !== title);
      storage.set("cart", state.cart);
    },
    updateCartFromLocalStorage(state) {
      const cart = storage.get("cart");
      if (cart) {
        state.cart = cart;
      }
    },
    // 購物資訊
    addBuyerInfo(state) {
      state.buyerOrder.push({ ...state.curBuyerInfo.addressee });
    },
    curBuyerInfo(state, infoData) {
      state.curBuyerInfo.addressee = { ...infoData };
    },
    cartTotalAmount(state, totalAmount) {
      state.curBuyerInfo.totalAmount = totalAmount;
    },
    cartCouponAmount(state, couponAmount) {
      state.curBuyerInfo.couponAmount = couponAmount;
    },
    // itemContent
    addItemClassName(state, name) {
      state.itemClassName = name;
    },
  },
  actions: {
    itemData({ commit }, data) {
      commit("itemData", data);
    },
  },
});
