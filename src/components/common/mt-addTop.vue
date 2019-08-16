<template>
    <div class="address-top">
        <router-link to="/add">
            <i class="icon iconfont jiantouyou">&#xe600;</i>
        </router-link>
        <h2>新增收货地址</h2>
        <router-link to="add/AddressEmpt" v-if="to='add/AddressEmpt'"><span>新增地址</span></router-link>
    </div>
</template>
<script>
export default {
    
}
</script>

<style scoped>

</style>