import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible'
import Vant, { Lazyload } from 'vant'
import 'vant/lib/index.less'
import '@/styles/theme.less'
Vue.use(Lazyload)
Vue.use(Vant)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
