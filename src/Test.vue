<template>
    <div id="app">
        <div id="nav">
            <router-link to="/addNews">增加新闻</router-link>|
            <router-link to="/newsList">新闻列表</router-link>|
            <router-link to="/myNews">我的</router-link>|
        </div>
        <router-view></router-view>
    </div>

</template>

<script>
    export default {
        name: "test"
    }
</script>

<style scoped>

</style>