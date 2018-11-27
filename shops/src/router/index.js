import Vue from 'vue'
import Router from 'vue-router'
import Login from '../pages/Login'
import Business from '../pages/Business'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/business',
      name: 'Business',
      component: Business
    },
    {
      path: '/',
      redirect: '/business'
    }
  ]
})
