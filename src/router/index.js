import Vue from "vue";
import VueRouter from "vue-router";
const Home = () => import("@/views/Home.vue");
const About = () => import("@/views/About.vue");
const Scroll = () => import("@/views/Scroll.vue");
const ScrollVuex = () => import("@/views/ScrollVuex.vue");
const Products = () => import("@/components/Products");
const Menu1 = () => import("@/components/Menu1/Menu1.vue");
const Detail = () => import("@/components/Detail/Detail.vue");
const DynamicLayout = () => import("@/components/DynamicLayout");

import store from "@/store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/scroll",
    name: "Scroll",
    component: Scroll
  },
  {
    path: "/scroll_vuex",
    name: "Scroll_vuex",
    component: ScrollVuex
  },
  {
    path: "/menu1",
    name: "Menu1",
    component: Menu1
  },
  {
    path: "/products",
    name: "Products",
    component: Products
  },
  {
    path: "/detail",
    name: "DETAIL",
    component: Detail
  },
  {
    path: "/dynamic",
    name: "dynamic_layout",
    component: DynamicLayout
  },
  {
    path: "/about",
    name: "About",
    component: About
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    // console.log(`${to}, ${from}, ${savedPosition}`);
    // console.log(history);
    // console.log(to);
    // console.log(store);
    // console.log(store.getters.getScrollPositions["/scroll_vuex"]);

    if (to.path === "/scroll_vuex")
      return store.getters.getScrollPositions["/scroll_vuex"];

    if (to.path === "/products")
      return store.getters.getScrollPositions["/products"];

    if (to.hash) return { selector: to.hash };

    // return to scroll position
    if (savedPosition) return savedPosition;

    return { x: 0, y: 0 };
  }
});

export default router;
