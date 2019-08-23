<template>
  <!-- 底部 -->
  <div class="footer">
    <div class="footerNav">
      <li @click="mtIndex()">
        <img v-if="indexIcon" src=/img/footerIcon/icon-home.png alt />
        <img v-else src=/img/footerIcon/icon-home1.png alt />
        <p>首页</p>
      </li>
      <li @click="mtVip()">
        <img v-if="vipIcon" src=/img/footerIcon/icon-vip.png alt />
        <img v-else src=/img/footerIcon/icon-vip1.png alt />
        <p>会员</p>
      </li>
      <li @click="mtOrder()">
        <img v-if="orderIcon" src=/img/footerIcon/icon-order.png alt />
        <img v-else src=/img/footerIcon/icon-order1.png alt />
        <p>订单</p>
      </li>
      <li @click="mtMyRedList()">
        <img v-if="myredIcon" src=/img/footerIcon/icon-my.png alt />
        <img v-else src=/img/footerIcon/icon-my1.png alt />
        <p>我的</p>
      </li>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      indexIcon:false,
      vipIcon:false,
      orderIcon:false,
      myredIcon:false
    }
  },
  props: ["data"],
  methods: {
    mtIndex() {
      this.$router.push({
        path: "/"
      })
      this.indexIcon = true,
      this.vipIcon = false,
      this.orderIcon = false,
      this.myredIcon = false
    },
    mtVip() {
      this.$router.push({
        path: "/mt-vip"
      });
      this.vipIcon = true
      this.indexIcon = false,
      this.orderIcon = false,
      this.myredIcon = false
    },
    mtOrder() {
      this.$router.push({
        path: "/mt-order"
      });
      this.orderIcon = true,
      this.vipIcon = false,
      this.indexIcon = false,
      this.myredIcon = false
    },
    mtMyRedList() {
      this.$router.push({
        path: "/mtMyRedlist"
      });
      this.orderIcon = false,
      this.vipIcon = false,
      this.indexIcon = false,
      this.myredIcon = true
    }
  },
  mounted() {
    if(this.$route.path=="/mt-order"){
      this.orderIcon = true
    };
    if(this.$route.path=="/mtMyRedlist"){
      this.myredIcon = true
    };
    if(this.$route.path=="/mt-vip"){
      this.vipIcon = true
    };
    if(this.$route.path=="/"){
      this.indexIcon = true
    }
  },
};
</script>

<style scoped>
</style>