<template>
  <div class="all-meal">
    <mt-allclass-allmealleft :data=data.deliciousClass></mt-allclass-allmealleft>
    <mt-allclass-allmealright :data=data.deliciousClass></mt-allclass-allmealright>
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
  props:[
    "data"
  ],
  components:{
    "mt-allclass-allmealleft":allMealLeft,
    "mt-allclass-allmealright":allMealRight

  }

}
</script>

<style >

</style>