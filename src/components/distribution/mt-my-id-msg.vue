<template>
<section class="mt-my-msg">
	<div class="my_section_box">
		<h6>头像</h6>
		<div class="my_section_right">
			<div class="my_section_div"><img src="" alt=""><img src="/img/my/tou.png" alt="" id="img_cir"></div>
			<img src="/img/my/right.png" alt="" class="my_section_img" id="img_arrow">
		</div>
	</div>
	<div class="my_section_box">
		<h6>用户名</h6>
		<div class="my_section_right">
			<div class="my_section_div"><span>晚安，地球人</span></div>
			<img src="/img/my/right.png" alt="" class="my_section_img">
		</div>
	</div>
	<div class="my_section_box">
		<h6>账号密码</h6>
		<div class="my_section_right">
			<div class="my_section_div"><span>修改</span></div>
			<img src="/img/my/right.png" alt="" class="my_section_img">
		</div>
	</div>
	<div class="my_section_box">
		<h6>手机号</h6>
		<div class="my_section_right">
			<div class="my_section_div"><span>注销账号</span></div>
			<img src="/img/my/right.png" alt="" class="my_section_img">
		</div>
	</div>
	<div class="my_section_box">
		<h6>注销账号</h6>
		<div class="my_section_right">
			<div class="my_section_div"><span>注销后无法恢复，请谨慎操作</span></div>
			<img src="/img/my/right.png" alt="" class="my_section_img">
		</div>
	</div>
</section>
</template>

<script>
</script>

<style>
	.mt-my-msg{
		width:100%;
		height:2.59rem;
		background:#fff;
	}
	.my_section_box:first-child{
		height:.59rem;
		line-height:.59rem;
		display: -webkit-flex;
		-webkit-justify-content:space-between;
	}
	#img_arrow{
		margin-top:.23rem;
	}
	.my_section_box{
		height:.49rem;
		width:3.59rem;
		margin-left:.16rem;
		line-height:.45rem;
		border-bottom:1px solid #f1f1f1;
		display: -webkit-flex;
		-webkit-justify-content:space-between;
	}
	.my_section_box h6{
		color:#282828;
		font-size: .14rem;
	}
	/* #my_section_div{
		width:.41rem;
		height:.41rem;
		background:red;
		border-radius: 50%;
		margin-top:.09rem;
		margin-left:2.4rem;
	} */
	.my_section_box #img_cir{
		width:.41rem;
		height:.41rem;
		margin-top:.1rem;
		margin-left:2.4rem;
		margin-left:.07rem;
		
	}
	.my_section_img{
		width: .07rem;
		height:.12rem;
		margin-left:.07rem;
		margin-top:.19rem;
		
	}
	.my_section_box span{
		font-size:.13rem;
		color:#a7a7a7;
	}
	.my_section_div span{
		float:left;
	}
	.my_section_right{
		margin-right:.13rem;
		display: -webkit-flex;
	}
</style>
