<template>
    <div class="banner">
        <a href="#" class="pizza"><img src="/img/pisa.jpg" alt=""></a>
        <div class="pizza-eat">
            <h4>美食披萨</h4>
            <div class="pizza-big">
                <div class="pizza-food"  v-for="(item,key) in data" :key="key">
                    <a href="#">
                        <img :src=item.hamburgerimg alt="">
                        <p>{{item.hamburgerspan}}</p>
                        <p>{{item.hamburgerprice}}<del>￥32.0</del></p>
                    </a>
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