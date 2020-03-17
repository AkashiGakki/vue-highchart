<template>
    <div class="mix">
        <v-chart :config="confMix1"></v-chart>
        <v-chart :config="confMix2"></v-chart>
        <v-chart :config="confMix3"></v-chart>
        <v-chart :config="confMix4"></v-chart>
<!--        <v-chart :config="confMix5"></v-chart>-->
    </div>
</template>

<script>
    const mix5Data = [3.5, 3, 3.2, 3.1, 3.6, 3.9, 3.4, 3.4, 2.9, 3.1, 3.7, 3.4, 3, 3, 4, 4.4, 3.9, 3.5, 3.8, 3.8, 3.4, 3.7, 3.6, 3.3, 3.4, 3, 3.4, 3.5, 3.4, 3.2, 3.1, 3.4, 4.1, 4.2, 3.1, 3.2, 3.5, 3.6, 3, 3.4, 3.5, 2.3, 3.2, 3.5, 3.8, 3, 3.8, 3.2, 3.7, 3.3, 3.2, 3.2, 3.1, 2.3, 2.8, 2.8, 3.3, 2.4, 2.9, 2.7, 2, 3, 2.2, 2.9, 2.9, 3.1, 3, 2.7, 2.2, 2.5, 3.2, 2.8, 2.5, 2.8, 2.9, 3, 2.8, 3, 2.9, 2.6, 2.4, 2.4, 2.7, 2.7, 3, 3.4, 3.1, 2.3, 3, 2.5, 2.6, 3, 2.6, 2.3, 2.7, 3, 2.9, 2.9, 2.5, 2.8, 3.3, 2.7, 3, 2.9, 3, 3, 2.5, 2.9, 2.5, 3.6, 3.2, 2.7, 3, 2.5, 2.8, 3.2, 3, 3.8, 2.6, 2.2, 3.2, 2.8, 2.8, 2.7, 3.3, 3.2, 2.8, 3, 2.8, 3, 2.8, 3.8, 2.8, 2.8, 2.6, 3, 3.4, 3.1, 3, 3.1, 3.1, 3.1, 2.7, 3.2, 3.3, 3, 2.5, 3, 3.4, 3];
    export default {
        name: "mix",
        data () {
            return {
                confMix1: {
                    chart: {},
                    title: {
                        text: '混合图表'
                    },
                    subtitle: {
                        text: '柱状图、饼图、折线图混合'
                    },
                    xAxis: {
                        categories: ['苹果', ' 橙', '梨', '香蕉', '李子']
                    },
                    plotOptions: {
                        series: {
                            stacking: 'normal'
                        }
                    },
                    labels: {
                        items: [{
                            html: '水果消耗',
                            style: {
                                left: '100px',
                                top: '18px',
                                color: 'black'
                            }
                        }]
                    },
                    series: [{
                        type: 'column',
                        name: '小张',
                        data: [3, 2, 1, 3, 4]
                    }, {
                        type: 'column',
                        name: '小潘',
                        data: [2, 3, 5, 7, 6]
                    }, {
                        type: 'column',
                        name: '小王',
                        data: [4, 3, 3, 9, 0]
                    }, {
                        type: 'spline',
                        name: '平均值',
                        data: [3, 2.67, 3, 6.33, 3.33],
                        marker: {
                            lineWidth: 2,
                            lineColor: '#f7a35c',
                            fillColor: 'white'
                        }
                    }, {
                        type: 'pie',
                        name: '总的消耗',
                        data: [{
                            name: '小张',
                            y: 13,
                            color: '#7cb5ec' // Jane's color
                        }, {
                            name: '小潘',
                            y: 23,
                            color: '#434348' // John's color
                        }, {
                            name: '小王',
                            y: 19,
                            color: '#90ed7d' // Joe's color
                        }],
                        center: [100, 80],
                        size: 100,
                        showInLegend: false,
                        dataLabels: {
                            enabled: false
                        }
                    }]
                },
                confMix2: {
                    chart: {
                        zoomType: 'xy'
                    },
                    title: {
                        text: '东京月平均温度和降雨量'
                    },
                    subtitle: {
                        text: '双坐标的折线图、柱状图混合图'
                    },
                    xAxis: [{
                        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                        crosshair: true
                    }],
                    yAxis: [{ // Primary yAxis
                        labels: {
                            format: '{value}°C',
                            style: {
                                color: '#434348'
                            }
                        },
                        title: {
                            text: '温度',
                            style: {
                                color: '#434348'
                            }
                        }
                    }, { // Secondary yAxis
                        title: {
                            text: '降雨量',
                            style: {
                                color: '#7cb5ec'
                            }
                        },
                        labels: {
                            format: '{value} mm',
                            style: {
                                color: '#7cb5ec'
                            }
                        },
                        opposite: true
                    }],
                    tooltip: {
                        shared: true
                    },
                    legend: {
                        layout: 'vertical',
                        align: 'left',
                        x: 120,
                        verticalAlign: 'top',
                        y: 100,
                        floating: true,
                        backgroundColor: '#FFFFFF'
                    },
                    series: [{
                        name: '降雨量',
                        type: 'column',
                        yAxis: 1,
                        data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
                        tooltip: {
                            valueSuffix: ' mm'
                        }
                    }, {
                        name: '温度',
                        type: 'spline',
                        data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
                        tooltip: {
                            valueSuffix: '°C'
                        }
                    }]
                },
                confMix3: {
                    chart: {
                        zoomType: 'xy'
                    },
                    title: {
                        text: '东京月平均天气数据'
                    },
                    subtitle: {
                        text: '多坐标轴混合图'
                    },
                    xAxis: [{
                        categories: [
                            '一月', '二月', '三月', '四月', '五月', '六月','七月', '八月', '九月', '十月', '十一月', '十二月'
                        ],
                        crosshair: true
                    }],
                    yAxis: [{ // Primary yAxis
                        labels: {
                            format: '{value}°C',
                            style: {
                                color: '#90ed7d'
                            }
                        },
                        title: {
                            text: '温度',
                            style: {
                                color: '#90ed7d'
                            }
                        },
                        opposite: true
                    }, { // Secondary yAxis
                        gridLineWidth: 0,
                        title: {
                            text: '降雨量',
                            style: {
                                color: '#7cb5ec'
                            }
                        },
                        labels: {
                            format: '{value} mm',
                            style: {
                                color: '#7cb5ec'
                            }
                        }
                    }, { // Tertiary yAxis
                        gridLineWidth: 0,
                        title: {
                            text: '海平面气压',
                            style: {
                                color: '#434348'
                            }
                        },
                        labels: {
                            format: '{value} mb',
                            style: {
                                color: '#434348'
                            }
                        },
                        opposite: true
                    }],
                    tooltip: {
                        shared: true
                    },
                    legend: {
                        layout: 'vertical',
                        align: 'left',
                        x: 80,
                        verticalAlign: 'top',
                        y: 55,
                        floating: true,
                        backgroundColor: '#FFFFFF'
                    },
                    series: [{
                        name: '降雨量',
                        type: 'column',
                        yAxis: 1,
                        data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
                        tooltip: {
                            valueSuffix: ' mm'
                        }
                    }, {
                        name: '海平面气压',
                        type: 'spline',
                        yAxis: 2,
                        data: [1016, 1016, 1015.9, 1015.5, 1012.3, 1009.5, 1009.6, 1010.2, 1013.1, 1016.9, 1018.2, 1016.7],
                        marker: {
                            enabled: false
                        },
                        dashStyle: 'shortdot',
                        tooltip: {
                            valueSuffix: ' mb'
                        }
                    }, {
                        name: '温度',
                        type: 'spline',
                        data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
                        tooltip: {
                            valueSuffix: ' °C'
                        }
                    }]
                },
                confMix4: {
                    chart: {

                    },
                    xAxis: {
                        min: -0.5,
                        max: 5.5
                    },
                    yAxis: {
                        min: 0
                    },
                    title: {
                        text: '包含趋势线的散点图'
                    },
                    subtitle: {
                        text: '包含趋势线的散点图'
                    },
                    series: [{
                        type: 'line',
                        name: '回归线',
                        data: [[0, 1.11], [5, 4.51]],
                        marker: {
                            enabled: false
                        },
                        states: {
                            hover: {
                                lineWidth: 0
                            }
                        },
                        enableMouseTracking: false
                    }, {
                        type: 'scatter',
                        name: '观测值',
                        data: [1, 1.5, 2.8, 3.5, 3.9, 4.2],
                        marker: {
                            radius: 4
                        }
                    }]
                },
                confMix5: {
                    chart: {},
                    title: {
                        text: 'Highcharts Histogram'
                    },
                    subtitle: {
                        text: '直方图'
                    },
                    xAxis: [{
                        title: { text: 'Data' }
                    }, {
                        title: { text: 'Histogram' },
                        opposite: true
                    }],
                    yAxis: [{
                        title: { text: 'Data' }
                    }, {
                        title: { text: 'Histogram' },
                        opposite: true
                    }],
                    series: [{
                        name: 'Histogram',
                        type: 'histogram',
                        xAxis: 1,
                        yAxis: 1,
                        baseSeries: 's1',
                        zIndex: -1
                    }, {
                        name: 'Data',
                        type: 'scatter',
                        data: mix5Data,
                        id: 's1',
                        marker: {
                            radius: 1.5
                        }
                    }]
                }
            }
        }
    }
</script>

<style scoped>

</style>