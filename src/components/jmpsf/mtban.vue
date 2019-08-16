<template>
  <div class="aside">
	<div class="aside-com">
		<div class="aside-img">
			<img src="../../assets/img/detail-02.jpg" class="aside-pic01" />
			<div class="aside-pos">
				<span class="aside-img01"><img src="../../assets/img/detail-03.jpg" class="aside-pic02" /></span>
				<div class="aside-nav">
					<span>25减13</span>
					<span>40减20</span>
					<span>77减28</span>
				</div>
			</div>
		</div>
		<p class="aside-pro">可开发票！收藏店铺送丸子</p>
    <mt-jmpsf-ban-list></mt-jmpsf-ban-list>
	</div>
</div>
</template>

<script>
  import mtList from './mtList'
  export default{
    name:"mtban",
    components:{
      "mt-jmpsf-ban-list":mtList
    }

  }
</script>

<style>
</style>
