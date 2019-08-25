<template id="temp"> <!-- vue实例外创建 -->
    <ul class="tempUls">
        <li v-for="(item,key) in data" :key="key" @click="EnterTheStore(item.id)"><i class="iconfont icon-fangdaj">&#xe65d;</i>{{item.nearbyShopName}}</li>
    </ul>
</template>
<!-- 调用   <mycom></mycom> -->
<script>
import index from '../../apis/index'
    export default {
        data() {
            return {
                
            }
        },
        props:["data"],
        methods: {
            EnterTheStore(storeId){
                console.log(storeId)
                this.$router.push({
                    path:"/shopdetail",query:{
                        shopId:storeId+1
                    }
                })
            }
        },
    }
</script>
<style scoped>
.tempUls .icon-fangdaj{
    color: #afafaf;
    margin-right: .1rem;
}
.tempUls{
    padding: 0 .1rem;
}
.tempUls li{
    line-height: .35rem;
}
    
</style>
