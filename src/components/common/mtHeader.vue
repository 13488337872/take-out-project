<template>
<div class="headerBar">
		<div class="head-left">
			<a href="javascript:;" @click="mtjmpsf()"><i class="iconfont icon-fanhui1"></i></a>
		</div>
		<div class="head-center">
			减免配送费
		</div>
		<div class="head-right"></div>
</div>
</template>

<script>
  export default{
	name:"mtHeader",
	methods: {
		mtjmpsf(){
			history.back()
		}
	},
  }
</script>

<style scoped="scoped">
  @import url("../../assets/css/iconfont.css");
</style>
