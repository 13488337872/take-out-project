<template>
<div>
	<mt-search-header :mtSearch=blursearch ></mt-search-header>
	<div v-if="mtblur">
		<mt-search-body></mt-search-body>
		<mt-search-footer></mt-search-footer>
	</div>
	<div v-else>
		<mt-search-blur :data=saasda></mt-search-blur>
	</div>
</div>
</template>

<script>
	import mtSearchHeader from '../components/mt-search/mt-search-header';
	import mtSearchBody from '../components/mt-search/mt-search-body';
	import mtSearchFooter from '../components/mt-search/mt-search-footer';
	import mtSearchBlur from '../components/mt-search/mt-search-blur'
	import index from '../apis/index'
	export default{
		name:'search',
		data:function(){
			return{	
				mtblur:true,
				saasda:[]
			}
		},
		components:{
			"mt-search-header":mtSearchHeader,
			"mt-search-body":mtSearchBody,
			"mt-search-footer":mtSearchFooter,
			"mt-search-blur":mtSearchBlur
		},
		methods:{
			blursearch(search){
				this.mtblur = false
				this.saasda = []
				if(search==""){
					this.mtblur = true
					this.saasda = []
				}
				index.getMtInfoSearch(search,data=>{
					data.searchData.forEach(nearbyShop=>{
						console.log(nearbyShop)
						this.saasda.push(nearbyShop)
					})
				})
			}
		}
	}
</script>

<style>
	@import url("../assets/css/search.css");
</style>
