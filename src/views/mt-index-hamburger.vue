<template>
    <div>
        <mt-index-hamburger-ha></mt-index-hamburger-ha>
        <mt-index-hamburger-hpizza></mt-index-hamburger-hpizza>
        <mt-index-hamburger-hpizza-holist></mt-index-hamburger-hpizza-holist>
    </div>
</template>
<script>
import mtIndexHamburgerHa from '../components/menu/mt-index-hamburger-ha';
import mtIndexHamburgerHpizza from '../components/menu/mt-index-hamburger-hpizza';
import mtIndexHamburgerHpizzaHolist from '../components/menu/mt-index-hamburger-hpizza-holist';


export default {
    name:'',
     data:function(){
            return{

            }
        },
    components:{
        "mt-index-hamburger-ha": mtIndexHamburgerHa,
        "mt-index-hamburger-hpizza":mtIndexHamburgerHpizza,
        "mt-index-hamburger-hpizza-holist":mtIndexHamburgerHpizzaHolist
    },
    methods:{
        
    }
}
</script>
<style scoped>
    @import url("../assets/css/Hamburger.css");
</style>