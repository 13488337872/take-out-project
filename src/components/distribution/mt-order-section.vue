<template>
	<section class="mt-order-section">
		<div class="taking_section_store">
			
				<div class="taking_store_top">
					<img src="/img/taking/store.png" alt="">
					<div class="store_top_cen">
						<p>虾米东西龙虾饭（高新店） ></p>
						<span>20减16</span>
						<span>40减20</span>
						<span>80减50</span>
					</div>
					<div class="store_top_rig"><h4>订单已完成</h4></div>
				</div>
			<div class="taking_store_bot">
				<div class="store_bot_tit">
					<p>【套餐】黑椒鸡柳饭+香辣鸡翅一对</p>
					<span>￥13.5</span>
				</div>
				<div class="store_bot_span">
					<span>相似商家</span>
					<span>再来一单</span>
					<span id="store_bot_lan">评价</span>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
</script>

<style scoped="scoped">
.mt-order-section{
	width:100%;
	/* display:none; */
	background:#f0f0f0;
}
.taking_section_store{
	width:3.51rem;
	height:1.68rem;
	background:#fafafa;
	margin:.1rem auto;
	border-radius: .09rem;
}
.taking_store_top{
	height:.38rem;
	width:3.29rem;
	margin:0 auto;
	padding:.15rem 0 .12rem 0;
	display: -webkit-flex;
	-webkit-justify-content:space-between;
}
.taking_store_top img{
	width:.36rem;
	height:.36rem;
}
.store_top_cen p{
	font-size:.13rem;
}
.store_top_cen span{
	font-size:.09rem;
	color:#fb4e44;
	width:.42rem;
	height:.16rem;
	display:inline-block;
	border:1px solid #fb4e44;
	text-align: center;
	line-height:.16rem;
	border-radius: .02rem;
	float:left;
	margin-right:.05rem;
	margin-top:.08rem;
}
.store_top_cen{
	margin-right:.42rem;
	margin-left:.1rem;
}
.taking_store_top h4{
	font-size:.07rem;
	color:#666;
}
.store_top_rig{
	height:.36rem;
	line-height:.36rem;
}
/* 下部分 */
.taking_store_bot{
	background:#fff;
	width:3.39rem;
	height:.84rem;
	padding-right: .12rem;
	padding-top:.18rem;
	border-radius: 0 0 .09rem .09rem;
}
.store_bot_tit{
	display: -webkit-flex;
	-webkit-justify-content:space-between;
	padding-left: .66rem;
}
.store_bot_tit p{
	width:1.83rem;
	white-space:nowrap;
	overflow:hidden;
	text-overflow: ellipsis;
	font-size:.13rem;
	color:#666666;
	
}
.store_bot_tit span{
	font-size:.13rem;
}
/* 评价 */
.store_bot_span{
	width:2.39rem;
	margin-left:1.01rem;
	margin-top:.21rem;
	display: -webkit-flex;
	-webkit-justify-content:space-between;
	font-size:.13rem;
}
.store_bot_span span{
	width: .73rem;
	height:.32rem;
	border:1px solid #c4c4c4;
	text-align:center;
	line-height:.32rem;
	border-radius: .04rem;
}
#store_bot_lan{
	background: #ffd161;
	border:0;
}
</style>
