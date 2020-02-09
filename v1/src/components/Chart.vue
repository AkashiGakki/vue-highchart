<template>
    <div class="chart" :option="option" :config="config"></div>
</template>

<script>
    import HighCharts from 'highcharts'
    export default {
        name: "Chart",
        props: {
            option: {
                type: Object,
            },
            config: {
                type: Object,
                VueHighcharts: HighCharts
            },
            VueHighcharts: HighCharts
        },
        watch: {
            option() {
                HighCharts.chart(this.$el, this.option);
            }
        },
        mounted () {
            HighCharts.chart(this.$el, this.option)
            // const VueHighcharts = HighCharts
        }
    }
</script>

<style scoped>

</style>