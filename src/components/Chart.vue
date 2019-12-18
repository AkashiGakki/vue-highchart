<template>
    <div class="chart" :option="option"></div>
</template>

<script>
    import HighCharts from 'highcharts'
    export default {
        name: "Chart",
        props: {
            option: {
                type: Object
            }
        },
        watch: {
            option() {
                HighCharts.chart(this.$el, this.option);
            }
        },
        mounted () {
            HighCharts.chart(this.$el, this.option)
        }
    }
</script>

<style scoped>

</style>