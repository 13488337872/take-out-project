<template>
    <!-- 
		底部 -->
	<div class="footer">
		<div class="footerNav">
			<li v-for="(item,sid) in data" :key="sid">
				<img :src=item.ActPic alt="">
					<p>{{item.ActName}}</p>
			</li>
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