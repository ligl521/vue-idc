import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);

import '@/assets/style/reset.css' //清空全局样式

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';//样式文件一定要引入
Vue.use(ElementUI);

axios.defaults.timeout = 5000 // 请求超时
// axios.defaults.baseURL = 'https://data.xinxueshuo.cn/nsi-1.0/manager/'  // api 即上面 vue.config.js 中配置的地址
// axios.defaults.baseURL = 'http://cp.jekang.cn/api'  // api 即上面 vue.config.js 中配置的地址
axios.defaults.baseURL = '/api'  // api 即上面 vue.config.js 中配置的地址

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
  mounted () {
    document.dispatchEvent(new Event('render-event'))
  }
}).$mount("#app");
