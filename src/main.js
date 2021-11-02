import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

Vue.component("side", require("./components/Side.vue").default);
Vue.component("bread", require("./components/Breadcrumbs.vue").default);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
