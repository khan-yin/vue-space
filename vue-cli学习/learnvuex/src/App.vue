<template>
  <div id="app">
    <h2>module的用法</h2>
    <h2>{{$store.state.a.name}}</h2>
    <button @click="updateName">修改名字</button>
    <h2>{{$store.getters.fullname}}</h2>
    <h2>{{$store.getters.fullname2}}</h2>
    <h2>{{$store.getters.fullname3}}</h2>
    <button @click="asyncUpdateName">异步修改名字</button>
    <h2>------info对象的响应式-----</h2>
    <h2>{{$store.state.info}}</h2>
    <button @click="updateinfo">updateinfo</button>
    <h2>------app内容-----</h2>
    <h2>{{message}}</h2>
    <h2>{{$store.state.counter}}</h2>
    <button @click="addtion">+</button>
    <button @click="subtraction">-</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>
    <button @click="addStu">+stu</button>
    <h2>------hello gettters内容-----</h2>
    <h2>{{$store.getters.powerCounter}}</h2>
    <h2>{{more20stu}}</h2>
    <h2>{{$store.getters.more20stuLength}}</h2>
    <h2>-----</h2>
    <h2>{{$store.getters.moreAgestu(14)}}</h2>
    <h2>------hello vuex内容-----</h2>
    <hello-vuex></hello-vuex>
    
  </div>
</template>

<script>
import HelloVuex from './components/HelloVuex'
import {INCREMENT} from './store/mutation-types'

export default {
  name: 'App',
  components: {
    HelloVuex
  },
  data(){
    return {
      message:"我是app组件",
    }
  },
  computed: {
    more20stu(){
      return this.$store.state.students.filter(s => s.age>=30)
    }
  },
  methods: {
    addtion(){
      this.$store.commit(INCREMENT)

    },
    subtraction(){
      this.$store.commit('decrement')
    },
    addCount(count){
      //1.普通的提交方法
      // this.$store.commit('incrementCount',count)
      //2.特殊的提交方法
      console.log(count)
      this.$store.commit({
        type:"incrementCount2",
        count
      })
    },
    addStu(){
      const stu={id:114,name:'whys',age:35}
      this.$store.commit('incrementStu',stu)
    },
    updateinfo(){
      // this.$store.commit('updateinfo') mutation 当中使用
      //下面是action中的异步操作
      this.$store.dispatch('aupdateinfo','我是携带的信息').then(res =>{
        console.log(res)
      })
    },
    updateName(){
      this.$store.commit("updateName","lisi")
    },
    asyncUpdateName(){
      this.$store.dispatch('aUpdateName').then(res=>{console.log(res)})
    }
    
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
