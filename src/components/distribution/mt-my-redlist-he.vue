<template>
    <div>
         <div class="he">
            <div class="deng" @click="mtlogin()">
              <img src="/img/logo.jpg" alt="">
              <h4 class="loginName">{{userAiready}}</h4>
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
  data() {
    return {
      userAiready:""
    }
  },
    methods: {
        mtlogin(){
          // 组件中使用post方法
          console.log(!localStorage.getItem("user_tel"))
          if(!localStorage.getItem("user_tel")){
            this.$router.push({path:'/mt-my-enterm'})
          }else{
            this.$router.push({path:"/mt-my-id"})
          }
        },
        /**
       * 获取localStorage数据
       * @param {*} key localStorage中的key string
       * @returns localStorage数据 arr
       */
      getDate() {
        this.userAiready = localStorage.getItem("user_tel")
      }
    },
    mounted(){
      if(!localStorage.getItem("user_tel")){
        this.userAiready = "登录/注册"
      }else{
        this.getDate()
      }
    },
    watch: {
      
    },
}
</script>
<style scoped>
</style>