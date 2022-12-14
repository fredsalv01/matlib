import Vue from 'vue'
import { createPinia, PiniaVuePlugin } from 'pinia'

import App from './App.vue'
import router from './router'
import VueMathjax from 'vue-mathjax'


import './assets/main.css'



Vue.use(PiniaVuePlugin)
Vue.use(VueMathjax)


new Vue({
  router,
  pinia: createPinia(),
  render: (h) => h(App)
}).$mount('#app')
