<template>
  <div class="shopping-meal">
    <div class="shopping-meal-le">
        <input type="checkbox" @change="pCheck(sid,pid)" v-model="data.checked">
        <img :src="data.goods_url" alt="">
        <p style="width: 100%">
            <span style="display: block">{{data.goods_name}}</span>
            <span>{{data.goods_num}}</span>
        </p>
    </div>
    <p>
      <span>￥{{data.goods_end}}</span>
      <span @click="goods_del(sid,pid,userId,data.goods_id)">
      <img
      style="width: 0.15rem;
      height: 0.15rem;display: inline-block;
      margin-left: 0.05rem; vertical-align: middle;
      border-radius: 50%;" 
      src="/img/shanchu.jpg"/>
      </span>
    </p>
</div>
</template>

<script>
export default {
    name:"mtShopCartProducts",
    props:["data","sid","pid","pCheck","goods_del"],
    data() {
      return {
        userId:localStorage.getItem("userId")
      }
    },
}
</script>
<style scoped>

</style>