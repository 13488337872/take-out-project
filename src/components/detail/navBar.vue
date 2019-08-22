<template>
  <div class=".mt-all-navBar">
    <mt-product-navlist :data="data.col"></mt-product-navlist>
    <div class="navs">
      <div class="nav-more">
        <a href="#">
          <img src="/img/detail-10.jpg">&nbsp;
          包含当前商品的{{data.total}}个套餐
          <i class="iconfont icon-qianjin"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  import navlist from './navlist'
    export default {
        name: "navBar",
        props:["data"],
      components:{
          "mt-product-navlist":navlist
      }
    }
</script>

<style scoped>
</style>
