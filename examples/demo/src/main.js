import Vue from 'vue'
import App from './App.vue'

import VueHighcharts from '@akashi_sai/vue-highcharts'
// import VueHighcharts from '../../../src/components/index'

Vue.use(VueHighcharts)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
