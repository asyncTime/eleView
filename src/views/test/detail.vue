<template>
    <div>
        <input type="button" @click="$store.dispatch('putNews',{id:newsInfo._id,isCollect:newsInfo.isCollect});newsInfo.isCollect = !newsInfo.isCollect" :value="newsInfo.isCollect?'取消收藏':'收藏'">
        详情{{$route.query.id}}
        标题：{{newsInfo.newsTitle}}
        <br/>
        内容：{{newsInfo.newsContext}}
    </div>
</template>

<script>
    import axios from "axios";
    export default {
        name: "detail",
        data(){
          return {
              newsInfo:{}
          }
        },
        async mounted(){
            const res = await axios.get("/newsInfo/"+this.$route.query.id);
            this.newsInfo = res.newsInfo
        }
    }
</script>

<style scoped>

</style>