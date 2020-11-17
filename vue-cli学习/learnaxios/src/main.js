import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

//demo
// axios({
//   url:"http://123.207.32.32:8000/home/multidata",
//   method: 'get'
// }).then(res => {
//   console.log(res)
// })

// axios({
//   url:"http://123.207.32.32:8000/home/data",
//   params:{
//     type: "sell",
//     page:3
//   }
// }).then(res =>{
//   console.log(res)
// })

//axios并发请求
// axios.all([axios({
//   url:"http://123.207.32.32:8000/home/multidata"
// }),axios({
//   url:"http://123.207.32.32:8000/home/data",
//   params:{
//     type: "sell",
//     page:3
//   }
// })])
// .then(res =>{
//   console.log(res)
// })

//spread
// axios.all([axios({
//   url:"http://123.207.32.32:8000/home/multidata"
// }),axios({
//   url:"http://123.207.32.32:8000/home/data",
//   params:{
//     type: "sell",
//     page:3
//   }
// })])
// .then(axios.spread((res1,res2)=>{
//   console.log(res1)
//   console.log(res2)
// }))

//全局配置
// axios.defaults.baseURL='http://123.207.32.32:8000'
// axios.defaults.timeout=5000

// axios.all([axios({
//   url:"/home/multidata"
// }),axios({
//   url:"/home/data",
//   params:{
//     type: "sell",
//     page:3
//   }
// })])
// .then(axios.spread((res1,res2)=>{
//   console.log(res1)
//   console.log(res2)
// }))

// axios({
//   url:"/category"
// }).then(res =>{
//   console.log(res)
// })

//创建实例
// const instance1 =axios.create({
//   baseURL:'http://123.207.32.32:8000',
//   timeout:5000
// })

// instance1({
//   url:"/home/multidata"
// }).then(res =>{
//   console.log(res)
// })

// instance1({
//   url:"/home/data",
//   params:{
//     type:'pop',
//     page:1
//   }
// }).then(res =>{
//   console.log(res)
// })

// const instance2=axios.create({
//   baseURL:'http://123.207.32.32:8000',
//   timeout:10000
//   // headers:{}

// })

import {request} from './network/request'

request({
  url:"/home/multidata"
}).then(res =>{
  console.log(res);
}).catch(err =>{
  console.log(err);
})