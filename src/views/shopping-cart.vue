<template>
  <div>
    <mt-shopping-cart-top></mt-shopping-cart-top>
    <mt-shopping-cart-center></mt-shopping-cart-center>
    <mt-shopping-cart-btm></mt-shopping-cart-btm>
  </div>
</template>

<script>
import mtshoppingcarttop from "../components/distribution/mt-shopping-cart-top";
import mtshoppingcartcenter from "../components/distribution/mt-shopping-cart-center";
import mtshoppingcartbtm from "../components/distribution/mt-shopping-cart-btm";
export default {
  components: {
    "mt-shopping-cart-top": mtshoppingcarttop,
    "mt-shopping-cart-center": mtshoppingcartcenter,
    "mt-shopping-cart-btm": mtshoppingcartbtm
  }
};
</script>

<style scoped>
@import url(../assets/css/shoppingCar.css);
</style>