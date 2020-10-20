import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/echarts/pie',
            name: 'echartspie',
            component: () => import('../pages/echartsdemo/piedemo.vue')
        }, {
            path: '/echarts/bar',
            name: 'echartsbar',
            component: () => import('../pages/echartsdemo/bardemo.vue')
        },
        {
            path: '/other',
            name: 'other',
            component: () => import('../pages/SecurityCenter/SecurityCenter.vue')
        },
        // 列表无限滚动
        {
            path: '/lablescolor',
            name: 'lablescolor',
            component: () => import('../pages/animate/scroll.vue')
        },
        // 数字滚动
        {
            path: '/numscolor',
            name: 'numscolor',
            component: () => import('../pages/animate/numscroll.vue')
        }
    ]
})
