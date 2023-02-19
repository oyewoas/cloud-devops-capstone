import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router/'
import store from './store'
import axios from 'axios'
import './plugins/vuetify'
import BootstrapVue from 'bootstrap-vue'
import VueAxios from 'vue-axios'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'popper.js'
import 'jquery/dist/jquery.min.js'

Vue.use(VueAxios, axios,BootstrapVue)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
