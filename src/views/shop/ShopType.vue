<template>
    <div>
        <div class="toolbar">

            <el-form :inline="true"  class="demo-form-inline">
                <el-form-item>
                    <el-input  placeholder="请输入店铺的类别"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary">查询</el-button>
                </el-form-item>
                <el-form-item>
                    <el-button type="success" @click="shopTypeVisible = true">添加店铺类别</el-button>

                    <!--<el-button type="success" @click="$refs.addShopType.shopTypeVisible = true">添加店铺类别</el-button>-->
                </el-form-item>
            </el-form>
        </div>

        <el-table
                v-loading = "$store.state.loading"
                :border = "true"
                :data="$store.state.shop.shopTypeList"
                style="width: 100%">
            <!--<el-table-column label="类别ID">-->
                <!--<template slot-scope="scope">-->
                    <!--{{scope.row._id}}-->
                <!--</template>-->
            <!--</el-table-column>-->
            <el-table-column label="类别名称">
                <template slot-scope="scope">
                    {{scope.row.shopTypeName}}
                </template>
            </el-table-column>
            <el-table-column label="类别图片">
                <template slot-scope="scope">
                    <el-image
                            style="width: 100px; height: 100px"
                            :src="'/ele/'+scope.row.shopTypePic"
                            :preview-src-list="['/ele/'+scope.row.shopTypePic]">
                    </el-image>
                    <!--<img :src="'/ele/'+scope.row.shopTypePic" alt="">-->
                </template>
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button  size="mini">编辑</el-button>
                    <el-button  size="mini"   type="danger" >删除</el-button>
                    <el-button  size="mini"   type="danger" @click="$refs.shopCom.dialogFormVisible=true;$refs.shopCom.form.shopTypeId=scope.row._id" >添加店铺</el-button>
                    <el-button size="mini"   type="danger" @click="addGoodsType(scope.row._id)">添加商品类别</el-button>
                </template>
            </el-table-column>
        </el-table>
        <div class="toolbar">
            <Pagination actions-name="getShopTypeList"></Pagination>
        </div>








        <!--<AddShopTypeTwo ref="addShopType"></AddShopTypeTwo>-->


        <AddShop ref="shopCom" ></AddShop>
       <AddShopType  v-if="shopTypeVisible" :shop-type-visible.sync="shopTypeVisible"></AddShopType>
        <AddGoodsType ref="goodsTypeCom"></AddGoodsType>
        <!--<el-dialog title="添加店铺类别" :visible.sync="shopTypeVisible">-->
            <!--<el-form :model="form">-->
                <!--<el-form-item label="店铺类别名称" label-width="120px">-->
                    <!--<el-input v-model="form.shopTypeName" autocomplete="off"></el-input>-->
                <!--</el-form-item>-->
                <!--<el-form-item label="店铺类别图片" label-width="120px">-->
                    <!--<el-upload-->
                            <!--class="upload-demo"-->
                            <!--name="shopTypePic"-->
                            <!--ref="upload"-->
                            <!--:on-success="success"-->
                            <!--:data="form"-->
                            <!--:headers="{authorization:$store.state.admin.token}"-->
                            <!--action="/ele/shopType"-->
                            <!--:auto-upload="false"-->
                            <!--:multiple="false"-->
                            <!--:limit="1"-->
                            <!--list-type="picture">-->
                        <!--<el-button size="small" type="primary">点击上传</el-button>-->
                        <!--<div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>-->
                    <!--</el-upload>-->
                <!--</el-form-item>-->
            <!--</el-form>-->
            <!--<div slot="footer" class="dialog-footer">-->
                <!--<el-button @click="shopTypeVisible = false">取 消</el-button>-->
                <!--<el-button type="primary" @click="submitShopType">提  交</el-button>-->
            <!--</div>-->
        <!--</el-dialog>-->

    </div>
</template>

<script>
    export default {
        name: "shop-type",
        data(){
            return {
                url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
                srcList: [
                    'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
                    'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg'
                ],
                shopTypeVisible:false,
                form:{
                    shopTypeName:""
                }
            }
        },
        methods:{
            addGoodsType(shopTypeId){
                this.$refs.goodsTypeCom.form.shopTypeId = shopTypeId;
                // 只是将你的店铺列表进行渲染。并没有选中的值。
                this.$refs.goodsTypeCom.getShopListByTypeId();
                this.$refs.goodsTypeCom.dialogFormVisible = true;
            },
            submitShopType(){
                this.$refs.upload.submit();
            },
            success(res){
                if(res.ok === 2 || res.ok === 3){
                    this.$store.commit("OUT_LOGIN")
                }else{
                    console.log(111111111,res);
                }

            }
        }
    }
</script>

<style scoped>

</style>