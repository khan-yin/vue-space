<template>
<div>
    <h2>
        我是home
    </h2>
    <div>
        hahahha
    </div>
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>
    <keep-alive exclude="Profile,User">
<router-view></router-view>
    
    </keep-alive>
    <h2>{{message}}</h2>
</div>
</template>

<script>
export default {
    name: 'Home',
    data() {
        return {
            message:"你好",
            path: "/home/news"
        }
    },
    created () {
        console.log('home created')
    },
    mounted () {
        console.log('home mounted')
    },
    updated () {
        console.log('home updated')
    },
    destroyed () {
        console.log('home destroy')
    },
    activated () {
        this.$router.push(this.path)
    },
    deactivated () {
         console.log('deactivated')
    },
    // beforeRouteLeave:(to, from, next) => {
    //     //has access to `this` component instance}
    //     console.log(this.$route.path)
    //     this.path=this.$route.path
    //     next()
    // },
    methods: {

    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>

</style>
