<template>
  <div class="evaluate-item">
    <div class="el-item-pic">
      <a href="#">
        <img :src="data.userImg">
      </a>
    </div>
    <div class="el-item-info">
      <div class="el-item-name">
        <h3>欧尼阿桑</h3>
        <span>{{data.elvaTime}}</span>
      </div>
      <div class="el-item-zan" v-if="data.elvazan">
        <i class="iconfont icon-zan"></i>
        {{data.elvazan}}
      </div>
      <div class="el-item-zan" else="data.elvacai">
        <i class="iconfont icon-caishixin"></i>
        {{data.elvacai}}
      </div>
      <div class="el-item-des">
         {{data.elvaDes}}
      </div>
      <div class="el-item-info-pic" >
        <img v-for="item in data.elvaImg" :src=item alt="" class="el-item-info-img01">
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
