<template lang="">
    <div>
        <mt-index-snack-sd></mt-index-snack-sd>
        <mt-index-snack-spizza></mt-index-snack-spizza>
        <mt-index-snack-spizza-solist></mt-index-snack-spizza-solist>
    </div>
</template>
<script>
import mtIndexSnackSd from '../components/menu/mt-index-cooking-chd';
import mtIndexSnackSpizza from '../components/menu/mt-index-snack-spizza';
import mtIndexSnackSpizzaSolist from '../components/menu/mt-index-snack-spizza-solist';

export default {
    name:'',
     data:function(){
            return{

            }
        },
    components:{
        'mt-index-snack-sd':mtIndexSnackSd,
        'mt-index-snack-spizza':mtIndexSnackSpizza,
        'mt-index-snack-spizza-solist':mtIndexSnackSpizzaSolist

    },
     methods:{
        
    }
}
</script>
<style scoped>
    @import url("../assets/css/Snack.css");
</style>