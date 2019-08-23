<template>
  <div class="shopcart-scroll-box">
	  <mt-shop-cart-shop-list :pCheck="pCheck" :sCheck="sCheck"  :data="item" :sid="sid" :key="sid" v-for="(item,sid) in data"></mt-shop-cart-shop-list>
  </div>
  
</template>

<script>
import mtShopCartShopList from "./mt-shop-cart-shop-list";
export default {
  name: "mtshopcartcenter",
  props: ["data","pCheck","sCheck"],
  components: {
    "mt-shop-cart-shop-list": mtShopCartShopList
  }
  
};
</script>
<style scoped>
</style>