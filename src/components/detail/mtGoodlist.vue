<template>
  <div class="evaluate-list">
    <mt-product-detail :data="datas" v-for="datas in data"></mt-product-detail>
  </div>
</template>

<script>
  import detail from './detail'
    export default {
        name: "mtGoodlist",
        props:["data"],
      components:{
          "mt-product-detail":detail
      }
    }
</script>

<style scoped>

</style>
