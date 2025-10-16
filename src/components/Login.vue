<template>
<h1>
    登录订餐系统
</h1>
<div class="group">
    <label id="username">账号</label>               
<input type="text" id="username" v-model="username"/>
</div>
<div class="group">
    <label id="password">密码</label>
    <input type="password" id="password" v-model="password"/>
   
</div>
 <button type="button" class="button1" v-bind:disabled="disabled" @click="login">登录</button>
<button type="button" class="button2" @click="upLogin">取消</button>

</template>

<script setup>
import{ref,computed} from 'vue'
const username=ref('')
const password=ref('')
const disabled=computed(()=>{
    return username.value.length==0||password.value.length==0
})
const login=()=>{
    emit('login',{username:username.value,password:password.value})
    alert('登录成功')
}
const emit=defineEmits(['upLogin'])
const upLogin=()=>{
    username.value=''
    password.value=''
    emit('upLogin')
}
</script>

<style src="../assets/css/login.css" scoped >
</style>