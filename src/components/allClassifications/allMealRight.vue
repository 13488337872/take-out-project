<template>
    <div class="all-meal-ri">
        <div class="all-meal-ri-list" v-for="(item,pid) in data" :key=pid>
            <div class="all-meal-ri-ti">
                <em>{{item.classDelicious}}</em>
                <div class="pindao">
                    <span>去频道</span>
                    <span class="icon iconfont icon-xiayiyehouyiye"></span>
                </div>
            </div>
            <div class="allist">
                <div class="allist-m" v-for="(item,aid) in item.classDeliciousAll" :key=aid>
                    <img :src=item.smallIconPic alt="">
                    <p>{{item.smallIconName}}</p>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'allMealRight',
  data () {
    return {

    }
  },
  props: ['data'],
}
</script>

<style >

</style>