import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0,
    product: {
      items: []
    },
    scrollPosition: {},
    clientsCnt: 0
  },
  mutations: {
    init(state) {
      state.count = 0;
    },
    increment(state) {
      if (state.count < 101) state.count++;
      else console.log(`${state.count}`);
    },
    decrement(state) {
      if (state.count > 0) state.count--;
      else console.log(`${state.count}`);
    },
    async retrieveItems(state) {
      const res = await axios.get("http://localhost:3000/items");
      const data = res.data.data;
      // console.log(`### getting items: ${JSON.stringify(data)}`);
      state.product.items = state.product.items.concat(data);
    },
    saveScrollPosition(state, payload) {
      // state.scrollPosition
      // console.log(state);
      // console.log(payload);
      state.scrollPosition[payload.path] = payload.position;
    },
    setClientsCnt(state, cnt) {
      state.clientsCnt = cnt;
    }
  },
  actions: {},
  modules: {},
  getters: {
    getItems: state => state.product.items,
    getScrollPositions: state => state.scrollPosition
  }
});

export default store;
