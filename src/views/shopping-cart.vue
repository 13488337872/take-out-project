<template>
  <div>
    <mt-shopping-cart-top></mt-shopping-cart-top>
    <mt-shopping-cart-center :pCheck="productCheckAll" :sCheck="shopCheckAll"  v-if="shopCarInfo.shops" :data="shopCarInfo.shops"></mt-shopping-cart-center>
    <mt-shopping-cart-btm></mt-shopping-cart-btm>
    <mt-shop-cart-footer @checkedAll="checkAll" v-if="shopCarInfo" :data="shopCarInfo"></mt-shop-cart-footer>
  </div>
</template>

<script>
import mtshoppingcarttop from "../components/distribution/mt-shopping-cart-top";
import mtshoppingcartcenter from "../components/distribution/mt-shopping-cart-center";
import mtshoppingcartbtm from "../components/distribution/mt-shopping-cart-btm";
import mtshopcartfooter from '../components/distribution/mt-shop-cart-footer'
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
    "mt-shopping-cart-btm": mtshoppingcartbtm,
    "mt-shop-cart-footer":mtshopcartfooter
  },
  created:function(){
    this._initPageData();
  },
  methods:{
    /***
     * 获取shopCartInfo所有的数据
     * 
     *  */
     _initPageData() {
        index.getMtShopCar((data) => {
          this.shopCarInfo = data;
        })
      },
    /**
     * 总体的全选与反选
     *  */
    checkAll(){
        let checked = this.shopCarInfo.checked;
        this.shopCarInfo.shops.forEach((shop,sid) => {//循环所有的店铺
          shop.checked = checked;
            shop.products.forEach((product,pid)=>{
              product.checked = checked;
            });
        });
    },
  /**
   * 根据店铺的状态修改数据
   * sid 店铺的编号
   * 店铺的全选与反选
   */
    shopCheckAll(sid){
      let checkeds = this.shopCarInfo.shops[sid].checked;
      /**
       * 根据店铺修改的商品的选取状态
       */
      this.shopCarInfo.shops[sid].products.forEach((product,sid)=>{
        product.checked = checkeds;
      })
      /**
       * 购物车的选中状态
       * 只要有一个店铺checked为false,全选的就为false
      //  */
      let ischecked = this.shopCarInfo.shops.every((shop,sid,arr)=>{
          return shop.checked == true;
      })
      this.shopCarInfo.checked = ischecked;
    },
    
    /**
     * 根据商品的状态修改数据
     *sid 店铺的编号
      *pid 商品的编号
     */
    productCheckAll(sid,pid){
      console.log(pid);
     //判断是那个店铺被选中
      let isChecked = this.shopCarInfo.shops[sid].products.every((product, pid, arr) => {
          return product.checked == true
          
      }) 
       //当前的店铺的状态
        this.shopCarInfo.shops[sid].checked = isChecked;

        //当前店铺状态改变总体状态
        let isCheck = this.shopCarInfo.shops.every((shop,sid,arr)=>{
          return shop.checked == true
        })
        this.shopCarInfo.checked = isCheck;
    }
  }
}
</script>

<style scoped>
@import url(../assets/css/shoppingCar.css);
</style>