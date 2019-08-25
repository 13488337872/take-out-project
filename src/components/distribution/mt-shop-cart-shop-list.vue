<template>
	<div class="shoppingcar" v-if="isShow">
	  <div class="shopping-top">
	    <span></span>
		<input type="checkbox" @change="sCheck(sid)" v-model="data.checked" style="vertical-align: middle;height: 0.24rem;"/>
	    <div>
	      <p>
	        <span style="display: inline-block;line-height: 0.24rem;">{{data.shop_name}}</span>
	        <span class="icon iconfont icon-xiayiyehouyiye"></span>
	      </p>
	      <p>
	        <span v-for="(type,key) in data.attrs" :key="key">{{type.full}}减{{type.minus}}</span>
	      </p>
	    </div>
	  </div>
	 <mt-shop-cart-product-list :goods_del="goods_del" :pCheck="pCheck" :data="data.shop_goods" :sid="sid"></mt-shop-cart-product-list>
	  <p class="cost">
	    <span class="cost-s1">包装费</span>
	    <span>￥{{data.goods_translate}}</span>
	  </p>
	  <p class="cost">
	    <span class="cost-s1">配送费</span>
	    <span>￥{{data.shop_dellvery}}</span>
	  </p>
	  <div class="shopping-bottom">
	    <p class="shopping-bottom-p">
	      <span>已优惠</span>
	      <span class="shopping-bottom-cost">￥{{data.shop_priceSjg}}</span>
	    </p>
		<!-- {{data | shopTotalPrcie}} -->
	    <p class="shopping-bottom-p shopping-bottom-p2">
	      <span class="shopping-bottom-cost shopping-bottom-p2-sp1">{{data | shopTotalPrcie}}</span>
	      <span class="shopping-bottom-p2-sp2"
		  @click="settleAccounts(data.shop_allPrice,data.shop_id,data.shop_goods)">
		  去结算</span>
	    </p>
	  </div>
	</div>
</template>
<script>
import mtShopCartProductList from './mt-shop-cart-product-list'
export default {
  name: "mtShopCartShopList",
  props: ["data","sid","sCheck","pCheck","goods_del"],
	data:function(){
		return{
			isShow:true,
			good:[],
			userId:localStorage.getItem("userId")
		}
	},
	mounted() {
	},
	methods: {
		settleAccounts(goodPrice,shopId,good){
			console.log(goodPrice,shopId,good,this.userId)
			for(let i = 0;i<good.length;i++){
				let info = {
					goodsId:good[i].goods_id,
					goodNum:good[i].goods_num
				}
				this.good.push(info)
			}
			this.$axios({
				method: "post",
				url: "http://39.100.63.237:8000/api/orders/orders/",
				data: {
				    "goodPrice": goodPrice,
					"shopId": shopId,
					"good": this.good,
					"userId":this.userId
				}
				}).then(res => {
					console.log(res)
     		});
		},
	},
  components: {
    "mt-shop-cart-product-list": mtShopCartProductList
  },

  filters:{
	  /**
	   * 计算店铺的总价
	   */
		shopTotalPrcie(total_price){
			let total = 0;
			let arr = total_price.attrs;
			let index = 0;
			let packs = 0;
			total_price.shop_goods.forEach((product,pid)=>{
			if(product.checked){
				total += product.goods_end * product.goods_num;
				packs += product.goods_pack;
			}
			})
			total_price.goods_translate = 	packs;
			
			total = total + total_price.shop_send_end + packs;
				for (var i in arr) {
					if (total > arr[i].full) {
					index = i;
					}
				}
				
			total_price.shop_priceSjg = total_price.attrs[index].minus;
			total = total - total_price.attrs[index].minus;
			return total;
      	}
    }
  }
</script>

<style>
</style>
