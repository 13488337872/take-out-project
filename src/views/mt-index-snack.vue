<template lang="">
    <div>
        <mt-index-snack-sd></mt-index-snack-sd>
        <mt-index-snack-spizza></mt-index-snack-spizza>
        <mt-index-snack-spizza-solist></mt-index-snack-spizza-solist>
        <mt-order-form-content-shoplist></mt-order-form-content-shoplist>
    </div>
</template>
<script>
import mtIndexSnackSd from '../components/menu/mt-index-snack-sd';
import mtIndexSnackSpizza from '../components/menu/mt-index-snack-spizza';
import mtIndexSnackSpizzaSolist from '../components/menu/mt-index-snack-spizza-solist';
import mtorderformcontentshoplist from '../components/distribution/mt-order-form-content-shoplist'
export default {
    name:'',
     data:function(){
            return{

            }
        },
    components:{
        'mt-index-snack-sd':mtIndexSnackSd,
        'mt-index-snack-spizza':mtIndexSnackSpizza,
        'mt-index-snack-spizza-solist':mtIndexSnackSpizzaSolist,
        "mt-order-form-content-shoplist":mtorderformcontentshoplist

    },
     methods:{
        
    }
}
</script>
<style scoped>
    @import url("../assets/css/Snack.css");
</style>