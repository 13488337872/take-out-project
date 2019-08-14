<template>
    <div>
        <index-header></index-header>
        <index-center :data="navdata"></index-center> 
        <index-footer :data="navdata.Activity"></index-footer> 
    </div>
</template>

<script>
import indexHeader from '../components/distribution/index-header'
import indexCenter from '../components/distribution/index-center'
import indexFooter from '../components/common/index-footer'
import index from '../apis/index'
    export default{
        components:{
            "index-header":indexHeader,
            "index-center":indexCenter,
            "index-footer":indexFooter
        },
        data() {
            return {
                navdata:{}
            }
        },
        created() {
            this._initPageData()
        },
        mounted() {
        },
        methods: {
            /**
            * @private
            */
            _initPageData() {
                index.getCartInfoByUserId(data => {
                    this.navdata = data;
                })
            },
            
        }
    }
</script>

<style scoped>

@import "../assets/index.css";





</style>