<template>
	<header class="mt-vip-top">
		<div class="head">
			<router-link to="/mtMyRedlist">
				<img src="/img/login/close.png" alt="">
			</router-link>
			<span>帮助</span>
		</div>
	</header>
</template>

<script>
</script>

<style>
.mt-vip-top{
	width:100%;
	height:.45rem;
}
.head{
	display: -webkit-flex;
	-webkit-justify-content:space-between;
	-webkit-align-items:center;
	position:relative;
	font-size:.15rem;
	color:#f7d04d;
	padding:.13rem 0 .13rem 0;
}
.head img{
	width:.16rem;
	height:.17rem;
	margin-left: .16rem;
}
.head span{
	margin-right: .17rem;
}
</style>
