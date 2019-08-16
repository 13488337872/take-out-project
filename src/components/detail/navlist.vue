<template>
     <div>
       <mt-product-navitem :data="datas" v-for="datas in data"></mt-product-navitem>
     </div>
</template>

<script>
  import navitem from './navitem'
  export default{
    name:"navlist",
    props:["data"],
    components:{
      "mt-product-navitem":navitem
    }
  }
</script>

<style scoped="scoped">
</style>
