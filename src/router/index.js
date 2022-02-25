import Vue from 'vue'
import Router from 'vue-router'
import game from '@/components/game'
import first from '@/components/first'

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
    }
  ]
})
