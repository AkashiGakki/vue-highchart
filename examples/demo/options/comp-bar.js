module.exports = {
    chart: {
        type: 'bar'
    },
    title: {
        text: '水果消费图'
    },
    subtitle: {
        text: '堆叠条形图 - bar'
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
        reversed: true 
    },
    plotOptions: {
        series: {
            stacking: 'normal'
        }
    },
    series: [{
        name: 'Akashi',
        data: [5, 3, 4, 7, 2]
    }, {
        name: 'Asuka',
        data: [2, 2, 3, 2, 1]
    }, {
        name: 'Gakki',
        data: [3, 4, 4, 2, 5]
    }],
    credits: {
        enabled: false
    }
}