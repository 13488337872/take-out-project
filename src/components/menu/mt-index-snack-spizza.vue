<template>
    <div class="banner">
        <a href="#" class="pizza"><img src="/img/face.jpg" alt=""></a>
        <div class="pizza-eat">
            <h4>满29-13、45-23</h4>
            <div class="pizza-big">
                <div class="pizza-food" v-for="item in data">
                        <img :src=item.faceimg alt="">
                        <p>{{item.facespan}}</p>
                        <p>{{item.faceprice}}<del>￥23.0</del></p>
                </div>
                <!-- <div class="pizza-food">
                    <a href="#">
                        <img src="../assets/img/flesh.jpg" alt="">
                        <p>腊汁肉夹馍</p>
                        <p>￥10.0 <del>￥23.0</del></p>
                    </a>
                </div>
                <div class="pizza-food">
                    <a href="#">
                        <img src="../assets/img/flesh.jpg" alt="">
                        <p>腊汁肉夹馍</p>
                        <p>￥10.0 <del>￥23.0</del></p>
                    </a>
                </div> -->
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