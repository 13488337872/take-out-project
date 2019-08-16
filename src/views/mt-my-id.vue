<template>
  <div>
    <mt-my-id-top></mt-my-id-top>
    <mt-my-id-msg></mt-my-id-msg>
    <mt-my-id-foot></mt-my-id-foot>
  </div>
</template>

<script>
import mtmyidtop from "../components/distribution/mt-my-id-top";
import mtmyidmsg from "../components/distribution/mt-my-id-msg";
import mtmyidfoot from "../components/distribution/mt-my-id-foot";
export default {
  name: "login",
  data: function() {
    return {};
  },
  components: {
    "mt-my-id-top": mtmyidtop,
    "mt-my-id-msg": mtmyidmsg,
    "mt-my-id-foot": mtmyidfoot
  },
  methods: {}
};
</script>

<style scoped>
@import url("../assets/css/myid.css");
div {
  height: 100%;
  overflow: hidden;
}
.mt-my-id-msg {
  height: 100%;
  background: #f0f0f0;
}
</style>
