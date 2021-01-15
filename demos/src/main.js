/*
 * @Author: fenglulu
 * @Date: 2020-10-12 10:59:32
 * @LastEditors: fenglulu
 * @LastEditTime: 2020-11-23 16:07:16
 * @FilePath: \demos\src\main.js
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false
Vue.use(ElementUI);

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})
