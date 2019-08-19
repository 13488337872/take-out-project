<template>
    <div class="KFC">
		<div class="KFC_top">
			<div @click="backhistory" class="iconfont icon-zuo">&#xe600;</div>
			<div class="KFC_top_r">
				<span class="iconfont icon-cx"></span>
				<span class="iconfont icon-gouwuche"></span>
				<span class="iconfont icon-shoucang"></span>
				<span class="iconfont icon-552cd47474981more1"></span>
			</div>
		</div>
		<div class="KFC_ZJS">
			<div class="ZJS_Onetext">
				<h3>肯德基宅急送&nbsp;（唐兴路店）</h3>
				<img src="img/KFC02_03.png" />
			</div>
			<div class="ZJS_Twotext">
				<span class="iconfont icon-songhuozhunshi"></span>
				配送约30分钟
				<span class="shu"> | </span>
				<span class="iconfont icon-dui"></span>
				丈八西餐口碑第5名
			</div>
			<div class="ZJS_Threetext">
				<p>公告:欢迎光临肯德基宅急送, 专业外送, 全程保温, 准时送达！</p>
				<div class="ZJS_Threetext_xia">
					<div class="ZJS_Threetext_xia_zuo">
						<span>7.49折起</span>
						<span>首单减20</span>
					</div>
					<span class="iconfont icon-xiala"></span>
				</div>
			</div>
		</div>
		<div class="KFC_Caidan" >
			<div class="KFC_diancai_">
				<ul class="ul_header">
					<li>点菜</li>
					<li>评价</li>
					<li>商家</li>
				</ul>
				<span class="pingdan">好友拼单</span>
			</div>
			<div class="KFC_diancai_two">
				<div class="KFC_xinpin">
					<h6>新品上市</h6>
					<ul class="ul_body">
						<li>现熬好粥</li>
						<li>小食/<br>配餐</li>
						<li>美食早餐</li>
						<li>K 咖啡</li>
						<li>串串/<br>卤味</li>
						<li>美味<br>汉堡/卷</li>
						<li>K记饭桶</li>
						<li>鸡翅/鸡排</li>
						<li>原味鸡</li>
						<li>甜品/<br>冰激凌</li>
						<li>缤纷饮料</li>
						<li>夜宵套餐</li>
						<li>夜宵单品</li>
						<li><span class="iconfont icon-zhekou"></span>&nbsp;折扣</li>
					</ul>
				</div>
				<div class="KFC_xinpin_">
					<span>新品上市</span>
					<div class="img_one">
						<img  class="img_" src="/img/KFC05.png">
						<div class="img_two">
							<h2>比利时风味华夫巧克力味T</h2>
							<p class="img_two_text">主要原料:面粉，糖</p>
							<p class="img_two_text">月售&nbsp;&nbsp;赞0</p>
							<div class="red_elv">
								<p class="elv">￥11</p>
								<p class="iconfont icon-add-fill"></p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import $ from 'jquery'
export default {
	mounted () {
		window.addEventListener('scroll', this.handleScroll)
	},
    methods: {
		handleScroll () {
			var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
			// console.log(scrollTop);
			if(scrollTop>=200){
				$(".KFC_Caidan").css({

				})
			}
		},
		backhistory(){
			history.back()
		}
	},
}
</script>
	
<style scoped>
@import url(../assets/css/mt-shopdetail.css);


</style>    
   