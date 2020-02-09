module.exports = {
    chart: {
        type: 'column'
    },
    title: {
        text: '水果喜好程度图'
    },
    subtitle: {
        text: '包含负值的柱形图 - column'
    },
    xAxis: {
        categories: ['苹果', '橘子', '梨', '葡萄', '香蕉']
    },
    yAxis: {
        title: {
            text: '个数'
        }
    },
    series: [{
        name: 'Akashi',
        data: [5, 3, 4, 7, 2]
    }, {
        name: 'Asuka',
        data: [2, -2, -3, 2, 1]
    }, {
        name: 'Gakki',
        data: [3, 4, 4, -2, 5]
    }],
    credits: {
        enabled: false
    }
}