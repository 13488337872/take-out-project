<template>
  <div class="main">
    <mt-order-scroll-addresstime></mt-order-scroll-addresstime>
    <mt-order-scroll-shop></mt-order-scroll-shop>
    <mt-order-scroll-telprotect></mt-order-scroll-telprotect>
    <mt-order-scroll-remark></mt-order-scroll-remark>

  </div>
</template>

<script>
import addressTime from './addressTime'
import shop from './shop'
import telNumberProtection from './telNumberProtection'
import remark from './remark'


export default {
  name: 'scroll',
  data () {
    return {

    }
  },
  components:{
    "mt-order-scroll-addresstime":addressTime,
    "mt-order-scroll-shop":shop,
    "mt-order-scroll-telprotect":telNumberProtection,
    "mt-order-scroll-remark":remark


  }

}
</script>

<style>

</style>