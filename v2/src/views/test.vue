<template>
    <div>
        <v-chart :config="chartConf"></v-chart>
        <v-map :config="chinaConf" :theme="chinaConf.theme"></v-map>
        <v-map :config="worldConf" :theme="worldConf.theme"></v-map>
    </div>
</template>

<script>
const mapData = require('../map/china');
const worldData = require('../map/world');

// import mapData from 'vue-highcharts-v2/map/china';
// import worldData from 'vue-highcharts-v2/map/world';

const series = require('../data/bar.json');
// console.log(series);
export default {
    name: 'test',
    data () {
        return {
            chinaData: null,
            chartConf: {
                 chart: {
                        type: 'bar'
                    },
                    title: {
                        text: series.data.title
                    },
                    xAxis: {
                        categories: series.data.x
                    },
                    series: series.data.y,
            },
            chinaConf: {
                title: {
                    text: '国内累计确诊疫情地图'
                },
                theme: {
                    type: 'sunset'
                },
                //数据范围显示，且显示相应的颜色
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
                    mapData: mapData,
                    name: '省份',
                    data: [{
                        name: '湖北',
                        value: 68128,
                    }, {
                        name: '广东',
                        value: 1582
                    }, {
                        name: '河南',
                        value: 1276
                    }, {
                        name: '浙江',
                        value: 1268
                    }, {
                        name: '香港',
                        value: 1029
                    }, {
                        name: '湖南',
                        value: 1019
                    }, {
                        name: '安徽',
                        value: 991
                    }, {
                        name: '江西',
                        value: 959
                    }, {
                        name: '黑龙江',
                        value: 921
                    }, {
                        name: '山东',
                        value: 787
                    }, {
                        name: '江苏',
                        value: 653
                    }, {
                        name: '上海',
                        value: 639
                    }, {
                        name: '北京',
                        value: 593
                    }, {
                        name: '重庆',
                        value: 579
                    }, {
                        name: '四川',
                        value: 561
                    }, {
                        name: '台湾',
                        value: 425
                    }, {
                        name: '福建',
                        value: 355
                    }, {
                        name: '河北',
                        value: 328
                    }, {
                        name: '陕西',
                        value: 277
                    }, {
                        name: '广西',
                        value: 254
                    }, {
                        name: '山西',
                        value: 197
                    }, {
                        name: '内蒙古',
                        value: 194
                    }, {
                        name: '天津',
                        value: 186
                    }, {
                        name: '云南',
                        value: 184
                    }, {
                        name: '海南',
                        value: 168
                    }, {
                        name: '贵州',
                        value: 147
                    }, {
                        name: '辽宁',
                        value: 146
                    }, {
                        name: '甘肃',
                        value: 139
                    }, {
                        name: '吉林',
                        value: 102
                    }, {
                        name: '新疆',
                        value: 76
                    }, {
                        name: '宁夏',
                        value: 75
                    }, {
                        name: '澳门',
                        value: 45
                    }, {
                        name: '青海',
                        value: 18
                    }, {
                        name: '西藏',
                        value: 1
                    }],
                    joinBy: 'name'
                }]
            },
            worldConf: {
                theme: {
                    type: 'olive-green'
                },
                title: {
                        text: 'World_Map'
                },
                series: [{
                    mapData: worldData,
                    name: 'Country',
                    data: [{
                        name: '中国',
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
                mapNavigation: {
                        enabled: true,              // 开启地图导航器，默认是 false
                        enableButtons: true,        // 是否启用缩放按钮
                    },
            }
        }
    },
    created () {
        // 网易新闻api:https://c.m.163.com/ug/api/wuhan/app/data/list-total?t=
        // 腾讯新闻api:https://api.inews.qq.com/newsqa/v1/automation/foreign/country/ranklist
        // this.$axios.post('https://view.inews.qq.com/g2/getOnsInfo?name=disease_h5')
        var _this = this;
        this.$axios.get('http://lovebridge.migu.cn:18188/api/map?url=http:%2F%2Fgarnetcdn.migu.cn%2Flovebridge.html', 'true')
        .then(function (response) {
            console.log(response.data.data.country[8].province);
            // _this.chinaData = response.data.data.country[8].province;
        })
        .catch(function (error) {
            console.log(error);
        });
    },
    methods: {
        getJsonHandler() {
            return new Promise((resolve, reject) => {
                let ajax = new XMLHttpRequest()
                ajax.open('GET', 'http://lovebridge.migu.cn:18188/api/map?url=http:%2F%2Fgarnetcdn.migu.cn%2Flovebridge.html', 'true')
                ajax.send()
                ajax.onreadystatechange = function (r) {
                    if (ajax.readyState === 4) {
                        if (ajax.status === 200) {
                            resolve(JSON.parse(ajax.response).data.country[0].province)
                        }
                    }
                }
            })
        },
        getPostHandler() {
            this.$axios.get('https://api.inews.qq.com/newsqa/v1/automation/foreign/country/ranklist')
            .then(function (response) {
                // console.log(response);
                const data = response.data;
            })
            .catch(function (error) {
                console.log(error);
            });
        }
    }
}
</script>