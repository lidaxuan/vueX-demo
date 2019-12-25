// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store';

import {FetchGet, FetchPost, FetchPut} from '@/axios/index'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import IconSvg from './components/Icon-svg'; // svg 组件
import NProgress from 'nprogress'; // Progress 进度条
import { getToken } from './utils/auth';

Vue.use(ElementUI);
Vue.component('icon-svg', IconSvg)

Vue.prototype.FetchGet = FetchGet;
Vue.prototype.FetchPost = FetchPost;
Vue.prototype.FetchPut = FetchPut;

Vue.config.productionTip = false;

const whiteList = ['/login', '/authredirect']; // 不重定向白名单
router.beforeEach((to, from, next) => {
    NProgress.start(); // 开启Progress
    if (getToken()) { // 判断是否有token
        if (to.path === '/login') {
            next({
                path: '/'
            });
        } else {
            next();
        }
    } else {
        if (whiteList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入
            next()
        } else {
            next('/login'); // 否则全部重定向到登录页
            NProgress.done(); // 在hash模式下 改变手动改变hash 重定向回来 不会触发afterEach 暂时hack方案 ps：history模式下无问题，可删除该行！
        }
    }
});


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
    store,
  render: h => h(App)
})


