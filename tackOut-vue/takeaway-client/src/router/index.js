/*
  路由器对象模块
*/
import Vue from 'vue'
import VueRouter from 'vue-router'

// import Msite from '../pages/Msite/Msite'
// import Search from '../pages/Search/Search'
// import Order from '../pages/Order/Order'
// import Profile from '../pages/Profile/Profile'
// import Login from '../pages/Login/Login'

//路由懒加载
const Msite = ()=>import('../pages/Msite/Msite')
const Search = ()=>import('../pages/Search/Search')
const Order = ()=>import('../pages/Order/Order')
const Profile = ()=>import('../pages/Profile/Profile')
const Login = ()=>import('../pages/Login/Login')

import Shop from '../pages/Shop/Shop'
import ShopFoods from '../pages/Shop/ShopFoods/ShopFoods'
import ShopAssess from '../pages/Shop/ShopAssess/ShopAssess'
import ShopInfo from '../pages/Shop/ShopInfo/ShopInfo'

Vue.use(VueRouter)

export default new VueRouter({
  //所有路由
  routes:[
    {
      path:'/msite',
      component:Msite, //返回路由的函数,只有执行此函数才会加载路由组件,这个函数在请求对应的路由路径才会执行
      meta:{
        showFooter:true
      }
    },
    {
      path:'/search',
      component:Search,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/order',
      component:Order,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/profile',
      component:Profile,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/login',
      component:Login
    },
    {
      path:'/',
      redirect:'/msite'
    },
    {
      path:'/shop',
      component:Shop,
      children:[
        {
          path:'foods',
          component:ShopFoods
        },
        {
          path:'assess',
          component:ShopAssess
        },
        {
          path:'info',
          component:ShopInfo
        },
        {
          path:'',
          redirect:'foods'
        },
      ]
    },
  ]
})
