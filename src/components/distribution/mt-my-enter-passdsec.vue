<template>
<section class="mt-my-pass">
	<h1>欢迎登陆美团</h1>
	<!-- 密码登录 -->
	<div class="section_box">
		<div class="section_box_input">
			<span>+86</span>
			<span id="section_arrow">></span>
			<input type="text">
		</div>
		<div class="section_box_input">
			<input type="password" placeholder="请输入密码" id="pd_input">
			<img src="/img/login/eyes.png" alt="">
		</div>
		<button>登录</button>
	</div>
	
	<!-- 登录方式 -->
	<div class="section_type">
		<router-link to="/mt-my-enterm"><span>验证码登录</span></router-link>
		<router-link to="/mt-my-enterm"><span>忘记密码</span></router-link>
	</div>
</section>	
</template>

<script>
</script>

<style>
.mt-my-pass{
	width:100%;
	/* box-shadow: 0 0 .05rem #e5e5e5; */
	padding-top:.53rem;
	background:#fff;
}
.mt-my-pass h1{
	font-size: .25rem;
	font-weight: 400;
	color:#494949;
	margin-left: .4rem;
}
/* 密码登录 */
.section_box{
	padding-top:.295rem;
}
.section_box_input{
	margin: 0 auto;
	height:.32rem;
	width:2.97rem;
	border-bottom: 1px solid #989898; 
	padding-top: .29rem;
}
.section_box_input span{
	color:#fdce5a;
	font-size:.2rem;
	float:left;
}
#section_arrow{
	color:#313131;
	font-size:.2rem;
	float:left;
	margin-left:.1rem;
	margin-right:.17rem;
}
.section_box_input input{
	float:left;
	height:.22rem;
	border:0;
}
.section_box_input img{
	width: .19rem;
	height: .11rem;
	float:right;
	margin-right:.06rem;
	margin-top: .05rem;
}
.mt-my-pass button{
	height:.45rem;
	width:2.97rem;
	margin:.44rem 0 0 .4rem;
	float:left;
	border:0;
	background:#f2f2f2;
	border-radius: .22rem;
	color:#fff;
	margin-bottom:.32rem;
	font-size:.18rem;
}
/* 登录方式 */
.section_type{
	width:2.97rem;
	margin:0 auto;
	display: -webkit-flex;
	-webkit-justify-content:space-between;
}
.section_type span{
	color:#ffce58;
	font-size: .12rem;
	float:left;
}

</style>
