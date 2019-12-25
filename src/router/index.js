import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '@/view/login/index'
import homeIndex from '@/view/homeIndex'
import twopage from '@/view/twopage'


Vue.use(Router)
Vue.config.debug = true
export default new Router({
    routes: [
        {
            path: '/',
            name: 'homeIndex',
            component: homeIndex
        },
        {
            path: '/login',
            name: 'login',
            component: login
        },
        {
            path: '/twopage',
            name: 'twopage',
            component: twopage
        },
        {
            path: '/HelloWorld',
            name: 'HelloWorld',
            component: HelloWorld
        },
    ]
})
