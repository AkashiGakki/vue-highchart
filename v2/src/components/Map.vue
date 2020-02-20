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
                    subtitle: this.config.subtitle,
                    series: this.config.series,
                    colors: this.config.colors || ['#7cb5ec', '#434348', '#90ed7d', '#f7a35c', '#8085e9',
                        '#f15c80', '#e4d354', '#2b908f', '#f45b5b', '#91e8e1'],
                    credits: {
                        enabled: false
                    },
                }
            }
        },
        mounted () {
            this.confShow();
            this.initChart();
            // this.print();
        },
        computed: {

        },
        methods: {
            initChart () {
                this.chart = new Highcharts.Map(this.$el, this.options);
            },
            print () {
                console.log(this.options);
                console.log(this.config);
            },
            confShow () {
                if (this.config.title) {
                    // console.log(this.options);
                    this.options.title = this.config.title
                }
                if (this.config.subtitle) {
                    this.options.subtitle = this.config.subtitle
                }
                if (this.config.series) {
                    this.options.series = this.config.series
                }
                if (this.config.credits) {
                    this.options.credits = this.config.credits
                }
                if (this.config.accessibility) {
                    this.options.accessibility = this.config.accessibility
                }
                if (this.config.colorAxis) {
                    this.options.colorAxis = this.config.colorAxis
                }
                if (this.config.color) {
                    this.options.colors = this.config.color
                }
                if (this.config.chart) {
                    this.options.chart = this.config.chart
                }
                if (this.config.drilldown) {
                    this.options.drilldown = this.config.drilldown
                }
                if (this.config.exporting) {
                    this.options.exporting = this.config.exporting
                }
                if (this.config.labels) {
                    this.options.labels = this.config.labels
                }
                if (this.config.legend) {
                    this.options.legend = this.config.legend
                }
                if (this.config.loading) {
                    this.options.loading = this.config.loading
                }
                if (this.config.mapNavigation) {
                    this.options.mapNavigation = this.config.mapNavigation
                }
                if (this.config.navigation) {
                    this.options.navigation = this.config.navigation
                }
                if (this.config.plotOptions) {
                    this.options.plotOptions = this.config.plotOptions
                }
                if (this.config.responsive) {
                    this.options.responsive = this.config.responsive
                }
                if (this.config.tooltip) {
                    this.options.tooltip = this.config.tooltip
                }
                if (this.config.xAxis) {
                    this.options.xAxis = this.config.xAxis
                }
                if (this.config.yAxis) {
                    this.options.yAxis = this.config.yAxis
                }
                if (this.config.global) {
                    this.options.global = this.config.global
                }
                if (this.config.lang) {
                    this.options.lang = this.config.lang
                }
            },
        }
    }
</script>

<style scoped>

</style>