<template>
    <div class="map"></div>
</template>

<script>
    import Highcharts from 'highcharts/highstock';
    import HighchartsMore from 'highcharts/highcharts-more';
    import HighchartsDrilldown from 'highcharts/modules/drilldown';
    import Highcharts3D from 'highcharts/highcharts-3d';
    HighchartsMore(Highcharts);
    HighchartsDrilldown(Highcharts);
    Highcharts3D(Highcharts);

    import HighMaps from 'highcharts/modules/map';
    HighMaps(Highcharts);

    export default {
        name: "Map",
        props: {
            config: {
                type: Object
            },
        },
        data () {
            return {
                options: {
                    title: this.config.title,
                    series: this.config.series,
                    credits:{
                        enabled: false                       // 去除右下角水印
                    }
                },
                // options: {
                //     accessibility: this.config.accessibility | null,// 无障碍设计
                //     // chart: this.config.chart,                       // 图表配置
                //     colors: this.config.colors | null,              // 颜色集合
                //     credits: {                                      // 版权信息
                //         enabled: false,
                //     },
                //     drilldown: this.config.drilldown | null,        // 钻取
                //     exporting: this.config.exporting,               // 导出
                //     labels: this.config.labels | null,              // 标签
                //     legend: this.config.legend | null,              // 图例
                //     loading: this.config.loading,                   // 加载
                //     mapNavigation: this.config.mapNavigation | null,       //
                //     navigation: this.config.navigation,             // 导航
                //     // plotOptions: this.config.plotOptions | null,    // 数据列配置
                //     responsive: this.config.responsive,             // 响应式
                //     series: this.config.series,                     // 数据列
                //     subtitle: this.config.subtitle,                 // 副标题
                //     title: this.config.title,                       // 标题
                //     tooltip: this.config.tooltip | null,            // 数据提示框
                //     xAxis: this.config.xAxis,                       // x 轴
                //     yAxis: this.config.yAxis,                       // y 轴
                // }
            }
        },
        mounted () {
            this.initChart();
        },
        methods: {
            initChart() {
                this.chart = new Highcharts.Map(this.$el, this.options);
            }
        }
    }
</script>

<style scoped>

</style>