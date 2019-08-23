<template>
	<div class="shoppingcar">
	  <div class="shopping-top">
	    <span></span>
		<input type="checkbox" :sCheck="sCheck(sid)" v-model="data.checked" style="vertical-align: middle;height: 0.24rem;"/>
	    <div>
			
	      <p>
	        <span style="display: inline-block;line-height: 0.24rem;">{{data.shopName}}{{data.checked}}</span>
	        <span class="icon iconfont icon-xiayiyehouyiye"></span>
	      </p>
	      <p>
	        <span v-for="(type,key) in data.price" :key="key">{{type.total}}减{{type.totalJg}}</span>
	      </p>
	    </div>
	  </div>
	 <mt-shop-cart-product-list :pCheck="pCheck"  :data="data.products" :sid="sid"></mt-shop-cart-product-list>
	  <p class="cost">
	    <span class="cost-s1">包装费</span>
	    <span>￥{{data.PackingFee}}</span>
	  </p>
	  <p class="cost">
	    <span class="cost-s1">配送费</span>
	    <span>￥{{data.DistributionFee}}</span>
	  </p>
	  <div class="shopping-bottom">
	    <p class="shopping-bottom-p">
	      <span>已优惠</span>
	      <span class="shopping-bottom-cost">￥{{data.productSjg}}</span>
	    </p>
	    <p class="shopping-bottom-p shopping-bottom-p2">
	      <span class="shopping-bottom-cost shopping-bottom-p2-sp1">￥{{data | shopTotalPrcie}}</span>
	      <span class="shopping-bottom-p2-sp2">去结算</span>
	    </p>
	  </div>
	</div>
</template>

<script>
import mtShopCartProductList from './mt-shop-cart-product-list'
export default {
  name: "mtShopCartShopList",
  props: ["data","sid","pCheck","sCheck"],
  components: {
    "mt-shop-cart-product-list": mtShopCartProductList
  },
  filters:{
	  /**
	   * 计算店铺的总价
	   */
	  shopTotalPrcie(data){
		let total = 0;
      	let arr = data.price;
      	let index = 0;
        data.products.forEach((product,pid)=>{
          if(product.checked){
            total += product.productPrice * product.productNum;
          }
		})
		total = total + data.PackingFee + data.DistributionFee;
			for (var i in arr) {
				if (total > arr[i].total) {
				index = i;
				}
			}
		data.productSjg = data.price[index].totalJg;
       total = total - data.price[index].totalJg;	
          return total;
      }
    }
  }
</script>

<style>
</style>
