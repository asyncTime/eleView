<template>
    <!--<el-dialog title="添加店铺类别" :visible="shopTypeVisible" @update:visible="fn">-->
    <el-dialog title="添加店铺类别" :visible="shopTypeVisible" @update:visible="v=>$emit('update:shop-type-visible',v)">
    <!--<el-dialog title="添加店铺类别" :visible.sync="shopTypeVisible">-->
        <el-form :model="form">
            <el-form-item label="店铺类别名称" label-width="120px">
                <el-input v-model="form.shopTypeName" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="店铺类别图片" label-width="120px">
                <el-upload
                        class="upload-demo"
                        name="shopTypePic"
                        ref="upload"
                        :on-success="success"
                        :data="form"
                        :headers="{authorization:$store.state.admin.token}"
                        action="/ele/shopType"
                        :auto-upload="false"
                        :multiple="false"
                        :limit="1"
                        list-type="picture">
                    <el-button size="small" type="primary">点击上传</el-button>
                    <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                </el-upload>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="$emit('update:shop-type-visible',false)">取 消</el-button>
            <el-button type="primary" @click="submitShopType">提  交</el-button>
        </div>
    </el-dialog>
</template>

<script>
    export default {
        name: "add-shop-type",
        data(){
            return {
                form:{
                    shopTypeName:""
                }
            }
        },
        // props:["shopTypeVisible"],
        props:{
            shopTypeVisible:{
                type:Boolean,
                default:false
            },

        },
        methods:{
            fn(v){
                this.$emit("update:shop-type-visible",v);
                console.log(v);
            },
            // 提交表单
            submitShopType(){
                this.$refs.upload.submit();
            },
            // 提交完成后的一个钩子
            success(res){
                if(res.ok === 2 || res.ok === 3){
                    this.$store.commit("OUT_LOGIN")
                }else{
                    this.$emit("update:shop-type-visible",false);

                    if(this.$route.name==="shopType")
                        this.$store.dispatch("getShopTypeList");
                    else
                        this.$router.push({name:"shopType"})


                    // if()
                    // console.log(111111111,res);
                }

            }
        }
    }
</script>

<style scoped>

</style>