<template>
  <div id="app">
    <v-chart :option="option"></v-chart>
    <v-map :option="mapOption"></v-map>
  </div>
</template>

<script>
const map = require("@akashi_sai/vue-highcharts/map/china");
export default {
  name: "app",
  components: {},
  data() {
    return {
      option: {
        chart: {
          type: "bar" //指定图表的类型，默认是折线图（line）
        },
        title: {
          text: "Highcharts_Demo" // 标题
        },
        xAxis: {
          categories: ["苹果", "香蕉", "橙子"] // x 轴分类
        },
        yAxis: {
          title: {
            text: "吃水果个数" // y 轴标题
          }
        },
        series: [
          {
            // 数据列
            name: "Akashi", // 数据列名
            data: [1, 3, 4] // 数据
          },
          {
            name: "Asuka",
            data: [5, 7, 3]
          }
        ],
        credits: {
          enabled: false // 去除右下角水印
        }
      },
      mapOption: {
        title: {
          text: "China_Map"
        },
        series: [
          {
            mapData: map,
            name: "Province",
            data: [
              {
                name: "北京",
                value: 2000,
                rank: 1
              },
              {
                name: "上海",
                value: 1500,
                rank: 2
              },
              {
                name: "四川",
                value: 1600,
                rank: 3
              }
            ],
            joinBy: "name"
          }
        ],
        credits: {
          enabled: false
        }
      }
    };
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
