<template>
    <div>
        <v-chart :config="chartConf"></v-chart>
        <v-map :config="chinaConf"></v-map>
        <v-map :config="worldConf" :theme="worldConf.theme"></v-map>
    </div>
</template>

<script>
const mapData = require('../map/china');
const worldData = require('../map/world');

// import mapData from 'vue-highcharts-v2/map/china';
// import worldData from 'vue-highcharts-v2/map/world';

export default {
    name: 'test',
    data () {
        return {
            chartConf: {
                 chart: {
                        type: 'bar'
                    },
                    title: {
                        text: 'Highcharts_Demo'
                    },
                    xAxis: {
                        categories: ['苹果', '香蕉', '橙子']   
                    },
                    yAxis: {
                        title: '吃水果个数'                
                    },
                    series: [{                              
                        name: 'Akashi',                        
                        data: [2, 3, 4]                 
                    }, {
                        name: 'Asuka',
                        data: [5, 7, 3]
                    }],
            },
            chinaConf: {

            },
            worldConf: {
                theme: {
                    type: 'olive-green'
                },
                title: {
                        text: 'World_Map'
                },
                series: [{
                    mapData: worldData,
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
                mapNavigation: {
                        enabled: true,              // 开启地图导航器，默认是 false
                        enableButtons: true,        // 是否启用缩放按钮
                    },
            }
        }
    },
    created () {
        axios.post('https://api.inews.qq.com/newsqa/v1/automation/foreign/country/ranklist')
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    },
    methods: {
        getJsonHandler() {

        }
    }
}
</script>