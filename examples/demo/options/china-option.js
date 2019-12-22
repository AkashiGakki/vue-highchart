const map = require("@akashi_sai/vue-highcharts/map/china")

module.exports = {
    title: {
        text: "China_Map"
    },
    series: [{
        mapData: map,
        name: 'Province',
        data: [{
            name: '北京',
            value: 2000,
            rank: 1
        }, {
            name: '上海',
            value: 1500,
            rank: 2
        }, {
            name: '四川',
            value: 1600,
            rank: 3
        }, {
            name: '广东',
            value: 1600,
            rank: 4
        }],
        joinBy: 'name'
    }],
    credits: {
        enabled: false
    }
}