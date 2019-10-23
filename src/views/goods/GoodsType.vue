<template>
    <div>
        <div  class="toolbar">
            <el-form :inline="true"  class="demo-form-inline">
                <el-form-item>
                    <el-button type="success" @click="$refs.goodsTypeCom.dialogFormVisible=true">添加商品类别</el-button>
                </el-form-item>
            </el-form>
        </div>
        <AddGoodsType ref="goodsTypeCom"></AddGoodsType>
    </div>
</template>

<script>
    export default {
        name: "goods-type"
    }
</script>

<style scoped>

</style>