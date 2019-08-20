<template>
  <div style="background: #FFFFFF;">
   <mt-index-header></mt-index-header>
   <mt-jtlm-ban></mt-jtlm-ban>
   <mt-order-form-content-shoplist></mt-order-form-content-shoplist>
  </div>
</template>

<script>
  import mtHeader from '../components/common/mtHeader'
  import mtBan from '../components/jtlm/mtBan'
  import mtorderformcontentshoplist from '../components/distribution/mt-order-form-content-shoplist'

  export default {
    name: "jtlm",
    components:{
      "mt-index-header":mtHeader,
      "mt-jtlm-ban":mtBan,
      "mt-order-form-content-shoplist":mtorderformcontentshoplist
    }
  }
</script>

<style>
  @import "../assets/css/jtlm.css";
</style>
