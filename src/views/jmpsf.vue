<template>
  <div style="background: #FFFFFF;">
   <mt-index-header></mt-index-header>
   <mt-index-search></mt-index-search>
   <mt-jmpsf-nav></mt-jmpsf-nav>
   <mt-jmpsf-section></mt-jmpsf-section>
  </div>
</template>

<script>
  import mtHeader from '../components/common/mtHeader'
  import mtSearch from '../components/common/mtSearch'
  import mtban from '../components/jmpsf/mtban'
  import mtSection from '../components/jmpsf/mtSection'

  export default {
    name: "jmpsf",
    components:{
      "mt-index-header":mtHeader,
      "mt-index-search":mtSearch,
      "mt-jmpsf-nav":mtban,
      "mt-jmpsf-section":mtSection
    }
  }
</script>

<style>
  @import "../assets/css/jmpsf.css";
</style>
