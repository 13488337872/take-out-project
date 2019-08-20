<template>
  <div>
    <mt-shopping-cart-top></mt-shopping-cart-top>
    <mt-shopping-cart-center v-if="shopCarInfo" :data="shopCarInfo"></mt-shopping-cart-center>
    <mt-shopping-cart-btm></mt-shopping-cart-btm>
  </div>
</template>

<script>
import mtshoppingcarttop from "../components/distribution/mt-shopping-cart-top";
import mtshoppingcartcenter from "../components/distribution/mt-shopping-cart-center";
import mtshoppingcartbtm from "../components/distribution/mt-shopping-cart-btm";
import index from '../apis/index.js'
export default {
  "name":"",
  data:function(){
    return {
      shopCarInfo:{}
    }
  },
  components: {
    "mt-shopping-cart-top": mtshoppingcarttop,
    "mt-shopping-cart-center": mtshoppingcartcenter,
    "mt-shopping-cart-btm": mtshoppingcartbtm
  },
  created:function(){
    this._initPageData();
  },
  methods:{
    /***
     * 获取shopCartInfo所有的数据ri
     * @private
     *  */
     _initPageData() {
        index.getMtShopCar((data) => {
          this.shopCarInfo = data;
        })
      },
    /**
     * 计算总的商品的价格
     *  */
    
  }
};
</script>

<style scoped>
@import url(../assets/css/shoppingCar.css);
</style>