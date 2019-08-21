<template>
  <div class="mt-order-section">
    <div class="taking_section_store" v-for="(item,key) in data" :key="key">
      <div class="taking_store_top">
        <img :src="item.orderimg" alt />
        <div class="store_top_cen">
          <p>{{item.ordername}} ></p>
          <span
            v-for="(fullMinus,pid) in item.orderspan"
            :key="pid"
          >{{fullMinus.full}}减{{fullMinus.minus}}</span>
        </div>
        <div class="store_top_rig">
          <h4>订单已完成</h4>
        </div>
      </div>
      <div class="taking_store_bot">
        <div class="store_bot_tit">
          <p>{{item.orderproduct}}</p>
          <span>{{item.orderprice}}</span>
        </div>
        <div class="store_bot_span">
          <span>相似商家</span>
          <span>再来一单</span>
          <span id="store_bot_lan">评价</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["data"]
};
</script>

<style scoped="scoped">
.mt-order-section {
  width: 100%;
  /* display:none; */
  background: #f0f0f0;
  overflow: auto;
  flex: 1;
}
.taking_section_store {
  width: 3.51rem;
  height: 1.68rem;
  background: #fafafa;
  margin: 0.1rem auto;
  border-radius: 0.09rem;
}
.taking_store_top {
  height: 0.38rem;
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
.store_top_cen p {
  font-size: 0.13rem;
}
.store_top_cen span {
  font-size: 0.09rem;
  color: #fb4e44;
  width: 0.42rem;
  height: 0.16rem;
  display: inline-block;
  border: 1px solid #fb4e44;
  text-align: center;
  line-height: 0.16rem;
  border-radius: 0.02rem;
  float: left;
  margin-right: 0.05rem;
  margin-top: 0.08rem;
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
  padding-top: 0.18rem;
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
