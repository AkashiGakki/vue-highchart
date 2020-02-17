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
                    title: {
                        text: this.config.title
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
                this.chart = new Highcharts.Map(this.$el, this.options);
            }
        }
    }
</script>

<style scoped>

</style>