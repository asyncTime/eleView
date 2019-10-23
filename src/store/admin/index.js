import axios from "axios";
const state = {
    adminName:localStorage.adminName,
    token:localStorage.token,
    adminLog:[],// 管理员登陆日志
}
const mutations = {
    CHANGE_ADMIN_LOG(state,adminLog){
        state.adminLog = adminLog;
    },
    CHANGE_ADMIN_TOKEN(state,{adminName,token}){
        state.adminName = localStorage.adminName =  adminName;
        state.token = localStorage.token = token;
    },
    OUT_LOGIN(state){
        localStorage.clear();
        state.adminName = state.token = null;
    }
}
const actions = {
    // 管理员登陆
    adminLogin({commit},{adminInfo}){
        return new Promise(async (resolve,reject)=>{
            const data = await axios.post("/adminLogin",adminInfo);
            if(data.ok===1){
                commit("CHANGE_ADMIN_TOKEN",data);
                resolve(data);
            }else{
                reject(data);
            }
        })
        // axios.post("/adminLogin",adminInfo)
        //     .then((data)=>{
        //         console.log(data);
        //         commit("CHANGE_ADMIN_TOKEN",data)
        //         vm.$message({
        //             message: '恭喜您登陆成功',
        //             type: 'success'
        //         });
        //         // vm.loading=false;
        //     })
    },
    async getAdminLog({commit},data = {}){
        const {pageIndex} = data;
        // 解构  vue.config.js

        const results = await  axios.get("/adminLog",{
            params:{
                pageIndex
            }
        });
        commit("CHANGE_ADMIN_LOG",results.adminLog);
        commit("CHANGE_PAGE_INFO",results);
    }
}
// 处理与你的管理员相关的操作。
export default {
    state,
    actions,
    mutations
}