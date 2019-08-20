<template>
  <div class="shopping-meal">
    <div class="shopping-meal-le">
        <input type="checkbox" name="" id="" v-model="data.checked">
        <img :src="data.productUrl" alt="">
        <p style="width: 100%">
            <span style="display: block">{{data.productName}}</span>
            <span>{{data.productNum}}</span>
        </p>
    </div>                
    <span>￥{{data.productPrice}}</span>
</div>
</template>

<script>
export default {
    name:"mtShopCartProduct",
    props:["data"]
}
</script>
<style scoped>

</style>