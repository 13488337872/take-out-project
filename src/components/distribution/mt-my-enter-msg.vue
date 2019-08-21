<template>
  <section class="mt-my-passg">
    <h1>欢迎登陆美团</h1>

    <!-- 验证码登录 -->
    <div class="section_boxg">
      <div class="section_box_inputg">
        <span>+86</span>
        <span id="section_arrowg">></span>
        <input type="text" id="mobileNum" v-model="userId" />
      </div>
      <span class="section_box_span" id="registered"></span>
      <div class="section_message_box">
        <input type="text" id="mssagein" placeholder="请输入验证码" v-model="userpwd" />
        <span v-show="show" @click="getCode">获取验证码</span>
				<span v-show="!show" class="mtEnterCodeFrame">{{count}}</span>
      </div>
      <span id="mt_message">{{ passtishi }}</span>
      <button @click="login()">登录</button>
    </div>

    <!-- 登录方式 -->
    <div class="section_typeg">
      <router-link to="/login">
        <span>密码登录</span>
      </router-link>
      <span>忘记密码</span>
    </div>
  </section>
</template>

<script>
import $ from "jquery";
export default {
  data() {
    return {
      show:true,
      count:" ",
      timer:null,
    };
  },
  methods: {
    getCode(){
      const TIME_COUNT = 60;
      if (!this.timer) {
        this.count = TIME_COUNT;
        this.show = false;
        this.timer = setInterval(() => {
        if (this.count > 0 && this.count <= TIME_COUNT) {
          this.count--;
        } else {
          this.show = true;
          clearInterval(this.timer);
          this.timer = null;
        }
        }, 1000)
      }
    },
    login() {
       localStorage.setItem('userId',$("#mobileNum").val())
        history.back()
        // this.$router.push({
        //   path: this.$route.params.redirect
        // });
      // let reg = /^1(3|5|8)[0-9]{9}$/;
      // let str = $("#mobileNum").val();
      //console.log(this.userId, this.userpwd);
      // if (reg.test(str)) {
        //$("#registered").html("");
       
        // let xhr = new XMLHttpRequest();
        // xhr.open(
        //   "GET",
        //   "logon.php",
        //   true
        // );
        // xhr.onreadystatechange = function() {
        //   if (xhr.status == 200 && xhr.readyState == 4) {
        //     fun(xhr.responseText);
        //   }
        // };
        // xhr.send(username=$("#mobileNum").val()&userpwd=$("#pwd").val());
        // function fun(str) {
        //   if (str == 1) {
        //     $("#registered").html("用户名已注册");
        //   } else if (str == 0) {
        //     $("#registered").html("用户名可以注册");
        //   }
        // }
        
      // } else {
      //   $("#registered").html("手机号有误");
      // }
    },
    // login(){
    //   let xhr = new XMLHttpRequest();
    //   xhr.open("GET","access.php?username="+$("#mobileNum").val()+"&userpwd="+$("#pwd").val(),true);
    //   xhr.onreadystatechange = function(){
    //     if(xhr.status==200 && xhr.readyState==4){
    //       fun(xhr.responseText);
    //     }
    //   }
    //   xhr.send();
    //   function fun(str){
    //     if(str==0){
    //       this.$router.push({
    //         path: this.$route.params.redirect
    //       });
    //     }
    //   }
    // }
  },
  mounted() {
    // this.$axios.post("/login", { user: this.userId, password: this.userpwd });
    // console.log(this.userId).then(data => {
    //   //登录失败,先不讨论
    //   if (data.data.status != 200) {
    //     //iViewUi的友好提示
    //     this.$Message.error(data.data.message);
    //     //登录成功
    //   } else {
    //     //设置Vuex登录标志为true，默认userLogin为false
    //     this.$store.dispatch("userLogin", true);
    //     //Vuex在用户刷新的时候userLogin会回到默认值false，所以我们需要用到HTML5储存
    //     //我们设置一个名为Flag，值为isLogin的字段，作用是如果Flag有值且为isLogin的时候，证明用户已经登录了。
    //     localStorage.setItem("Flag", "isLogin");
    //     //iViewUi的友好提示
    //     this.$Message.success(data.data.message);
    //     //登录成功后跳转到指定页面
    //     this.$router.push("/home");
    //   }
    // });
  }
};
</script>

<style>
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
}
.mtEnterCodeFrame{
  width: .7rem;
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
}
#mssagein::-webkit-input-placeholder {
  color: #fdce5a;
  font-size: 0.16rem;
  border: 0;
  background: 0;
}
</style>
