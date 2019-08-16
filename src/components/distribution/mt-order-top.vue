<template>
	<header class="mt-order-head">
		<span>订单</span>
		<img src="/img/taking/search.png" id="search">
		<img src="/img/taking/msg.png" id="msg">
	</header>
</template>

<script>
</script>

<style scoped="scoped">
.mt-order-head{
	width:100%;
	height:.43rem;
	background:#fff;
	text-align:center;
	line-height: .43rem;
	display: -webkit-flex;
	position:relative;
	/* -webkit-justify-content:space-between; */
}
.mt-order-head span{
	font-size:.16rem;
	margin:0 auto;
	font-weight:600;
	display:block;
}
#search{
	width:.18rem;
	height:.18rem;
	position:absolute;
	top:.15rem;
	right:.56rem;
}
#msg{
	width:.16rem;
	height:.19rem;
	position:absolute;
	top:.14rem;
	right:.16rem;
}
</style>
