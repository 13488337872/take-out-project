<template>
    <div class="pizza-list">
            <div class="pizza-hanbao" v-for="item in data">
                <img :src=item.cookingimg alt="">
                <p>{{item.cookingspan}}</p>
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