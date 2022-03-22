import Vue from 'vue'
import App from './App'
import router from './router'
import anime from 'animejs'
import ElementUI  from 'element-ui'
import less from 'less'
import 'element-ui/lib/theme-chalk/index.css';




import addFunc from 'my-project'
Vue.use(addFunc);
console.log( addFunc,'hs')
Vue.prototype.anime = anime

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(less);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
