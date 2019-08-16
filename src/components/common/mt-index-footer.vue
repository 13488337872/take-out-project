<template>
    <!-- 底部 -->
	<div class="footer">
		<div class="footerNav">
			<router-link to="/">
				<li>
					<img src="/img/fot1.png" alt="">
					<p>首页</p>
				</li>
			</router-link>
			<router-link to="/mt-vip">
				<li>
					<img src="/img/fot2.png" alt="">
					<p>会员</p>
				</li>
			</router-link>
			<router-link to="/mt-order">
				<li>
					<img src="/img/fot2.png" alt="">
					<p>订单</p>
				</li>
			</router-link>
			<router-link to="mtMyRedlist">
				<li>
					<img src="/img/fot2.png" alt="">
					<p>我的</p>
				</li>
			</router-link>

		</div>
	</div>
</template>

<script>
export default {
    props:["data"]
}
</script>

<style scoped>

</style>