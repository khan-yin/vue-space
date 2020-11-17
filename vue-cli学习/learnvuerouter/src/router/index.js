import Vue from 'vue'
import VueRouter from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import Home from '@/components/Home'
// import About from '@/components/About'
// import User from '@/components/User'

//懒加载
const Home = () => import('@/components/Home')
const About = () => import('@/components/About')
const User = () => import('@/components/User')
const HomeNews = ()=>import('@/components/HomeNews')
const HomeMessage = ()=>import('@/components/HomeMessage')
const Profile = () =>import('@/components/Profile')

Vue.use(VueRouter)//使用插件

const routes=[
  {
    path: '',
    redirect: '/home',//重定向
  },
  {
    path: '/home',
    meta: { 
      title: "首页" 
    },
    name: 'Home',
    component: Home,
    children:[//路由嵌套
      // {
      //   path: '',
      //   redirect: 'news' 
      // },
      {
        path: 'news',
        component: HomeNews 
      },
      {
        path: 'message',
        component: HomeMessage 
     }

    ]
  },
  {
    path: '/about',
    meta: { 
      title: "关于" 
    },
    name: 'About',
    component: About,
    beforeEnter: (to, from, next) => {
      //to and from are Route Object,next() must be called to resolve the hook}
      console.log('about')
      next()
    }
  },
  {
    path: '/user/:userid',
    meta: { 
      title: "用户" 
    },
    name: 'User',
    component: User
  },
  { 
    path: '/profile',
    meta: { 
      title: "档案" 
    }, 
    component: Profile 
  }
]

const router= new VueRouter({
  routes,
  mode: 'history',
  linkActiveClass: 'active'
})

//前置守卫guard
router.beforeEach((to, from, next) => {
  //to and from are Route Object,next() must be called to resolve the hook}
  document.title=to.matched[0].meta.title
  console.log(to);
  console.log('++++');
  next()
})

//后置钩子hook，不需要调用next函数
router.afterEach( route => {
  //these hooks do not get a next function and cannot affect the navigation}
  console.log('...');
})

//将实例传入Vue实例
export default router