<template>
    <div id="app">
        <!--    <img alt="Vue logo" src="./assets/logo.png">-->
        <v-chart :option="option"></v-chart>
        <v-map :option="chinaOption"></v-map>
        <v-map :option="worldOption"></v-map>
    </div>
</template>

<script>
    import VChart from './components/Chart'
    import VMap from './components/Map'

    import options from '../options/chart-options'
    import chinaOptions from '../options/map-options-china'
    import worldOptions from '../options/map-options-world'

    export default {
        name: 'app',
        components: {
            VChart,
            VMap
        },
        data() {
            let option = options;
            let chinaOption = chinaOptions;
            let worldOption = worldOptions;
            return {
                option: option,
                chinaOption: chinaOption,
                worldOption: worldOption
            }
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
