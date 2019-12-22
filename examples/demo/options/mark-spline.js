module.exports = {
    chart: {
        type: 'spline'
    },
    title: {
        text: '两地月平均温度'
    },
    subtitle: {
        text: '包含标识的曲线图 - spine'
    },
    xAxis: {
        categories: ['一月', '二月', '三月', '四月', '五月', '六月',
                     '七月', '八月', '九月', '十月', '十一月', '十二月']
    },
    yAxis: {
        title: {
            text: '温度'
        },
        labels: {
            formatter: function () {
                return this.value + '°';
            }
        }
    },
    tooltip: {
        crosshairs: true,
        shared: true
    },
}