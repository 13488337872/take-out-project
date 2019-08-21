<template>
  <div>
    <mt-index-hamburger-ha></mt-index-hamburger-ha>
    <mt-index-hamburger-hpizza></mt-index-hamburger-hpizza>
    <mt-index-hamburger-hpizza-holist></mt-index-hamburger-hpizza-holist>
    <mt-order-form-content-shoplist></mt-order-form-content-shoplist>
  </div>
</template>
<script>
import mtIndexHamburgerHa from "../components/menu/mt-index-hamburger-ha";
import mtIndexHamburgerHpizza from "../components/menu/mt-index-hamburger-hpizza";
import mtIndexHamburgerHpizzaHolist from "../components/menu/mt-index-hamburger-hpizza-holist";
import mtorderformcontentshoplist from "../components/distribution/mt-order-form-content-shoplist";

export default {
  name: "",
  data: function() {
    return {};
  },
  components: {
    "mt-index-hamburger-ha": mtIndexHamburgerHa,
    "mt-index-hamburger-hpizza": mtIndexHamburgerHpizza,
    "mt-index-hamburger-hpizza-holist": mtIndexHamburgerHpizzaHolist,
    "mt-order-form-content-shoplist": mtorderformcontentshoplist
  },
  methods: {}
};
</script>
<style scoped>
@import url("../assets/css/Hamburger.css");
</style>