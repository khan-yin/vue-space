export default {
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
}