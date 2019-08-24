<template>
<div class="mt-detail-evaluate">
  <div class="evaluate-item">
    <div class="el-item-pic">
      <a href="#">
        <img src="/img/logo.jpg">
      </a>
    </div>
    <div class="el-item-info">
      <div class="el-item-name">
        <h3>欧尼阿桑</h3>
        <span></span>
      </div>
      <div class="el-item-zan">
        <i class="iconfont icon-zan"></i>
      </div>
      <div class="el-item-des">
         飘香，由名便能想到其味浓而悠长,以花来说， 飘香犹如馥郁的牡丹雍容华贵，
         口齿生香但口腔里会有霎时爆裂出的龙虾鲜香~作料虽优，但丝毫不掩虾肉之鲜弹~,仅售45.8元！
         最高价值64元的特色2人焖面套餐，提供免费WiFi
      </div>
      <div class="el-item-info-pic" >
        <img :src="data.foodImg.url" class="el-item-info-img01">
      </div>
    </div>
  </div>
  <div class="evaluate-item">
    <div class="el-item-pic">
      <a href="#">
        <img src="/img/logo.jpg">
      </a>
    </div>
    <div class="el-item-info">
      <div class="el-item-name">
        <h3>846514dasd</h3>
        <span></span>
      </div>
      <div class="el-item-zan">
        <i class="iconfont icon-zan"></i>
        
      </div>
      <div class="el-item-des">
          飘香，由名便能想到其味浓而悠长,以花来说， 飘香犹如馥郁的牡丹雍容华贵，
         口齿生香但口腔里会有霎时爆裂出的龙虾鲜香~作料虽优，但丝毫不掩虾肉之鲜弹~,仅售45.8元！
         最高价值64元的特色2人焖面套餐，提供免费WiFi
      </div>
      <div class="el-item-info-pic" >
      </div>
    </div>
  </div>
</div>
</template>

<script>
  // import mtPic from './mtPic'
    export default {
        name: "detail",
        props:["data"]
    }
</script>

<style scoped>

</style>
