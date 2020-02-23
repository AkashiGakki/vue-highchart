<template>
    <div class="index">
        <v-chart :config="chartConf" :theme="theme"></v-chart>
        <v-map :config="mapConf"></v-map>
        <v-map :config="worldConf"></v-map>
    </div>
</template>

<script>
    const mapdata = require('../map/china');
    const worlddata = require('../map/world');

    export default {
        name: "index",
        data () {
            return {
                theme: {
                    type: 'avocado',
                    // type: 'black-white',
                    // chart: {
                    //     backgroundColor: 'black'
                    // },
                    // colorAxis: {
                    //     minColor: '#ccc',
                    //     maxColor: '#222'
                    // }
                },
                chartConf: {
                    chart: {
                        type: 'bar'
                    },
                    title: {
                        text: 'Highcharts_Demo'
                    },
                    xAxis: {
                        categories: ['苹果', '香蕉', '橙子']   // x 轴分类
                    },
                    yAxis: {
                        title: '吃水果个数'                // y 轴标题
                    },
                    series: [{                              // 数据列
                        name: 'Akashi',                        // 数据列名
                        data: [1, 2, 4]                     // 数据
                    }, {
                        name: 'Asuka',
                        data: [5, 7, 3]
                    }],
                },
                mapConf: {
                    title: {
                        text: "China_Map"
                    },
                    credits: {
                        enabled: true,
                        href: 'https://akashi_sai.gitee.io',
                        text: 'Akashi_Sai'
                    },
                    series: [{
                        mapData: mapdata,
                        name: 'Province',
                        data: [{
                            name: '北京',
                            value: 2000,
                            rank: 1
                        }, {
                            name: '上海',
                            value: 2100,
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
                    }]
                },
                worldConf: {
                    title: {
                        text: 'World_Map'
                    },
                    series: [{
                        mapData: worlddata,
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
                    xAxis: {
                        min: -3000,
                        // max: 10500
                    },
                    yAxis: {

                    },
                    mapNavigation: {
                        enabled: true,              // 开启地图导航器，默认是 false
                        enableButtons: true,        // 是否启用缩放按钮
                    },
                    chart: {
                        events: {
                            load () {
                                this.mapZoom(0.4, 10000, -7200)
                            }
                        }
                    }
                }
            }
        },
        computed: {

        },
        methods: {

        }
    }
</script>

<style scoped>

</style>