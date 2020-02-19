<template>
    <div id="app">
        <v-chart :config="chartConf"></v-chart>
        <v-map :config="mapConf"></v-map>
    </div>
</template>

<script>
    const mapdata = require('./map/china')

    export default {
        name: 'App',
        components: {
        },
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
                }
            }
        },
        computed: {

        },
        methods: {

        }
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
