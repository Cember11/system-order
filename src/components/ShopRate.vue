<template>
    <div class="ratings">
      商家评价
  <div>
    <!-- 商家的综合评价，商品评价模块的顶部 -->
    <div class="ratings-top">
      <div class="overview">
        <div class="overview-left">
          <h1 class="score">4.3</h1>
          <div class="title-rate">综合评分</div>
          <div class="rank">高于周边商家80.2%</div>
        </div>
        <div class="overview-right">
          <div class="score-wrapper">
            <span class="score-title">服务态度</span>
            <div class="star">
              <div class="star-item star-36">
                <span class="star-item-on"></span>
                <span class="star-item-on"></span>
                <span class="star-item-on"></span>
                <span class="star-item-on"></span>
                <span class="star-item-half"></span>
              </div>
            </div>
            <span class="score-score">4.5</span>
          </div>
          <div class="score-wrapper">
            <span class="score-title">商品评分</span>
            <div class="star">
              <div class="star-item star-36">
                <span class="star-item-on"></span>
                <span class="star-item-on"></span>
                <span class="star-item-on"></span>
                <span class="star-item-on"></span>
                <span class="star-item-off"></span>
              </div>
            </div>
            <span class="score-score">4.0</span>
          </div>
        </div>
      </div>
    </div>
    <div class="split"></div>
    <!--根据选择的条件获取相应条件下的商品评价信息 -->
    <div class="ratingselect">
      <div class="rating-type border-1px">
        <!-- 使用v-on指令监听并处理单击事件，使用户选择不同的商品评价类型后，获取相应条件下的商品评价信息；使用v-vind指令为class属性绑定数据，动态切换标签<span>的样式 -->
        <span class="block1 positive" @click="select(2)" :class= "{'select-color':selectType === 2}">全部
          <span class="count">{{ratings.length}}</span>
        </span>
        <span class="block2 positive" @click="select(0)" :class= "{'select-color':selectType === 0}">满意
          <span class="count">{{positive.length}}</span>
        </span>
        <span class="block3 negative" @click="select(1)" :class= "{'select-color1':selectType===1}">吐槽
          <span class="count">{{negative.length}}</span>
        </span>
      </div>
      <div class="switch">
        <i class="iconfont icon-gou" :class="{'on':active}" @click="colorChange"></i>
        <span class="text-rate">只看有内容的评价</span>
      </div>
    </div>
    <!-- 显示商品评价信息 -->
    <div class="rating-wrapper border-1px">
      <ul class="rate-ul">
        <!-- 使用v-for指令循环渲染商品评价信息 -->
       <li v-for="rating in ratings" :key="rating.rateTime" class="rating-item" v-show="ifShow(rating.rateType,rating.text)">
          <div class="avater">
            <img src="../assets/user.png" class="rate-img" />
          </div>
          <div class="content">
            <h1 class="name">{{rating.username}}</h1>
            <div class="star-wrapper-item">
              <div class="star-24">
                <div class="star-item">
                  <span v-for="(itemClass, index) in itemClasses(rating.score)" :key="index" :class="itemClass"></span>
                </div>
              </div>
              <span class="delivery-24" v-show="rating.deliveryTime ">{{rating.deliveryTime}}分钟</span>
            </div>
            <p class="item-text">{{rating.text}}</p>
            <div class="recommend" v-show="rating.recommend && rating.recommend.length">
              <i class="item-iconfont icon-damuzhi"></i>
              <span class="item" v-for="(item, index) in rating.recommend" :key="index">{{ item }}</span>
            </div>
            <div class="time">{{ rating.rateTime}}</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</div>

</template>
<script setup>
import data from '../assets/json/data.json'//导入商品评价的数据
import {computed, ref} from 'vue'
const CLS_ON = 'star-item-on-24'				//有填充颜色的星星
const CLS_HALF = 'star-item-half-24'			//颜色填充一半的星星
const CLS_OFF = 'star-item-off-24'			//没有填充颜色的星星
const LENGTH = 5									//共显示5颗星星
const active = ref(false)
const selectType = ref(2)	  //选择显示的商品评价类型，默认为全部
const onlyContent=ref(false)//是否只查看有内容的评价，默认为false
const ratings = ref(data.ratings)			//商品评价的数据
//获取5颗星星的样式
const itemClasses = (num) =>{
  let result = []
  let score = Math.floor(num * 2) / 2
  let hasDecimal = score % 1 !== 0
  let integer = Math.floor(score)
  for (let i = 0; i < integer; i++) {result.push(CLS_ON)}
  if (hasDecimal) {result.push(CLS_HALF)}
  while (result.length < LENGTH) {result.push(CLS_OFF)}
  return result
}
//切换“只看有内容的评价”前面的形状的颜色
const colorChange = () =>{
  active.value = !active.value
  onlyContent.value = !onlyContent.value
}
//修改选择查看的商品评价类型
const select = (type) =>{selectType.value = type}
//计算对商品满意的商品评价
const positive = computed(() =>{
  return data.ratings.filter((rating) => {
    return rating.rateType === 0
  })
})
//计算对商品不满意的商品评价
const negative = computed(() =>{
  return data.ratings.filter((rating) => {
    return rating.rateType === 1
  })
})
//根据选择的商品评价类型，决定该条评价是否显示
const ifShow = (rateType,text) =>{
  if(onlyContent.value && !text){return false}
  if(selectType.value === 2){
    return true
  } else{return rateType === selectType.value}
}

</script>
<style src="../assets/CSS/shopRate.css" scoped></style>
