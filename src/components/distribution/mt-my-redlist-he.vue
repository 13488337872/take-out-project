<template>
    <div>
         <div class="he">
            <div class="deng" @click="mtlogin()">
                <router-link to="/mt-my-enterm">
                    <img src="/img/logo.jpg" alt="">
                    <h4 class="loginName">登录/注册</h4>
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
        },
        /**
       * 获取localStorage数据
       * @param {*} key localStorage中的key string
       * @returns localStorage数据 arr
       */
      getDate(key) {
        var str = localStorage.getItem(userId) || "[]";
        var arr = JSON.parse(str);
        return arr;
        conosle.log(arr)
        // let ls = sessionStorage;
      	// $("#username").html(ls.mobile);
      }
    },
    mounted(){
      if(!localStorage.getItem("userId")){
        this.getDate()
      }
    }
}
</script>
<style scoped>
</style>