import Vue from 'vue'
import Router from 'vue-router'
import Main from '../page/Main'
import Article from '../page/Article'
import Video from '../page/Video'
import Software from '../page/Software'
import Comments from '../page/Comments'
import AboutUs from '../page/AboutUs'
import Details from '../page/Details'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/main',
      name:'Main',
      component:Main,
    },
    {
      path:'/article',
      name:'Article',
      component:Article,
    },
    {
      path:'/video',
      name:'Video',
      component:Video,
    },
    {
      path:'/software',
      name:'Software',
      component:Software,
    },
    {
      path:'/comments',
      name:'Comments',
      component:Comments,
    },
    {
      path:'/aboutus',
      name:'AboutUs',
      component:AboutUs,
    },
    {
      path:'/details',
      name:'Details',
      component:Details,
    },
    {
      path: '/',
      redirect: '/main'
    }

  ]
})
