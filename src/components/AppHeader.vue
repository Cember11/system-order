<template>
    <div class="header">
        <div class="div-1">
            <!-- 显示商家logo -->
            <div class="box-1">
                <img src="../assets/logo.png" class="img-logo" />
            </div>
            <!-- 商家基本信息 -->
            <div class="div-right">
                <div class="box">
                    <h1>
                        <img src="../assets/brand.png" class="img-title" />
                        <!-- 使用双大括号绑定商家名称 -->
                        <span class="span-1">{{ shop.shopName }}</span>
                    </h1>
                </div>
                <div class="box">
                    <h2>
                        <span class="span-2">{{ shop.shopInfo }}/约{{ shop.
                            deliveryTime }}分钟送达</span>
                    </h2>
                </div>
                <div class="box">
                    <h2>
                        <img src="../assets/decrease.png" class="small-img" />
                        <span class="span-3">支付满30减2</span>
                    </h2>
                </div>
            </div>
        </div>
        <!-- 显示商家公告和登录按钮 -->
        <div class="div-3">
            <div v-show="isLogin" class="login-div">
                <!-- 登录组件并监听自定义事件 upLogin-->
                <transition name="bounce">
                     <Login class="login" @upLogin="upLogin">
                 </Login>
                </transition> 
               
            </div>
            <img src="../assets/bulletin.png" class="img-h4" />
            <h4 class="div-3-h">
                <span class="span-4">{{shop.bulletin}}</span>
            </h4>
            <button class="btn" @click="showLogin">登录</button>
        </div>
    </div>
</template>
<script setup>
import Login from './Login.vue'    //导入登录组件
import { ref } from 'vue'		//导入ref()函数
//使用ref()函数定义响应式对象shop，在其中定义商家的基本信息
const shop = ref({
    shopName: "最好吃的面馆",		//商家名称
    shopInfo: "商家专送",			//商家配送方式
    deliveryTime: 30,				//商家配送时间
    //商家公告
    bulletin: "本店精选优质食材，无污染，无添加，放心进行食用"
})
const isLogin=ref(false)  //定义响应式变量isLogin，表示登录组件的显示与隐藏，初始值为false
//定义showLogin函数，点击登录按钮时调用该函数
const showLogin=()=>{
    console.log('showLogin')
    isLogin.value=true
}
//定义upLogin函数，登录组件取消登录时调用该函数
const upLogin=()=>{
    console.log('upLogin')
    isLogin.value=false
}
</script>
<style src="../assets/CSS/header.css" scoped></style>
