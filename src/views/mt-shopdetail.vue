<template>
	<index-loading v-if="mtshopdetailloading"></index-loading>
    <div class="KFC" v-else>
		<div class="KFC_top">
			<div @click="backhistory" class="iconfont icon-jiantouyou"></div>
			<div class="KFC_top_r">
				<router-link to="/shoppingcart">
					<span class="iconfont icon-gouwuche"></span>
				</router-link>
				<span class="iconfont icon-shoucang"></span>
				<span class="iconfont icon-552cd47474981more1"></span>
			</div>
		</div>
		<div class="KFC_ZJS">
			<div class="ZJS_Onetext">
				<h3>{{mtNearbyShopList.nearbyShopName}}</h3>
				<img :src="mtNearbyShopList.nearbyShopPic"/>
			</div>
			<div class="ZJS_Twotext">
				<span class="iconfont icon-songhuozhunshi"></span>
				配送约{{mtNearbyShopList.nearbyShopTime}}分钟
				<span class="shu"> | </span>
				<span class="iconfont icon-dui"></span>
				丈八西餐口碑第5名
			</div>
			<div class="ZJS_Threetext">
				<p>公告:欢迎光临肯德基宅急送, 专业外送, 全程保温, 准时送达！</p>
				<div class="ZJS_Threetext_xia">
					<div class="ZJS_Threetext_xia_zuo">
						<span v-for="(item,sid) in mtNearbyShopList.nearbyShopMitig" :key=sid>满{{item.full}}减{{item.minus}}</span>
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
					<ul class="ul_body">
						<li v-for="(item,key) in mtNearbyShopList.shopOrder" :key=key>{{item.shopFoodMenu}}</li>
					</ul>
				</div>
				<div class="KFC_xinpin_List">
					<div class="KFC_xinpin_" v-for="(item,key) in mtNearbyShopList.shopOrder" :key=key>
						<span>{{item.shopFoodMenu}}</span>
						<div class="ST">
							<div class="img_one" v-for="(item,foodId) in item.shopFoodList" :key=foodId>
								<img  class="img_" :src="item.foodImg.url" @click="mtShopDetailSkip(shopId,shopProduct,item.foodId,item)">
								<div class="img_two">
									<h2>{{item.foodName}}</h2>
									<p class="img_two_text">主要原料:面粉，糖</p>
									<p class="img_two_text">月售{{item.foodSale}}&nbsp;&nbsp;赞0</p>
									<div class="red_elv">
										<p class="elv">￥{{item.foodPrice}}</p>
										<p class="iconfont icon-add-fill"></p>
										<strong class="addShoppingCart" @click="addShoppingCart(userId,item.foodId)">加入购物车</strong>
									</div>
								</div>
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
import index from '../apis/index'
import loading from "../components/common/loading";
import axios from "axios";
export default {
	data() {
		return {
			mtNearbyShopList:{},
			shopId : this.$route.query.shopId,
			shopProduct:this.$route.query.shopProduct,
			mtshopdetailloading:true,
			userId:""
		}
	},
	components:{
    	"indexLoading": loading
	},
	mounted () {
		window.addEventListener('scroll', this.handleScroll)
		this.userId = localStorage.getItem("userId")
	},
	created() {
		this.mtNearbyShopLists(this.shopId)
		this._initPagedetailData();
	},
    methods: {
		_initPagedetailData (){
			setTimeout(()=>{
				this.mtshopdetailloading = false
			},500)
		},
		handleScroll () {
			var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
		},
		backhistory(){
			history.back()
		},
		mtShopDetailSkip(shopId,shopProduct,foodsId,foodProduct){
			this.$router.push({
				path: "/detail",query:{
					shopid:shopId,shopProduct:shopProduct,foodsid:foodsId,foodsproduct:foodProduct
				}
			});
		},
		mtNearbyShopLists(shopId){
			console.log(shopId)
			index.getNearbyShopList(shopId,data=>{
				this.mtNearbyShopList = data
			})
		},
		addShoppingCart(usersId,goodsId){
			let userId = Number(usersId)
			this.$axios({
				method: "post",
				url: "http://39.100.63.237:8000/api/cart/cartlist/add_cart/",
				data: {
					userId:userId,
					goodsId: goodsId,
				}
			}).then(res => {
				console.log(res);
				// localStorage.setItem(goodscart,)
			});
		}
	},
}
</script>
	
<style scoped>
@import url(../assets/css/mt-shopdetail.css);
.KFC_diancai_{
	background: white;
	z-index: 10;
	height: .55rem;
}
.KFC_top .icon-jiantouyou{
	margin-left: .1rem;
}
.addShoppingCart{
	font-weight: 500;
	background-color:#f7c85e;
	line-height: 0.2rem;
    height: .2rem;
    padding: 0 .05rem;
	border-radius: .1rem;
	margin-left: .1rem;
}
</style>    
   