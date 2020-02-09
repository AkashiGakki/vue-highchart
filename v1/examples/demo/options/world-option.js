const mapdata = require('@akashi_sai/vue-highcharts/map/world')

module.exports = {
    title: {
        text: 'World_Map'
    },
    series: [{
        mapData: mapdata,
        name: 'Country',
        data: [{
            name: 'China',
            value: 1230
        },{
            name: 'United States of America',
            value: 1235
        },{
            name: 'Australia',
            value: 1245
        },{
            name: 'Russia',
            value: 1256
        }],
        joinBy: 'name'
    }],
    credits: {
        enabled: false
    },
    mapNavigation: {
        enabled: true, // 开启地图导航器，默认是 false
        enableButtons: true, // 是否启用缩放按钮
    }
}