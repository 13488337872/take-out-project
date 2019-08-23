<template>
     <div class="pizza-list">
        <div class="pizza-hanbao" v-for="item in data">
            <img :src=item.snackimg alt="">
            <p>{{item.snackspan}}</p>
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