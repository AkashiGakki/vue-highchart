import Vue from 'vue'
import App from './App.vue'
import VueHighcharts from './components/index'
import VueRouter from 'vue-router'
import router from './router'
import axios from 'axios'

Vue.prototype.$axios = axios  

Vue.use(VueHighcharts)
Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
