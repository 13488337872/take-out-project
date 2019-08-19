<template>
    <header>
        <div class="icon iconfont icon-jiantouyou" @click="mtorderformtopback()"></div>
        <div class="header-c-daodianzq">
            <h3>到店自取</h3>
            <p>￥0配送费 · ￥0起购 · 优惠同享</p>
        </div>
        <div class="icon iconfont icon-fangdajing"></div>
    </header>
</template>
<script>
export default {
    methods: {
        mtorderformtopback(){
            history.back()
        }
    },
}
</script>
<style scoped>

</style>