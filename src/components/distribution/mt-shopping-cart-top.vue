<template>
    <div class="shoppingcartitle">
        <span class="icon iconfont  icon-shangyiye" @click="shoppingcarback()">&#xe600;</span>
        <span>购物车</span>
        <span class="shoppingcarbianji">编辑</span>
    </div>
</template>
<script>
export default {
    methods: {
        shoppingcarback(){
            history.back()
        }
    },
}
</script>
<style scoped>
.shoppingcarbianji{
    float: right;
}
</style>