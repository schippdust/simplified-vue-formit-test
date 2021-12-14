import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

let store = {
  strict: true,
  state: {
    testData: "test",
  },
};

export default new Vuex.Store(store);
