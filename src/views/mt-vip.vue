<template>
  <div class="mt-vip">
    <mt-vip-top></mt-vip-top>
    <mt-vip-first></mt-vip-first>
  </div>
</template>

<script>
import mtviptop from "../components/distribution/mt-vip-top";
import mtvipfirst from "../components/distribution/mt-vip-first";
export default {
  name: "login",
  data: function() {
    return {};
  },
  components: {
    "mt-vip-top": mtviptop,
    "mt-vip-first": mtvipfirst
  },
  methods: {}
};
</script>

<style scoped>
@import url("../assets/css/vip.css");
body {
  font-family: "微软雅黑";
  display: -webkit-flex;
  /* -webkit-flex-direction:column;
		background: #f5f5f9; */
  -webkit-flex-direction: column;
  background: #f2f2f2;
}
.mt-vip {
  overflow: hidden;
}
</style>
