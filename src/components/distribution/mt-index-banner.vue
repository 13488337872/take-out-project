<template>
    <!-- banner轮播图 -->
    <div class="banner">
        <div class="slider">
            <mt-swipe :auto="3000">
                <mt-swipe-item>
                    <img src="/img/banner1.png">
                </mt-swipe-item>
                <mt-swipe-item>
                    <img src="/img/banner1.png">
                </mt-swipe-item>
            </mt-swipe>
        </div>
        <div class="banner-anim">
            <img class="mip-anim" src="/img/9.gif" alt="">
        </div>
    </div>
</template>

<script>
export default {
    data () {
    return {
    }
}
}
</script>

<style scoped>
.slider {
  font-size: 30px;
  text-align: center;
  overflow: hidden;
}
.slider img {
  width: 100%;
}
</style>