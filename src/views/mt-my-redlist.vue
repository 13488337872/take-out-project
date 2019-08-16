<template>
  <div class="mt-my-redlist">
    <mt-my-redlist-he></mt-my-redlist-he>
    <div class="mt-my-redlist-center">
      <mt-my-redlist-packet></mt-my-redlist-packet>
      <mt-my-redlist-moisturises></mt-my-redlist-moisturises>
      <mt-my-redlist-service></mt-my-redlist-service>
      <mt-my-redlist-more></mt-my-redlist-more>
    </div>
  </div>
</template>
<script>
import mtMyRedlistHe from "../components/distribution/mt-my-redlist-he";
import mtMyRedlistPacket from "../components/distribution/mt-my-redlist-packet";
import mtMyRedlistMoisturises from "../components/distribution/mt-my-redlist-moisturises";
import mtMyRedlistService from "../components/distribution/mt-my-redlist-service";
import mtMyRedlistMore from "../components/distribution/mt-my-redlist-more";

export default {
  name: "",
  data: function() {
    return {};
  },
  components: {
    "mt-my-redlist-he": mtMyRedlistHe,
    "mt-my-redlist-packet": mtMyRedlistPacket,
    "mt-my-redlist-moisturises": mtMyRedlistMoisturises,
    "mt-my-redlist-service": mtMyRedlistService,
    "mt-my-redlist-more": mtMyRedlistMore
  },
  methods: {}
};
</script>
<style scoped>
@import url("../assets/css/My.css");
.mt-my-redlist {
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow-y: auto;
}
.mt-my-redlist-center {
  flex: 1;
  overflow-y: auto;
}
</style>