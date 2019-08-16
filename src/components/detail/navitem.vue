<template>
  <div class="mt-detail-nav">
    <h2>{{data.colNum}}人这样搭配</h2>
    <div class="nav-list">
      <div class="nav-item">
        <p>
          <img :src="data.colImg01">
          <span>当前商品</span>
        </p>
      </div>
      <i class="iconfont icon-jiahao"></i>
      <div class="nav-item">
        <p>
          <img :src="data.cloImg02">
          <span>当前商品</span>
        </p>
      </div>
      <div class="nav-price">
        <span class="price-sjg">以折扣{{data.colmoney}}元</span>
        <span class="price-jg">实付<b>{{data.col}}</b></span>
        <span><a href="#">立即购买</a></span>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "navitem",
        props:["data"]
    }
</script>

<style scoped>
</style>
