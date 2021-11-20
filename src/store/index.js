import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const url = "https://lottohotel.oot.rentals/api/data/";
const api_token = "Backend";

export default new Vuex.Store({
  state: {
    status: {},
    tickets: [],
    winners: [],
    rules: {},
  },
  mutations: {
    set(state, payload) {
      state[payload.state] = payload.data;
    },
  },
  actions: {
    async set(state, payload) {
      await axios.get(url + payload + "?api_token=" + api_token).then((res) => {
        res.state = payload;
        state.commit("set", res);
      });
    },
  },
  getters: {
    get: (state) => (variable) => {
      return state[variable];
    },
  },
});
