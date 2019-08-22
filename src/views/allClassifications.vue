<template>
  <div>
    <mt-allclass-allsearch></mt-allclass-allsearch>
    <mt-allclass-allmeal :data=allClassIfCation></mt-allclass-allmeal>

  </div>
</template>

<script>
import allSearch from '../components/allClassifications/allSearch'
import allMeal from '../components/allClassifications/allMeal'
import index from '../apis/index'
export default {
  name: 'allClassifications',
  data () {
    return {
      allClassIfCation:{}
    }
  },
  components:{
    "mt-allclass-allsearch":allSearch,
    "mt-allclass-allmeal":allMeal
  },
  created() {
    this.getClassIfCation()
  },
  methods: {
    getClassIfCation(){
      index.getClassIfCations(data=>{
          console.log(data)
          this.allClassIfCation = data
        })
    }
  }
}
</script>

<style >
  @import '../assets/css/all.css';

</style>