import Vue from 'vue'
import Router from 'vue-router'
import game from '@/components/game'
import first from '@/components/first'
import demo from '@/components/demo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/game',
      name: 'game',
      component: game
    },{
      path: '/',
      name: 'first',
      component: first
    },{
      path: '/demo',
      name: 'demo',
      component: demo
    }
  ]
})
