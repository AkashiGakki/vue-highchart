import Vue from 'vue'
import App from './App.vue'
import VueHighcharts from './components/index'


Vue.use(VueHighcharts)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
