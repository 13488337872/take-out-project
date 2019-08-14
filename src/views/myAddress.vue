<template>
    <div>
        <address-top></address-top>
        <take-delivery></take-delivery>
    </div>
</template>
<script>
import addresstop from '../components/common/addTop'
import takedelivery from '../components/distribution/take-delivery'
export default {
    components:{
        "address-top":addresstop,
        "take-delivery":takedelivery
    }
}
</script>

<style scoped>
@import "../assets/myAddress.css";
</style>