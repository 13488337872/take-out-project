<template>
  <section class="mt-my-passg">
    <h1>欢迎登陆美团</h1>

    <!-- 验证码登录 -->
    <div class="section_boxg">
      <div class="section_box_inputg">
        <span>+86</span>
        <span id="section_arrowg">&gt;</span>
        <input type="text" id="mobileNum" v-model="user_tel" name="user_tel" @blur="animateWidth(user_tel)"/>
        <span id="msg_wrong_span" v-if="isShow"></span>
      </div>
      <span class="section_box_span" id="registered" style="color:red">{{msg_wrong_span}}</span>
      <div class="section_message_box">
        <input type="text" id="mssagein" placeholder="请输入验证码" v-model="validcode" name="validcode" />
        
        <span v-show="show" @click="getCode">获取验证码</span>
        <span v-show="!show" class="mtEnterCodeFrame">{{count}}</span>
      </div>
      <span id="mt_message">{{mt_message}}</span>
      <button @click="Login()">登录</button>
    </div>

    <!-- 登录方式 -->
    <div class="section_typeg">
      <router-link to>
        <span>密码登录</span>
      </router-link>
      <span>忘记密码</span>
    </div>
  </section>
</template>
<script>
import $ from "jquery";
import axios from "axios";
export default {
  data() {
    return {
      show: true,
      count: " ",
      timer: null,
      isShow:false,
      mt_message:"",
      msg_wrong_span:""
    };
  },
  methods: {
    //判断手机号是否输入正确
    animateWidth(userid){
      let reg = /^1(3|5|8|4|6|7|9)[0-9]{9}$/i;
      if(reg.test(userid)){
        this.isShow=false
      }else{
        this.isShow=true
      }
    },

    getCode() {
      console.log("11")
      //发送验证码按键函数
      this.$axios({
        method: "post",
        url: "http://39.100.63.237:8000/api/login/",
        data: {
          sendmsg: 1,
          user_tel: this.user_tel
        }
      }).then(res => {
        let rs = res.data;
        console.log(res.data.message);
        this.msg_wrong_span = res.data.message
      });
    },

    Login() {
      //登录按键函数
      this.$axios({
        method: "post",
        url: "http://39.100.63.237:8000/api/login/",
        data: {
          dosubmit: 1,
          user_tel: this.user_tel,
          validcode: this.validcode
        }
      }).then(res => {
        let rs = res.data.status;
        console.log(res.data.info);
        this.mt_message = res.data.info
        localStorage.setItem("user_tel",res.data.info)
        localStorage.setItem("userId",rs)
      });
    }
  }
};
</script>

<style>
#msg_wrong_span{
  font-size:0.12rem;
  color:red;
  margin-top:.12rem;
  margin-left:-.8rem;
}
.mt-my-passg {
  width: 100%;
  /* box-shadow: 0 0 .05rem #e5e5e5; */
  padding-top: 0.53rem;
}
.mt-my-passg h1 {
  font-size: 0.25rem;
  font-weight: 400;
  color: #494949;
  margin-left: 0.4rem;
}
/* 验证码登录 */
.section_boxg {
  padding-top: 0.295rem;
}
.section_box_inputg {
  margin: 0 auto;
  height: 0.32rem;
  width: 2.97rem;
  border-bottom: 1px solid #989898;
}
.section_box_inputg span {
  color: #fdce5a;
  font-size: 0.2rem;
  float: left;
}
#section_arrowg {
  color: #313131;
  font-size: 0.2rem;
  float: left;
  margin-left: 0.1rem;
  margin-right: 0.17rem;
}
.section_box_inputg input {
  float: left;
  height: 0.22rem;
  border: 0;
  outline: none;
}
.mtEnterCodeFrame {
  width: 0.7rem;
  text-align: center;
  color: red;
}
.section_box_span {
  font-size: 0.12rem;
  color: #979797;
  float: left;
  margin: 0.06rem 0 0 0.4rem;
}
.mt-my-passg button {
  height: 0.45rem;
  width: 2.97rem;
  margin: 0.44rem 0 0 0.4rem;
  float: left;
  border: 0;
  background: #ffc132;
  border-radius: 0.22rem;
  color: #040403;
  margin-bottom: 0.32rem;
  font-size: 0.18rem;
  outline:none;
}
#mt_message {
  font-size: 0.1rem;
  color: red;
  float: left;
  margin-left: 0.38rem;
  float: left;
}

/* 登录方式 */
.section_typeg {
  width: 2.97rem;
  margin: 0 auto;
  display: -webkit-flex;
  -webkit-justify-content: space-between;
}
.section_typeg span {
  color: #ffce58;
  font-size: 0.12rem;
  float: left;
}

.section_message_box {
  width: 78.9%;
  margin: 0.46rem auto 0.1rem;
  display: -webkit-flex;
  -webkit-justify-content: space-between;
  height: 0.32rem;
  width: 2.97rem;
  border-bottom: 1px solid #989898;
  position: relative;
}
.section_message_box span {
  position: absolute;
  right: 0;
  line-height: 0.33rem;
}
#mssagein {
  border: 0;
  width: 100%;
  height: 0.32rem;
  border-bottom: 1px solid #989898;
  outline: none;
}
#mssagein::-webkit-input-placeholder {
  color: #fdce5a;
  font-size: 0.16rem;
  border: 0;
  background: 0;
}
.entermsgbtm {
  outline: none;
}
</style>
