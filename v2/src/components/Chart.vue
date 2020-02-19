<template>
    <div class="chart"></div>
</template>

<script>
    import Highcharts from 'highcharts/highstock';
    import HighchartsMore from 'highcharts/highcharts-more';
    import HighchartsDrilldown from 'highcharts/modules/drilldown';
    import Highcharts3D from 'highcharts/highcharts-3d';
    HighchartsMore(Highcharts);
    HighchartsDrilldown(Highcharts);
    Highcharts3D(Highcharts);

    export default {
        name: "Chart",
        props: {
            config: {
                type: Object
            },
        },
        data () {
            return {
                // options: {
                //     chart: {
                //         type: this.config.type
                //     },
                //     title: {
                //         text: this.config.title
                //     },
                //     xAxis: {
                //         title: this.config.xAxis.title
                //     },
                //     yAxis: {
                //         categories: this.config.yAxis.categories
                //     },
                //     series: this.config.series,
                //     credits:{
                //         enabled: false                       // 去除右下角水印
                //     }
                // },
                options: {
                    accessibility: this.config.accessibility | null,    // 无障碍设计
                    chart: this.config.chart,                           // 图表配置
                    // colors: this.config.colors | null,                 // 颜色集合
                    // credits: {                                  // 版权信息
                    //     enabled: false,
                    //     href: this.config.credits.href | null,
                    //     position: this.config.credits.position | null,
                    //     style: this.config.credits.style | null,
                    //     text: this.config.credits.text | null
                    // },
                    data: this.config.data,                             // 数据功能模块
                    drilldown: this.config.drilldown | null,            // 钻取
                    exporting: this.config.exporting,                   // 导出
                    labels: this.config.labels | null,                  // 标签
                    legend: this.config.legend | null,                  // 图例
                    loading: this.config.loading,                       // 加载
                    navigation: this.config.navigation,                 // 导航
                    noData: this.config.noData,                         // 没有数据
                    pane: this.config.pane,                             // 面板配置
                    // plotOptions: this.config.plotOptions | null,// 数据列配置
                    responsive: this.config.responsive,                 // 响应式
                    series: this.config.series,                         // 数据列
                    subtitle: this.config.subtitle,                     // 副标题
                    title: this.config.title,                           // 标题
                    tooltip: this.config.tooltip | null,                // 数据提示框
                    xAxis: this.config.xAxis,                           // x 轴
                    yAxis: this.config.yAxis,                           // y 轴
                    zAxis: this.config.zAxis,                           // z 轴
                }
            }
        },
        mounted () {
            this.initChart();
        },
        methods: {
            initChart() {
                // console.log(this.$el);
                // this.$el.style.width = (this.styles.width || 800) + 'px';
                // this.$el.style.height = (this.styles.height || 400) + 'px';
                this.chart = new Highcharts.Chart(this.$el, this.options);
            }
        }
    }
</script>

<style scoped>

</style>