const mapdata = require('vue-highcharts-v2/map/world');

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
}

