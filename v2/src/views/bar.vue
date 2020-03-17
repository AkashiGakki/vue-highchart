<template>
    <div class="bar">
        <v-chart :config="confBar1" :theme="theme"></v-chart>
        <v-chart :config="confBar2"></v-chart>
        <v-chart :config="confBar3"></v-chart>
        <v-chart :config="confBar4"></v-chart>
        <v-chart :config="confBar5"></v-chart>
        <v-chart :config="confBar6"></v-chart>
        <v-chart :config="confBar7"></v-chart>
        <v-chart :config="confBar8"></v-chart>
        <v-chart :config="confBar9"></v-chart>
        <v-chart :config="confBar10"></v-chart>
        <v-chart :config="confBar11"></v-chart>
<!--        <v-chart :config="confBar12">-->
<!--            <p>数据表格</p>-->
<!--            <table id="datatable">-->
<!--                <thead>-->
<!--                <tr>-->
<!--                    <th></th>-->
<!--                    <th>小张</th>-->
<!--                    <th>小潘</th>-->
<!--                </tr>-->
<!--                </thead>-->
<!--                <tbody>-->
<!--                <tr>-->
<!--                    <th>苹果</th>-->
<!--                    <td>3</td>-->
<!--                    <td>4</td>-->
<!--                </tr>-->
<!--                <tr>-->
<!--                    <th>梨</th>-->
<!--                    <td>2</td>-->
<!--                    <td>0</td>-->
<!--                </tr>-->
<!--                <tr>-->
<!--                    <th>葡萄</th>-->
<!--                    <td>5</td>-->
<!--                    <td>1</td>-->
<!--                </tr>-->
<!--                <tr>-->
<!--                    <th>香蕉</th>-->
<!--                    <td>1</td>-->
<!--                    <td>1</td>-->
<!--                </tr>-->
<!--                <tr>-->
<!--                    <th>橘子</th>-->
<!--                    <td>2</td>-->
<!--                    <td>4</td>-->
<!--                </tr>-->
<!--                </tbody>-->
<!--            </table>-->
<!--        </v-chart>-->
        <v-chart :config="confBar13"></v-chart>
<!--        <v-chart :config="confBar14"></v-chart>-->
        <v-chart :config="confBar15"></v-chart>
    </div>
</template>

