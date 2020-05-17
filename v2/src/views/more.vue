<template>
    <div class="more">
        <v-chart :config="confMore1" :theme="theme"></v-chart>
        <v-chart :config="confMore2"></v-chart>

        <v-chart :config="confMore4"></v-chart>
        <v-chart :config="confMore5"></v-chart>
        <v-chart :config="confMore6"></v-chart>
        <v-chart :config="confMore7"></v-chart>
        <v-chart :config="confMore8"></v-chart>
        <v-chart :config="confMore9"></v-chart>
        <v-chart :config="confMore10"></v-chart>
        <v-chart :config="confMore11"></v-chart>
        <v-chart :config="confMore12"></v-chart>
        <v-chart :config="confMore13"></v-chart>
        <v-chart :config="confMore14"></v-chart>
        <v-chart :config="confMore15"></v-chart>
        <v-chart :config="confMore16"></v-chart>
        <v-chart :config="confMore17"></v-chart>
        <v-chart :config="confMore18"></v-chart>
        <v-chart :config="confMore19"></v-chart>
        <div style="width:50%; margin: 30px auto">
            <el-row type="flex" class="row-bg" justify="space-around">
                <el-col :span="4"><div class="grid-content bg-purple">
                    <el-button  size="small" round>
                       <el-link :underline="false" href="/index">index</el-link>
                    </el-button>    
                </div></el-col>
                <el-col :span="4"><div class="grid-content bg-purple">
                    <el-button  size="small" round>
                        <el-link :underline="false" href="/line">line</el-link>
                    </el-button>
                </div></el-col>
                <el-col :span="4"><div class="grid-content bg-purple">
                    <el-button  size="small" round>
                        <el-link :underline="false" href="/area">area</el-link>    
                    </el-button>    
                </div></el-col>
                <el-col :span="4"><div class="grid-content bg-purple">
                    <el-button  size="small" round>
                        <el-link :underline="false" href="/bar">bar</el-link>    
                    </el-button>    
                </div></el-col>
                <el-col :span="4"><div class="grid-content bg-purple">
                    <el-button  size="small" round>
                        <el-link :underline="false" href="/pie">pie</el-link>    
                    </el-button>    
                </div></el-col>
                <el-col :span="4"><div class="grid-content bg-purple">
                    <el-button  size="small" round>
                        <el-link :underline="false" href="/more">more</el-link>    
                    </el-button>    
                </div></el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
    const bellData = [3.5, 3, 3.2, 3.1, 3.6, 3.9, 3.4, 3.4, 2.9, 3.1, 3.7, 3.4, 3, 3, 4,
        4.4, 3.9, 3.5, 3.8, 3.8, 3.4, 3.7, 3.6, 3.3, 3.4, 3, 3.4, 3.5, 3.4, 3.2,
        3.1, 3.4, 4.1, 4.2, 3.1, 3.2, 3.5, 3.6, 3, 3.4, 3.5, 2.3, 3.2, 3.5, 3.8, 3,
        3.8, 3.2, 3.7, 3.3, 3.2, 3.2, 3.1, 2.3, 2.8, 2.8, 3.3, 2.4, 2.9, 2.7, 2, 3,
        2.2, 2.9, 2.9, 3.1, 3, 2.7, 2.2, 2.5, 3.2, 2.8, 2.5, 2.8, 2.9, 3, 2.8, 3,
        2.9, 2.6, 2.4, 2.4, 2.7, 2.7, 3, 3.4, 3.1, 2.3, 3, 2.5, 2.6, 3, 2.6, 2.3,
        2.7, 3, 2.9, 2.9, 2.5, 2.8, 3.3, 2.7, 3, 2.9, 3, 3, 2.5, 2.9, 2.5, 3.6,
        3.2, 2.7, 3, 2.5, 2.8, 3.2, 3, 3.8, 2.6, 2.2, 3.2, 2.8, 2.8, 2.7, 3.3, 3.2,
        2.8, 3, 2.8, 3, 2.8, 3.8, 2.8, 2.8, 2.6, 3, 3.4, 3.1, 3, 3.1, 3.1, 3.1, 2.7,
        3.2, 3.3, 3, 2.5, 3, 3.4, 3];
    const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean bibendum erat ac justo sollicitudin, quis lacinia ligula fringilla. Pellentesque hendrerit, nisi vitae posuere condimentum, lectus urna accumsan libero, rutrum commodo mi lacus pretium erat. Phasellus pretium ultrices mi sed semper. Praesent ut tristique magna. Donec nisl tellus, sagittis ut tempus sit amet, consectetur eget erat. Sed ornare gravida lacinia. Curabitur iaculis metus purus, eget pretium est laoreet ut. Quisque tristique augue ac eros malesuada, vitae facilisis mauris sollicitudin. Mauris ac molestie nulla, vitae facilisis quam. Curabitur placerat ornare sem, in mattis purus posuere eget. Praesent non condimentum odio. Nunc aliquet, odio nec auctor congue, sapien justo dictum massa, nec fermentum massa sapien non tellus. Praesent luctus eros et nunc pretium hendrerit. In consequat et eros nec interdum. Ut neque dui, maximus id elit ac, consequat pretium tellus. Nullam vel accumsan lorem.';
    const wordData = text.split(/[,\. ]+/g)
        .reduce(function (arr, word) {
            var obj = arr.find(function (obj) {
                return obj.name === word;
            });
            if (obj) {
                obj.weight += 1;
            } else {
                obj = {
                    name: word,
                    weight: 1
                };
                arr.push(obj);
            }
            return arr;
        }, []);
    const dumData = [
        {
            name: 'Austria',
            low: 69,
            high: 82
        }, {
            name: 'Belgium',
            low: 70,
            high: 81
        }, {
            name: 'Bulgaria',
            low: 69,
            high: 75
        }, {
            name: 'Croatia',
            low: 65,
            high: 78
        }, {
            name: 'Cyprus',
            low: 70,
            high: 81
        }, {
            name: 'Czech Republic',
            low: 70,
            high: 79
        }, {
            name: 'Denmark',
            low: 72,
            high: 81
        }, {
            name: 'Estonia',
            low: 68,
            high: 78
        }, {
            name: 'Finland',
            low: 69,
            high: 81
        }, {
            name: 'France',
            low: 70,
            high: 83
        }, {
            name: 'Greece',
            low: 68,
            high: 81
        }, {
            name: 'Spain',
            low: 69,
            high: 83
        }, {
            name: 'Netherlands',
            low: 73,
            high: 82
        }, {
            name: 'Ireland',
            low: 70,
            high: 82
        }, {
            name: 'Lithuania',
            low: 70,
            high: 75
        }, {
            name: 'Luxembourg',
            low: 68,
            high: 83
        }, {
            name: 'Latvia',
            low: 70,
            high: 75
        }, {
            name: 'Malta',
            low: 69,
            high: 82
        }, {
            name: 'Germany',
            low: 69,
            high: 81
        }, {
            name: 'Poland',
            low: 68,
            high: 78
        }, {
            name: 'Portugal',
            low: 63,
            high: 81
        }, {
            name: 'Romania',
            low: 66,
            high: 75
        }, {
            name: 'Slovakia',
            low: 70,
            high: 77
        }, {
            name: 'Slovenia',
            low: 69,
            high: 81
        }, {
            name: 'Sweden',
            low: 73,
            high: 82
        }, {
            name: 'Hungary',
            low: 68,
            high: 76
        }, {
            name: 'Italy',
            low: 69,
            high: 83
        }, {
            name: 'UK',
            low: 71,
            high: 81
        }];
    export default {
        name: "more",
        data () {
            return {
                theme: {
                    type: 'avocado'
                },
                confMore1: {
                    chart: {
                        polar: true
                    },
                    title: {
                        text: '极地图'
                    },
                    subtitle: {
                        text: '极地图'
                    },
                    pane: {
                        startAngle: 0,
                        endAngle: 360
                    },
                    xAxis: {
                        tickInterval: 45,
                        min: 0,
                        max: 360,
                        labels: {
                            formatter: function () {
                                return this.value + '°';
                            }
                        }
                    },
                    yAxis: {
                        min: 0
                    },
                    plotOptions: {
                        series: {
                            pointStart: 0,
                            pointInterval: 45
                        },
                        column: {
                            pointPadding: 0,
                            groupPadding: 0
                        }
                    },
                    series: [{
                        type: 'column',
                        name: '柱形',
                        data: [8, 7, 6, 5, 4, 3, 2, 1],
                        pointPlacement: 'between'
                    }, {
                        type: 'line',
                        name: '线',
                        data: [1, 2, 3, 4, 5, 6, 7, 8]
                    }, {
                        type: 'area',
                        name: '面积',
                        data: [1, 8, 2, 7, 3, 6, 4, 5]
                    }]
                },
                confMore2: {
                    chart: {
                        polar: true,
                        type: 'line'
                    },
                    title: {
                        text: '预算与支出',
                        x: -80
                    },
                    subtitle: {
                        text: '蜘蛛图'
                    },
                    pane: {
                        size: '80%'
                    },
                    xAxis: {
                        categories: ['销售', '市场营销', '发展', '客户支持',
                            '信息技术', '行政管理'],
                        tickmarkPlacement: 'on',
                        lineWidth: 0
                    },
                    yAxis: {
                        gridLineInterpolation: 'polygon',
                        lineWidth: 0,
                        min: 0
                    },
                    tooltip: {
                        shared: true,
                        pointFormat: '<span style="color:{series.color}">{series.name}: <b>${point.y:,.0f}</b><br/>'
                    },
                    legend: {
                        align: 'right',
                        verticalAlign: 'top',
                        y: 70,
                        layout: 'vertical'
                    },
                    series: [{
                        name: '预算拨款',
                        data: [43000, 19000, 60000, 35000, 17000, 10000],
                        pointPlacement: 'on'
                    }, {
                        name: '实际支出',
                        data: [50000, 39000, 42000, 31000, 26000, 14000],
                        pointPlacement: 'on'
                    }]
                },
                confMore3: {
                    data: {
                        table: 'freq',
                        startRow: 1,
                        endRow: 17,
                        endColumn: 7
                    },
                    chart: {
                        polar: true,
                        type: 'column'
                    },
                    title: {
                        text: '俄勒冈州南海岸的风玫瑰'
                    },
                    subtitle: {
                        text: '玫瑰图'
                    },
                    pane: {
                        size: '85%'
                    },
                    legend: {
                        align: 'right',
                        verticalAlign: 'top',
                        y: 100,
                        layout: 'vertical'
                    },
                    xAxis: {
                        tickmarkPlacement: 'on'
                    },
                    yAxis: {
                        min: 0,
                        endOnTick: false,
                        showLastLabel: true,
                        title: {
                            text: '频率 (%)'
                        },
                        labels: {
                            formatter: function () {
                                return this.value + '%';
                            }
                        },
                        reversedStacks: false
                    },
                    tooltip: {
                        valueSuffix: '%'
                    },
                    plotOptions: {
                        series: {
                            stacking: 'normal',
                            shadow: false,
                            groupPadding: 0,
                            pointPlacement: 'on'
                        }
                    }
                },
                confMore4: {
                    colors: ['#FFD700', '#C0C0C0', '#CD7F32'],
                    chart: {
                        type: 'column',
                        inverted: true,
                        polar: true
                    },
                    title: {
                        text: '冬季奥运会金牌榜 (TOP 10)'
                    },
                    subtitle: {
                        text: '径向条形图'
                    },
                    tooltip: {
                        outside: true
                    },
                    pane: {
                        size: '85%',
                        endAngle: 270
                    },
                    xAxis: {
                        tickInterval: 1,
                        labels: {
                            align: 'right',
                            useHTML: true,
                            allowOverlap: true,
                            step: 1,
                            y: 4,
                            style: {
                                fontSize: '12px'
                            }
                        },
                        lineWidth: 0,
                        categories: [
                            'Norway <span class="f16"><span id="flag" class="flag no">' +
                            '</span></span>',
                            'United States <span class="f16"><span id="flag" class="flag us">' +
                            '</span></span>',
                            'Germany <span class="f16"><span id="flag" class="flag de">' +
                            '</span></span>',
                            'Canada <span class="f16"><span id="flag" class="flag ca">' +
                            '</span></span>',
                            'Austria <span class="f16"><span id="flag" class="flag at">' +
                            '</span></span>',
                            'Sweden <span class="f16"><span id="flag" class="flag se">' +
                            '</span></span>',
                            'Switzerland <span class="f16"><span id="flag" class="flag ch">' +
                            '</span></span>',
                            'Russia <span class="f16"><span id="flag" class="flag ru">' +
                            '</span></span>',
                            'Netherlands <span class="f16"><span id="flag" class="flag nl">' +
                            '</span></span>',
                            'Finland <span class="f16"><span id="flag" class="flag fi">' +
                            '</span></span>'
                        ]
                    },
                    yAxis: {
                        lineWidth: 0,
                        tickInterval: 25,
                        reversedStacks: false,
                        endOnTick: true,
                        showLastLabel: true
                    },
                    plotOptions: {
                        column: {
                            stacking: 'normal',
                            borderWidth: 0,
                            pointPadding: 0,
                            groupPadding: 0.15
                        }
                    },
                    series: [{
                        name: '金牌',
                        data: [132, 105, 92, 73, 64, 57, 55, 47, 45, 43]
                    }, {
                        name: '银牌',
                        data: [125, 110, 86, 64, 81, 46, 46, 38, 44, 63]
                    }, {
                        name: '铜牌',
                        data: [111, 90, 60, 62, 87, 55, 52, 35, 41, 61]
                    }]
                },
                confMore5: {
                    chart: {
                        type: 'boxplot'
                    },
                    title: {
                        text: 'Highcharts 箱线图'
                    },
                    subtitle: {
                        text: '箱线图'
                    },
                    legend: {
                        enabled: false
                    },
                    xAxis: {
                        categories: ['1', '2', '3', '4', '5'],
                        title: {
                            text: ''
                        }
                    },
                    yAxis: {
                        title: {
                            text: '观测值'
                        },
                        plotLines: [{
                            value: 932,
                            color: 'red',
                            width: 1,
                            label: {
                                text: '理论模型: 932',
                                align: 'center',
                                style: {
                                    color: 'gray'
                                }
                            }
                        }]
                    },
                    tooltip: {
                        pointFormat: '<span style="color:{point.color}">\u25CF</span> <b> {series.name}</b><br/>' + // eslint-disable-line no-dupe-keys
                            '最大值: {point.high}<br/>' +
                            'Q2\t: {point.q3}<br/>' +
                            '中位数: {point.median}<br/>' +
                            'Q1\t: {point.q1}<br/>' +
                            '最小值: {point.low}<br/>'
                    },
                    series: [{
                        name: '观测值',
                        data: [
                            [760, 801, 848, 895, 965],
                            [733, 853, 939, 980, 1080],
                            [714, 762, 817, 870, 918],
                            [724, 802, 806, 871, 950],
                            [834, 836, 864, 882, 910]
                        ],
                        tooltip: {
                            headerFormat: '<em>实验号码： {point.key}</em><br/>'
                        }
                    }, {
                        name: '异常值',
                        color: '#7cb5ec',
                        type: 'scatter',
                        data: [ // x, y positions where 0 is the first category
                            [0, 644],
                            [4, 718],
                            [4, 951],
                            [4, 969]
                        ],
                        marker: {
                            fillColor: 'white',
                            lineWidth: 1,
                            lineColor: '#7cb5ec'
                        },
                        tooltip: {
                            pointFormat: 'Observation: {point.y}'
                        }
                    }]
                },
                confMore6: {
                    chart: {
                        zoomType: 'xy'
                    },
                    title: {
                        text: '误差图'
                    },
                    subtitle: {
                        text: '误差图'
                    },
                    xAxis: [{
                        categories: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
                    }],
                    yAxis: [{ // Primary yAxis
                        labels: {
                            format: '{value} °C',
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
                            text: '降水',
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
                    series: [{
                        name: '降水',
                        type: 'column',
                        yAxis: 1,
                        data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
                        tooltip: {
                            pointFormat: '<span style="font-weight: bold; color: {series.color}">{series.name}</span>: <b>{point.y:.1f} mm</b> '
                        }
                    }, {
                        name: '降雨误差',
                        type: 'errorbar',
                        yAxis: 1,
                        data: [[48, 51], [68, 73], [92, 110], [128, 136], [140, 150], [171, 179], [135, 143], [142, 149], [204, 220], [189, 199], [95, 110], [52, 56]],
                        tooltip: {
                            pointFormat: '(误差范围: {point.low}-{point.high} mm)<br/>'
                        }
                    }, {
                        name: '温度',
                        type: 'spline',
                        data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
                        tooltip: {
                            pointFormat: '<span style="font-weight: bold; color: {series.color}">{series.name}</span>: <b>{point.y:.1f}°C</b> '
                        }
                    }, {
                        name: '温度误差',
                        type: 'errorbar',
                        data: [[6, 8], [5.9, 7.6], [9.4, 10.4], [14.1, 15.9], [18.0, 20.1], [21.0, 24.0], [23.2, 25.3], [26.1, 27.8], [23.2, 23.9], [18.0, 21.1], [12.9, 14.0], [7.6, 10.0]],
                        tooltip: {
                            pointFormat: '(误差范围: {point.low}-{point.high}°C)<br/>'
                        }
                    }]
                },
                confMore7: {
                    chart: {
                        type: 'waterfall'
                    },
                    title: {
                        text: 'Highcharts 瀑布图'
                    },
                    subtitle: {
                        text: '瀑布图'
                    },
                    xAxis: {
                        type: 'category'
                    },
                    yAxis: {
                        title: {
                            text: 'USD'
                        }
                    },
                    legend: {
                        enabled: false
                    },
                    tooltip: {
                        pointFormat: '<b>${point.y:,.2f}</b> USD'
                    },
                    series: [{
                        upColor: '#90ed7d',
                        color: '#f7a35c',
                        data: [{
                            name: '启动资金',
                            y: 120000
                        }, {
                            name: '产品收入',
                            y: 569000
                        }, {
                            name: '服务收入',
                            y: 231000
                        }, {
                            name: '正平衡',
                            isIntermediateSum: true,
                            color: '#434348'
                        }, {
                            name: '固定成本',
                            y: -342000
                        }, {
                            name: '可变成本',
                            y: -233000
                        }, {
                            name: '余额',
                            isSum: true,
                            color: '#434348'
                        }],
                        dataLabels: {
                            enabled: true,
                            formatter: function () {
                                // return Highcharts.numberFormat(this.y / 1000, 0, ',') + 'k';
                                return this.y / 1000 + 'k';
                            },
                            style: {
                                color: '#FFFFFF',
                                fontWeight: 'bold',
                                textShadow: '0px 0px 3px black'
                            }
                        },
                        pointPadding: 0
                    }]
                },
                confMore8: {
                    chart: {
                        type: 'funnel',
                        marginRight: 100
                    },
                    title: {
                        text: '销售漏斗',
                        x: -50
                    },
                    subtitle: {
                        text: '漏斗图'
                    },
                    plotOptions: {
                        series: {
                            dataLabels: {
                                enabled: true,
                                crop : false,
                                overflow: 'none',
                                format: '<b>{point.name}</b> ({point.y:,.0f})',
                                color: 'black',
                                softConnector: true
                            },
                            neckWidth: '30%',
                            neckHeight: '25%'
                            //-- Other available options
                            // height: pixels or percent
                            // width: pixels or percent
                        }
                    },
                    legend: {
                        enabled: false
                    },
                    series: [{
                        name: '用户',
                        data: [
                            ['访问网站',   15654],
                            ['下载产品',       4064],
                            ['询价', 1987],
                            ['发送合同',    976],
                            ['成交',    846]
                        ]
                    }]
                },
                confMore9: {
                    chart: {
                        type: 'pyramid',
                        marginRight: 100
                    },
                    title: {
                        text: '销售金字塔',
                        x: -50
                    },
                    subtitle: {
                        text: '金字塔图'
                    },
                    plotOptions: {
                        series: {
                            dataLabels: {
                                enabled: true,
                                format: '<b>{point.name}</b> ({point.y:,.0f})',
                                color: 'black',
                                softConnector: true
                            }
                        }
                    },
                    legend: {
                        enabled: false
                    },
                    series: [{
                        name: '用户',
                        data: [
                            ['访问网站',   15654],
                            ['下载产品',       4064],
                            ['询价', 1987],
                            ['发送合同',    976],
                            ['成交',    846]
                        ]
                    }]
                },
                confMore10: {
                    chart: {},
                    title: {
                        text: '高度和重量'
                    },
                    subtitle: {
                        text: 'Highcharts中的多边形系列-多边形图'
                    },
                    xAxis: {
                        gridLineWidth: 1,
                        title: {
                            enabled: true,
                            text: '高度 (cm)'
                        },
                        startOnTick: true,
                        endOnTick: true,
                        showLastLabel: true
                    },
                    yAxis: {
                        title: {
                            text: '重量 (kg)'
                        }
                    },
                    legend: {
                        layout: 'vertical',
                        align: 'right',
                        verticalAlign: 'middle'
                    },
                    series: [{
                        name: '目标',
                        type: 'polygon',
                        data: [[153, 42], [149, 46], [149, 55], [152, 60], [159, 70], [170, 77], [180, 70],
                            [180, 60], [173, 52], [166, 45]],
                        color: '#7cb5ec',
                        enableMouseTracking: false
                    }, {
                        name: '观测值',
                        type: 'scatter',
                        color: 'black',
                        data: [[161.2, 51.6], [167.5, 59.0], [159.5, 49.2], [157.0, 63.0], [155.8, 53.6],
                            [170.0, 59.0], [159.1, 47.6], [166.0, 69.8], [176.2, 66.8], [160.2, 75.2],
                            [172.5, 55.2], [170.9, 54.2], [172.9, 62.5], [153.4, 42.0], [160.0, 50.0],
                            [147.2, 49.8], [168.2, 49.2], [175.0, 73.2], [157.0, 47.8], [167.6, 68.8],
                            [159.5, 50.6], [175.0, 82.5], [166.8, 57.2], [176.5, 87.8], [170.2, 72.8],
                            [174.0, 54.5], [173.0, 59.8], [179.9, 67.3], [170.5, 67.8], [160.0, 47.0],
                            [154.4, 46.2], [162.0, 55.0], [176.5, 83.0], [160.0, 54.4], [152.0, 45.8],
                            [162.1, 53.6], [170.0, 73.2], [160.2, 52.1], [161.3, 67.9], [166.4, 56.6],
                            [168.9, 62.3], [163.8, 58.5], [167.6, 54.5], [160.0, 50.2], [161.3, 60.3],
                            [167.6, 58.3], [165.1, 56.2], [160.0, 50.2], [170.0, 72.9], [157.5, 59.8],
                            [167.6, 61.0], [160.7, 69.1], [163.2, 55.9], [152.4, 46.5], [157.5, 54.3],
                            [168.3, 54.8], [180.3, 60.7], [165.5, 60.0], [165.0, 62.0], [164.5, 60.3],
                            [156.0, 52.7], [160.0, 74.3], [163.0, 62.0], [165.7, 73.1], [161.0, 80.0],
                            [162.0, 54.7], [166.0, 53.2], [174.0, 75.7], [172.7, 61.1], [167.6, 55.7],
                            [151.1, 48.7], [164.5, 52.3], [163.5, 50.0], [152.0, 59.3], [169.0, 62.5],
                            [164.0, 55.7], [161.2, 54.8], [155.0, 45.9], [170.0, 70.6], [176.2, 67.2],
                            [170.0, 69.4], [162.5, 58.2], [170.3, 64.8], [164.1, 71.6], [169.5, 52.8],
                            [163.2, 59.8], [154.5, 49.0], [159.8, 50.0], [173.2, 69.2], [170.0, 55.9],
                            [161.4, 63.4], [169.0, 58.2], [166.2, 58.6], [159.4, 45.7], [162.5, 52.2],
                            [159.0, 48.6], [162.8, 57.8], [159.0, 55.6], [179.8, 66.8], [162.9, 59.4],
                            [161.0, 53.6], [151.1, 73.2], [168.2, 53.4], [168.9, 69.0], [173.2, 58.4],
                            [171.8, 56.2], [178.0, 70.6], [164.3, 59.8], [163.0, 72.0], [168.5, 65.2],
                            [166.8, 56.6], [172.7, 105.2], [163.5, 51.8], [169.4, 63.4], [167.8, 59.0],
                            [159.5, 47.6], [167.6, 63.0], [161.2, 55.2], [160.0, 45.0], [163.2, 54.0],
                            [162.2, 50.2], [161.3, 60.2], [149.5, 44.8], [157.5, 58.8], [163.2, 56.4],
                            [172.7, 62.0], [155.0, 49.2], [156.5, 67.2], [164.0, 53.8], [160.9, 54.4],
                            [162.8, 58.0], [167.0, 59.8], [160.0, 54.8], [160.0, 43.2], [168.9, 60.5],
                            [158.2, 46.4], [156.0, 64.4], [160.0, 48.8], [167.1, 62.2], [158.0, 55.5],
                            [167.6, 57.8], [156.0, 54.6], [162.1, 59.2], [173.4, 52.7], [159.8, 53.2],
                            [170.5, 64.5], [159.2, 51.8], [157.5, 56.0], [161.3, 63.6], [162.6, 63.2],
                            [160.0, 59.5], [168.9, 56.8], [165.1, 64.1], [162.6, 50.0], [165.1, 72.3],
                            [166.4, 55.0], [160.0, 55.9], [152.4, 60.4], [170.2, 69.1], [162.6, 84.5],
                            [170.2, 55.9], [158.8, 55.5], [172.7, 69.5], [167.6, 76.4], [162.6, 61.4],
                            [167.6, 65.9], [156.2, 58.6], [175.2, 66.8], [172.1, 56.6], [162.6, 58.6],
                            [160.0, 55.9], [165.1, 59.1], [182.9, 81.8], [166.4, 70.7], [165.1, 56.8],
                            [177.8, 60.0], [165.1, 58.2], [175.3, 72.7], [154.9, 54.1], [158.8, 49.1],
                            [172.7, 75.9], [168.9, 55.0], [161.3, 57.3], [167.6, 55.0], [165.1, 65.5],
                            [175.3, 65.5], [157.5, 48.6], [163.8, 58.6], [167.6, 63.6], [165.1, 55.2],
                            [165.1, 62.7], [168.9, 56.6], [162.6, 53.9], [164.5, 63.2], [176.5, 73.6],
                            [168.9, 62.0], [175.3, 63.6], [159.4, 53.2], [160.0, 53.4], [170.2, 55.0],
                            [162.6, 70.5], [167.6, 54.5], [162.6, 54.5], [160.7, 55.9], [160.0, 59.0],
                            [157.5, 63.6], [162.6, 54.5], [152.4, 47.3], [170.2, 67.7], [165.1, 80.9],
                            [172.7, 70.5], [165.1, 60.9], [170.2, 63.6], [170.2, 54.5], [170.2, 59.1],
                            [161.3, 70.5], [167.6, 52.7], [167.6, 62.7], [165.1, 86.3], [162.6, 66.4],
                            [152.4, 67.3], [168.9, 63.0], [170.2, 73.6], [175.2, 62.3], [175.2, 57.7],
                            [160.0, 55.4], [165.1, 104.1], [174.0, 55.5], [170.2, 77.3], [160.0, 80.5],
                            [167.6, 64.5], [167.6, 72.3], [167.6, 61.4], [154.9, 58.2], [162.6, 81.8],
                            [175.3, 63.6], [171.4, 53.4], [157.5, 54.5], [165.1, 53.6], [160.0, 60.0],
                            [174.0, 73.6], [162.6, 61.4], [174.0, 55.5], [162.6, 63.6], [161.3, 60.9],
                            [156.2, 60.0], [149.9, 46.8], [169.5, 57.3], [160.0, 64.1], [175.3, 63.6],
                            [169.5, 67.3], [160.0, 75.5], [172.7, 68.2], [162.6, 61.4], [157.5, 76.8],
                            [176.5, 71.8], [164.4, 55.5], [160.7, 48.6], [174.0, 66.4], [163.8, 67.3]]
                    }],
                    tooltip: {
                        headerFormat: '<b>{series.name}</b><br>',
                        pointFormat: '{point.x} cm, {point.y} kg'
                    }
                },
                confMore11: {
                    chart: {},
                    title: {
                        text: 'Bell curve'
                    },
                    subtitle: {
                        text: '贝尔曲线图'
                    },
                    xAxis: [{
                        title: { text: 'Data' }
                    }, {
                        title: { text: 'Bell curve' },
                        opposite: true
                    }],
                    yAxis: [{
                        title: { text: 'Data' }
                    }, {
                        title: { text: 'Bell curve' },
                        opposite: true
                    }],
                    series: [{
                        name: 'Bell curve',
                        type: 'bellcurve',
                        xAxis: 1,
                        yAxis: 1,
                        baseSeries: 1,
                        zIndex: -1
                    }, {
                        name: 'Data',
                        type: 'scatter',
                        data: bellData,
                        marker: {
                            radius: 1.5
                        }
                    }]
                },
                confMore12: {
                    chart: {
                        type: 'timeline'
                    },
                    xAxis: {
                        visible: false
                    },
                    yAxis: {
                        visible: false
                    },
                    title: {
                        text: '人类太空探索时间表'
                    },
                    subtitle: {
                        text: '时序图'
                    },
                    colors: [
                        '#4185F3',
                        '#427CDD',
                        '#406AB2',
                        '#3E5A8E',
                        '#3B4A68',
                        '#363C46'
                    ],
                    series: [{
                        data: [{
                            name: '首次生物',
                            label: '1951：第一批太空犬',
                            description: '1951年7月22日第一批狗（Dezik 和 Tsygan）送上太空'
                        }, {
                            name: '人造卫星',
                            label: '1957: 第一颗人造卫星',
                            description: '1957年十月4日，发射第一颗人造卫星，第一次接收到来自太空的信号'
                        }, {
                            name: '载人航天',
                            label: '1961：首次载人航天(尤里加加林)',
                            description: '首次载人航天(尤里加加林)，首次载人轨道飞行'
                        }, {
                            name: '登陆月球',
                            label: '1969：人类首次登陆月球',
                            description: 'First human on the Moon, and first space launch from a celestial body other than the Earth. First sample return from the Moon'
                        }, {
                            name: '空间站',
                            label: '1971: 第一个太空空间站',
                            description: 'Salyut 1 was the first space station of any kind, launched into low Earth orbit by the Soviet Union on April 19, 1971.'
                        }, {
                            name: '阿波罗-联盟号试验计划',
                            label: '1975: First multinational manned mission',
                            description: 'The mission included both joint and separate scientific experiments, and provided useful engineering experience for future joint US–Russian space flights, such as the Shuttle–Mir Program and the International Space Station.'
                        }]
                    }]
                },
                confMore13: {
                    chart: {
                        renderTo: 'container',
                        type: 'column'
                    },
                    title: {
                        text: '餐厅投诉情况'
                    },
                    subtitle: {
                        text: '帕拉图-表示的是柏拉定律，即常说的 8/2 定律：20%的原因造成80%的问题'
                    },
                    xAxis: {
                        categories: ['价格过高', '分量过小', '等待时间过长', '食物难吃', '氛围不好', '不卫生', '太吵', '服务态度不好']
                    },
                    yAxis: [{
                        title: {
                            text: ''
                        }
                    }, {
                        title: {
                            text: ''
                        },
                        minPadding: 0,
                        maxPadding: 0,
                        max: 100,
                        min: 0,
                        opposite: true,
                        labels: {
                            format: "{value}%"
                        }
                    }],
                    series: [{
                        type: 'pareto',
                        name: '累计比率',
                        yAxis: 1,
                        zIndex: 10,
                        baseSeries: 1,
                        tooltip: {
                            pointFormat: '{series.name} {point.y:.2f} %'
                        }
                    }, {
                        name: '投诉次数',
                        type: 'column',
                        zIndex: 2,
                        data: [755, 222, 151, 86, 72, 51, 36, 10]
                    }]
                },
                confMore14: {
                    chart: {
                        type: 'item'
                    },
                    title: {
                        text: 'Highcharts item chart'
                    },
                    subtitle: {
                        text: '会议图'
                    },
                    legend: {
                        labelFormat: '{name} <span style="opacity: 0.4">{y}</span>'
                    },
                    series: [{
                        name: 'Representatives',
                        keys: ['name', 'y', 'color', 'label'],
                        data: [
                            ['The Left', 69, '#BE3075', 'DIE LINKE'],
                            ['Social Democratic Party', 153, '#EB001F', 'SPD'],
                            ['Alliance 90/The Greens', 67, '#64A12D', 'GRÜNE'],
                            ['Free Democratic Party', 80, '#FFED00', 'FDP'],
                            ['Christian Democratic Union', 200, '#000000', 'CDU'],
                            ['Christian Social Union in Bavaria', 46, '#008AC5', 'CSU'],
                            ['Alternative for Germany', 94, '#009EE0', 'AfD']
                        ],
                        dataLabels: {
                            enabled: true,
                            format: '{point.label}'
                        },
                        // Circular options
                        center: ['50%', '88%'],
                        size: '170%',
                        startAngle: -100,
                        endAngle: 100
                    }]
                },
                confMore15: {
                    chart: {
                        type: 'xrange'
                    },
                    title: {
                        text: '简易甘特图'
                    },
                    subtitle: {
                        text: '甘特图'
                    },
                    xAxis: {
                        type: 'datetime',
                        dateTimeLabelFormats: {
                            week: '%Y/%m/%d'
                        }
                    },
                    yAxis: {
                        title: {
                            text: ''
                        },
                        categories: ['制作产品原型', '开发', '测试'],
                        reversed: true
                    },
                    tooltip: {
                        dateTimeLabelFormats: {
                            day: '%Y/%m/%d'
                        }
                    },
                    series: [{
                        name: '项目1',
                        // pointPadding: 0,
                        // groupPadding: 0,
                        borderColor: 'gray',
                        pointWidth: 20,
                        data: [{
                            x: Date.UTC(2014, 10, 21),
                            x2: Date.UTC(2014, 11, 2),
                            y: 0,
                            partialFill: 0.25
                        }, {
                            x: Date.UTC(2014, 11, 2),
                            x2: Date.UTC(2014, 11, 5),
                            y: 1
                        }, {
                            x: Date.UTC(2014, 11, 8),
                            x2: Date.UTC(2014, 11, 9),
                            y: 2
                        }, {
                            x: Date.UTC(2014, 11, 9),
                            x2: Date.UTC(2014, 11, 19),
                            y: 1
                        }, {
                            x: Date.UTC(2014, 11, 10),
                            x2: Date.UTC(2014, 11, 23),
                            y: 2
                        }],
                        dataLabels: {
                            enabled: true
                        }
                    }]
                },
                confMore16: {
                    chart: {},
                    series: [{
                        type: 'wordcloud',
                        data: wordData
                    }],
                    title: {
                        text: '词云图'
                    },
                    subtitle: {
                        text: '词云图'
                    }
                },
                confMore17: {
                    chart: {
                        backgroundColor: 'white',
                        events: {
                            load: function () {
                                // Draw the flow chart
                                var ren = this.renderer,
                                    colors = ['#7cb5ec', '#434348', '#90ed7d', '#f7a35c', '#8085e9',
                                        '#f15c80', '#e4d354', '#2b908f', '#f45b5b', '#91e8e1'],
                                    rightArrow = ['M', 0, 0, 'L', 100, 0, 'L', 95, 5, 'M', 100, 0, 'L', 95, -5],
                                    leftArrow = ['M', 100, 0, 'L', 0, 0, 'L', 5, 5, 'M', 0, 0, 'L', 5, -5];
                                // Separator, client from service
                                ren.path(['M', 120, 40, 'L', 120, 330])
                                    .attr({
                                        'stroke-width': 2,
                                        stroke: 'silver',
                                        dashstyle: 'dash'
                                    }).add();
                                // Separator, CLI from service
                                ren.path(['M', 420, 40, 'L', 420, 330])
                                    .attr({
                                        'stroke-width': 2,
                                        stroke: 'silver',
                                        dashstyle: 'dash'
                                    }).add();
                                // Headers
                                ren.label('Web 客户端', 20, 40)
                                    .css({
                                        fontWeight: 'bold'
                                    }).add();
                                ren.label('Web 服务器端 / CLI', 220, 40)
                                    .css({
                                        fontWeight: 'bold'
                                    }).add();
                                ren.label('命令行', 440, 40)
                                    .css({
                                        fontWeight: 'bold'
                                    }).add();
                                // SaaS client label
                                ren.label('SaaS 客户端<br/>(browser or<br/>script)', 10, 82)
                                    .attr({
                                        fill: colors[0],
                                        stroke: 'white',
                                        'stroke-width': 2,
                                        padding: 5,
                                        r: 5
                                    }).css({
                                    color: 'white'
                                }).add().shadow(true);
                                // Arrow from SaaS client to Phantom JS
                                ren.path(rightArrow)
                                    .attr({
                                        'stroke-width': 2,
                                        stroke: colors[3]
                                    })
                                    .translate(95, 95)
                                    .add();
                                ren.label('POST传递Json数据', 90, 75)
                                    .css({
                                        fontSize: '10px',
                                        color: colors[3]
                                    }).add();
                                ren.label('PhantomJS', 210, 82)
                                    .attr({
                                        r: 5,
                                        width: 100,
                                        fill: colors[1]
                                    })
                                    .css({
                                        color: 'white',
                                        fontWeight: 'bold'
                                    }).add();
                                // Arrow from Phantom JS to Batik
                                ren.path(['M', 250, 110, 'L', 250, 185, 'L', 245, 180, 'M', 250, 185, 'L', 255, 180])
                                    .attr({
                                        'stroke-width': 2,
                                        stroke: colors[3]
                                    }).add();
                                ren.label('SVG', 255, 120)
                                    .css({
                                        color: colors[3],
                                        fontSize: '10px'
                                    }).add();
                                ren.label('Batik', 210, 200)
                                    .attr({
                                        r: 5,
                                        width: 100,
                                        fill: colors[1]
                                    })
                                    .css({
                                        color: 'white',
                                        fontWeight: 'bold'
                                    }).add();
                                // Arrow from Batik to SaaS client
                                ren.path(['M', 235, 185, 'L', 235, 155, 'C', 235, 130, 235, 130, 215, 130,
                                    'L', 95, 130, 'L', 100, 125, 'M', 95, 130, 'L', 100, 135])
                                    .attr({
                                        'stroke-width': 2,
                                        stroke: colors[3]
                                    }).add();
                                ren.label('Rasterized image', 100, 110)
                                    .css({
                                        color: colors[3],
                                        fontSize: '10px'
                                    }).add();
                                // Browser label
                                ren.label('Browser<br/>running<br/>Highcharts', 10, 180)
                                    .attr({
                                        fill: colors[0],
                                        stroke: 'white',
                                        'stroke-width': 2,
                                        padding: 5,
                                        r: 5
                                    })
                                    .css({
                                        color: 'white',
                                        width: '100px'
                                    })
                                    .add()
                                    .shadow(true);
                                // Arrow from Browser to Batik
                                ren.path(rightArrow)
                                    .attr({
                                        'stroke-width': 2,
                                        stroke: colors[1]
                                    })
                                    .translate(95, 205)
                                    .add();
                                ren.label('POST SVG', 110, 185)
                                    .css({
                                        color: colors[1],
                                        fontSize: '10px'
                                    })
                                    .add();
                                // Arrow from Batik to Browser
                                ren.path(leftArrow)
                                    .attr({
                                        'stroke-width': 2,
                                        stroke: colors[1]
                                    })
                                    .translate(95, 215)
                                    .add();
                                ren.label('Rasterized image', 100, 215)
                                    .css({
                                        color: colors[1],
                                        fontSize: '10px'
                                    })
                                    .add();
                                // Script label
                                ren.label('Script', 450, 82)
                                    .attr({
                                        fill: colors[2],
                                        stroke: 'white',
                                        'stroke-width': 2,
                                        padding: 5,
                                        r: 5
                                    })
                                    .css({
                                        color: 'white',
                                        width: '100px'
                                    })
                                    .add()
                                    .shadow(true);
                                // Arrow from Script to PhantomJS
                                ren.path(leftArrow)
                                    .attr({
                                        'stroke-width': 2,
                                        stroke: colors[2]
                                    })
                                    .translate(330, 90)
                                    .add();
                                ren.label('命令', 340, 70)
                                    .css({
                                        color: colors[2],
                                        fontSize: '10px'
                                    })
                                    .add();
                                // Arrow from PhantomJS to Script
                                ren.path(rightArrow)
                                    .attr({
                                        'stroke-width': 2,
                                        stroke: colors[2]
                                    })
                                    .translate(330, 100)
                                    .add();
                                ren.label('Rasterized image', 330, 100)
                                    .css({
                                        color: colors[2],
                                        fontSize: '10px'
                                    })
                                    .add();
                            }
                        }
                    },
                    title: {
                        text: 'Highcharts导出服务器概述',
                        style: {
                            color: 'black'
                        }
                    },
                    subtitle: {
                        text: '自由绘图'
                        // text: '自由绘图 - 有报错'
                    }
                },
                confMore18: {
                    chart: {
                        type: 'dumbbell',
                        inverted: true
                    },
                    legend: {
                        enabled: false
                    },
                    subtitle: {
                        text: '哑铃图 - 1960 vs 2018'
                    },
                    title: {
                        text: '各国预期寿命变化'
                    },
                    tooltip: {
                        shared: true
                    },
                    xAxis: {
                        type: 'category'
                    },
                    yAxis: {
                        title: {
                            text: 'Life Expectancy (years)'
                        }
                    },
                    series: [{
                        name: '各国预期寿命变化',
                        data: dumData
                    }]
                },
                confMore19: {
                    chart: {
                        type: 'lollipop'
                    },
                    accessibility: {
                        point: {
                            descriptionFormatter: function (point) {
                                var ix = point.index + 1,
                                    x = point.name,
                                    y = point.y;
                                return ix + '. ' + x + ', ' + y + '.';
                            }
                        }
                    },
                    legend: {
                        enabled: false
                    },
                    subtitle: {
                        text: '棒棒糖图'
                    },
                    title: {
                        text: '世界十大人口国家'
                    },
                    tooltip: {
                        shared: true
                    },
                    xAxis: {
                        type: 'category'
                    },
                    yAxis: {
                        title: {
                            text: '人口'
                        }
                    },
                    series: [{
                        name: 'Population',
                        data: [{
                            name: 'China',
                            low: 1427647786
                        }, {
                            name: 'India',
                            low: 1352642280
                        }, {
                            name: 'United States',
                            low: 327096265
                        }, {
                            name: 'Indonesia',
                            low: 267670543
                        }, {
                            name: 'Pakistan',
                            low: 212228286
                        }, {
                            name: 'Brazil',
                            low: 209469323
                        }, {
                            name: 'Nigeria',
                            low: 195874683
                        }, {
                            name: 'Bangladesh',
                            low: 161376708
                        }, {
                            name: 'Russia',
                            low: 145734038
                        }, {
                            name: 'Mexico',
                            low: 126190788
                        }]
                    }]
                }
            }
        }
    }
</script>

<style scoped>

</style>