<template>
  <div class="mt-order">
    <mt-order-top></mt-order-top>
    <mt-order-check></mt-order-check>
    <router-view :data="mtorder.order"></router-view>
  </div>
</template>

<script>
import mtordertop from "../components/distribution/mt-order-top";
import mtordercheck from "../components/distribution/mt-order-check";
import index from '../apis/index.js'
export default {
  name: "login",
  data: function() {
    return {
      mtorder:{}

    };
  },
  components: {
    "mt-order-top": mtordertop,
    "mt-order-check": mtordercheck
  },
  created() {
    this._getMtOrder()
  },
  methods: {
    _getMtOrder(){
      index.getOrderInfoByOrderId(data=>{
        console.log(data);
        this.mtorder = data
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
}
.mt-order-section {
  height: 100%;
  background: #f0f0f0;
}
</style>
