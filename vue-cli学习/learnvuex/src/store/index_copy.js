import Vue from 'vue'
import Vuex from 'vuex'
import {INCREMENT} from './mutation-types'


//安装使用插件
Vue.use(Vuex)

const moduleA ={
    state:{
        name:"zhangshan"
    },
    mutations: {
        updateName(state,payload){
            state.name=payload
        }
    },
    actions: {
        aUpdateName(context){
            console.log(context)
            console.log(context.rootState)
            return new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    context.commit('updateName',"wangwu")
                    resolve('异步改名完成')
                },1000)
            })
        }
    },
    getters: {
        fullname(state){
            return state.name+"111"
        },
        fullname2(state,getters){
            return getters.fullname+"2222"
        },
        fullname3(state,getters,rootState){
            return getters.fullname2+rootState.counter
        }
    }
}

//创建对象
const store = new Vuex.Store({
    state: {
        counter :1000,
        students:[
            {id:110,name:'why',age:18},
            {id:111,name:'kobe',age:24},
            {id:112,name:'james',age:30},
            {id:113,name:'curry',age:10}
        ],
        info:{
            name:"kobe",
            age:40,
            heightL:1.98
        }
    },
    mutations: {
        [INCREMENT](state){
            state.counter++;
        },
        decrement(state){
            state.counter--;
        },
        incrementCount(state,count){
            state.counter+=count
        },
        incrementCount2(state,payload){
            console.log(payload)
            state.counter+=payload.count
        },
        incrementStu(state,stu){
            state.students.push(stu)
        },
        updateinfo(state){
            state.info.name="codexgp"
            // state['address']="洛杉矶"该方法做不到响应式
            Vue.set(state.info,'address','洛杉矶')//将address添加到响应式
            // delete也做不到响应式
            //delete state.info.age
            Vue.delete(state.info,'age')
        },
    },
    actions: {
        //context:上下文
        aupdateinfo(context,payload){
            return new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    context.commit('updateinfo')
                    console.log(payload)
                    resolve('1111')
                },1000)
            })
        }
    },
    getters: {
        powerCounter(state){
            return state.counter* state.counter
        },
        more20stu(state){
            return state.students.filter(s => s.age>=20)
        },
        more20stuLength(state,getters){
            return getters.more20stu.length
        },
        moreAgestu(state){
            return age => state.students.filter(s => s.age>=age)//返回一个函数进行操作，闭包的思想
        }
    },
    modules: {
        a:moduleA
    }
})

export default store