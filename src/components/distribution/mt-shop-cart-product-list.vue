<template>
 <div class="mt-shop-product-list">
    <mt-shop-cart-product :data="item" v-for="item in data"></mt-shop-cart-product>
 </div>
</template>

<script>
import mtShopCartProduct from './mt-shop-cart-product'
export default {
    name:"mtShopCartProductList",
    props:["data"],
    components:{
        "mt-shop-cart-product":mtShopCartProduct
    }
}
</script>
<style scoped>

</style>