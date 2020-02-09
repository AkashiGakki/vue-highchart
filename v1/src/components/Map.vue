<template>
    <div class="map"
         :option="option"
         :map="map"></div>
</template>

<script>
    import HighCharts from 'highcharts'
    import HighMaps from 'highcharts/modules/map'
    HighMaps(HighCharts)

    export default {
        name: "Map",
        props: {
            option: {
                type: Object
            },
            map: {
                type: Object
            },
            styles: {
                type: Object
            }
        },
        watch: {
            option () {
                HighCharts.Map(this.$el, this.option, this.map);
            }
        },
        mounted () {
            HighCharts.Map(this.$el, this.option, this.map);
            // this.$el.style.width = (this.styles.width || 800) + 'px';
            // this.$el.style.height = (this.styles.height || 400) + 'px';
        }
    }
</script>

<style scoped>

</style>