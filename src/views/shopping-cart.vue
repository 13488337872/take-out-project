<template>
  <index-loading v-if="mtcartloading"></index-loading> 
  <div v-else>
    <mt-shopping-cart-top></mt-shopping-cart-top>
    <mt-shopping-cart-center :goods_del="disappear" :pCheck="productCheckAll" :sCheck="shopCheckAll"  v-if="shopCarInfo.shop_info" :data="shopCarInfo.shop_info"></mt-shopping-cart-center>
    <mt-shopping-cart-btm></mt-shopping-cart-btm>
  </div>
</template>

<script>
import mtshoppingcarttop from "../components/distribution/mt-shopping-cart-top";
import mtshoppingcartcenter from "../components/distribution/mt-shopping-cart-center";
import mtshoppingcartbtm from "../components/distribution/mt-shopping-cart-btm";
import loading from "../components/common/loading";
import index from '../apis/index.js'
import axios from "axios";

export default {
  "name":"",
  data:function(){
    return {
      shopCarInfo:{},
      mtcartloading:true
    }
  },
  components: {
    "mt-shopping-cart-top": mtshoppingcarttop,
    "mt-shopping-cart-center": mtshoppingcartcenter,
    "mt-shopping-cart-btm": mtshoppingcartbtm,
    "indexLoading": loading
  },
  created:function(){
    this._initPagcarteData();
  },
  methods:{
    /***
     * 获取shopCartInfo所有的数据
     * 
     *  */
     _initPagcarteData() {
       setTimeout(()=>{
          index.getMtShopCar((data) => {
            console.log(data)
            this.shopCarInfo = data;
              this.mtcartloading = false
          })
        },1000)
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
      let checked = this.shopCarInfo.shops[sid].checked;
      /**
       * 根据店铺修改的商品的选取状态
       */
      this.shopCarInfo.shops[sid].products.forEach((product,sid)=>{
        product.checked = checked;
      })
      /**
       * 购物车的选中状态
       * 只要有一个店铺checked为false,全选的就为false
      //  */
      let isChecked = this.shopCarInfo.shops.every((shop,sid,arr)=>{
          return shop.checked == true;
      })
      console.log(isChecked)
      this.shopCarInfo.checked = isChecked;
    },
    
    /**
     * 根据商品的状态修改数据
     *sid 店铺的编号
      *pid 商品的编号
     */
    productCheckAll(sid,pid){
    //  //判断是那个店铺被选中
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
    },
    disappear(sid,pid,userId,goodsId){
      console.log(sid)
      console.log(pid)
      this.$axios({
        method: "post",
        url: "http://39.100.63.237:8000/api/cart/cartlist/sub_cart/",
        data: {
          userId: userId,
          goodsId: goodsId
        }
      }).then(res => {
        console.log(res);
      });
      if(this.shopCarInfo.shop_info[sid].shop_goods.length==1){
        this.shopCarInfo.shop_info.splice(sid,1);
      }
      this.shopCarInfo.shop_info[sid].shop_goods.splice(pid,1);
	  }
  }
}
</script>

<style scoped>
@import url(../assets/css/shoppingCar.css);
</style>