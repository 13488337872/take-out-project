<template>
    <div>
        <mt-index-afternoontea-hd></mt-index-afternoontea-hd>
        <mt-index-afternoontea-pizza :data="mtaft.afternoontealist"></mt-index-afternoontea-pizza>
        <mt-index-afternoontea-pizza-olist :data="mtaft.afternoontearows"></mt-index-afternoontea-pizza-olist>
        <mt-order-form-content-shoplist></mt-order-form-content-shoplist>
    </div>
</template>
<script>
    import mtIndexAfternoonteaHd from '../components/menu/mt-index-afternoontea-hd';
    import mtIndexAfternoonteaPizza from '../components/menu/mt-index-afternoontea-pizza';
    import mtIndexAfternoonteaPizzaOlist from '../components/menu/mt-index-afternoontea-pizza-olist';
    import mtorderformcontentshoplist from '../components/distribution/mt-order-form-content-shoplist'
    import index from '../apis/index.js'
export default {
     name:'',
        data:function(){
            return{
                mtaft:{}
            }
        },
    components:{
        "mt-index-afternoontea-hd":mtIndexAfternoonteaHd,
        "mt-index-afternoontea-pizza":mtIndexAfternoonteaPizza,
        "mt-index-afternoontea-pizza-olist":mtIndexAfternoonteaPizzaOlist,
        "mt-order-form-content-shoplist":mtorderformcontentshoplist
       
    },
     created() {
		this._getMtAft()
	  },
   methods:{
        _getMtAft(){
           	index.getAftInfoByAftId(data=>{
				console.log(data);
                this.mtaft = data
               });
       } 
    }
}
</script>
<style scoped>
     @import url("../assets/css/AfternoonTea.css"); 

</style>