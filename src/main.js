import {createApp} from 'vue'
import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import 'uimini/dist/css/uimini.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from '@/index'

createApp(App)
Vue.use(router)
Vue.use(Vuelidate)
.month('#app')
