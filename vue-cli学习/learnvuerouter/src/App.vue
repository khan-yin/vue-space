<template>
<div id="app">
    <h2>我的app组件</h2>
    <router-link to="/home" tag="button" replace>首页</router-link>
    <router-link to="/about" tag="button" replace>关于</router-link>
    <button @click="userClick">User</button>
    <button @click="profileClick">Profile</button>
    <!-- <router-link :to="'/user/'+userid" tag="button" replace>User</router-link>
    <router-link :to="{path : '/profile',query:{name: 'why' , age: 18, height: 1.88}}" tag="button">档案</router-link> -->
    <router-view></router-view>
<!--<button @click="homeClick">首页</button>
<button @click="aboutClick">关于</button>-->
</div>
</template>

<script>
export default {
    name: 'App',
    data(){
        return{
            userId:'12'
        }
    },
    methods: {
        //通过代码方式修改路由
        homeClick() {
            this.$router.replace('/home')
            console.log('homeClick')
        },
        aboutClick() {
            this.$router.replace('/about')
            console.log('aboutClick')

        },
        userClick(){
            this.$router.push('/user/'+this.userId)
        },
        profileClick(){
            this.$router.push({
                path: '/profile',
                query: {
                    name: 'kobe',
                    age:19,
                    height: 1.87
                }
            })
        }
    },
}
</script>

<style>


.active {
    color: red;
}
</style>
