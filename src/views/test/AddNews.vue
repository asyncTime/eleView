<template>
    <div>
        <form>
            <p>新闻标题：<input v-model="newsForm.newsTitle" type="text"></p>
            <p>新闻内容：<input v-model="newsForm.newsContext" type="text"></p>
            <p><input type="button" value="提交" @click="submitForm"></p>
        </form>
    </div>
</template>

<script>
    import axios from "axios";
    export default {
        name: "add-news",
        data(){
            return {
                newsForm:{
                    newsTitle:"",
                    newsContext:""
                }
            }
        },
        methods:{
            async submitForm(){
                const data = await  this.$store.dispatch("addNews",this.newsForm);
                if(data.ok === 1){
                    this.$router.push("/newsList");
                }
                console.log(data);
                // axios.post("",{})
            }
        }
    }
</script>

<style scoped>

</style>