import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import microApp from "@micro-zoe/micro-app";
import { registerMicroApps, start } from "qiankun";

microApp.start();

// qiankun
registerMicroApps([
  {
    name: "qiankunApp",
    entry: "http://localhost:3032/",
    container: "#container-qiankun",
    activeRule: (location) => {
      return location.hash.startsWith("#/qiankunApp");
    },
  },
]);
start();

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
