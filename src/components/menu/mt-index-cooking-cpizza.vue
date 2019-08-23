<template>
    <div class="banner">
        <a href="#" class="pizza"><img src="/img/stew.jpg" alt=""></a>
        <div class="pizza-eat">
            <h4>暖心的汤.致努力的你</h4>
            <div class="pizza-big">
                <div class="pizza-food" v-for="item in data">
                        <img :src=item.soupimg alt="">
                        <p>{{item.soupspan}}</p>
                        <p>{{item.soupprice}}<del>￥48.8</del></p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"",
    props:["data"]
}
</script>
<style scoped>
</style>