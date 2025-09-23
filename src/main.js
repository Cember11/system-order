import { createApp } from 'vue'
import {createRouter,createWebHashHistory} from 'vue-router'
import Goods from './components/Goods.vue'
import ShopRate from './components/ShopRate.vue'
import Shoper from './components/Shoper.vue'
 import './style.css'
 import App from './App.vue'
 const router = createRouter({
    history:createWebHashHistory(),
    routes:[
        {
            path:'/',
            redirect: '/goods',
        },
        {
            name:'goods',
            path:'/goods',
            component:Goods
        },
        {
            name:'shoprate',
            path:'/ShopRate',
            component:ShopRate
        },
        {
            name:'shoper',
            path:'/Shoper',
            component:Shoper
        }
    ]
 })
const app=createApp(App)
app.use(router)
app.mount('#app')
