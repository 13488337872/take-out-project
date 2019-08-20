<template>
  <div class="mt-index-center">
    <index-header></index-header>
    <div class="center">
      <div class="head-btm">
        <ul>
          <li v-for="(item,key) in data.headList" :key="key">{{item}}</li>
        </ul>
      </div>
      <index-banner :data="data.banner"></index-banner>
      <!-- 导航栏 -->
      <div class="nav">
        <li v-for="(item,aid) in data.nav" :key="aid">
          <img :src="item.navPic" alt />
          <p>{{item.navName}}</p>
        </li>
      </div>
      <!-- 菜单 -->
      <div class="menu">
        <li v-for="(item,pid) in data.menu" :key="pid" @click="skip(pid)">
			<img :src="item.menuPic" />
			<p>{{item.menuName}}</p>
        </li>
      </div>
	  <img class="indexgwc" @click="shopcart()" src="/img/indexgouwuche.png" alt="">
      <index-supper :data="data.opt"></index-supper>
      <index-ask :data="data.ask"></index-ask>
      <nearby-shops :data="data.nearbyShop"></nearby-shops>
    </div>
  </div>
</template>



<script>
import indexHeader from "./mt-index-header";
import indexSupper from "./mt-index-supper";
import indexAsk from "./mt-index-ask";
import indexBanner from "./mt-index-banner";
import nearbyShops from "../common/mt-nearby-shops";
export default {
  data() {
	  return {
		  url:""
	  }
  },
  props: ["data"],
  components: {
    "index-header": indexHeader,
    "index-supper": indexSupper,
    "index-ask": indexAsk,
    "nearby-shops": nearbyShops,
    "index-banner": indexBanner
  },
  computed: {
    // 直接当做普通属性调用不加括号
    // 任何data中数据变化立即重新计算
    // 计算属性会缓存
  },
  methods: {
	shopcart(){
    this.$router.push({
          path:'./shoppingcart'
    })
	},
    skip: function(item) {
      console.log(item);
      if (item == 0) {
        location.href = "http://localhost:8080/#/mtIndexAfternoontea/"+item;
      }
      if (item == 1) {
        location.href = "http://localhost:8080/#/mtindexhamburger/"+item;
      }
      if (item == 2) {
        location.href = "http://localhost:8080/#/mtindexcooking/"+item;
      }
      if (item == 3) {
        location.href = "http://localhost:8080/#/mtindexsnack/"+item;
      }
      if (item == 4) {
        location.href = "http://localhost:8080/#/jmpsf/"+item;
      }
      if (item == 5) {
        location.href = "http://localhost:8080/#/jtlm/"+item;
      }
      if (item == 6) {
        location.href = "http://localhost:8080/#/mtzs/"+item;
      }
      if (item == 7) {
        location.href = "http://localhost:8080/#/orderform/"+item;
      }
      if (item == 9) {
        location.href = "http://localhost:8080/#/allClassifications/"+item;
      }
    }
   }
};
</script>


<style scoped>
.mt-index-center {
  flex: 1;
  overflow-y: auto;
}
.indexgwc{
	position: fixed;
	right: .1rem;
	bottom: .9rem;
	width: .48rem;
	width: .48rem;
}
</style>