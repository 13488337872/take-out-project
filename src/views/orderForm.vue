<template>
  <div class="mt-orderform">
    <mt-order-form-top></mt-order-form-top>
    <mt-order-form-content></mt-order-form-content>
  </div>
</template>
<script>
import mtorderformtop from "../components/distribution/mt-order-form-top";
import mtorderformcontent from "../components/distribution/mt-order-form-content";
export default {
  components: {
    "mt-order-form-top": mtorderformtop,
    "mt-order-form-content": mtorderformcontent
  }
};
</script>
<style scoped>
@import url(../assets/css/daodianzq.css);
.mt-orderform {
  width: 100%;
}
</style>