<template>
  <!-- 底部 -->
  <div class="footer">
    <div class="footerNav">
      <li @click="mtIndex()">
        <img src="/img/fot1.png" alt />
        <p>首页</p>
      </li>
      <li @click="mtVip()">
        <img src="/img/fot2.png" alt />
        <p>会员</p>
      </li>
      <li @click="mtOrder()">
        <img src="/img/fot2.png" alt />
        <p>订单</p>
      </li>
      <li @click="mtMyRedList()">
        <img src="/img/fot2.png" alt />
        <p>我的</p>
      </li>
    </div>
  </div>
</template>

<script>
export default {
  props: ["data"],
  methods: {
    mtIndex() {
      this.$router.push({
        path: "/"
      });
    },
    mtVip() {
      this.$router.push({
        path: "/mt-vip"
      });
    },
    mtOrder() {
      this.$router.push({
        path: "/mt-order"
      });
    },
    mtMyRedList() {
      this.$router.push({
        path: "/mtMyRedlist"
      });
    }
  }
};
</script>

<style scoped>
</style>