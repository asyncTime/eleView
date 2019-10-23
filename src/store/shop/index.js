import axios from 'axios';
const state = {
    shopTypeList:[],
    // 存储所有的店铺类别列表
    allShopTypeList:[],
    shopList:[],
    // 根据ID获得的店铺列表
    shopListByTypeId:[]
}
const mutations = {
    CHANGE_SHOPLIST_TYPEID(state,shopListByTypeId){
        state.shopListByTypeId = shopListByTypeId;
    },
    CHANGE_SHOP_TYPE_LIST(state,shopTypeList){
        state.shopTypeList = shopTypeList;
    },
    CHANGE_ALL_SHOP_TYPE_LIST(state,shopTypeList){
        state.allShopTypeList = shopTypeList;
    },
    CHANGE_SHOP_LIST(state,shopList){
        state.shopList = shopList;
    }
}
const actions = {
    async getShopListByTypeId({commit},{shopTypeId}){
        const data = await axios.get("/shopListByTypeId/"+shopTypeId);
        //data输出的是什么
        // console.log(data)
        commit("CHANGE_SHOPLIST_TYPEID",data.shopList)
    },
    async getAllShopTypeList({commit}){
       const data = await axios.get("/allShopType");
       commit("CHANGE_ALL_SHOP_TYPE_LIST",data.shopTypeList)
    },
    async getShopTypeList({commit},data={}){
        const {pageIndex} = data;
        const info = await axios.get("/shopType",{
            params:{
                pageIndex
            }
        });
        commit("CHANGE_SHOP_TYPE_LIST",info.shopTypeList);
        commit("CHANGE_PAGE_INFO",info);
    },
    async getShopList({commit},data={}){
        const {pageIndex=1,keyWord=""} = data;
        const info = await axios.get("/shop",{
            params:{
                pageIndex,
                keyWord
            }
        });
        commit("CHANGE_SHOP_LIST",info.shopList);
        //这句话有什么含义
        commit("CHANGE_PAGE_INFO",info);
    }
};
export default {
    state,
    mutations,
    actions
}