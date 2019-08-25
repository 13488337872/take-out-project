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
        <li v-for="(item,pid) in data.menu" :key="pid" @click="skip(pid,data.nearbyShop)">
			<img :src="item.navPic" />
			<p>{{item.navName}}</p>
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
    skip: function(item,data) {
      console.log(item);
      data.forEach(nearbyShopType=>{
        console.log(nearbyShopType)
        let shopType = nearbyShopType
      })
      if (item == 0) {
        this.$router.push({
          path:'/mtIndexAfternoontea',
          query:{
            menuId:item,
            shopList:shopType
          }
        })
      }
      if (item == 1) {
        this.$router.push({
          path:'/mtindexhamburger',
          query:{
            menuId:item,
            shopList:data
          }
        })
      }
      if (item == 2) {
        this.$router.push({
          path:'/mtindexcooking',
          query:{
            menuId:item,
            shopList:data
          }
        })
      }
      if (item == 3) {
        this.$router.push({
          path:'/mtindexsnack',
          query:{
            menuId:item,
            shopList:data
          }
        })
      }
      if (item == 4) {
        this.$router.push({
          path:'/jmpsf',
          query:{
            menuId:item,
            shopList:data
          }
        })
      }
      if (item == 5) {
        this.$router.push({
          path:'/jtlm',
          query:{
            menuId:item,
            shopList:data
          }
        })
      }
      if (item == 6) {
        this.$router.push({
          path:'/mtzs',
          query:{
            menuId:item,
            shopList:data
          }
        })
      }
      if (item == 7) {
        this.$router.push({
          path:'/orderform',
          query:{
            menuId:item,
            shopList:data
          }
        })
      }
      if (item == 9) {
        this.$router.push({
          path:'/allClassifications',
          query:{
            menuId:item,
            shopList:data
          }
        })
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