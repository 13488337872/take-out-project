<template>
  <div class="shoplist">
    <div class="shoplist-shop" v-for="(item,key) in data" :key="key">
      <img :src=item.nearbyShopPic alt />
      <div class="shoplist-shop-c">
        <p>{{item.nearbyShopName}}</p>
        <p>省配送费</p>
        <p>
          <span>{{item.nearbyShopStar}}</span>

          <span>月售{{item.nearbyShopSale}}</span>
          <span>{{item.nearbyShopType}}</span>
        </p>
        <p>
          <span v-for="(pMiting,pid) in item.nearbyShopMitig" :key="pid">{{pMiting.full}}减{{pMiting.minus}}</span>
        </p>
      </div>
      <div class="shoplist-shop-ri">
        <span class="icon iconfont icon-daohangdizhiweizhi"></span>
        <span>{{item.nearbyShopDistance}}</span>
        <img src="/img/shoplist-ddzqu.jpg" alt />
        <span class="icon iconfont icon-xiala"></span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props:["data"]
};
</script>
<style scoped>
</style>