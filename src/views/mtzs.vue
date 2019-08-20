<template>
  <div style="background: #FFFFFF;">
  	<mt-mtzs-header></mt-mtzs-header>
    <mt-mtzs-ban></mt-mtzs-ban>
    <mt-order-form-content-shoplist></mt-order-form-content-shoplist>
  </div>
</template>

<script>
  import mtheader from '../components/mtzs/mtheader'
  import mtban from '../components/mtzs/mtban'
  import mtorderformcontentshoplist from '../components/distribution/mt-order-form-content-shoplist'

  export default {
    name: "mtzs",
    components:{
      "mt-mtzs-header":mtheader,
      "mt-mtzs-ban":mtban,
      "mt-order-form-content-shoplist":mtorderformcontentshoplist
    }
  }
</script>

<style>
  @import "../assets/css/mtzs.css";
</style>
