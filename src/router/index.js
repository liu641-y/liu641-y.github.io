import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
  
    {
      path: '/game',
      name: 'game',
      component: resolve => require(['@/components/game'], resolve),
     
    },{
      path: '/',
      name: 'first',
      component: resolve => require(['@/components/first'], resolve),
    },{
      path: '/about',
      name: 'about',
      component: resolve => require(['@/components/about'], resolve),
    },{
      path: '/demo',
      name: 'demo',
      component: resolve => require(['@/components/demo'], resolve),
    },{
      path: '/book',
      name: 'book',
      component: resolve => require(['@/components/book'], resolve),
    } 
  ]
})
