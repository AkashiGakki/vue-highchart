# vue-highchart

A HighCharts component for Vue.js

## Installation

```js
npm install -S vue-highchart
```

## Usage

You can simply import it and use it.

```js
import Vue from 'vue';
import VueHighcharts from 'vue-highchart';

Vue.use(VueHighcharts);
```

If you want use china-map, world-map or any other [add-on](https://github.com/AkashiGakki/vue-highcharts/tree/master/themes), you should import them on.

```js
import mapData from 'vue-highchart/map/china';
import worldData from 'vue-highchart/map/world';
```

use these components in the template.

```html
<template>
    <div class="index">
        <v-chart :config="chartConf"></v-chart>
        <v-map :config="mapConf"></v-map>
        <v-map :config="worldConf"></v-map>
    </div>
</template>
```

If you want to choose theme, you can use :theme.

```html
<template>
    <div class="index">
        <v-chart :config="chartConf" :theme="theme"></v-chart>
    </div>
</template>
```
