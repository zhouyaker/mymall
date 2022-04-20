import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 弹窗插件
import toast from 'components/common/toast/index.js'

import fastclick from 'fastclick'
import layload from 'vue-lazyload'

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()

Vue.use(toast)
// 解决移动端300ms延迟
fastclick.attach(document.body)
// 图片懒加载 将 :src改为v-load
Vue.use(layload, {
  loading: require('./assets/img/common/loading.gif')
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
