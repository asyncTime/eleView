import axios from 'axios';
const state ={
    newsList:[]
};
const mutations = {
    CHANGE_NEWS_LIST(state,newsList){
        state.newsList = newsList;
    }
};
const actions = {
    addNews(content,data){
        console.log(22222222);
        return new Promise((resolve,reject)=>{
            console.log(33333);
            axios.post("/addNews",data)
                .then(res=>{
                    console.log(1111111111,res);
                    resolve(res);
                }).catch(err=>{
                    console.log(err);
                })
        })

    },
    async getNews({commit}){
        const data = await  axios.get("/newsList");
        console.log(1111111111,data);
        commit("CHANGE_NEWS_LIST",data.newsList);
    },
    async putNews({commit,dispatch},{id,isCollect}){
        const data = await axios.put("/newsInfo/"+id,{
            isCollect
        })
        dispatch("getNews");

    }
}
export default {
    state,
    mutations,
    actions
}