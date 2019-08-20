<template>
  <div class="shopcart-scroll-box">
    <div class="shoppingcar">
      <div class="shopping-top">
        <span></span>
        <div>
          <p>
            <span>{{data.shopName}}</span>
            <span class="icon iconfont icon-xiayiyehouyiye"></span>
          </p>
          <p>
            <span v-for="type in data.price">{{type.total}}减{{type.totalJg}}</span>
          </p>
        </div>
      </div>
      <mt-shop-cart-product-list :data="data.products"></mt-shop-cart-product-list>
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
          <span class="shopping-bottom-cost shopping-bottom-p2-sp1">￥{{data | totalPrice}}</span>
          <span class="shopping-bottom-p2-sp2">去结算</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import mtShopCartProductList from "./mt-shop-cart-product-list";
export default {
  name: "",
  props: ["data"],
  components: {
    "mt-shop-cart-product-list": mtShopCartProductList
  },
  filters: {
    totalPrice(data) {
      let price = 0;
      let arr = data.price;
      let index = 0;
      data.products.forEach((product, pid) => {
        if (product.checked) {
          price += product.productPrice * product.productNum;
        }
      });
      price = price + data.PackingFee + data.DistributionFee;
      for (var i in arr) {
        if (price > arr[i].total) {
          index = i;
        }
      }
      data.productSjg = data.price[index].totalJg;
      price = price - data.price[index].totalJg;
      return price;
    }
  }
};
</script>
<style scoped>
</style>