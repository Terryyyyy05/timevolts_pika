import { createStore } from "vuex";
import { storage } from "@/components/product/js/localStorage";

export default createStore({
  state: {
    cart: [],
    buyerOrder: [],
    curBuyerInfo: {
      addressee: {},
    },
  },
  getters: {
    cartItems(state) {
      return state.cart;
    },
  },
  mutations: {
    addToCart(state, newData) {
      let item = state.cart.find((i) => i.title === newData.title);

      if (item) {
        item.amount = parseInt(item.amount) + parseInt(newData.amount);
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
  },
  actions: {
    itemData({ commit }, data) {
      commit("itemData", data);
    },
  },
});
