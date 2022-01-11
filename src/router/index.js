import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Search from "../views/Search.vue";
import Upload from "../views/Upload.vue";
import Watch from "../views/Watch.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/search/:search",
    name: "Search",
    component: Search,
  },
  {
    path: "/upload",
    name: "Upload",
    component: Upload,
  },
  {
    path: "/watch/:video_id",
    name: "Watch",
    component: Watch,
  },
  {
    path: "**",
    redirect: "/",
  },
];

const router = new VueRouter({
  routes,
});

export default router;
