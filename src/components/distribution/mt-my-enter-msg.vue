<template>
<section class="mt-my-passg">
	<h1>欢迎登陆美团</h1>
	
	<!-- 验证码登录 -->
	<div class="section_boxg">
		<div class="section_box_inputg">
			<span>+86</span>
			<span id="section_arrowg">></span>
			<input type="text">
		</div>
		<span class="section_box_span">未注册的手机号验证后自动创建美团账号</span>
		<div class="section_message_box">
			<input type="text" id="mssagein" placeholder="请输入验证码">
			<span>获取验证码</span>
		</div>
		<span id="mt_message">请输入正确的验证码</span>
		<button>登录</button>
	</div>
	
	<!-- 登录方式 -->
	<div class="section_typeg">
		<router-link to="/mt-my-enter"><span>密码登录</span></router-link to="/mt-my-enterm">
		<span>忘记密码</span>
	</div>
</section>
</template>

<script>
export default {
	methods: {
		
	},
}
</script>

<style>
.mt-my-passg{
	width:100%;
	/* box-shadow: 0 0 .05rem #e5e5e5; */
	padding-top:.53rem;
}
.mt-my-passg h1{
	font-size: .25rem;
	font-weight: 400;
	color:#494949;
	margin-left: .4rem;
}
/* 验证码登录 */
.section_boxg{
	padding-top:.295rem;
}
.section_box_inputg{
	margin: 0 auto;
	height:.32rem;
	width:2.97rem;
	border-bottom: 1px solid #989898;
}
.section_box_inputg span{
	color:#fdce5a;
	font-size:.2rem;
	float:left;
}
#section_arrowg{
	color:#313131;
	font-size:.2rem;
	float:left;
	margin-left:.1rem;
	margin-right:.17rem;
}
.section_box_inputg input{
	float:left;
	height:.22rem;
	border:0;
}
.section_box_span{
	font-size:.12rem;
	color:#979797;
	float:left;
	margin:.06rem 0 0 .4rem;
}
.mt-my-passg button{
	height:.45rem;
	width:2.97rem;
	margin:.44rem 0 0 .4rem;
	float:left;
	border:0;
	background:#ffc132;
	border-radius: .22rem;
	color:#040403;
	margin-bottom:.32rem;
	font-size:.18rem;
} 
#mt_message{
	font-size:.1rem;
	color:red;
	float:left;
	margin-left:.38rem;
	float:left;
	
}

/* 登录方式 */
.section_typeg{
	width:2.97rem;
	margin:0 auto;
	display: -webkit-flex;
	-webkit-justify-content:space-between;
}
.section_typeg span{
	color:#ffce58;
	font-size: .12rem;
	float:left;
}

.section_message_box{
	width:78.9%;
	margin:.46rem auto 0.1rem;
	display: -webkit-flex;
	-webkit-justify-content:space-between;
	height: .32rem;
    width: 2.97rem;
	border-bottom: 1px solid #989898;
	position: relative;
}
.section_message_box span{
	position: absolute;
	right: 0;
	line-height: .33rem;;
}
#mssagein{
 border:0;
 width:100%;
 height: .32rem;
    border-bottom: 1px solid #989898;
}
#mssagein::-webkit-input-placeholder{
	color:#fdce5a;
	font-size:.16rem;
	border:0;
	background:0;
}

</style>
