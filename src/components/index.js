import VChart from '../components/Chart'
import VMap from '../components/Map'

const VueHighCharts = [{
        name: 'v-chart',
        component: VChart,
    }, {
        name: 'v-map',
        component: VMap,
    },
]

function install (Vue) {
    VueHighCharts.map(item => {
        Vue.component(item.name, item.component)
    })
}

export default {
    install,
}
