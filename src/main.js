import Vue from 'vue'
import App from './App'
import router from './router'
import anime from 'animejs'
import ElementUI from 'element-ui'
import less from 'less'
import axios from 'axios';
import 'element-ui/lib/theme-chalk/index.css';
Vue.prototype.anime = anime
// axios.default.baseURL = 'http://localhost:3000/api/products'
// Vue.prototype.axios = axios
// console.log( this.axios, 'youma')
// Vue.prototype.axios.default.baseURL = 'http://localhost:12300'
Vue.prototype.$http = axios.create({
  baseURL: "http://43.143.169.150:12300/",
  headers: {
    "Content-Type": "application/json" 
  },
});

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(less);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
