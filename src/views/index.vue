<template>
  <r-footer :data="navdata"></r-footer>
</template>

<script>
import rfooter from '../components/HelloWorld'
import index from '../apis/index'
    export default{
        components:{
            "r-footer":rfooter
        },
        data() {
            return {
                navdata:{}
            }
        },
        created() {
            this._initPageData()
        },
        methods: {
        /**
        * @private
        */
        _initPageData() {
            index.getCartInfoByUserId(data => {
                console.log(data)
                this.navdata = data;
            })
        },
        },
    }
</script>

<style>
</style>

