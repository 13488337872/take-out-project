<template>
    <div>
         <div class="he">
            <div class="deng" @click="mtlogin()">
                <router-link to="/login">
                    <img src="/img/logo.jpg" alt="">
                    <h4>登录/注册</h4>
                </router-link>
            </div>
            
            <div class="set">
                <img src="/img/setjpg.jpg" alt="">
                <img src="/img/bell.jpg" alt="">
            </div>
        </div>
    </div>
   
</template>
<script>
export default {
    methods: {
        mtlogin:function(){
          // 组件中使用post方法
          this.axios.post('/login', {
              
          })
          .then(res => {
            // 成功回调
            if(res==1){
              MessageBox.confirm('',{
                message:'登陆成功',
                confirmButtonText:'确定',
                cancelButtonText:'取消'
              }).then(action=>{
                if(action=='confirm'){
                  location.href="http://localhost:8080/#/"
                }
              }).catch(error=>{
                if(error=='cancel'){
                
                }
              });
            }
          }, res => {
            // 错误回调

          })
        }
    },
}
</script>
<style scoped>
</style>