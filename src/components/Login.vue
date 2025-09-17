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
 <button type="submit" class="button1" v-bind:disabled="disabled">登录</button>
<button type="submit" class="button2">取消</button>

</template>

<script>
import{ref,computed} from 'vue'
const username=ref('')
const password=ref('')
const disabled=computed(()=>{
    return username.value.length==0||password.value.length==0
})
</script>

<style src="../assets/css/login.css" scoped >
</style>