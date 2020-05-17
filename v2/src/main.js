import Vue from 'vue'
import App from './App.vue'
import VueHighcharts from './components/index'
import VueRouter from 'vue-router'
import router from './router'
import axios from 'axios'
// import qs from 'qs'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.prototype.$axios = axios
// Vue.prototype.$qs == qs
// axios.defaults.baseURL = '/'

Vue.use(VueHighcharts);
Vue.use(VueRouter);
Vue.use(ElementUI);

Vue.config.productionTip = false

// var koa = require('koa');
// var cors = require('koa2-cors');
// var app = new koa();
// //开启
// app.use(cors());

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
