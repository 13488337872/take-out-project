<template>
	<div class="taking_checkbox">
		<div class="taking_checkbox_left" @click="mtCheckLeft()">
				<h2>全部订单</h2>
			<span id="checkbox_first_span"></span>
		</div>
		<div class="taking_checkbox_center" @click="mtCheckCenter()">
			<h2>待评价</h2>
			<span id="checkbox_sec_span"></span>
		</div>
		<div class="taking_checkbox_right" @click="mtCheckRight()">
			<h2>退款</h2>
			<span id="checkbox_thd_span"></span>
		</div>
	</div>
</template>

<script>
import $ from 'jquery'
export default {
	methods: {
		mtCheckLeft(){
			this.$router.push({
          		path:'./mt-order'
			});
			$("#checkbox_first_span").css({
				display:"block"
			});
			$("#checkbox_sec_span").css({
				display:"none"
			});
			$("#checkbox_thd_span").css({
				display:"none"
			});
		},
		mtCheckCenter(){
			this.$router.push({
          		path:'mtOrderSection'
			})
			$("#checkbox_sec_span").css({
				display:"block"
			});
			$("#checkbox_first_span").css({
				display:"none"
			});
			$("#checkbox_thd_span").css({
				display:"none"
			});
		},
		mtCheckRight(){
			this.$router.push({
          		path:'/mt-order-fail'
			});
			$("#checkbox_thd_span").css({
				display:"block"
			});
			$("#checkbox_first_span").css({
				display:"none"
			});
			$("#checkbox_sec_span").css({
				display:"none"
			});
		}
	},
}
</script>

<style scoped="scoped">
.routod{
	color:#000;
}
.taking_checkbox{
	width:100%;
	height:.3rem;
	background:#fff;
	display: -webkit-flex;
	-webkit-justify-content:space-around;
	padding-top:.16rem;
}
.taking_checkbox h2{
	font-size:.13rem;
	font-weight:200;
}
.taking_checkbox span{
	width:.2rem;
	height:.01rem;
	background:#ffd161;
	display:block;
	margin:.07rem auto;
}
.taking_checkbox_left,.taking_checkbox_center,.taking_checkbox_right{
	width:.55rem;
	height:.2rem;
	text-align:center;
}
#checkbox_sec_span,#checkbox_thd_span{
	display:none;
}
</style>
