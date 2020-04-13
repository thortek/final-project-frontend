import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import RestHome from '../views/RestHome.vue'
import Admin from '../views/Admin.vue'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        { 
            path: '/',
            name: "home",
            component: Home
        },
        {
            path: '/rest-home',
            name: "rest-home",
            component: RestHome
        },
        {
            path: '/admin',
            name: "admin",
            component: Admin
        }
    ]
})