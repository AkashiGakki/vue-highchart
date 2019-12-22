module.exports = {
    chart: {
        // 曲线图
        type: 'spline',
        // 反转
        inverted: true
    },
    title: {
        text: '大气温度和海拔高度关系'
    },
    subtitle: {
        text: '坐标轴反转曲线折线图 - spline'
    },
    xAxis: {
        // 让反转后的 y 轴从 0 开始
        reversed: false,
        title: {
            text: '海拔高度'
        },
        labels: {
			formatter: function () {
				return this.value + 'km';
			}
		},
    },
    yAxis: {
        title: {
            text: '温度'
        },
        labels: {
			formatter: function () {
				return this.value + '°';
			}
		},
		lineWidth: 2
    },
    maxPadding: 0.05,
    // showLastLabel: true,
    // 图示
    legend: {
		enabled: false
    },
    // 数据提示框
    tooltip: {
		headerFormat: '<b>{series.name}</b><br/>',
		pointFormat: '{point.x} km: {point.y}°C'
	},
    series: [{
		name: '温度',
        data: [[0, 15], [10, -50], [20, -56.5], [30, -46.5], [40, -22.1],
                [50, -2.5], [60, -27.7], [70, -55.7], [80, -76.5]]
    }],
    credits: {
        enabled: false
    }
}