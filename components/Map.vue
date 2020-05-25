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

    import avocado from "../themes/avocado";
    import darkBlue from '../themes/dark-blue';
    import darkGreen from '../themes/dark-green';
    import darkUnica from '../themes/dark-unica';
    import gray from '../themes/gray';
    import grid from '../themes/grid';
    import gridLight from '../themes/grid-light';
    import oliveGreen from '../themes/olive-green';
    import sandSignika from '../themes/sand-signika';
    import skies from "../themes/skies";
    import sunset from "../themes/sunset";

    export default {
        name: "Map",
        props: {
            config: {
                type: Object
            },
            theme: {
                type: Object,
                default: () => ({})
            }
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
                    // theme: this.config.theme.type || null,
                }
            }
        },
        mounted () {
            this.confShow();
            this.useTheme();
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
            useTheme () {
                if (this.theme) {
                    Highcharts.setOptions(this.theme)
                }
                if (this.theme.type === 'avocado') {
                    this.chart = new Highcharts.setOptions(avocado)
                }
                if (this.theme.type === 'dark-blue') {
                    this.chart = new Highcharts.setOptions(darkBlue)
                }
                if (this.theme.type === 'dark-green') {
                    this.chart = new Highcharts.setOptions(darkGreen)
                }
                if (this.theme.type === 'dark-unica') {
                    this.chart = new Highcharts.setOptions(darkUnica)
                }
                if (this.theme.type === 'gray') {
                    this.chart = new Highcharts.setOptions(gray)
                }
                if (this.theme.type === 'grid') {
                    this.chart = new Highcharts.setOptions(grid)
                }
                if (this.theme.type === 'grid-light') {
                    this.chart = new Highcharts.setOptions(gridLight)
                }
                if (this.theme.type === 'olive-green') {
                    this.chart = new Highcharts.setOptions(oliveGreen)
                }
                if (this.theme.type === 'sand-signika') {
                    this.chart = new Highcharts.setOptions(sandSignika)
                }
                if (this.theme.type === 'skies') {
                    this.chart = new Highcharts.setOptions(skies)
                }
                if (this.theme.type === 'sunset') {
                    this.chart = new Highcharts.setOptions(sunset)
                }
            },
        }
    }
</script>

<style scoped>

</style>