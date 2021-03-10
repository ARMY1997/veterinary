import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Auth/Login'
import Registration from '@/components/Auth/Registration'


export default createRouter({
    history:createWebHistory(),
    routes :[
        { 
            path: '/', 
            name:'Home',
            component: Home 
        },
        { 
            path: './Auth/Login', 
            name:'Login',
            component: Login 
        },
              { 
            path: './Auth/Registration',
            name:'Registration',
            component: Registration 
        }
]
})