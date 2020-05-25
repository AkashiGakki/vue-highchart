export default {
    colors: "#7cb5ec #f7a35c #90ee7e #7798BF #aaeeee #ff0066 #eeaaee #55BF3B #DF5353 #7798BF #aaeeee".split(" "),
    chart: {backgroundColor: null, style: {fontFamily: "Dosis, sans-serif"}},
    title: {style: {fontSize: "16px", fontWeight: "bold", textTransform: "uppercase"}},
    tooltip: {borderWidth: 0, backgroundColor: "rgba(219,219,216,0.8)", shadow: !1},
    legend: {backgroundColor: "#F0F0EA", itemStyle: {fontWeight: "bold", fontSize: "13px"}},
    xAxis: {
        gridLineWidth: 1,
        labels: {style: {fontSize: "12px"}}
    },
    yAxis: {
        minorTickInterval: "auto",
        title: {style: {textTransform: "uppercase"}},
        labels: {style: {fontSize: "12px"}}
    },
    plotOptions: {candlestick: {lineColor: "#404048"}}
}