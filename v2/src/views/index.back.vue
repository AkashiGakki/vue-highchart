<template>
    <div class="index">
        <!-- <v-chart :config="chartConf" :theme="theme"></v-chart>
        <v-map :config="mapConf"></v-map>
        <v-map :config="worldConf"></v-map> -->
        <v-map :config="chinaMap" :theme="chinaMap.theme"></v-map>
        <!-- <div>{{ this.source }}</div> -->
    </div>
</template>

<script>
    const mapdata = require('../map/china');
    const worlddata = require('../map/world');

    // import mapData from 'vue-highcharts-v2/map/china';
    // import worldData from 'vue-highcharts-v2/map/world';

    var value = {};

    export default {
        name: "index",
        data () {
            return {
                list: {
                    // name: '',
                    // value: '',
                },
                theme: {
                    // type: 'sunset',
                    // type: 'black-white',
                    // chart: {
                    //     backgroundColor: 'black'
                    // },
                    // colorAxis: {
                    //     minColor: '#ccc',
                    //     maxColor: '#222'
                    // }
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
                mapConf: {
                    title: {
                        text: "China_Map"
                    },
                    credits: {
                        enabled: true,
                        href: 'https://akashi_sai.gitee.io',
                        text: 'Akashi_Sai'
                    },
                    series: [{
                        mapData: mapdata,
                        name: 'Province',
                        data: [{
                            name: '北京',
                            value: 2000,
                            rank: 1
                        }, {
                            name: '上海',
                            value: 2100,
                            rank: 2
                        }, {
                            name: '四川',
                            value: 1600,
                            rank: 3
                        }, {
                            name: '广东',
                            value: 1600,
                            rank: 4
                        }],
                        joinBy: 'name'
                    }]
                },
                worldConf: {
                    title: {
                        text: 'World_Map'
                    },
                    series: [{
                        mapData: worlddata,
                        name: 'Country',
                        data: [{
                            name: 'China',
                            value: 1230
                        },{
                            name: 'United States of America',
                            value: 1235
                        },{
                            name: 'Australia',
                            value: 1245
                        },{
                            name: 'Russia',
                            value: 1256
                        }],
                        joinBy: 'name'
                    }],
                    xAxis: {
                        min: -3000,
                        // max: 10500
                    },
                    yAxis: {

                    },
                    mapNavigation: {
                        enabled: true,              // 开启地图导航器，默认是 false
                        enableButtons: true,        // 是否启用缩放按钮
                    },
                    chart: {
                        events: {
                            load () {
                                this.mapZoom(0.4, 10000, -7200)
                            }
                        }
                    }
                },
                chinaMap: {
                    theme: {
                        type: 'sunset'
                    },
                    // 数据范围显示，且显示相应的颜色
                    colorAxis: {
                        dataClasses: [{
                            to: 1,
                            // color: '#d6d6d6',
                        }, {
                            from: 1,
                            to: 9,
                            color: '#f2ab9a',
                        }, {
                            from: 9,
                            to: 99,
                            color: '#f96c4e',
                        }, {
                            from: 99,
                            to: 999,
                            // color: '#f13c10',
                            color: '#e64b45'
                        }, {
                            from: 999,
                            color: '#500b00',
                        }],
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
                        data: value,
                        joinBy: 'name'
                    }]
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
            // var _this = this;
            // this.$axios.get('getOnsInfo?name=disease_h5')
            // .then(function (response) {
            //     // _this.list = JSON.parse(response.data.data);
            //     // console.log(_this.list);
            //     let res = response.data.data;
            //     _this.list = JSON.parse(res).areaTree[0].children;
            //     value = JSON.parse(res).areaTree[0].children;
            //     // for (let i = 0; i < _this.list.length; i++) {
            //     //     _this.list.value = _this.list.total.confirm
            //     // }
            //     // console.log(_this.list)
            //     console.log(value);

            // })
            // .catch(function (error) {
            //     console.log(error);
            // });

            // const httpHandler = this.$axios.create({
            //     headers: {
            //         "Content-Type": "application/json;charset=utf-8",
            //         "access-control-allow-origin": "*"
            //     }, //即将被发送的自定义请求头
            //     withCredentials: true //表示跨域请求时是否需要使用凭证
            // }); 
            // let uri = "/api/weather/city/101030100"; 
            // httpHandler.get(uri)
            // .then(result => { 
            //     console.log(result); 
            //     this.data = result;
            // })
            // .catch(error => { 
            //     console.error(error); 
            // });
        }
    }
</script>

<style scoped>

</style>