<script>
    var categories = ['0-4', '5-9', '10-14', '15-19',
        '20-24', '25-29', '30-34', '35-39', '40-44',
        '45-49', '50-54', '55-59', '60-64', '65-69',
        '70-74', '75-79', '80-84', '85-89', '90-94',
        '95-99', '100 + '];
    export default {
        name: "bar",
        data () {
            return {
                theme: {
                    type: 'gray'
                },
                confBar1: {
                    chart: {
                        type: 'bar'
                    },
                    title: {
                        text: '各洲不同时间的人口条形图'
                    },
                    subtitle: {
                        text: '基础条形图'
                    },
                    xAxis: {
                        categories: ['非洲', '美洲', '亚洲', '欧洲', '大洋洲'],
                        title: {
                            text: null
                        }
                    },
                    yAxis: {
                        min: 0,
                        title: {
                            text: '人口总量 (百万)',
                            align: 'high'
                        },
                        labels: {
                            overflow: 'justify'
                        }
                    },
                    tooltip: {
                        valueSuffix: ' 百万'
                    },
                    plotOptions: {
                        bar: {
                            dataLabels: {
                                enabled: true,
                                allowOverlap: true // 允许数据标签重叠
                            }
                        }
                    },
                    legend: {
                        layout: 'vertical',
                        align: 'right',
                        verticalAlign: 'top',
                        x: -40,
                        y: 100,
                        floating: true,
                        borderWidth: 1,
                        backgroundColor: '#FFFFFF',
                        shadow: true
                    },
                    series: [{
                        name: '1800 年',
                        data: [107, 31, 635, 203, 2]
                    }, {
                        name: '1900 年',
                        data: [133, 156, 947, 408, 6]
                    }, {
                        name: '2008 年',
                        data: [973, 914, 4054, 732, 34]
                    }]
                },
                confBar2: {
                    chart: {
                        type: 'bar'
                    },
                    title: {
                        text: '堆叠条形图'
                    },
                    subtitle: {
                        text: '堆叠条形图'
                    },
                    xAxis: {
                        categories: ['苹果', '橘子', '梨', '葡萄', '香蕉']
                    },
                    yAxis: {
                        min: 0,
                        title: {
                            text: '水果消费总量'
                        }
                    },
                    legend: {
                        /* 图例显示顺序反转
                         * 这是因为堆叠的顺序默认是反转的，可以设置
                         * yAxis.reversedStacks = false 来达到类似的效果
                         */
                        reversed: true
                    },
                    plotOptions: {
                        series: {
                            stacking: 'normal'
                        }
                    },
                    series: [{
                        name: '小张',
                        data: [5, 3, 4, 7, 2]
                    }, {
                        name: '小彭',
                        data: [2, 2, 3, 2, 1]
                    }, {
                        name: '小潘',
                        data: [3, 4, 4, 2, 5]
                    }]
                },
                confBar3: {
                    chart: {
                        type: 'bar'
                    },
                    title: {
                        text: '2015 年德国人口金字塔'
                    },
                    subtitle: {
                        useHTML: true,
                        text: '人口金字塔条形图'
                    },
                    xAxis: [{
                        categories: categories,
                        reversed: false,
                        labels: {
                            step: 1
                        }
                    }, {
                        // 显示在右侧的镜像 xAxis （通过 linkedTo 与第一个 xAxis 关联）
                        opposite: true,
                        reversed: false,
                        categories: categories,
                        linkedTo: 0,
                        labels: {
                            step: 1
                        }
                    }],
                    yAxis: {
                        title: {
                            text: null
                        },
                        labels: {
                            formatter: function () {
                                return (Math.abs(this.value) / 1000000) + 'M';
                            }
                        },
                        min: -4000000,
                        max: 4000000
                    },
                    plotOptions: {
                        series: {
                            stacking: 'normal'
                        }
                    },
                    tooltip: {
                        // formatter: function () {
                        //     return '<b>' + this.series.name + ', age ' + this.point.category + '</b><br/>' +
                        //         '人口: ' + Highcharts.numberFormat(Math.abs(this.point.y), 0);
                        // }
                    },
                    series: [{
                        name: '男',
                        data: [-1746181, -1884428, -2089758, -2222362, -2537431, -2507081, -2443179,
                            -2664537, -3556505, -3680231, -3143062, -2721122, -2229181, -2227768,
                            -2176300, -1329968, -836804, -354784, -90569, -28367, -3878]
                    }, {
                        name: '女',
                        data: [1656154, 1787564, 1981671, 2108575, 2403438, 2366003, 2301402, 2519874,
                            3360596, 3493473, 3050775, 2759560, 2304444, 2426504, 2568938, 1785638,
                            1447162, 1005011, 330870, 130632, 21208]
                    }]
                },
                confBar4: {
                    chart: {
                        type: 'column'
                    },
                    title: {
                        text: '月平均降雨量'
                    },
                    subtitle: {
                        text: '基础柱状图'
                    },
                    xAxis: {
                        categories: [
                            '一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'
                        ],
                        crosshair: true
                    },
                    yAxis: {
                        min: 0,
                        title: {
                            text: '降雨量 (mm)'
                        }
                    },
                    tooltip: {
                        // head + 每个 point + footer 拼接成完整的 table
                        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                            '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
                        footerFormat: '</table>',
                        shared: true,
                        useHTML: true
                    },
                    plotOptions: {
                        column: {
                            borderWidth: 0
                        }
                    },
                    series: [{
                        name: '东京',
                        data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
                    }, {
                        name: '纽约',
                        data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]
                    }, {
                        name: '伦敦',
                        data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]
                    }, {
                        name: '柏林',
                        data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]
                    }]
                },
                confBar5: {
                    chart: {
                        type: 'column'
                    },
                    title: {
                        text: '水果消费图'
                    },
                    subtitle: {
                        text: '包含负值的柱形图'
                    },
                    xAxis: {
                        categories: ['苹果', '橘子', '梨', '葡萄', '香蕉']
                    },
                    series: [{
                        name: '小张',
                        data: [5, 3, 4, 7, 2]
                    }, {
                        name: '小彭',
                        data: [2, -2, -3, 2, 1]
                    }, {
                        name: '小潘',
                        data: [3, 4, 4, -2, 5]
                    }]
                },
                confBar6: {
                    chart: {
                        type: 'column'
                    },
                    title: {
                        text: '水果消费总量图'
                    },
                    subtitle: {
                        text: '堆叠柱形图'
                    },
                    xAxis: {
                        categories: ['苹果', '橘子', '梨', '葡萄', '香蕉']
                    },
                    yAxis: {
                        min: 0,
                        title: {
                            text: '水果消费总量'
                        },
                        stackLabels: {  // 堆叠数据标签
                            enabled: true,
                            style: {
                                fontWeight: 'bold',
                                color: 'gray'
                            }
                        }
                    },
                    legend: {
                        align: 'right',
                        x: -30,
                        verticalAlign: 'top',
                        y: 25,
                        floating: true,
                        backgroundColor: 'white',
                        borderColor: '#CCC',
                        borderWidth: 1,
                        shadow: false
                    },
                    tooltip: {
                        formatter: function () {
                            return '<b>' + this.x + '</b><br/>' +
                                this.series.name + ': ' + this.y + '<br/>' +
                                '总量: ' + this.point.stackTotal;
                        }
                    },
                    plotOptions: {
                        column: {
                            stacking: 'normal',
                            dataLabels: {
                                enabled: true,
                                color: 'white',
                                style: {
                                    // 如果不需要数据标签阴影，可以将 textOutline 设置为 'none'
                                    textOutline: '1px 1px black'
                                }
                            }
                        }
                    },
                    series: [{
                        name: '小张',
                        data: [5, 3, 4, 7, 2]
                    }, {
                        name: '小彭',
                        data: [2, 2, 3, 2, 1]
                    }, {
                        name: '小潘',
                        data: [3, 4, 4, 2, 5]
                    }]
                },
                confBar7: {
                    chart: {
                        type: 'column'
                    },
                    title: {
                        text: '按性别划分的水果消费总量'
                    },
                    subtitle: {
                        text: '分组堆叠柱状图'
                    },
                    xAxis: {
                        categories: ['苹果', '橘子', '梨', '葡萄', '香蕉']
                    },
                    yAxis: {
                        allowDecimals: false,
                        min: 0,
                        title: {
                            text: '水果数量'
                        }
                    },
                    tooltip: {
                        formatter: function () {
                            return '<b>' + this.x + '</b><br/>' +
                                this.series.name + ': ' + this.y + '<br/>' +
                                '总量: ' + this.point.stackTotal;
                        }
                    },
                    plotOptions: {
                        column: {
                            stacking: 'normal'
                        }
                    },
                    series: [{
                        name: '小张',
                        data: [5, 3, 4, 7, 2],
                        stack: 'male' // stack 值相同的为同一组
                    }, {
                        name: '小潘',
                        data: [3, 4, 4, 2, 5],
                        stack: 'male'
                    }, {
                        name: '小彭',
                        data: [2, 5, 6, 2, 1],
                        stack: 'female'
                    }, {
                        name: '小王',
                        data: [3, 0, 4, 4, 3],
                        stack: 'female'
                    }]
                },
                confBar8: {
                    chart: {
                        type: 'column'
                    },
                    title: {
                        text: '水果消费柱形图'
                    },
                    subtitle: {
                        text: '百分比堆叠柱状图'
                    },
                    xAxis: {
                        categories: ['苹果', '橘子', '梨', '葡萄', '香蕉']
                    },
                    yAxis: {
                        min: 0,
                        title: {
                            text: '水果消费总量'
                        }
                    },
                    tooltip: {
                        pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b>' +
                            '({point.percentage:.0f}%)<br/>',
                        //:.0f 表示保留 0 位小数，详见教程：https://www.hcharts.cn/docs/basic-labels-string-formatting
                        shared: true
                    },
                    plotOptions: {
                        column: {
                            stacking: 'percent'
                        }
                    },
                    series: [{
                        name: '小张',
                        data: [5, 3, 4, 7, 2]
                    }, {
                        name: '小彭',
                        data: [2, 2, 3, 2, 1]
                    }, {
                        name: '小潘',
                        data: [3, 4, 4, 2, 5]
                    }]
                },
                confBar9: {
                    chart: {
                        type: 'column'
                    },
                    title: {
                        text: '全球各大城市人口排行'
                    },
                    subtitle: {
                        text: '坐标轴标签旋转的柱状图'
                    },
                    xAxis: {
                        type: 'category',
                        labels: {
                            rotation: -45  // 设置轴标签旋转角度
                        }
                    },
                    yAxis: {
                        min: 0,
                        title: {
                            text: '人口 (百万)'
                        }
                    },
                    legend: {
                        enabled: false
                    },
                    tooltip: {
                        pointFormat: '人口总量: <b>{point.y:.1f} 百万</b>'
                    },
                    series: [{
                        name: '总人口',
                        data: [
                            ['上海', 24.25],
                            ['卡拉奇', 23.50],
                            ['北京', 21.51],
                            ['德里', 16.78],
                            ['拉各斯', 16.06],
                            ['天津', 15.20],
                            ['伊斯坦布尔', 14.16],
                            ['东京', 13.51],
                            ['广州', 13.08],
                            ['孟买', 12.44],
                            ['莫斯科', 12.19],
                            ['圣保罗', 12.03],
                            ['深圳', 10.46],
                            ['雅加达', 10.07],
                            ['拉合尔', 10.05],
                            ['首尔', 9.99],
                            ['武汉', 9.78],
                            ['金沙萨', 9.73],
                            ['开罗', 9.27],
                            ['墨西哥', 8.87]
                        ],
                        dataLabels: {
                            enabled: true,
                            rotation: -90,
                            color: '#FFFFFF',
                            align: 'right',
                            format: '{point.y:.1f}', // :.1f 为保留 1 位小数
                            y: 10
                        }
                    }]
                },
                confBar10: {
                    chart: {
                        type: 'column'
                    },
                    title: {
                        text: '2015年1月-5月，各浏览器的市场份额'
                    },
                    subtitle: {
                        text: '可下钻的柱状图'
                    },
                    xAxis: {
                        type: 'category'
                    },
                    yAxis: {
                        title: {
                            text: '总的市场份额'
                        }
                    },
                    legend: {
                        enabled: false
                    },
                    plotOptions: {
                        series: {
                            borderWidth: 0,
                            dataLabels: {
                                enabled: true,
                                format: '{point.y:.1f}%'
                            }
                        }
                    },
                    tooltip: {
                        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
                    },
                    series: [{
                        name: '浏览器品牌',
                        colorByPoint: true,
                        data: [{
                            name: 'Microsoft Internet Explorer',
                            y: 56.33,
                            drilldown: 'Microsoft Internet Explorer'
                        }, {
                            name: 'Chrome',
                            y: 24.03,
                            drilldown: 'Chrome'
                        }, {
                            name: 'Firefox',
                            y: 10.38,
                            drilldown: 'Firefox'
                        }, {
                            name: 'Safari',
                            y: 4.77,
                            drilldown: 'Safari'
                        }, {
                            name: 'Opera',
                            y: 0.91,
                            drilldown: 'Opera'
                        }, {
                            name: 'Proprietary or Undetectable',
                            y: 0.2,
                            drilldown: null
                        }]
                    }],
                    drilldown: {
                        series: [{
                            name: 'Microsoft Internet Explorer',
                            id: 'Microsoft Internet Explorer',
                            data: [
                                [
                                    'v11.0',
                                    24.13
                                ],
                                [
                                    'v8.0',
                                    17.2
                                ],
                                [
                                    'v9.0',
                                    8.11
                                ],
                                [
                                    'v10.0',
                                    5.33
                                ],
                                [
                                    'v6.0',
                                    1.06
                                ],
                                [
                                    'v7.0',
                                    0.5
                                ]
                            ]
                        }, {
                            name: 'Chrome',
                            id: 'Chrome',
                            data: [
                                [
                                    'v40.0',
                                    5
                                ],
                                [
                                    'v41.0',
                                    4.32
                                ],
                                [
                                    'v42.0',
                                    3.68
                                ],
                                [
                                    'v39.0',
                                    2.96
                                ],
                                [
                                    'v36.0',
                                    2.53
                                ],
                                [
                                    'v43.0',
                                    1.45
                                ],
                                [
                                    'v31.0',
                                    1.24
                                ],
                                [
                                    'v35.0',
                                    0.85
                                ],
                                [
                                    'v38.0',
                                    0.6
                                ],
                                [
                                    'v32.0',
                                    0.55
                                ],
                                [
                                    'v37.0',
                                    0.38
                                ],
                                [
                                    'v33.0',
                                    0.19
                                ],
                                [
                                    'v34.0',
                                    0.14
                                ],
                                [
                                    'v30.0',
                                    0.14
                                ]
                            ]
                        }, {
                            name: 'Firefox',
                            id: 'Firefox',
                            data: [
                                [
                                    'v35',
                                    2.76
                                ],
                                [
                                    'v36',
                                    2.32
                                ],
                                [
                                    'v37',
                                    2.31
                                ],
                                [
                                    'v34',
                                    1.27
                                ],
                                [
                                    'v38',
                                    1.02
                                ],
                                [
                                    'v31',
                                    0.33
                                ],
                                [
                                    'v33',
                                    0.22
                                ],
                                [
                                    'v32',
                                    0.15
                                ]
                            ]
                        }, {
                            name: 'Safari',
                            id: 'Safari',
                            data: [
                                [
                                    'v8.0',
                                    2.56
                                ],
                                [
                                    'v7.1',
                                    0.77
                                ],
                                [
                                    'v5.1',
                                    0.42
                                ],
                                [
                                    'v5.0',
                                    0.3
                                ],
                                [
                                    'v6.1',
                                    0.29
                                ],
                                [
                                    'v7.0',
                                    0.26
                                ],
                                [
                                    'v6.2',
                                    0.17
                                ]
                            ]
                        }, {
                            name: 'Opera',
                            id: 'Opera',
                            data: [
                                [
                                    'v12.x',
                                    0.34
                                ],
                                [
                                    'v28',
                                    0.24
                                ],
                                [
                                    'v27',
                                    0.17
                                ],
                                [
                                    'v29',
                                    0.16
                                ]
                            ]
                        }]
                    }
                },
                confBar11: {
                    chart: {
                        type: 'column'
                    },
                    title: {
                        text: '分公司效率优化嵌套图'
                    },
                    subtitle: {
                        text: '可嵌套的柱状图'
                    },
                    xAxis: {
                        categories: [
                            '杭州总部',
                            '上海分部',
                            '北京分部'
                        ]
                    },
                    yAxis: [{
                        min: 0,
                        title: {
                            text: '雇员'
                        }
                    }, {
                        title: {
                            text: '利润 (millions)'
                        },
                        opposite: true
                    }],
                    legend: {
                        shadow: false
                    },
                    tooltip: {
                        shared: true
                    },
                    plotOptions: {
                        column: {
                            grouping: false,
                            shadow: false,
                            borderWidth: 0
                        }
                    },
                    series: [{
                        name: '雇员',
                        color: 'rgba(165,170,217,1)',
                        data: [150, 73, 20],
                        pointPadding: 0.3, // 通过 pointPadding 和 pointPlacement 控制柱子位置
                        pointPlacement: -0.2
                    }, {
                        name: '优化的员工',
                        color: 'rgba(126,86,134,.9)',
                        data: [140, 90, 40],
                        pointPadding: 0.4,
                        pointPlacement: -0.2
                    }, {
                        name: '利润',
                        color: 'rgba(248,161,63,1)',
                        data: [183.6, 178.8, 198.5],
                        tooltip: {  // 为当前数据列指定特定的 tooltip 选项
                            valuePrefix: '$',
                            valueSuffix: ' M'
                        },
                        pointPadding: 0.3,
                        pointPlacement: 0.2,
                        yAxis: 1  // 指定数据列所在的 yAxis
                    }, {
                        name: '优化的利润',
                        color: 'rgba(186,60,61,.9)',
                        data: [203.6, 198.8, 208.5],
                        tooltip: {
                            valuePrefix: '$',
                            valueSuffix: ' M'
                        },
                        pointPadding: 0.4,
                        pointPlacement: 0.2,
                        yAxis: 1
                    }]
                },
                confBar12: {
                    data: {
                        table: 'datatable'
                    },
                    chart: {
                        type: 'column'
                    },
                    title: {
                        text: '从 HTML 表格中提取数据并生成图表'
                        // 该功能依赖 data.js 模块，详见https://www.hcharts.cn/docs/data-modules
                    },
                    yAxis: {
                        allowDecimals: false,
                        title: {
                            text: '个',
                            rotation: 0
                        }
                    },
                    tooltip: {
                        formatter: function () {
                            return '<b>' + this.series.name + '</b><br/>' +
                                this.point.y + ' 个' + this.point.name.toLowerCase();
                        }
                    }
                },
                confBar13: {
                    chart: {
                        type: 'columnrange', // columnrange 依赖 highcharts-more.js
                        inverted: true
                    },
                    title: {
                        text: '每月温度变化范围'
                    },
                    subtitle: {
                        text: '柱形范围图'
                    },
                    xAxis: {
                        categories: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
                    },
                    yAxis: {
                        title: {
                            text: '温度 ( °C )'
                        }
                    },
                    tooltip: {
                        valueSuffix: '°C'
                    },
                    plotOptions: {
                        columnrange: {
                            dataLabels: {
                                enabled: true,
                                formatter: function () {
                                    return this.y + '°C';
                                }
                            }
                        }
                    },
                    legend: {
                        enabled: false
                    },
                    series: [{
                        name: '温度',
                        data: [
                            [-9.7, 9.4],
                            [-8.7, 6.5],
                            [-3.5, 9.4],
                            [-1.4, 19.9],
                            [0.0, 22.6],
                            [2.9, 29.5],
                            [9.2, 30.7],
                            [7.3, 26.5],
                            [4.4, 18.0],
                            [-3.1, 11.4],
                            [-5.2, 10.4],
                            [-13.5, 9.8]
                        ]
                    }]
                },
                confBar14: {
                    chart: {
                        type: 'variwide' // varwide 依赖 varwide.js
                    },
                    title: {
                        text: '2016 年欧洲各国人工成本'
                    },
                    subtitle: {
                        text: '可变宽度的柱状图'
                    },
                    xAxis: {
                        type: 'category',
                        title: {
                            text: '* 柱子宽度与 GDP 成正比'
                        }
                    },
                    legend: {
                        enabled: false
                    },
                    series: [{
                        name: '人工成本',
                        data: [
                            ['挪威', 50.2, 335504],
                            ['丹麦', 42, 277339],
                            ['比利时', 39.2, 421611],
                            ['瑞典', 38, 462057],
                            ['法国', 35.6, 2228857],
                            ['荷兰', 34.3, 702641],
                            ['芬兰', 33.2, 215615],
                            ['德国', 33.0, 3144050],
                            ['奥地利', 32.7, 349344],
                            ['爱尔兰', 30.4, 275567],
                            ['意大利', 27.8, 1672438],
                            ['英国', 26.7, 2366911],
                            ['西班牙', 21.3, 1113851],
                            ['希腊', 14.2, 175887],
                            ['葡萄牙', 13.7, 184933],
                            ['捷克共和国', 10.2, 176564],
                            ['波兰', 8.6, 424269],
                            ['罗马尼亚', 5.5, 169578]
                        ],
                        dataLabels: {
                            enabled: true,
                            format: '€{point.y:.0f}'
                        },
                        tooltip: {
                            pointFormat: '人工成本： <b>€ {point.y}/h</b><br>' +
                                'GDP: <b>€ {point.z} 百万</b><br>'
                        },
                        colorByPoint: true
                    }]
                },
                confBar15: {
                    chart: {
                        type: 'columnpyramid'
                    },
                    title: {
                        text: '世界 5 大金字塔'
                    },
                    subtitle: {
                        text: '角锥柱状图'
                    },
                    colors: ['#C79D6D', '#B5927B', '#CE9B84', '#B7A58C', '#C7A58C'],
                    xAxis: {
                        crosshair: true,
                        labels: {
                            style: {
                                fontSize: '14px'
                            }
                        },
                        type: 'category'
                    },
                    yAxis: {
                        min: 0,
                        title: {
                            text: '高度 (m)'
                        }
                    },
                    tooltip: {
                        valueSuffix: ' m'
                    },
                    series: [{
                        name: 'Height',
                        colorByPoint: true,
                        data: [
                            ['Pyramid of Khufu', 138.8],
                            ['Pyramid of Khafre', 136.4],
                            ['Red Pyramid', 104],
                            ['Bent Pyramid', 101.1],
                            ['Pyramid of the Sun', 75]
                        ],
                        showInLegend: false
                    }]
                }
            }
        }
    }
</script>

<style scoped>

</style>