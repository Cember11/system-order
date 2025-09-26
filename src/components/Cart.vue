<template>
    <div class="shop-cart">
        <div class="shopCart-list" v-show="shopShow">
            <div class="list-header">
                <h1 class="title-cart">购物车</h1>
               <!-- 清空购物车中的商品 -->
                <span class="empty" @click="del()">清空</span>
            </div>
            <div class="list-content">
                <ul class="ul-list">
                    <li class="shopCart-food" v-for="food in cartFoods" :key="food.id" >
                        <span class="name">{{ food.name }}</span>
                        <!-- 计算每个商品的总价 -->
                         <div class="price2">
                            <span>￥{{ foodPrice(food.price*food.count) }}</span>
                         </div>
                    </li>
                </ul>
            </div>
            
        </div>
        <div class="content">
        <div class="content-left">
            <div class="logo-wrapper">
                <div class="logo" :class="{'highlight':cartFoods.length>0}" @click="getList()">
                    <i class="icon-font icon-gowuche" :class="{'highlight2':cartCount}"></i>
                </div>
            </div>
            <!-- 购物车中商品的总价 -->
             <div class="price">{{ price }}</div>
             <div class="desc">另需配送费4元</div>
        </div>
        <div class="content-right">
            <div class="pay">
                {{ price>=20 ? "立即结算":"满20元起送" }}
            </div>
        </div>    
        </div>
    </div>
    <!-- 定义遮罩，显示购物车中的商品时，覆盖其他内容 -->
     <div class="list-mask" v-show="shopShow"></div>
</template>
<script setup>
import { computed, ref } from 'vue'
 const emit=defineEmits(['del']) // 申明自定义事件
 const flag=ref(false)
 const props=defineProps(['cartFoods'])//申明从父组件传递的数据
 const shopShow=computed(()=>{
    return props.cartFoods.length!=0&&flag.value
 })
 //显示购物车隐藏的商品
 const getList=()=>{
    if(props.cartFoods.length!=0){
       flag.value=!flag.value 
    }
 }
 //保留小数点后两位
 const foodPrice=computed(()=>{
    return price.toFixed(2)
 })
 //计算购物车中商品的数量
 const cartCount=computed(()=>{
    return props.cartFoods.length
 })
 //计算购物车中商品总价
 const price=computed(()=>{
    let money=0
    if(props.cartFoods.length>0){
        for(let i=0;i<props.cartFoods.length;i++){
            mon=props.cartFoods[i].price*props.cartFoods[i].count
            money+=mon
        }
    }
    return money.toFixed(2)
 })
 //删除购物车中的商品
 const del=()=>{
    flag.value=false
    emit('del')
 }
</script>
<style src="../assets/css/cart.css" scoped>
</style>