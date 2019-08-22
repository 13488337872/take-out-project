<template>
    <div class="all-meal-le">
        <div class="all-meal-le-ti all-meal-le-m" v-for="(item,key) in data" :key=key>
            <p>{{item.classDelicious}}</p>
        </div>  
    </div>
</template>

<script>

export default {
  name: 'allMealLeft',
  data () {
    return {

    }
  },
  props: ['data']
}
</script>

<style >

</style>