import Vue from 'vue'
import Chart from './Chart'
import Map from "./Map"


const VueHighCharts = [
    {
        name: 'v-chart',
        component: Chart
    }, {
        name: 'v-map',
        component: Map
    }
]

function install (Vue) {
    VueHighCharts.map(item => {
        Vue.component(item.name, item.component)
    })
}

export default install