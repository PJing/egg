import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import locale from 'element-ui/lib/locale/lang/en' // lang i18n

import '@/styles/index.scss' // global css

import App from './App'
import router from './router'
import store from './store'

import '@/icons' // icon
import '@/permission' // permission control

// axios
import axios from 'axios'
import api from './api/api.js'
axios.defaults.baseURL = "/api"
// Vue.prototype.HOST = '/api'
// axios.defaults.headers.post['content-Type'] = 'application/json;charset=UTF-8';
export const httpPost = (urlKey, params) => axios({
  url: api[urlKey],
  method: 'post',
  data: {
      ...params
  }
})
export const httpGet = (urlKey, params) => axios({
  url: api[urlKey],
  method: 'get',
  params: {
      ...params
  }
})
Vue.prototype.$http = axios;
Vue.prototype.$post = httpPost;
Vue.prototype.$get = httpGet;

// Vue.use(ElementUI, { locale })
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
