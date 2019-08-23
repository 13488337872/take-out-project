
<template lang="">
    <div>
        <mt-index-snack-sd></mt-index-snack-sd>
        <mt-index-snack-spizza :data="mtsnack.facelist"></mt-index-snack-spizza>
        <mt-index-snack-spizza-solist :data="mtsnack.snackrows"></mt-index-snack-spizza-solist>
    </div>
</template>
<script>
import mtIndexSnackSd from '../components/menu/mt-index-cooking-chd';
import mtIndexSnackSpizza from '../components/menu/mt-index-snack-spizza';
import mtIndexSnackSpizzaSolist from '../components/menu/mt-index-snack-spizza-solist';
import index from '../apis/index.js'
export default {
    name:'',
     data:function(){
            return{
                mtsnack:{}
            }
        },
    components:{
        'mt-index-snack-sd':mtIndexSnackSd,
        'mt-index-snack-spizza':mtIndexSnackSpizza,
        'mt-index-snack-spizza-solist':mtIndexSnackSpizzaSolist

    },
    created(){
        this._getMtSnack()
    },
     methods:{
        _getMtSnack(){
            index.getSnackInfoBySnackId(data=>{
                console.log(data);
                this.mtsnack = data
            });
        }
    }
}
</script>
<style scoped>
    @import url("../assets/css/Snack.css");
</style>