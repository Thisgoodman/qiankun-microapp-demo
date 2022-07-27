import "./public-path";

import Vue from "vue";
import App from "./App.vue";
import routes from "./router";
import VueRouter from "vue-router";
Vue.use(VueRouter);

Vue.config.productionTip = false;

let router = null;
let instance = null;
// let singleSpa = null;

function render(props = {}) {
  const { container } = props;

  router = new VueRouter({
    mode: "hash",
    routes,
  });

  instance = new Vue({
    router,
    render: (h) => h(App),
  }).$mount(container ? container.querySelector("#app") : "#app");
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  console.log("[vue] qiankunApp bootstrap");
}
export async function mount(props) {
  console.log("[vue] qiankunApp mount", props);
  // singleSpa = props.singleSpa;
  render(props);
}
export async function unmount() {
  console.log("[vue] qiankunApp unmount");
  // singleSpa.unloadApplication("micro-app3");
  instance.$destroy();
  instance.$el.innerHTML = "";
  instance = null;
  router = null;
}
