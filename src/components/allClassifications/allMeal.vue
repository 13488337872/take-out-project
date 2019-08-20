<template>
  <div class="all-meal">
    <mt-allclass-allmealleft></mt-allclass-allmealleft>
    <mt-allclass-allmealright></mt-allclass-allmealright>
  </div>
</template>

<script>
import allMealLeft from './allMealLeft'
import allMealRight from './allMealRight'

export default {
  name: 'allMeal',
  data () {
    return {

    }
  },
  components:{
    "mt-allclass-allmealleft":allMealLeft,
    "mt-allclass-allmealright":allMealRight

  }

}
</script>

<style >

</style>