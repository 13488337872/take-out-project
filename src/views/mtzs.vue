<template>
  <div style="background: #FFFFFF;">
  	<mt-mtzs-header></mt-mtzs-header>
    <mt-mtzs-ban></mt-mtzs-ban>
  </div>
</template>

<script>
  import mtheader from '../components/mtzs/mtheader'
  import mtban from '../components/mtzs/mtban'

  export default {
    name: "mtzs",
    components:{
      "mt-mtzs-header":mtheader,
      "mt-mtzs-ban":mtban
    }
  }
</script>

<style>
  @import "../assets/css/mtzs.css";
</style>
