<template>
    <div>
        <mt-index-hamburger-ha></mt-index-hamburger-ha>
        <mt-index-hamburger-hpizza :data="mttea.hamburgerlist"></mt-index-hamburger-hpizza>
        <mt-index-hamburger-hpizza-holist :data="mttea.pizzarows"></mt-index-hamburger-hpizza-holist>
    </div>
</template>
<script>
import mtIndexHamburgerHa from '../components/menu/mt-index-hamburger-ha';
import mtIndexHamburgerHpizza from '../components/menu/mt-index-hamburger-hpizza';
import mtIndexHamburgerHpizzaHolist from '../components/menu/mt-index-hamburger-hpizza-holist';
import index from '../apis/index.js'
export default {
    name:'',
     data:function(){
            return{
                mttea:{} 
            }
        },
    components:{
        "mt-index-hamburger-ha": mtIndexHamburgerHa,
        "mt-index-hamburger-hpizza":mtIndexHamburgerHpizza,
        "mt-index-hamburger-hpizza-holist":mtIndexHamburgerHpizzaHolist
    },
     created() {
		  this._getMtTea()
	  },
    methods:{
       _getMtTea(){
           	index.getTeaInfoByTeaId(data=>{
				console.log(data);
                this.mttea = data
               });
       } 
    }
}
</script>
<style scoped>
    @import url("../assets/css/Hamburger.css");
</style>