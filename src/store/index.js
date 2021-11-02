import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const url = "https://weazel.chiliad.online/api/data/";
// const url = "http://localhost:8000/api/";
const token = "?api_token=Backend";

export default new Vuex.Store({
  state: {
    werb: [],
    articles: [],
    categories: [],
    hints: [],
    events: {},
    aboutus: {},
    aboutproject: {},
    portfolio: {},
    article: {},
  },
  mutations: {
    set(state, payload) {
      if (payload.state == "werb") {
        for (let i = payload.data.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [payload.data[i], payload.data[j]] = [
            payload.data[j],
            payload.data[i],
          ];
        }
      }
      state[payload.state] = payload.data;
    },
  },
  actions: {
    async set(state, payload) {
      await axios.get(url + payload + token).then((res) => {
        res.state = payload;
        state.commit("set", res);
      });
    },
    async setArticle(state, id) {
      await axios.get(url + "articles/" + id + token).then((res) => {
        res.state = "article";
        state.commit("set", res);
      });
    },
  },
  getters: {
    getAds: (state) => state.werb,
    getArticles: (state) => state.articles,
    getHints: (state) => state.hints,
    getCategories: (state) => state.categories,
    getEvents: (state) => state.events,
    getArticle: (state) => state.article,
    getAboutUs: (state) => state.aboutus,
    getAboutProject: (state) => state.aboutproject,
    getPortfolio: (state) => state.portfolio,
  },
});
