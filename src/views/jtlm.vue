<template>
  <div style="background: #FFFFFF;">
   <mt-index-header></mt-index-header>
   <mt-jtlm-ban></mt-jtlm-ban>
  </div>
</template>

<script>
  import mtHeader from '../components/common/mtHeader'
  import mtBan from '../components/jtlm/mtBan'

  export default {
    name: "jtlm",
    components:{
      "mt-index-header":mtHeader,
      "mt-jtlm-ban":mtBan
    }
  }
</script>

<style>
  @import "../assets/css/jtlm.css";
</style>
