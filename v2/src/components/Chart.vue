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
                options: {
                    chart: {
                        type: this.config.type
                    },
                    title: {
                        text: this.config.title
                    },
                    xAxis: {
                        title: this.config.xAxis.title
                    },
                    yAxis: {
                        categories: this.config.yAxis.categories
                    },
                    series: this.config.series,
                    credits:{
                        enabled: false                       // 去除右下角水印
                    }
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