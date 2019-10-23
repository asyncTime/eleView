<template>
    <div>
        <div v-for="item in $store.state.test.newsList">
             <router-link :to="{path:'/detail',query:{id:item._id}}"> {{item.newsTitle}}</router-link>
            <input type="button" @click="$store.dispatch('putNews',{id:item._id,isCollect:item.isCollect})" :value="item.isCollect?'取消收藏':'收藏'">
        </div>
    </div>
</template>

<script>
    export default {
        name: "news-list",
        mounted(){
            this.$store.dispatch("getNews");
        }
    }
</script>

<style scoped>

</style>