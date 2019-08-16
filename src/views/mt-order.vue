<template>
  <div class="mt-order">
    <mt-order-top></mt-order-top>
    <mt-order-check></mt-order-check>
    <router-view></router-view>
  </div>
</template>

<script>
import mtordertop from "../components/distribution/mt-order-top";
import mtordercheck from "../components/distribution/mt-order-check";
export default {
  name: "login",
  data: function() {
    return {};
  },
  components: {
    "mt-order-top": mtordertop,
    "mt-order-check": mtordercheck
  },
  methods: {}
};
</script>

<style scoped>
@import url("../assets/css/pdlogin.css");
.mt-order {
  height: 100%;
  overflow: hidden;
  width: 100%;
}
.mt-order-section {
  height: 100%;
  background: #f0f0f0;
}
</style>
