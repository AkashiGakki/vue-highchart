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
        path: '/area',
        meta: {
            title: 'area'
        },
        component: (resolve) => require(['../views/area.vue'], resolve)
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