<template>
    <div class="mtordertitle">
      <span class="icon iconfont icon-shangyiye" @click="mtOrderBack()">&#xe600;</span>
      <em>提交订单</em>
    </div>
</template>

<script>
export default {
  name: 'top',
  data () {
    return {

    }
  },
  methods: {
    mtOrderBack(){
      history.back()
    }
  },
}
</script>

<style>
.mtordertitle em{
  margin: 0 auto;
}
</style>
