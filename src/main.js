import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import Login from "./Login"
import Test from "./Test"
import filters from "@/filters"
import components from "@/components";
import ElementUI from 'element-ui';
import axios from "axios";
import bus from '@/bus'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.use(filters);
Vue.use(components);
Vue.use(bus);
// 请求拦截,可以将请求的配置进行二次处理。
axios.interceptors.request.use(config=>{

    // config 是axios的配置信息.
    // console.log(config);
    if(localStorage.token){
        config.headers = {
            authorization:localStorage.token
        }
    }


    store.commit("CHANGE_LOADING",true);
    config.url = "/ele"+config.url;
    return config;
})
// 响应拦截
axios.interceptors.response.use(({data})=>{
    console.log(44444444);
    // 返回的值即是axios得到的值
    store.commit("CHANGE_LOADING",false);
    if(data.ok === 2 || data.ok === 3){
        store.commit("OUT_LOGIN");
    }else{
        console.log(store)
        return data;
    }


})





Vue.config.productionTip = false

/*
* new Vue({
*   router,
*   store,
*   render:()=>{}
* })
* 这是什么意思：
* Vue的语法，router和store外部引入的一个对象
* */
new Vue({
  router,
  store,
  render: function (h) { return h(store.state.admin.token?App:Login) }
  // render: function (h) { return h(Test) }
}).$mount('#app')
