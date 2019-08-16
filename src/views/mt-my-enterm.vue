<template>
  <div>
    <mt-my-enter-top></mt-my-enter-top>
    <mt-my-enter-msg></mt-my-enter-msg>
    <mt-my-enter-art></mt-my-enter-art>
  </div>
</template>

<script>
import mtMyEnterTop from "../components/distribution/mt-my-enter-top";
import mtMyEnterMsg from "../components/distribution/mt-my-enter-msg";
import mtMyEnterArt from "../components/distribution/mt-my-enter-art";
export default {
  name: "login",
  data: function() {
    return {};
  },
  components: {
    "mt-my-enter-top": mtMyEnterTop,
    "mt-my-enter-msg": mtMyEnterMsg,
    "mt-my-enter-art": mtMyEnterArt
  },
  methods: {}
};
</script>

<style scoped>
div {
  background: #fff;
  height: 100%;
  overflow: hidden;
}
</style>
