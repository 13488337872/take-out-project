<template>
    <div class="scroll-box">
        <mt-order-form-content-fujin></mt-order-form-content-fujin>
        <mt-order-form-content-fujintemai></mt-order-form-content-fujintemai>
        <mt-order-form-content-nav></mt-order-form-content-nav>
        <mt-order-form-content-shoplist></mt-order-form-content-shoplist>
    </div>
</template>
<script>
import mtorderformcontentfujin from './mt-order-form-content-fujin'
import mtorderformcontentfujintemai from './mt-order-form-content-fujintemai'
import mtorderformcontentnav from './mt-order-form-content-nav'
import mtorderformcontentshoplist from './mt-order-form-content-shoplist'
export default {
    components:{
        "mt-order-form-content-fujin":mtorderformcontentfujin,
        "mt-order-form-content-fujintemai":mtorderformcontentfujintemai,
        "mt-order-form-content-nav":mtorderformcontentnav,
        "mt-order-form-content-shoplist":mtorderformcontentshoplist
    }
}
</script>
<style>
    
</style>