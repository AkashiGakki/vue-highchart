module.exports = {
    chart: {
        type: 'areaspline'
    },
    title: {
        text: '全球各大洲人口增长历史及预测'
    },
    subtitle: {
        text: '曲线面积堆叠图 - areaspline'
    },
    xAxis: {
        categories: ['1750', '1800', '1850', '1900', '1950', '1999', '2050'],
        tickmarkPlacement: 'on',
        title: {
            enabled: false
        }
    },
    yAxis: {
        title: {
            text: '十亿'
        },
        labels: {
            formatter: function () {
                return this.value / 1000;
            }
        }
    },
    tooltip: {
        split: true,
        valueSuffix: ' 百万'
    },
    series: [{
        name: '亚洲',
        data: [502, 635, 809, 947, 1402, 3634, 5268]
    }, {
        name: '非洲',
        data: [106, 107, 111, 133, 221, 767, 1766]
    }, {
        name: '欧洲',
        data: [163, 203, 276, 408, 547, 729, 628]
    }, {
        name: '美洲',
        data: [18, 31, 54, 156, 339, 818, 1201]
    }, {
        name: '大洋洲',
        data: [2, 2, 2, 6, 13, 30, 46]
    }],
    credits: {
        enabled: false
    }
}