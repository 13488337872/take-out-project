<template>
	<header class="mt-my-head">
		<router-link to="">
			<img src="/img/my/arr.png" alt="">
		</router-link>
		
		<span>我的账号</span>
	</header>
</template>

<script>
</script>

<style scoped="scoped">
.mt-my-head{
	width:100%;
	height:.31rem;
	background:#fafafa;
	text-align: center;
	display: -webkit-flex;
	padding-top:.13rem;
	margin-bottom:.2rem;
}
.mt-my-head img{
	width:.1rem;
	height:.17rem;
	position: absolute;
	left: .22rem;
}
.mt-my-head span{
	font-size: .16rem;
	font-weight: 900;
	color:#3d3d3d;
	display: block;
	margin: 0 auto;
	line-height: .15rem;
}
</style>
