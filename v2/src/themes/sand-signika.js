export default {
    colors: "#f45b5b #8085e9 #8d4654 #7798BF #aaeeee #ff0066 #eeaaee #55BF3B #DF5353 #7798BF #aaeeee".split(" "),
    chart: {backgroundColor: null, style: {fontFamily: "Signika, serif"}},
    title: {style: {color: "black", fontSize: "16px", fontWeight: "bold"}},
    subtitle: {style: {color: "black"}},
    tooltip: {borderWidth: 0},
    labels: {style: {color: "#6e6e70"}},
    legend: {backgroundColor: "#E0E0E8", itemStyle: {fontWeight: "bold", fontSize: "13px"}},
    xAxis: {labels: {style: {color: "#6e6e70"}}},
    yAxis: {labels: {style: {color: "#6e6e70"}}},
    plotOptions: {series: {shadow: !0}, candlestick: {lineColor: "#404048"}, map: {shadow: !1}},
    navigator: {xAxis: {gridLineColor: "#D0D0D8"}},
    rangeSelector: {
        buttonTheme: {
            fill: "white",
            stroke: "#C0C0C8",
            "stroke-width": 1,
            states: {select: {fill: "#D0D0D8"}}
        }
    },
    scrollbar: {trackBorderColor: "#C0C0C8"}
}