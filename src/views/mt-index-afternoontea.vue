<template>
  <div>
    <mt-index-afternoontea-hd></mt-index-afternoontea-hd>
    <mt-index-afternoontea-pizza></mt-index-afternoontea-pizza>
    <mt-index-afternoontea-pizza-olist></mt-index-afternoontea-pizza-olist>
  </div>
</template>
<script>
import mtIndexAfternoonteaHd from "../components/distribution/mt-index-afternoontea-hd";
import mtIndexAfternoonteaPizza from "../components/distribution/mt-index-afternoontea-pizza";
import mtIndexAfternoonteaPizzaOlist from "../components/distribution/mt-index-afternoontea-pizza-olist";

export default {
  name: "",
  data: function() {
    return {};
  },
  components: {
    "mt-index-afternoontea-hd": mtIndexAfternoonteaHd,
    "mt-index-afternoontea-pizza": mtIndexAfternoonteaPizza,
    "mt-index-afternoontea-pizza-olist": mtIndexAfternoonteaPizzaOlist
  },
  methods: {}
};
</script>
<style scoped>
@import url("../assets/css/AfternoonTea.css");
</style>