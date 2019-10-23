<template>
    <div>
        <div class="toolbar">

            <el-form :inline="true"  class="demo-form-inline">
                <el-form-item>
                    <el-input v-model="shopName" placeholder="请输入店铺的名称"></el-input>
                </el-form-item>
                <el-form-item>
                    <!--<el-button @click="search" type="primary">查询</el-button>-->
                    <el-button @click="$bus.$emit('search')" type="primary">查询</el-button>
                </el-form-item>
                <el-form-item>
                    <el-button type="success" @click="$refs.shopCom.dialogFormVisible=true" >添加店铺</el-button>
               </el-form-item>
            </el-form>
        </div>

        <el-table
                v-loading = "$store.state.loading"
                :border = "true"
                :data="$store.state.shop.shopList"
                style="width: 100%">
            <el-table-column label="店铺ID">
                <template slot-scope="scope">
                    {{scope.row._id}}
                </template>
            </el-table-column>
            <el-table-column label="店铺名称">
                <template slot-scope="scope">
                    {{scope.row.shopName}}
                </template>
            </el-table-column>
            <el-table-column label="店铺类别">
                <template slot-scope="scope">
                    {{scope.row.shopTypeName}}
                </template>
            </el-table-column>
            <el-table-column label="店铺图片">
                <template slot-scope="scope">
                    <el-image
                            style="width: 100px; height: 100px"
                            :src="'/ele/'+scope.row.shopPic"
                            :preview-src-list="['/ele/'+scope.row.shopPic]">
                    </el-image>
                    <!--<img :src="'/ele/'+scope.row.shopTypePic" alt="">-->
                </template>
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button  size="mini">编辑</el-button>
                    <el-button  size="mini"   type="danger" >删除</el-button>
                    <el-button  size="mini"   type="danger" @click="addGoodsType(scope.row)">添加商品类别</el-button>
                 </template>
            </el-table-column>
        </el-table>


        <div class="toolbar">
            <Pagination actions-name="getShopList" :key-word="shopName"></Pagination>
        </div>




        <AddShop ref="shopCom"></AddShop>

        <AddGoodsType ref="goodsTypeCom"></AddGoodsType>

    </div>
</template>

<script>
    export default {
        name: "shop",
        data(){
            return {
                shopName:""
            }
        },
        methods:{
            // addGoodsType({shopTypeId,_id}){
            //     this.$refs.goodsTypeCom.form.shopTypeId = shopTypeId;
            //     // this.$refs.goodsTypeCom.form.shopId = _id;
            //     this.$refs.goodsTypeCom.getShopListByTypeId(_id);
            //     this.$refs.goodsTypeCom.dialogFormVisible = true;
            //     // console.log(111111,shopTypeId,_id);
            // }
            search(){
                // 会执行到actions下的getShopList
                console.log(this)
                this.$store.dispatch("getShopList",{
                    keyWord:this.shopName
                });
            }
        }
    }
</script>

<style scoped>

</style>