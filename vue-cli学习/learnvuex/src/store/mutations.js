import {INCREMENT} from './mutation-types'

export default{
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
}