<template>
  <div class="detail">
    <div class="detail-title">{{data.dname}}</div>
    <div class="detail-com">
      <p>{{data.des}}</p>
      <p v-for="(value,key,index) in data.attr[0]" :key="key">{{key}}:&nbsp;&nbsp;<span>{{value}}</span></p>
      <p>价格说明&nbsp;&nbsp;<span><i class="iconfont icon-wenhao"></i></span></p>
    </div>
  </div>
</template>

<script>
    export default {
        name: "dtDetail",
        props:["data"]
    }
</script>

<style scoped>

</style>
