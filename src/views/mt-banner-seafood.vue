<template>
	<div>
		<mt-banner-seafood-header></mt-banner-seafood-header>
		<mt-banner-seafood-body></mt-banner-seafood-body>
	</div>
</template>


<script>
	import mtBannerSeafoodHeader from '../components/mt-banner-seafood/mt-banner-seafood-header';
	import mtBannerSeafoodBody from '../components/mt-banner-seafood/mt-banner-seafood-body';
	export default{
		name:'bannerseafood',
		  data:function(){
			  return{
				  
			  }
		  },
		  components: {
				"mt-banner-seafood-header":mtBannerSeafoodHeader,
				"mt-banner-seafood-body":mtBannerSeafoodBody
		  },
		  methods:{
			  
		  }
	}
</script>

<style scoped>
	@import url("../assets/css/bannerOne.css");
</style>
