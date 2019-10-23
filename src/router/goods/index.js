export default [
    {
        name:"goodsType",
        path:"/goodsType",
        component:()=>import("@/views/goods/GoodsType"),
        meta:{
            isAuthorization:true
        }
    }
]