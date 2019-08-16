<template>
  <div class="evaluate">
    <div class="evaluate-com">
      <div class="evaluate-tlt">
        <h2>外卖评价</h2>
        <a href="#">46条评价<i class="iconfont icon-qianjin"></i></a>
      </div>
      <div class="pgBar">
        <div class="pgBar-bar">
          <div class="prosess">
            图片真实度
            <div id="prosess01" class="prosess01">
              <div class="finish"></div>
            </div>
            <span>{{data.tu}}</span>
          </div>
          <div class="prosess">
            分量满意度
            <div id="prosess02" class="prosess01">
              <div class="finish"></div>
            </div>
            <span>{{data.tu}}</span>
          </div>
          <div class="prosess">
            食材新鲜度
            <div id="prosess03" class="prosess01">
              <div class="finish"></div>
            </div>
            <span>{{data.tu}}</span>
          </div>
        </div>
        <div class="pgBar-des">
          来自333份顾客餐后问卷
          <i class="iconfont icon-qianjin"></i>
        </div>
      </div>
    </div>
    <mt-product-goodlist :data="data.elvalist"></mt-product-goodlist>
  </div>
</template>

<script>
  // import $ from 'jquery'
  import mtGoodlist from './mtGoodlist'

  export default {
    name: "mtElava",
    props:["data"],
    components:{
      "mt-product-goodlist":mtGoodlist
    }
  }
</script>

<style scoped>

</style>
