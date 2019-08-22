import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
Vue.use(VueRouter)
import router from "./router"
import axios from 'axios'
Vue.prototype.$axios = axios;


Vue.config.productionTip = false

new Vue({
  el:"#app",
  axios,
  router, //$router $route
  render: h => h(App)
})
