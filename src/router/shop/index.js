import ShopType from "@/views/shop/ShopType"
import Shop from "@/views/shop/Shop"
export default  [
    {
        name:"shopType",
        path:"/shopType",
        component:ShopType,
        meta:{
            isAuthorization:true
        }
    },{
        name:"shop",
        path:"/shop",
        component:Shop,
        meta:{
            isAuthorization:true
        }
    }
]