import Vue from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import store from './store/taskStore'
import '@/assets/style.css'

Vue.use(Antd)
Vue.config.productionTip = false

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app')
