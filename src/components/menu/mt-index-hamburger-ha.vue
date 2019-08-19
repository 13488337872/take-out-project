<template>
    <div class="hr"> 
       <div class="hd">
            <div class="hd-1">
                <img src="/img/shangyiye.png" alt="" @click="backHamBurger()">
                <h4>汉堡披萨</h4>

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
        backHamBurger(){
            history.back()
        }
    },
}
</script>
<style scoped>
</style>