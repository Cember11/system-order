<template>
    <div class="header">
        <div class="div-1">
            <div class="box1">
                <img src="../assets/logo.png" class="img-logo">
            </div>
            <div class="div-left">
                <div class="box">
                    <h1>
                        <img src="../assets/brand.png"  class="img-title">
                        <!-- 使用双括号绑定商家名称 -->
                    <span class="span-1">{{ shop.shopName }}</span>
                    </h1>
                </div>
                <div  class="box">
                    <h2>
                    <span class="span-2">{{ shop.shopInfo }}/约{{ shop.deliveryTime }}/分钟送达</span>
                    </h2>
                </div>
                <div class="box">
                    <h2>
                        <img src="../assets/decrease.png" class="small-img">
                        <span class="span-3">支付满30减2</span>
                    </h2>
                </div>
                    
            </div>
            <div class="div-3">
                <img src="../assets/bulletin.png" class="img-4">
                <h4 class="div-3-h">
                    <span class="span-4">{{ shop.shopBulletin }}</span>
                </h4>
            </div>
            <button class="btn">登录</button>
        </div>
    </div>
</template>
<script>
    import {ref} from 'vue'
    const shop = ref({
        shopName: '小店',
        shopInfo: '蜂鸟专送',
        deliveryTime: '10',
        shopBulletin:'满100减10',
    })

</script>
<style src="../assets/css/header.css" scoped> 
</style>
