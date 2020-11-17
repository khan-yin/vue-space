import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('@/components/views/home/Home')
const Category = () => import('@/components/views/category/Category')
const Cart = () => import('@/components/views/cart/Cart')
const Profile = () => import('@/components/views/profile/Profile')
Vue.use(Router)

const routes=[
  {
    path:"",
    redirect: "/home",
  },
  {
    path:"/home",
    components: Home
  },
  {
    path:"/profile",
    components: Profile
  },
  {
    path:"/category",
    components: Category
  },
  {
    path:"/cart",
    components: Cart
  }
]

const router =  new Router({
  routes,
  mode: 'history'
})

export default router