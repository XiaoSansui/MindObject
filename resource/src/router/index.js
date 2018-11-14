import Vue from 'vue'
import Router from 'vue-router'
import mainPage from '../page/mainPage'
import login from '../page/login'
import workBench from '../components/workBench'
import userList from '../components/userList'
import addUser from '../components/addUser'
import NewsList from '../components/NewsList'
import releaseNews from '../components/releaseNews'
import addClassifyNews from '../components/addClassifyNews'
import classifyNews from '../components/classifyNews'
import Install from '../components/install'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/login',
      name:'Login',
      component:login,
    },

    {
      path: '/mainpage',
      name:'mainPage',
      component: mainPage,
      children:[
        {
          path:'workBench',
          name:'WorkBench',
          component:workBench
        },
        {
          path:'userlist',
          name:'userList',
          component:userList
        },
        {
          path:'adduser',
          name:'addUser',
          component:addUser
        },
        {
          path:'newslist',
          name:'NewsList',
          component:NewsList
        },
        {
          path:'releasenews',
          name:'releaseNews',
          component:releaseNews
        },
        {
          path:'addclassifynews',
          name:'addClassifyNews',
          component:addClassifyNews
        },
        {
          path:'classifynews',
          name:'classifyNews',
          component:classifyNews
        },
        {
          path:'install',
          name:'Install',
          component:Install
        },
      ]
    },
    {
      path: '/',
      redirect: '/login'
    }
  ]
})
