<template>
  <div class="hr">
    <div class="hd">
      <div class="hd-1">
          <a href="javascript:;" class="iconfont icon-shangyiye" @click="afternoontea()">&#xe600;</a>
        <h4>下午茶</h4>
      </div>
      <div class="hd-2">
        <a href="javascript:;" class="iconfont icon-search_icon"></a>
        <input type="text" placeholder="请输入商家或商品名称" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
    methods: {
        afternoontea(){
            history.back()
        }
    },
};
</script>
<style scoped>
</style>