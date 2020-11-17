<template>
<div>
    <div>
        userinfo
    </div>
    <div>
        <h2>{{userId}}</h2>
        <h2>{{$route.params.userid}}</h2>
        <button @click="btnClick">按钮</button>
    </div>
</div>
</template>

<script>
export default {
    name: 'User',
    computed: {
        userId(){
            return this.$route.params.userid
        }
    },
    data() {
        return {

        }
    },
    methods: {
        btnClick(){
            console.log(this.$router)
            console.log(this.$route)
            this.test()//继承自vue的原型
        }
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>

</style>
