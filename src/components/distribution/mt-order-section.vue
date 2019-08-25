<template>
  <div class="mt-order-section" v-if="mtorderhas">
    <div class="taking_section_store" v-for="(item,key) in data" :key="key">
      <div class="taking_store_top">
        <img :src="item.shopimg" alt />
        <div class="store_top_cen">
          <p @click="orderGoShop(item.shopId)"><span>{{item.shopname}}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;></p>
          <p
            v-for="(fullMinus,pid) in item.shopFoodList"
            :key="pid"
          >{{fullMinus.foodName}}   *{{fullMinus.foodNum}}</p>
        </div>
        
        <div class="store_top_rig">
          <h4>{{item.status}}</h4>
        </div>
      </div>
      <div class="taking_store_bot">
        <div class="store_bot_tit">
          <span>{{item.o_time}}</span>
        </div>
        <div class="store_bot_span">
          <span>相似商家</span>
          <span>再来一单</span>
          <span id="store_bot_lan">评价</span>
        </div>
      </div>
    </div>
  </div>
  <div class="mt-order-failart" v-else>
		<span id="bg_span">
			暂无订单
		</span>
	</div>
</template>
<script>
import mtorderfail from './mt-order-fail'
export default {
  component:{
    "mt-order-fail":mtorderfail
  },
  data() {
    return {
      mtorderhas:true
    }
  },
  props: ["data"],
  methods: {
    orderGoShop(shopid){
      console.log(shopid)
      this.$router.push({
        path:"/shopdetail",query:{
            shopId:shopid
        }
      })
    }
  },
};
</script>

<style scoped="scoped">
.mt-order-failart{
	width:100%;
	height:100%;
	background:url(/img/taking/bg.png);
	background-size:100% 98%;
	position:relative;
}
.mt-order-failart span{
	font-size:.13rem;
	color:#747273;
	position:absolute;
	top:56%;
	left:39%;
}
.mt-order-section {
  width: 100%;
  /* display:none; */
  background: #f0f0f0;
  overflow: auto;
  flex: 1;
}
.taking_section_store {
  width: 3.51rem;
  background: #fafafa;
  margin: 0.1rem auto;
  border-radius: 0.09rem;
}
.taking_store_top {
  width: 3.29rem;
  margin: 0 auto;
  padding: 0.15rem 0 0.12rem 0;
  display: -webkit-flex;
  -webkit-justify-content: space-between;
}
.taking_store_top img {
  width: 0.36rem;
  height: 0.36rem;
}
.store_top_cen p:first-child{
  color: black;
}
.store_top_cen p {
  font-size: 0.13rem;
  margin-bottom: .15rem;
  color: #949494;
}
.store_top_cen span {
  width: 1.5rem;
  display: inline-block;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.store_top_cen {
  margin-right: 0.42rem;
  margin-left: 0.1rem;
}
.taking_store_top h4 {
  font-size: 0.07rem;
  color: #666;
}
.store_top_rig {
  height: 0.36rem;
  line-height: 0.36rem;
}
/* 下部分 */
.taking_store_bot {
  background: #fff;
  width: 3.39rem;
  height: 0.84rem;
  padding-right: 0.12rem;
  border-radius: 0 0 0.09rem 0.09rem;
}
.store_bot_tit {
  display: -webkit-flex;
  -webkit-justify-content: space-between;
  padding-left: 0.66rem;
}
.store_bot_tit p {
  width: 1.83rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 0.13rem;
  color: #666666;
}
.store_bot_tit span {
  font-size: 0.13rem;
}
/* 评价 */
.store_bot_span {
  width: 2.39rem;
  margin-left: 1.01rem;
  margin-top: 0.21rem;
  display: -webkit-flex;
  -webkit-justify-content: space-between;
  font-size: 0.13rem;
}
.store_bot_span span {
  width: 0.73rem;
  height: 0.32rem;
  border: 1px solid #c4c4c4;
  text-align: center;
  line-height: 0.32rem;
  border-radius: 0.04rem;
}
#store_bot_lan {
  background: #ffd161;
  border: 0;
}
</style>
