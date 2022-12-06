import { createStore } from "vuex";
import { storage } from "@/components/product/js/localStorage";

export default createStore({
  state: {
    cart: [],
  },
  getters: {
    cartItems(state) {
      return state.cart;
    },
  },
  mutations: {
    addToCart(state, newData) {
      state.cart.push({ ...newData });
      storage.set("cart", state.cart);
    },
    updateCartFromLocalStorage(state) {
      const cart = storage.get("cart");
      if (cart) {
        state.cart = cart;
      }
    },
  },
  actions: {
    itemData({ commit }, data) {
      commit("itemData", data);
    },
  },
});
