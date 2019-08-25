<template>
  <div class="mt-order">
    <mt-order-top></mt-order-top>
    <mt-order-check></mt-order-check>
    <router-view :data="mtorder.orderFrom"></router-view>
  </div>
</template>
<script>
import mtordertop from "../components/distribution/mt-order-top";
import mtordercheck from "../components/distribution/mt-order-check";
import index from "../apis/index.js";
export default {
  name: "login",
  data: function() {
    return {
      mtorder: {},
      userid:localStorage.getItem("userId")
    };
  },
  components: {
    "mt-order-top": mtordertop,
    "mt-order-check": mtordercheck
  },
  created() {
    this._getMtOrder(this.userid);
    console.log(localStorage.getItem("userId"))
  },
  methods: {
    _getMtOrder(userid) {
      index.getOrderInfoByOrderId(userid,data => {
        console.log(data)
        this.mtorder = data;
      });
    }
  }
};
</script>

<style scoped>
@import url("../assets/css/pdlogin.css");
.mt-order {
  height: 100%;
  overflow: hidden;
  width: 100%;
  display: flex;
  flex-direction: column;
}
.mt-order-section {
  height: 100%;
  background: #f0f0f0;
}
</style>
