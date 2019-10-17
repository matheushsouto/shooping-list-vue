import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: [],
    qtd: 0
  },
  mutations: {
    ADD_ITEM: async (state, payload) => {
      state.cart.push(payload);
      state.qtd++;
    },
    ADD_CART(state, payload) {
      state.cart = payload;
      state.qtd = payload.length;
    },
    REMOVE(state) {
      state.cart = [];
      state.qtd = 0;
    }
  }
});
