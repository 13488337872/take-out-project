<template>
    <div class="hr"> 
       <div class="hd">
            <div class="hd-1">
                <img src="/img/shangyiye.png" alt="" @click="snacksd()">
                <h4>小吃馆</h4>
            </div>
            <div class="hd-2">
                <img src="/img/sou.jpg" alt="">
                <input type="text" placeholder="请输入商家或商品名称">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        snacksd(){
            history.back()
        }
    },
}
</script>
<style scoped>
</style>