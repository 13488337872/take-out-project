<template>
  <header class="mt-vip-top">
    <div class="head">
      <img src="/img/login/close.png" alt @click="mtVipLoginBack()" />
      <span>帮助</span>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    mtVipLoginBack() {
      history.back()
    }
  },
  created: function() {
	//this.params = this.$route.params; //detalis
	// this.$router.push({
  //       path: this.$route.params.redirect
  //     });
  }
};
</script>

<style>
.mt-vip-top {
  width: 100%;
  height: 0.45rem;
}
.head {
  display: -webkit-flex;
  -webkit-justify-content: space-between;
  -webkit-align-items: center;
  position: relative;
  font-size: 0.15rem;
  color: #f7d04d;
  padding: 0.13rem 0 0.13rem 0;
}
.head img {
  width: 0.16rem;
  height: 0.17rem;
  margin-left: 0.16rem;
}
.head span {
  margin-right: 0.17rem;
}
</style>
