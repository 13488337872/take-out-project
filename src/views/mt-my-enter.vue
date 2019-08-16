<template>
  <div class="mt-my-enter">
    <mt-my-enter-top></mt-my-enter-top>
    <mt-my-enter-passdsec></mt-my-enter-passdsec>
    <mt-my-enter-art></mt-my-enter-art>
  </div>
</template>

<script>
import mtMyEnterTop from "../components/distribution/mt-my-enter-top";
import mtMyEnterPassdsec from "../components/distribution/mt-my-enter-passdsec";
import mtMyEnterArt from "../components/distribution/mt-my-enter-art";
export default {
  name: "login",
  data: function() {
    return {};
  },
  components: {
    "mt-my-enter-top": mtMyEnterTop,
    "mt-my-enter-passdsec": mtMyEnterPassdsec,
    "mt-my-enter-art": mtMyEnterArt
  },
  methods: {}
};
</script>

<style scoped>
@import url("../assets/css/pdlogin.css");
.mt-my-enter {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.mt-my-passg {
  height: 100%;
  background: #fff;
}
.mt-my-art {
  height: 100%;
  background: #fff;
}
</style>
