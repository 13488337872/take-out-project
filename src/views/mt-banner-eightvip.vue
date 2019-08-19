<template>
	<active class="mtbannereightvip">	
		<mt-banner-eightvip-header></mt-banner-eightvip-header>
		<mt-banner-eightvip-body></mt-banner-eightvip-body>
		<mt-banner-eightvip-footer></mt-banner-eightvip-footer>
	</active>
</template>

<script>
	import mtBannerEightvipHeader from '../components/mt-banner-eightvip/mt-banner-eightvip-header';
	import mtBannerEightvipBody from '../components/mt-banner-eightvip/mt-banner-eightvip-body';
	import mtBannerEightvipFooter from '../components/mt-banner-eightvip/mt-banner-eightvip-footer';
	export default{
		name:'bannereightvip',
		  data:function(){
			  return{
				
			  }
		  },
		  components: {
				"mt-banner-eightvip-header":mtBannerEightvipHeader,
				"mt-banner-eightvip-body":mtBannerEightvipBody,
				"mt-banner-eightvip-footer":mtBannerEightvipFooter
		  },
		  methods:{
			  
		  }
	}
</script>

<style scoped>
	@import url("../assets/css/bannerTwo.css");
</style>
