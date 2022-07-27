// import Vue from "vue";
// import VueRouter from "vue-router";
import Home from "../views/Home.vue";

// Vue.use(VueRouter);

const routes = [
  {
    path: "/qiankunApp/",
    name: "Home",
    component: Home,
  },
  {
    path: "/qiankunApp/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about-qiankunApp" */ "../views/About.vue"),
  },
];

// const router = new VueRouter({
//   routes,
// });

export default routes;
