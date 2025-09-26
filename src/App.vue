<template>
  <AppHeader></AppHeader>
  <div class="tab border-1px">
    <div class="tab-item">
      <!--定义导航链接，通过to属性设置链接地址-->
      <router-link to="/goods">
        <span class="router-text">商品展示</span>
      </router-link>
    </div>
    <div class="tab-item">
      <router-link to="/ShopRate">
        <span>商品评价</span>
      </router-link>
    </div>
    <div class="tab-item">
      <router-link to="/Shoper">
        <span>商家详情</span>
      </router-link>
    </div>
  </div>
  <div>
    <!--定义路由视图，匹配路由对应的组件将在这里渲染-->
    <router-view ></router-view>
  </div>
</template>
<script setup>
  import AppHeader from './components/AppHeader.vue'
  import { RouterView } from 'vue-router';
</script>
<style src="./assets/CSS/app.css" scoped></style>

