// import Pagination from '@/'
const components = {
    Pagination:()=>import("@/components/common/Pagination"),
    AddShopType:()=>import("@/components/dialog/AddShopType"),
    AddShopTypeTwo:()=>import("@/components/dialog/AddShopTypeTwo"),
    AddShop:()=>import("@/components/dialog/AddShop"),
    AddGoodsType:()=>import("@/components/dialog/AddGoodsType"),
}
export default {
    install(Vue){
        for(let key in components){
            Vue.component(key,components[key]);
        }
    }
}