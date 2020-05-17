<template>
    <div class="index">
        <v-map :config="chinaMap" :theme="chinaMap.theme"></v-map>
        <v-map :config="worldMap" :theme="worldMap.theme"></v-map>
        <div style="width:50%; margin: 30px auto">
            <el-row type="flex" class="row-bg" justify="space-around">
                <el-col :span="4"><div class="grid-content bg-purple">
                    <el-button  size="small" round>
                       <el-link :underline="false" href="/index">index</el-link>
                    </el-button>    
                </div></el-col>
                <el-col :span="4"><div class="grid-content bg-purple">
                    <el-button  size="small" round>
                        <el-link :underline="false" href="/line">line</el-link>
                    </el-button>
                </div></el-col>
                <el-col :span="4"><div class="grid-content bg-purple">
                    <el-button  size="small" round>
                        <el-link :underline="false" href="/area">area</el-link>    
                    </el-button>    
                </div></el-col>
                <el-col :span="4"><div class="grid-content bg-purple">
                    <el-button  size="small" round>
                        <el-link :underline="false" href="/bar">bar</el-link>    
                    </el-button>    
                </div></el-col>
                <el-col :span="4"><div class="grid-content bg-purple">
                    <el-button  size="small" round>
                        <el-link :underline="false" href="/pie">pie</el-link>    
                    </el-button>    
                </div></el-col>
                <el-col :span="4"><div class="grid-content bg-purple">
                    <el-button  size="small" round>
                        <el-link :underline="false" href="/more">more</el-link>    
                    </el-button>    
                </div></el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
    const mapdata = require('../map/china');
    const worlddata = require('../map/world');

    // import mapData from 'vue-highcharts-v2/map/china';
    // import worldData from 'vue-highcharts-v2/map/world';

    export default {
        name: "index",
        data () {
            return {
                list: {
                    // name: '',
                    // value: '',
                },
                chartConf: {
                    chart: {
                        type: 'bar'
                    },
                    title: {
                        text: 'Highcharts_Demo'
                    },
                    xAxis: {
                        categories: ['苹果', '香蕉', '橙子']   // x 轴分类
                    },
                    yAxis: {
                        title: '吃水果个数'                // y 轴标题
                    },
                    series: [{                              // 数据列
                        name: 'Akashi',                        // 数据列名
                        data: [2, 3, 4]                  // 数据
                    }, {
                        name: 'Asuka',
                        data: [5, 7, 3]
                    }],
                },
                chinaMap: {
                    title: {
                        text: "国内累计确诊疫情图",
                        // text: "中国疫情图",
                         style: {
                            fontFamily: "plantc,Consolas, monospace,'Courier New',serif",
                            fontWeight: "bold"
                        }
                    },
                    theme: {
                        type: 'sunset'
                    },
                    // 数据范围显示，且显示相应的颜色
                    colorAxis: {
                        min: 1,
                        max: 1000,
                        maxColor: "#60042E",
                        minColor: "#fffbbe",
                        stops: [
                            [0, '#fffbbe'],
                            [0.2, '#f2ab9a'],
                            [0.4, '#f96c4e'],
                            [0.6, '#e64b45'],
                            [0.8, '#c4463a'],
                            [0.9, '#500b00'],
                        ],
                    },
                    //滑过显示的数据
                    tooltip: {
                        // headerFormat是默认的有显示的格式，所以将它改为空字符串不显示
                        headerFormat: '',
                        pointFormat: '{point.name}<br/>累计确诊 {point.value} 例',
                        backgroundColor: 'rgba(0,0,0,.5)',
                        borderColor: 'null',
                        borderRadius: '10',
                        style: {
                            'color': '#fff',
                        }
                    },
                    series: [{
                        mapData: mapdata,
                        name: '省份',
                        // data: list.areaTree.childern,
                        data: require('../data/map-conf-cn'),
                        joinBy: 'name'
                    }]
                },
                worldMap: {
                    title: {
                        // text: "世界疫情图",
                        text: "世界累计确诊疫情图",
                        style: {
                            fontFamily: "plantc,Consolas, monospace,'Courier New',serif",
                            fontWeight: "bold"
                        }
                    },
                    theme: {
                        type: 'sunset'
                    },
                    // 数据范围显示，且显示相应的颜色
                    colorAxis: {
                        min: 1,
                        max: 10000,
                        minColor: "#fefefc",
                        maxColor: "#162447",
                        stops: [ 
                            [0, '#fefefc'], 
                            [0.2, '#7e97cb'],
                            [0.4, '#718dc6'],
                            [0.6, '#4167b3'],
                            [0.8, '#1f4ca5'],
                            [0.9, '#162447'],
                        ],
                    },
                    //滑过显示的数据
                    tooltip: {
                        // headerFormat是默认的有显示的格式，所以将它改为空字符串不显示
                        headerFormat: '',
                        pointFormat: '{point.country}<br/>累计确诊 {point.value} 例',
                        backgroundColor: 'rgba(0,0,0,.5)',
                        borderColor: 'null',
                        borderRadius: '10',
                        style: {
                            'color': '#fff',
                        }
                    },
                    series: [{
                        mapData: worlddata,
                        // country: '国家',
                        name: '国家',
                        // data: list.areaTree.childern,
                        data: require('../data/map-conf-wd'),
                        joinBy: 'name'
                    }],
                    mapNavigation: {
                        enabled: true,              // 开启地图导航器，默认是 false
                        enableButtons: true,        // 是否启用缩放按钮
                    },
                }
            }
        },
        computed: {

        },
        mounted () {
           
        },
        methods: {

        },
        created () {
            var _this = this;
            this.$axios.get('getOnsInfo?name=disease_h5')
            .then(function (response) {
                // _this.list = JSON.parse(response.data.data);
                // console.log(_this.list);
                let res = response.data.data;
                _this.list = JSON.parse(res).areaTree[0].children;
                value = JSON.parse(res).areaTree[0].children;

                for (let i = 0; i < _this.list.length; i++) {
                    _this.list.value.push(_this.list.total.confirm);
                }

                console.log(_this.list)
                // console.log(value);
            })
            .catch(function (error) {
                console.log(error);
            });
        }
    }
</script>

<style scoped>

</style>