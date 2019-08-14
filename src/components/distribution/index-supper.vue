<template>
    <!-- 晚餐优选 -->
	<div class="optimization">
		<div class="optTop">
			<h2>{{data.optName}}</h2>
			<span>{{data.optMore}}
				<i class="icon iconfont arrow_right">&#xe604;</i>
			</span>
		</div>
		<!-- 晚餐优选列表 -->
		<div class="optList">
			<li v-for="(opt,sid) in data.optList" :key="sid">
				<img :src=opt.optPic alt="">
				<h4>年味水饺（科技四路店）</h4>
				<p>
					{{opt.optRecom}}
					<img src="/img/del.png" alt="">
				</p>
			</li>
		</div>
	</div>
</template>
<script>
export default {
    name:"index-supper",
    props:["data"],
    mounted:{
        
    }
}
</script>


<style scoped>
    
</style>