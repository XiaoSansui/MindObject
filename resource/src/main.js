// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store'
import moment from 'moment'

Vue.filter('dateformat', function(dataStr, pattern = 'YYYY-MM-DD HH:mm:ss') {
  return moment(dataStr).format(pattern)
})

Vue.use(ElementUI)

Vue.config.productionTip = false


router.afterEach((to,from,next) => {
  if(to.path==='/details'){
    document.getElementById('reset-css').href='static/css/resetHtml.css'
  }else{
    document.getElementById('reset-css').href='static/css/reset.css'
  }
  //每次路由跳转后回到顶部
  window.scrollTo(0,0);
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
