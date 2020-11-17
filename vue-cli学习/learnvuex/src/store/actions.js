export default {
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
}