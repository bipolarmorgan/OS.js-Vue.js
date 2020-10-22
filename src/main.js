import Vue from "vue";
import App from "./App.vue";
import bus from "./bus.js";

Vue.config.productionTip = false;

setInterval(() => {
  bus.$emit("foo");
}, 1000);

new Vue({
  render: (h) => h(App)
}).$mount("#app");
