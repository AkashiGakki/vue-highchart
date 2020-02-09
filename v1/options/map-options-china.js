const mapdata = require('../map/china')
const data = require('../test/map-china-text')

data.series[0]['mapData'] = mapdata
module.exports = data

// module.exports = {
//     title: {
//         text: "China_Map"
//     },
//     series: [{
//         mapData: mapdata,
//         name: 'Province',
//         data: [{
//             name: '北京',
//             value: 2000,
//             rank: 1
//         }, {
//             name: '上海',
//             value: 1500,
//             rank: 2
//         }, {
//             name: '四川',
//             value: 1600,
//             rank: 3
//         }],
//         joinBy: 'name'
//     }],
//     credits: {
//         enabled: false
//     }
// }