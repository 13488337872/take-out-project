<template>
    <div>
        <mt-index-cooking-chd></mt-index-cooking-chd>
        <mt-index-cooking-cpizza></mt-index-cooking-cpizza>
        <mt-index-cooking-cpizza-colist></mt-index-cooking-cpizza-colist>
        <mt-order-form-content-shoplist></mt-order-form-content-shoplist>
    </div>
</template>
<script>
import mtIndexCookingChd from '../components/menu/mt-index-cooking-chd';
import mtIndexCookingCpizza from '../components/menu/mt-index-cooking-cpizza';
import mtIndexCookingCpizzaColist from '../components/menu/mt-index-cooking-cpizza-colist';
import mtorderformcontentshoplist from '../components/distribution/mt-order-form-content-shoplist'
export default {
     name:'',
        data:function(){
            return{

            }
        },
    components:{
        "mt-index-cooking-chd":mtIndexCookingChd,
        "mt-index-cooking-cpizza":mtIndexCookingCpizza,
        "mt-index-cooking-cpizza-colist":mtIndexCookingCpizzaColist,
        "mt-order-form-content-shoplist":mtorderformcontentshoplist
       
    },
    methods:{
        
    }
}
</script>
<style scoped>
    @import url("../assets/css/Cooking.css");
</style>