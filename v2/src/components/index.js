import Vue from 'vue'
import Chart from './Chart'
import Map from "./Map"


const VueHighCharts = [
    {
        name: 'chart',
        component: Chart
    }, {
        name: 'map',
        component: Map
    }
]

function install (Vue) {
    VueHighCharts.map(item => {
        Vue.component(item.name, item.component)
    })
}

export default install