/*
  入口JS
*/

import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueLazyLoad from 'vue-lazyload'
import {Button } from 'mint-ui'
import loading from './common/images/loading.gif'

import './filter/index'

import './mock/mockServer'  //加载mockServe即可

Vue.component(Button.name,Button)

Vue.use(VueLazyLoad,{
  loading
})

new Vue({
  el:'#App',
  render:h=>h(App),
  router, //使用上vue-router
  store,   //使用上vuex
})
