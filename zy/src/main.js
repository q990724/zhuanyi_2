import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios"
import vant from "vant"

axios.defaults.baseURL = "http://127.0.0.1:5050/"
//保存session 信息
axios.defaults.withCredentials = true;
// 完整引入vant
import Vant from 'vant';
import 'vant/lib/index.css';

import "../public/font_2pwk3xyas9n/iconfont.css"

Vue.use(Vant);
Vue.config.productionTip = false



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
