<template>
    <div>
        <div class="toolbar">
            <el-form :inline="true"  class="demo-form-inline">
                <el-form-item>
                    <el-button type="success" @click="shopTypeVisible = true">添加店铺类别</el-button>
                    <!--<el-button type="success" @click="$refs.addShopType.shopTypeVisible = true">添加店铺类别</el-button>-->
                </el-form-item>
            </el-form>
        </div>

        <!--<div v-for="item in $store.state.admin.adminLog">-->
            <!--<div>{{item.adminName}}{{item.createTime}}</div>-->
        <!--</div>-->


        <el-table
                v-loading = "$store.state.loading"
                :border = "true"
                :data="$store.state.admin.adminLog"
                style="width: 100%">
            <el-table-column
                    label="登陆时间"
                    width="200">
                <template slot-scope="scope">
                    <i style="color:red;" class="el-icon-odometer"></i>
                    <span style="margin-left: 10px">{{scope.row.createTime | date}}</span>
                </template>
            </el-table-column>
            <el-table-column label="管理员">
                <template slot-scope="scope">
                    {{scope.row.adminName}}
                </template>
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button  size="mini">编辑</el-button>
                    <el-button  size="mini"   type="danger" >删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <div class="toolbar">
            <Pagination actions-name="getAdminLog"></Pagination>
            <!--<el-pagination-->
                    <!--background-->
                    <!--:page-count = "$store.state.pageInfo.pageSum"-->
                    <!--@current-change="changeCurrent"-->
                    <!--layout="prev, pager, next"-->
                   <!--&gt;-->
            <!--</el-pagination>-->
        </div>
        <!--为什么这里可以直接使用组件-->
        <AddShopType v-if="shopTypeVisible" :shop-type-visible.sync="shopTypeVisible"></AddShopType>
    </div>
</template>

<script>
    export default {
        name: "admin-log",
        data(){
            return {
                shopTypeVisible:false
            }
        }
        // data(){
        //     return {
        //         currentPage:4
        //     }
        // },
        // methods:{
        //     // changeCurrent(pageIndex=1){
        //     //    this.$store.dispatch("getAdminLog",{pageIndex})
        //     // }
        // },
        // mounted(){
        //     // this.$store.dispatch("getAdminLog");
        //     // this.changeCurrent();
        // }
    }
</script>

<style scoped>

</style>