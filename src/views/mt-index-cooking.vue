<template>
    <div>
        <mt-index-cooking-chd></mt-index-cooking-chd>
        <mt-index-cooking-cpizza v-if="mtcook.souplist" :data="mtcook.souplist"></mt-index-cooking-cpizza>
        <mt-index-cooking-cpizza-colist :data="mtcook.cookingrows"></mt-index-cooking-cpizza-colist>
    </div>
</template>
<script>
import mtIndexCookingChd from '../components/menu/mt-index-cooking-chd';
import mtIndexCookingCpizza from '../components/menu/mt-index-cooking-cpizza';
import mtIndexCookingCpizzaColist from '../components/menu/mt-index-cooking-cpizza-colist';
import index from '../apis/index.js'
export default {
     name:'',
        data:function(){
            return{
                mtcook:{}
            }
        },
    components:{
        "mt-index-cooking-chd":mtIndexCookingChd,
        "mt-index-cooking-cpizza":mtIndexCookingCpizza,
        "mt-index-cooking-cpizza-colist":mtIndexCookingCpizzaColist
       
    },
    created(){
        this._getMtCook()
    },
    methods:{
        _getMtCook(){
            index.getCookInfoByCookId(datas=>{
                // console.log(datas);
                this.mtcook = datas;
                // console.log(this.mtcook);
            });
        }
    }
}
</script>
<style scoped>
    @import url("../assets/css/Cooking.css");
</style>