<template>
  <div class="mt-detail-header">
    <div class="head-img">
      <img :src="data.foodImg.url"/>
    </div>
    <div class="head-icon">
     <div class="head-icon-left" @click="mtDtHeaderBack()">
          <a href="javascript:;">
            <i class="iconfont icon-xiajiantou"></i>
          </a>
     </div>
     <div class="head-icon-center">
          <a href="#" class="active">商品
            <b></b>
          </a>
          <a href="#">详情</a>
          <a href="#">评价</a>
     </div>
      <div class="head-icon-right">
        <a href="#"><i class="iconfont icon-gouwuche1"></i></a>
        <span><i class="iconfont icon-gengduo"></i></span>
      </div>
    </div>
    <div class="head-info">
      <div class="head-name">
        <p><span>招牌</span>{{data.foodName}}</p>
        <p><i class="iconfont icon-icon--share"></i></p>
      </div>
      <div class="head-sale">
        月售{{data.foodSale}}
        配送约{{Pcheck.nearbyShopTime}}分钟
      </div>
      <div class="head-price">
        <p>
          <span>￥{{data.foodPrice}}</span>&nbsp;&nbsp;<b>&nbsp;限{{data.foodNum}}份</b>
        </p>
        <a href="#">
          <i class="iconfont icon-jiahao"></i>加入购物车
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "dtHeader",
    props:["data","Pcheck"],
    methods:{
      _onscroll:function(){
        var _top = document.body.scrollTop || document.documentElement.scrollTop;
        if(_top > 41){
           $(". head-icon-center").css.display = "block";
        }
      },
      mtDtHeaderBack(){
        history.back()      
      }
    }
  }
</script>

<style scoped>

</style>
