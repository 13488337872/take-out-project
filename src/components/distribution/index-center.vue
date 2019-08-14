<template>
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
			<li v-for="(item,pid) in data.menu" :key="pid">
				<img :src=item.menuPic alt="">
				<p>{{item.menuName}}</p>
			</li>
		</div>
		<index-supper :data="data.opt"></index-supper>
		<index-ask :data="data.ask"></index-ask>
		<nearby-shops :data="data.nearbyShop"></nearby-shops>
	</div>
</template>


<script>

	import indexSupper from './index-supper'
	import indexAsk from './index-ask'
	import indexBanner from './index-banner'
	import nearbyShops from '../common/nearby-shops'
export default {
	props:["data"],
	components:{
		"index-supper":indexSupper,
		"index-ask":indexAsk,
		"nearby-shops":nearbyShops,
		"index-banner":indexBanner
	}
}
</script>


<style scoped>

</style>