<template>
    <el-dialog title="添加商品类别" :visible.sync="dialogFormVisible">
        <el-form ref="myForm" :model="form">
            <el-form-item label="商品类别名称" prop="goodsTypeName" label-width="120px">
                <el-input v-model="form.goodsTypeName" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="所属于的店铺" label-width="120px">
                <!--选择店铺时，从数据库获取数据，渲染到表单框之中-->
                <!--getShopListByTypeId()为什么要加括号-->
                <!--好好看文档，change事件你不改变表单内的数据，只是点击是触发不了的-->
                <el-select v-model="form.shopTypeId"  @change="getShopListByTypeId()" placeholder="请选择店铺类别">
                    <el-option v-for="item in $store.state.shop.allShopTypeList" :label="item.shopTypeName" :value="item._id"></el-option>
                </el-select>
                <el-select v-model="form.shopId">
                    <el-option v-for="item in $store.state.shop.shopListByTypeId" :label="item.shopName" :value="item._id"></el-option>
                </el-select>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="submitForm">提 交</el-button>
        </div>
    </el-dialog>
</template>

<script>
    import axios from "axios";
    export default {
        name: "add-goods-type",
        data(){
            return {
                dialogFormVisible:false,
                form:{
                    goodsTypeName:"",
                    shopId:"",
                    shopTypeId:""
                }
            }
        },
        methods:{
            async submitForm(){
                const data =  await axios.post("/goodsType",this.form)  ;
                console.log(data);
            },
            getShopListByTypeId(shopId=""){
                this.form.shopId = shopId;
                // console.log(123)
                this.$store.dispatch("getShopListByTypeId",{shopTypeId:this.form.shopTypeId})
                // console.log(111111111,this.form.shopTypeId);
            }
        },
        mounted(){
            if(this.$store.state.shop.allShopTypeList.length === 0){

                this.$store.dispatch("getAllShopTypeList")
            }
        }
    }
</script>

<style scoped>

</style>