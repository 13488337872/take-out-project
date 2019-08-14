<template>
    <div class="ask">
        <div class="askHeadline">
            <h3>到店自取</h3>
            <span>急速取餐 同享优惠</span>
        </div>
        <div class="askList">
            <li v-for="(item,aid) in data" :key="aid"> 
                <img :src=item.askPic alt="">
                <h4>{{item.askName}}</h4>
                <span>{{item.askDistance}}</span>
                <strong>省￥2.5配送费</strong>
                <p>
                    <img src="/img/jian.png" alt="">
                    <img src="/img/zhe.png" alt="">
                    <img src="/img/fan.png" alt="">
                </p>
            </li>
        </div>
    </div>
</template>
<script>
export default {
    props:["data"]
}
</script>


<style scoped>

</style>