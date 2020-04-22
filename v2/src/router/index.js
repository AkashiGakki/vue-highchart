import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'index',
        meta: {
            title: 'vue-highcharts'
        },
        component: (resolve) => require(['../views/index.vue'], resolve)
    }, {
        path: '/line',
        meta: {
            title: 'line'
        },
        component: (resolve) => require(['../views/line.vue'], resolve)
    }, {
        path: '/bar',
        meta: {
            title: 'bar'
        },
        component: (resolve) => require(['../views/bar.vue'], resolve)
    }, {
        path: '/area',
        meta: {
            title: 'area'
        },
        component: (resolve) => require(['../views/area.vue'], resolve)
    }, {
        path: '/pie',
        meta: {
            title: 'pie'
        },
        component: (resolve) => require(['../views/pie.vue'], resolve)
    }, {
        path: '/scatter',
        meta: {
            title: 'scatter'
        },
        component: (resolve) => require(['../views/scatter.vue'], resolve)
    }, {
        path: '/mix',
        meta: {
            title: 'mix'
        },
        component: (resovlve) => require(['../views/mix.vue'], resovlve)
    }, {
        path: '/dynamic',
        meta: {
            title: 'dynamic'
        },
        component: (resolve) => require(['../views/dynamic.vue'], resolve)
    }, {
        path: '/more',
        meta: {
            title: 'more'
        },
        component: (resolve) => require(['../views/more.vue'], resolve)
    }, {
        path: '/table',
        meta: {
            title: 'table'
        },
        component: (resolve) => require(['../views/table.vue'], resolve)
    },{
        path: '/test',
        meta: {
            title: 'test'
        },
        component: (resolve) => require(['../views/test.vue'], resolve)
    }, {
        path: '*',
        redirect: '/'
    }]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    window.document.title = to.meta.title;
    next();
})

router.afterEach((to, from, next) => {
    window.scrollTo(0, 0);
})

export default router