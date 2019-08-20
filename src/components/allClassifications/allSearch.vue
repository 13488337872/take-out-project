<template>
    <div class="all-search">
        <div class="icon iconfont icon-shangyiye" @click="allsearchback()">&#xe600;</div>
        <input class="sear" type="text" placeholder="鲍鱼饭">
        <div class="icon iconfont icon-fangdajing"></div>
    </div>
</template>

<script>
export default {
  name: 'allSearch',
  data () {
    return {

    }
  },
  methods: {
    allsearchback(){
      history.back()
    }
  },
}
</script>

<style >

</style>