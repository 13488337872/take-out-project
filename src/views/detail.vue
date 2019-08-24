<template>
  <div class="mt-detail">
    <mt-product-header v-if="foodsInfo" :Pcheck="shopInfo" :data="foodsInfo"></mt-product-header>
    <mt-product-elva></mt-product-elva>
    <mt-product-detail v-if="foodsInfo" :data="foodsInfo"></mt-product-detail>
  </div>
</template>

<script>
  import dtHeader from '../components/detail/dtHeader'
  import mtElava from '../components/detail/mtElava'
  import detail from '../components/detail/detail'

  export default {
        name: "detail",
      components:{
        "mt-product-header":dtHeader,
        "mt-product-elva":mtElava,
        "mt-product-detail":detail
      },
      data:function(){
        return{
          foodsInfo:{},
          shopInfo:{}
        }
      },
    created: function () {
      
    },
    mounted() {
      console.log(this.$route.query.foodsproduct,this.$route.query.shopid,this.$route.query.foodsid,this.$route.query.shopProduct)
      this.foodsInfo = this.$route.query.foodsproduct,
      this.shopInfo = this.$route.query.shopProduct
    },
    methods: {
    }
  }
</script>

<style scoped>
  @import "../assets/css/detail.css";
  .mt-detail{
    background: white;
    width: 100%;
    margin: 0;
    padding: 0;
  }


</style>