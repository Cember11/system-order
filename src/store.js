import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

const store=createStore({
    //在state属性中定义数据
    state:{
        username:'',
        password:''
    },
    //在getters属性中定义计算state属性中数据的方法，并返回新数据
    getters:{
        flag(state){ 
            var flag=false
            if(state.username!=''&&state.password!=''){
                flag=true
            }
            return flag
        }

    },
    //在mutations属性中定义更改state属性中数据的方法
    mutations: {
        //登录成功后将用户信息存储到state属性中
        login(state,payload){
            state.username=payload.username
            state.password=payload.password
        },
        //退出登录后清空state属性中的数据的值
        outLogin(state){
            state.username=''
            state.password=''
        }
    },
    //设置持久化存储方式为sessionStorage
    plugins: [
        createPersistedState({
            storage: window.sessionStorage
        })
    ],
})

export default store