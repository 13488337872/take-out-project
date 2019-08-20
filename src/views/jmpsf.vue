<template>
  <div style="background: #FFFFFF;">
   <mt-index-header></mt-index-header>
   <mt-index-search></mt-index-search>
   <mt-jmpsf-nav></mt-jmpsf-nav>
   <mt-jmpsf-section></mt-jmpsf-section>
   <mt-order-form-content-shoplist></mt-order-form-content-shoplist>
  </div>
</template>

<script>
  import mtHeader from '../components/common/mtHeader'
  import mtSearch from '../components/common/mtSearch'
  import mtban from '../components/jmpsf/mtban'
  import mtSection from '../components/jmpsf/mtSection'
  import mtorderformcontentshoplist from '../components/distribution/mt-order-form-content-shoplist'

  export default {
    name: "jmpsf",
    components:{
      "mt-index-header":mtHeader,
      "mt-index-search":mtSearch,
      "mt-jmpsf-nav":mtban,
      "mt-jmpsf-section":mtSection,
      "mt-order-form-content-shoplist":mtorderformcontentshoplist
    }
  }
</script>

<style>
  @import "../assets/css/jmpsf.css";
</style>
