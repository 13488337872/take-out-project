<template>
  <div>
    <mt-index-afternoontea-hd></mt-index-afternoontea-hd>
    <mt-index-afternoontea-pizza></mt-index-afternoontea-pizza>
    <mt-index-afternoontea-pizza-olist></mt-index-afternoontea-pizza-olist>
    <mt-order-form-content-shoplist></mt-order-form-content-shoplist>
  </div>
</template>
<script>
import mtIndexAfternoonteaHd from "../components/distribution/mt-index-afternoontea-hd";
import mtIndexAfternoonteaPizza from "../components/distribution/mt-index-afternoontea-pizza";
import mtIndexAfternoonteaPizzaOlist from "../components/distribution/mt-index-afternoontea-pizza-olist";
import mtorderformcontentshoplist from '../components/distribution/mt-order-form-content-shoplist'
export default {
  name: "",
  data: function() {
    return {};
  },
  components: {
    "mt-index-afternoontea-hd": mtIndexAfternoonteaHd,
    "mt-index-afternoontea-pizza": mtIndexAfternoonteaPizza,
    "mt-index-afternoontea-pizza-olist": mtIndexAfternoonteaPizzaOlist,
    "mt-order-form-content-shoplist":mtorderformcontentshoplist
  },
  methods: {}
};
</script>
<style scoped>
@import url("../assets/css/AfternoonTea.css");
</style>