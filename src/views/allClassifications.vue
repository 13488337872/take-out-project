<template>
  <div>
    <mt-allclass-allsearch></mt-allclass-allsearch>
    <mt-allclass-allmeal></mt-allclass-allmeal>

  </div>
</template>

<script>
import allSearch from '../components/allClassifications/allSearch'
import allMeal from '../components/allClassifications/allMeal'

export default {
  name: 'allClassifications',
  data () {
    return {

    }
  },
  components:{
    "mt-allclass-allsearch":allSearch,
    "mt-allclass-allmeal":allMeal

  }

}
</script>

<style >
  @import '../assets/css/all.css';

</style>