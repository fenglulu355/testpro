import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import main from '@/pages/main.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        // echarts
        {
            path: '/echarts',
            name: 'echarts',
            component: main,
            children: [
                // 饼图
                {
                    path: 'pie',
                    name: 'echartspie',
                    component: () => import('../pages/echartsdemo/piedemo.vue')
                },
                // 柱状图
                {
                    path: 'bar',
                    name: 'echartsbar',
                    component: () => import('../pages/echartsdemo/bardemo.vue')
                },
                // echarts综合
                {
                    path: 'other',
                    name: 'other',
                    component: () => import('../pages/SecurityCenter/SecurityCenter.vue')
                },
            ]
        },
        // 测试
        {
            path: '/other',
            name: 'other',
            component: main,
            children: [{
                path: 'test',
                name: 'test',
                component: () => import('../pages/test.vue')

            }]
        },
        // 动画
        {
            path: '/ani',
            name: 'ani',
            component: main,
            children: [
                // 新闻列表无限滚动
                {
                    path: 'lablescolor',
                    name: 'lablescolor',
                    component: () => import('../pages/animate/scroll.vue')
                },
                // 数字滚动
                {
                    path: 'numscolor',
                    name: 'numscolor',
                    component: () => import('../pages/animate/numscroll.vue')
                },
            ],

        },
        // 递归
        {
            path: '/dg',
            name: 'dg',
            component: main,
            children: [
                // 递归组件
                {
                    path: 'zj',
                    name: 'zj',
                    component: () => import('../pages/list/diguizujian/index.vue')
                }
            ],

        },

    ]
})
