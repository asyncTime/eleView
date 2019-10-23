import Vue from 'vue'
/*
* 引入vue-router依赖
* 在new Vue()之前使用Vue.use()方法调用install方法
* */
import Router from 'vue-router'
import Home from '../views/Home.vue'
import admin from "./admin"
import shop from "./shop"
import goods from "./goods"
import store from "@/store"
import test from "@/router/test"
Vue.use(Router)
const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    /*
    * 合并数组es6的新特性
    *
    * */
    routes: [
        ...test,
        ...admin,
        ...goods,
        ...shop,
        ... [
            {
                path: '/',
                name: 'home',
                component: Home
            },
            {
                path: '/about',
                name: 'about',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: function () {
                    return import(/* webpackChunkName: "about" */ '../views/About.vue')
                }
            }
        ]
    ]
})
router.beforeEach((to,from,next)=>{
    if(to.meta.isAuthorization){
        if(localStorage.token){
            next();
        }else{
            store.commit("OUT_LOGIN");
        }
    }else{
        next();
    }

})
export default router;