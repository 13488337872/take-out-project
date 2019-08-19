<template>
	<div class="mt-banner-eightvip-header">
		<div class="bannertwo_imgone">
			<span class="iconfont icon-zuo" @click="mtbannereightvipback()">&#xe600;</span>
			<span class="iconfont icon-fenxiang"></span>
		</div>
	</div>
</template>

<script>
export default{
	methods: {
		mtbannereightvipback(){
			history.back();
		}
	},
}
</script>

<style scoped>
	*{
		margin: 0;
		padding: 0;
	}
	html{
		font-size: 26.27vw;
	}
	.bannertwo_imgone{
		display: flex;
		justify-content: space-between;
		margin-left: .25rem;
		margin-right: .22rem;
		height: .46rem;
		line-height: .46rem;
		color: #787878;
	}
	.bannertwo_imgone span{
		font-size: .17rem;
		color: white;
	}
	.mt-banner-eightvip-header{
		background-image:url(/img/11.png);
		background-size: 100% 100%;
		width: auto;
		height: 5.39rem;
	}
	/*  */

</style>
