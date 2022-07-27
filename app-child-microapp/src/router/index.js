import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/microApp/",
    name: "Home",
    component: Home,
  },
  {
    path: "/microApp/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about-microApp" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
