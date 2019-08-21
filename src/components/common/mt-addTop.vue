<template>
    <div class="address-top">
            <i class="icon iconfont jiantouyou" @click="mtaddresstop()">&#xe600;</i>
        <h2>新增收货地址</h2>
        <span @click="addRessEmpt()">新增地址</span>
    </div>
</template>
<script>
export default {
    methods: {
        mtaddresstop(){
            history.back()
        },
        addRessEmpt(){
            this.$router.push({
                path:'/add/AddressEmpt'
            });
        }
    },
}
</script>

<style scoped>

</style>