import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";
import Category from "../views/Category";
import Search from "../views/Search";
import Tag from "../views/Tag";
import Article from "../views/Article";
import Events from "../views/Events";
import Autor from "../views/Autor";
import AboutUs from "../views/AboutUs";
import AboutWN from "../views/AboutWN";
import Portfolio from "../views/Portfolio";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/article/:title",
    name: "Article",
    component: Article,
  },
  {
    path: "/category/:category",
    name: "Category",
    component: Category,
  },
  {
    path: "/tag/:tag",
    name: "Tag",
    component: Tag,
  },
  {
    path: "/search/:search",
    name: "Search",
    component: Search,
  },
  {
    path: "/author/:autor",
    name: "Autor",
    component: Autor,
  },
  {
    path: "/events",
    name: "Events",
    component: Events,
  },
  {
    path: "/about-us",
    name: "AboutUs",
    component: AboutUs,
  },
  {
    path: "/about-weazel-news",
    name: "AboutWN",
    component: AboutWN,
  },
  {
    path: "/portfolio",
    name: "Portfolio",
    component: Portfolio,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
