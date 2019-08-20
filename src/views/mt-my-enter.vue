<template>
  <div class="mt-my-enter">
    <mt-my-enter-top></mt-my-enter-top>
    <mt-my-enter-passdsec v-on:listenTologin="showMsgFrompassd"></mt-my-enter-passdsec>
    <mt-my-enter-art></mt-my-enter-art>
  </div>
</template>

<script>
import mtMyEnterTop from "../components/distribution/mt-my-enter-top";
import mtMyEnterPassdsec from "../components/distribution/mt-my-enter-passdsec";
import mtMyEnterArt from "../components/distribution/mt-my-enter-art";
import { MessageBox } from 'mint-ui';
export default {
  name: "login",
  data: function() {
    return {};
  },
  components: {
    "mt-my-enter-top": mtMyEnterTop,
    "mt-my-enter-passdsec": mtMyEnterPassdsec,
    "mt-my-enter-art": mtMyEnterArt
  },
  methods: {
    // showMsgFrompassd:function(userid,userpwd){
    //   // 组件中使用post方法
    //   this.axios.post('', {})
    //   .then(res => {
    //     // 成功回调
    //     if(res==1){
    //       MessageBox.confirm('',{
    //         message:'登陆成功',
    //         confirmButtonText:'确定',
    //         cancelButtonText:'取消'
    //       }).then(action=>{
    //         if(action=='confirm'){
    //           location.href="http://localhost:8080/#/"
    //         }
    //       }).catch(error=>{
    //         if(error=='cancel'){
              
    //         }
    //       });
    //     }
    //   }, res => {
    //     // 错误回调

    //   })
    // }
  }
};
</script>

<style scoped>
@import url("../assets/css/pdlogin.css");
.mt-my-enter {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.mt-my-passg {
  height: 100%;
  background: #fff;
}
.mt-my-art {
  height: 100%;
  background: #fff;
}

</style>
