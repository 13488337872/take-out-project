<template>
<div class="aside-list">
  <fl-jmpsf-nav-item></fl-jmpsf-nav-item>
  <fl-jmpsf-nav-item></fl-jmpsf-nav-item>
  <fl-jmpsf-nav-item></fl-jmpsf-nav-item>
</div>
</template>

<script>
  import mtNavItem from './mtNavItem'
  export default{
    name:"mtList",
    components:{
      "fl-jmpsf-nav-item":mtNavItem
    }
  }
</script>

<style>
  @import url("../../assets/iconfont.css");
</style>
