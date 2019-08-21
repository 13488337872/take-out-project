<template>
  <!-- banner轮播图 -->
  <div class="banner">
    <div class="slider">
      <mt-swipe :auto="3000">
        <mt-swipe-item v-for="(item,bannerId) in data" :key="bannerId">
          <div @click="bannerskip(bannerId)">
            <img :src=item />
          </div>
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="banner-anim">
      <img class="mip-anim" src="/img/9.gif" alt />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["data"],
  methods: {
		bannerskip(bannerId){
			if(bannerId==0){
        this.$router.push({
          path:'/mtbannerseafood',
          query:{
          bannerId:bannerId
          }
        })
      }
      if(bannerId==1){
        this.$router.push({
          path:'/mtbannereightvip',
          query:{
          bannerId:bannerId
          }
        })
			}
		}
	}
};
</script>

<style scoped>
.slider {
  font-size: 30px;
  text-align: center;
  overflow: hidden;
}
.slider img {
  width: 100%;
}
</style>