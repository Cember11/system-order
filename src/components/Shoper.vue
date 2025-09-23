<template>
    <div class="shoper">
        <div class="base">
            <h1 class="name">{{shop.name}}</h1>
            <div class="addr">
                <img src="../assets/addr.jpg" class="addr-image" />
                <span class="span-addr">{{ shop.addr }}</span>
                <img src="../assets/phone.jpg" class="phone-image" />
                <span class="span-addr">{{ shop.phone }}</span>
            </div>
          <ul class="base-info">
          <li class="block">
            <h2>起送价格</h2>
            <div class="content">
              <span class="stress">{{shop.min}}</span>元
            </div>
          </li>
          <li class="block">
            <h2>商家配送费</h2>
            <div class="content">
              <span class="stress">{{shop.deliveryMoney}}</span>元
            </div>
          </li>
          <li class="block">
            <h2>平均配送时间</h2>
            <div class="content">
              <span class="stress">{{shop.deliveryTime}}</span>分钟
            </div>
          </li>
        </ul>
        </div>
        <div class="split"></div>
        <div class="info">
            <h1 class="notice">公告</h1>
            <div class="notice-1">
                <p class="notice-info">{{ shop.notice }}</p>
            </div>
            <ul class="list">
                <li class="list-item">
                    <img src="../assets/decrease.png" class="image-jian" />
                    <span class="list-text">{{ shop.decrease }}</span>
                </li>
                <li class="list-item">
                    <img src="../assets/ticket.png" class="small-image" />
                    <span class="list-text">{{ shop.receipt }}</span>
                </li>
                <li class="list-item">
                    <img src="../assets/time.jpg" class="small-image" />
                    <span class="list-text">{{ shop.time }}</span>
                </li>
                <li class="list-item">
                    <img src="../assets/serve.jpg" class="small-image" />
                    <span class="list-text">{{ shop.serve }}</span>
                </li>
                <li class="list-item">
                    <img src="../assets/ensured.png" class="image-ensure" />
                    <span class="list-text">{{ shop.ensure }}</span>
                </li>
            </ul>
        </div>

    </div>

</template>

<script setup>
import {reactive} from 'vue'
    const shop  = reactive({
        name:"最好吃的面馆",
        min:"20.00",
        deliveryMoney:"4.00",
        deliveryTime:30,
        notice:"本店精选优质食材，无污染，无添加，放心进行食用",
        addr:"北京市海淀区华贸路华贸大厦A座1F",
        phone:"157****0419",
        decrease:"支付满30减2，满40减5，满60减8，满80减10",
        receipt:"本店支持开发票，请在订单中备注相关信息",
        time:"营业时间：10:00-21:59（周六、周日为10:00-20:59）",
        serve:"可提前一天预定",
        ensure:"营业执照等相关证件齐全，放心食用"
    })

</script>

<style src="../assets/CSS/shoper.css" scoped>



</style>