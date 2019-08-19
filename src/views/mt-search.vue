<template>
<div>
	<mt-search-header></mt-search-header>
	<mt-search-body></mt-search-body>
	<mt-search-footer></mt-search-footer>
</div>
</template>

<script>
	import mtSearchHeader from '../components/mt-search/mt-search-header';
	import mtSearchBody from '../components/mt-search/mt-search-body';
	import mtSearchFooter from '../components/mt-search/mt-search-footer';
	export default{
		name:'search',
		data:function(){
			return{
				
			}
		},
		components:{
			"mt-search-header":mtSearchHeader,
			"mt-search-body":mtSearchBody,
			"mt-search-footer":mtSearchFooter
		},
		methods:{
			
		}
	}
</script>

<style>
	@import url("../assets/css/search.css");
</style>
