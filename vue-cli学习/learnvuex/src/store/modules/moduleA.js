export default {
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