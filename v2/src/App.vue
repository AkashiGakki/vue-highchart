<template>
    <div id="app">
        <chart :config="chartConf"></chart>
    </div>
</template>

<script>
    export default {
        name: 'App',
        components: {
        },
        data () {
            return {
                chartConf: {
                    type: 'bar',
                    title: 'Highcharts_Demo',
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
            }
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
