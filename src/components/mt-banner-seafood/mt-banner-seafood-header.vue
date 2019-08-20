<template>
	
	<div class="mt-banner-seafood-header">
		<span class="iconfont icon-zuo" @click="mtbannerseafoodback()">&#xe600;</span>
		<h6>海鲜新品6折享</h6>
		<span class="iconfont icon-fenxiang"></span>
	</div>
	
</template>

<script>
export default {
	methods: {
		mtbannerseafoodback(){
			history.back();
		}
	},
}
</script>

<style scoped>
	
</style>
