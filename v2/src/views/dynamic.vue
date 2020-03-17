<template>
    <div class="dynamic">
        <v-chart :config="confDynamic1"></v-chart>
        <v-chart :config="confDynamic2"></v-chart>
    </div>
</template>

<script>
    export default {
        name: "dynamic",
        data () {
            return {
                confDynamic1: {
                    chart: {
                        type: 'spline',
                        marginRight: 10,
                        events: {
                            load: function () {
                                var series = this.series[0];
                                //     chart = this;
                                // activeLastPointToolip(chart);
                                setInterval(function () {
                                    var x = (new Date()).getTime(), // 当前时间
                                        y = Math.random();          // 随机值
                                    series.addPoint([x, y], true, true);
                                    // activeLastPointToolip(chart);
                                }, 1000);
                            }
                        }
                    },
                    title: {
                        text: '动态模拟实时数据'
                    },
                    subtitle: {
                        text: '实时刷新的曲线图'
                    },
                    xAxis: {
                        type: 'datetime',
                        tickPixelInterval: 150
                    },
                    yAxis: {
                        title: {
                            text: null
                        }
                    },
                    tooltip: {
                        // formatter: function () {
                        //     return '<b>' + this.series.name + '</b><br/>' +
                        //         Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
                        //         Highcharts.numberFormat(this.y, 2);
                        // }
                    },
                    legend: {
                        enabled: false
                    },
                    series: [{
                        name: '随机数据',
                        data: (function () {
                            // 生成随机值
                            var data = [],
                                time = (new Date()).getTime(),
                                i;
                            for (i = -19; i <= 0; i += 1) {
                                data.push({
                                    x: time + i * 1000,
                                    y: Math.random()
                                });
                            }
                            return data;
                        }())
                    }]
                },
                confDynamic2: {
                    chart: {
                        type: 'scatter',
                        margin: [70, 50, 60, 80],
                        events: {
                            click: function (e) {
                                // 从点击事件里获取 x, y 值
                                var x = e.xAxis[0].value,
                                    y = e.yAxis[0].value,
                                    series = this.series[0];
                                // 增加点
                                series.addPoint([x, y]);
                            }
                        }
                    },
                    title: {
                        text: '可手动添加数据的动态图'
                    },
                    subtitle: {
                        text: '单击绘图区添加点，单击点可删除此点.'
                    },
                    xAxis: {
                        gridLineWidth: 1,
                        minPadding: 0.2,
                        maxPadding: 0.2,
                        maxZoom: 60
                    },
                    yAxis: {
                        title: {
                            text: '数值'
                        },
                        minPadding: 0.2,
                        maxPadding: 0.2,
                        maxZoom: 60,
                        plotLines: [{
                            value: 0,
                            width: 1,
                            color: '#808080'
                        }]
                    },
                    legend: {
                        enabled: false
                    },
                    plotOptions: {
                        series: {
                            lineWidth: 1,
                            point: {
                                events: {
                                    'click': function () {
                                        if (this.series.data.length > 1) {
                                            this.remove();
                                        }
                                    }
                                }
                            }
                        }
                    },
                    series: [{
                        name:'图例1',
                        data: [[20, 20], [80, 80]]
                    }]
                }
            }
        }
    }
</script>

<style scoped>

</style>