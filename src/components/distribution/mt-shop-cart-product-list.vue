<template>
 <div class="mt-shop-product-list">
     <mt-shop-cart-product :goods_del="goods_del" :pCheck="pCheck" :data="product" :sid="sid" :pid="pid" :key="pid" v-for="(product,pid) in data"></mt-shop-cart-product>
 </div>
</template>

<script>
import mtshopcartproduct from './mt-shop-cart-product'
export default {
    name:"mtShopCartProductList",
    props:["data","sid","pCheck","goods_del"],
    components:{
        "mt-shop-cart-product":mtshopcartproduct
    }
}
</script>
<style scoped>

</style>