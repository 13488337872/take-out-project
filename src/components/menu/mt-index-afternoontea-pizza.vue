<template>
     <div class="banner">
        <a href="#" class="pizza"><img src="/img/duckneck.jpg" alt=""></a>
        <div class="pizza-eat">
            <h4>夏季特惠，中药配方</h4>
            <div class="pizza-big">
                <div class="pizza-food" v-for="item in data">
                        <img :src=item.afternoonteaimg alt="">
                        <p>{{item.afternoonteaspan}}</p>
                        <p>{{item.afternoonteaprice}} <del>￥10.0</del></p>
                </div>
            </div>
        </div>
     </div>
</template>
<script>
export default {
         props:[
                "data"
            ]
}
</script>
<style scoped>
</style>