import Vue from 'vue'
import Vuex from 'vuex'
import admin from "./admin"
import shop from "./shop"
import test from "./test"
Vue.use(Vuex)

const state = {
    loading:false,
    pageInfo:{
        pageIndex:1,
        pageSum:1
    }

}
const modules = {
    admin,
    test,
    shop,
    adv:{},
    shopType:{},
    goods:{},
    goodsType:{}
}
const mutations = {
    CHANGE_LOADING(state,bol){
        state.loading = bol;
    },
    //为什么要通过这种方式改变页码值
    /*
    * 服务器响应的有总页数,和当前页
    * 每一次添加数据都需要重新进行刷新获取新的总页数和当前页数
    * 改变vuex的状态pageSum pageIndex
    * */
    CHANGE_PAGE_INFO(state,pageInfo){
        state.pageInfo.pageIndex = pageInfo.pageIndex;
        state.pageInfo.pageSum = pageInfo.pageSum;
    }
}
/*
* 将上面赋值的对象统一暴露
* */
export default new Vuex.Store({
    state,
    mutations,
    actions: {},
    modules
})
