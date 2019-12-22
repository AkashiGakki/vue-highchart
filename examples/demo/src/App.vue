<template>
  <div id="app">
    <v-chart :option="option"></v-chart>
    <v-map :option="chinaOption"></v-map>
    <v-map :option="worldOption"></v-map>
    <v-chart :option="baseLine"></v-chart>
    <v-chart :option="labelLine"></v-chart>
    <v-chart :option="reverseSpline"></v-chart>
    <v-chart :option="baseArea"></v-chart>
    <v-chart :option="negativeArea"></v-chart>
    <v-chart :option="areaSpline"></v-chart>
    <!-- <v-chart :option="flowArea"></v-chart> -->
    <v-chart :option="baseBar"></v-chart>
    <v-chart :option="compBar"></v-chart>
    <v-chart :option="ppBar"></v-chart>
    <v-chart :option="columnBar"></v-chart>
    <v-chart :option="negativeColumn"></v-chart>
    <v-chart :option="column"></v-chart>
    <!-- <v-chart :option="drillDown"></v-chart> -->
    <v-chart :option="basePie"></v-chart>
    <v-chart :option="fanPie"></v-chart>
    <v-chart :option="ringPie"></v-chart>
    <!-- <v-chart :option="sunPie"></v-chart> -->
  </div>
</template>

<script>
import options from '../options/option'
import chinaOptions from '../options/china-option'
import worldOptions from '../options/world-option'
import baseLines from '../options/base-line'
import labelLines from '../options/label-line'
import reverseSplines from '../options/reverse-spline'
import baseAreas from '../options/base-area'
import negativeAreas from '../options/negative-area'
import areaSplines from '../options/area-spline'
// import flowAreas from '../options/flow-area'
import baseBars from '../options/base-bar'
import compBars from '../options/comp-bar'
import ppBars from '../options/population-pyramid-bar'
import columnBars from '../options/column-bar'
import negativeColumns from '../options/negative-column'
import columns from '../options/column'
// import drillDowns from '../options/drill-down-column'
import basePies from '../options/base-pie'
import fanPies from '../options/fan-pie'
import ringPies from '../options/ring-pie'
// import sunPies from '../options/sun-pie'

export default {
  name: "app",
  components: {},
  data() {
    let option = options
    let chinaOption = chinaOptions
    let worldOption = worldOptions
    let baseLine = baseLines
    let labelLine = labelLines
    let reverseSpline = reverseSplines
    let baseArea = baseAreas
    let negativeArea = negativeAreas
    let areaSpline = areaSplines
    // let flowArea = flowAreas
    let baseBar = baseBars
    let compBar = compBars
    let ppBar = ppBars
    let columnBar = columnBars
    let negativeColumn = negativeColumns
    let column = columns
    // let drillDown = drillDowns
    let basePie = basePies
    let fanPie = fanPies
    let ringPie = ringPies
    // let sunPie = sunPies

    return {
      option: option,
      chinaOption: chinaOption,
      worldOption: worldOption,
      baseLine: baseLine,
      labelLine: labelLine,
      reverseSpline: reverseSpline,
      baseArea: baseArea,
      negativeArea: negativeArea,
      areaSpline: areaSpline,
      // flowArea: flowArea,
      baseBar: baseBar,
      compBar: compBar,
      ppBar: ppBar,
      columnBar: columnBar,
      negativeColumn: negativeColumn,
      column: column,
      // drillDown: drillDown,
      basePie: basePie,
      fanPie: fanPie,
      ringPie: ringPie,
      // sunPie: sunPie
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
