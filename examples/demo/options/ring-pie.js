module.exports = {
    chart: {
        spacing : [40, 0 , 40, 0]
    },
    title: {
        floating: true,
        y: 170,
        text: '标题居中的环形图'
    },
    subtitle: {
        floating: true,
        y: 190,
        text: '环形图 - pie'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %',
            }
        }
    },
    series: [{
        type: 'pie',
        innerSize: '80%',
        name: '市场份额',
        data: [
            {name:'Firefox',   y: 45.0, url : 'http://bbs.hcharts.cn'},
            ['IE',       26.8],
            {
                name: 'Chrome',
                y: 12.8,
                sliced: true,
                selected: true,
                url: 'http://www.hcharts.cn'
            },
            ['Safari',    8.5],
            ['Opera',     6.2],
            ['其他',   0.7]
        ]
    }],
    credits: {
        enabled: false
    }
}