<template>
<div class="mt-index-center">
    <index-header></index-header>
	<div class="center">
		<div class="head-btm">
			<ul>
				<li v-for="(item,key) in data.headList" :key="key">{{item}}</li>
			</ul>
		</div>
		<index-banner :data="data.banner"></index-banner>
		<!-- 导航栏 -->
		<div class="nav">
			<li v-for="(item,aid) in data.nav" :key="aid">
				<img :src=item.navPic alt="">
				<p>{{item.navName}}</p>
			</li>
		</div>
		<!-- 菜单 -->
		<div class="menu">
			<li v-for="(item,pid) in data.menu" :key="pid" @click="skip(pid)">
				<img :src=item.menuPic alt="">
				<p>{{item.menuName}}</p>
			</li>
		</div>
		<index-supper :data="data.opt"></index-supper>
		<index-ask :data="data.ask"></index-ask>
		<nearby-shops :data="data.nearbyShop"></nearby-shops>
	</div>
</div>
</template>


<script>
	import indexHeader from './mt-index-header'
	import indexSupper from './mt-index-supper'
	import indexAsk from './mt-index-ask'
	import indexBanner from './mt-index-banner'
	import nearbyShops from '../common/mt-nearby-shops'
export default {
	props:["data"],
	components:{
        "index-header":indexHeader,
		"index-supper":indexSupper,
		"index-ask":indexAsk,
		"nearby-shops":nearbyShops,
		"index-banner":indexBanner
	},
	computed: {
		// 直接当做普通属性调用不加括号
		// 任何data中数据变化立即重新计算
		// 计算属性会缓存

	},
	methods: {
		skip:function(item){
			if(item==0){
				location.href= "http://localhost:8080/#/mtIndexAfternoontea"
			}

		}
	},
	






}
</script>


<style scoped>
.mt-index-center{
	flex: 1;
	overflow-y: auto;
}
</style>