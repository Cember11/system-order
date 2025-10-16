import { createApp } from 'vue'
import {createRouter,createWebHashHistory} from 'vue-router'
import Goods from './components/Goods.vue'
import ShopRate from './components/ShopRate.vue'
import Shoper from './components/Shoper.vue'
 import './style.css'
 import App from './App.vue'
 import store from './store.js'
 import axios from 'axios'
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
            name:'ShopRate',
            path:'/ShopRate',
            component:ShopRate
        },
        {
            name:'Shoper',
            path:'/Shoper',
            component:Shoper
        }
    ]
 })
const app=createApp(App)
app.use(router)
axios.defaults.baseURL='http://localhost:3001'
axios.defaults.timeout=3000
app.use(store)
app.mount('#app')
