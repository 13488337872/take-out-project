<template>
  <div class="mt-myaddress">
    <address-top></address-top>
    <router-view></router-view>
  </div>
</template>
<script>
import addresstop from "../components/common/mt-addTop";
export default {
  components: {
    "address-top": addresstop
  }
};
</script>

<style scoped>
@import "../assets/myAddress.css";
.mt-myaddress {
  width: 100%;
  background: #fff;
}
</style>