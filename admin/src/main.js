import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);

axios.defaults.timeout = 5000 // 请求超时
// axios.defaults.baseURL = 'https://data.xinxueshuo.cn/nsi-1.0/manager/'  // api 即上面 vue.config.js 中配置的地址
// axios.defaults.baseURL = 'http://cp.jekang.cn/api'  // api 即上面 vue.config.js 中配置的地址
axios.defaults.baseURL = '/api'  // api 即上面 vue.config.js 中配置的地址

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
