<template>
    <div class="div">
        <div class="menu">
            <ul>
                <!-- 选择左侧菜单栏中的选项后，右侧显示对应类型的商品 -->
                <li class="menu-item" v-for="(item, index) in good" :key="index" @click="selected(item, index)"
                    :class="{ 'text-color': textType === item.type }">
                    <span class="text">{{ item.name }}</span>
                </li>
            </ul>
        </div>
        <div class="foods">
            <ul>
                <li v-for="(item, index) in good" :key="index" class=" food-list-hook">
                    <h1 class="title">{{ item.name }}</h1>
                    <ul class="ul-food">
                        <li class="food" v-for="(food, index) in item.foods" :key="index">
                            <div class="img">
                                <img :src="geturl(food.image)" class="food-img" />
                            </div>
                            <div class="food-div">
                                <h2 class="name">{{ food.name }}</h2>
                                <div class="rate">
                                    <span class="span">月售{{ food.sellCount }}</span>
                                    <span class="span">好评{{ food.rating }}</span>
                                </div>
                                <div class="price">
                                    <span class="money">{{ foodPrice(food.price) }}元
                                    </span>
                                </div>
                                <!-- 向购物车中添加商品或删减购物车中的商品 -->
                                <div class="cartControl-wrapper">
                                    <transition name="fade">
                                        <div class="cart-decrease" v-show="food.count > 0">
                                            <!-- 购物车中此商品的数量加1 -->
                                            <span class="inner iconfont icon-jian" @click="cart(food, 0)"></span>
                                        </div>
                                    </transition>
                                    <transition name="fade">
                                        <span class="cart-count" v-show="food.count > 0">
                                            {{ food.count }}
                                        </span>
                                    </transition>

                                    <!-- 购物车中商品的数量减1 -->
                                    <span class="iconfont icon-jia cart-add" @click="cart(food, 1)"></span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
    <div class="div-cart">
        <!-- 使用Cart组件，并向Cart组件中传递数据cartFoods，监听子组件的事件del -->
        <Cart :cartFoods="cartFoods" @del="del"></Cart>
    </div>

</template>
<script setup>
import Cart from './Cart.vue'					//导入组件Cart
import { onMounted, ref, computed } from 'vue'
import goods from '../assets/json/foods.json'		//导入数据
import { useStore } from 'vuex'
const store = useStore()
const textType = ref(1)						//商品类型，默认为1
const good = ref(goods.goods)					//获取商品数据
const tops = ref([])

//获取图片
const geturl = (image) => {
    return new URL(image, import.meta.url).href
}
//保留小数点后两位
const foodPrice = (price) => { return price.toFixed(2) }
//向购物车中添加商品或删减购物车中的商品
const cart = (food, flag) => {
    if(store.getters.flag){
         for (let i = 0; i < 4; i++) {
        for (let y = 0; y < good.value[i].foods.length; y++) {
            if (good.value[i].foods[y].name == food.name) {
                if (good.value[i].foods[y].count > 0) {
                    if (flag) {				//flag为真,商品数量count加1
                        good.value[i].foods[y].count += 1
                    } else {					//flag为假，商品数量count减1
                        good.value[i].foods[y].count -= 1
                    }
                } else {		//向购物车中添加新的商品，商品数量count值为1
                    good.value[i].foods[y].count = 1
                }
            }
        }
    }
    }else{
        alert('请先登录')
   
}}
//计算加入购物车的商品
const cartFoods = computed(() => {
    let list = []
    for (let i = 0; i < 4; i++) {
        for (let y = 0; y < good.value[i].foods.length; y++) {
            if (good.value[i].foods[y].count >= 1) {
                list.push(good.value[i].foods[y])
            }
        }
    }
    return list
})
//清空购物车中的商品
const del = () => {
    for (let i = 0; i < 4; i++) {
        for (let y = 0; y < good.value[i].foods.length; y++) {
            if (good.value[i].foods[y].count) {
                good.value[i].foods[y].count = 0
            }
        }
    }
}
//初始化高度
const initTops = () => {
    let top = 0
    tops.value.push(top)
    // 收集tops
    let lis = document.querySelectorAll(".food-list-hook")
    for (let i = 0; i < lis.length; i++) {
        let item = lis[i]
        top += item.clientHeight
        tops.value.push(top)
    }
}
//组件挂载之后初始化高度
onMounted(() => {
    initTops()
})
//选择左侧菜单栏中的选项，右侧显示对应类型的商品
const selected = (item, index) => {
    textType.value = item.type
    const scr = tops.value[index]
    document.querySelector('.foods').scrollTop = scr
}
</script>
<style src="../assets/CSS/goods.css" scoped></style>
