<template>
  <div class="mtheaderheader">
  	<mt-index-header></mt-index-header>
    <mt-mtzs-nava></mt-mtzs-nava>
  	<mt-index-search></mt-index-search>
  </div>
</template>

<script>
  import mtHeader from '../common/mtHeader'
  import mtSearch from '../common/mtSearch'
  import mtNavBar from './mtNavBar'

  export default {
    name: "mtheader",
    components:{
      "mt-index-header":mtHeader,
      "mt-index-search":mtSearch,
      "mt-mtzs-nava":mtNavBar
    }
  }
</script>

<style>

</style>
