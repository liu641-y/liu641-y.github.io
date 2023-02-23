import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
  
    {
      path: '/gamePage',
      name: 'gamePage',
      component: resolve => require(['@/components/gamePage'], resolve),
     
    },{
      path: '/',
      name: 'index',
      component: resolve => require(['@/components/index'], resolve),
    },{
      path: '/aboutPage',
      name: 'aboutPage',
      component: resolve => require(['@/components/aboutPage'], resolve),
    },{
      path: '/demoPage',
      name: 'demoPage',
      component: resolve => require(['@/components/demoPage'], resolve),
    },{
      path: '/articlePage',
      name: 'articlePage',
      component: resolve => require(['@/components/articlePage'], resolve),
    } ,{
      path: '/lsy',
      name: 'lsy',
      component: resolve => require(['@/components/write'], resolve),
    },{
      path: '/mywx',
      name: 'mywx',
      component: resolve => require(['@/components/mywxPage'], resolve),
    }
  ]
})
