<template>
  <div class="mt-detail">
    <mt-product-header v-if="indexInfo" :data="indexInfo"></mt-product-header>
    <mt-product-nav v-if="indexInfo" :data="indexInfo"></mt-product-nav>
    <mt-product-deatil v-if="indexInfo" :data="indexInfo"></mt-product-deatil>
    <mt-product-elva v-if="indexInfo" :data="indexInfo"></mt-product-elva>
  </div>
</template>

<script>
  import dtHeader from '../components/detail/dtHeader'
  import navBar from '../components/detail/navBar'
  import dtDetail from '../components/detail/dtDetail'
  import mtElava from '../components/detail/mtElava'
  import index from '../apis/index.js'

  export default {
        name: "detail",
      components:{
        "mt-product-header":dtHeader,
        "mt-product-nav":navBar,
        "mt-product-deatil":dtDetail,
        "mt-product-elva":mtElava
      },
      data:function(){
        return{
          indexInfo:{}
          
        }
      },
    created: function () {
      this._initPageData();
    },
    mounted() {
      console.log(this.$route.query.foods)
    },
    methods: {
      _initPageData() {
        index.getMtDetail((data) => {
          console.log(data)
          this.indexInfo = data;
        })
      },
      _Progress: function () {
        let i = 0;
        let per01 = parseFloat($("#prosess01").parent().children().eq(1).html());
        let per02 = parseFloat($("#prosess02").parent().children().eq(1).html());
        let per03 = parseFloat($("#prosess03").parent().children().eq(1).html());

        console.log(parseFloat($("#prosess01").parent().children().eq(1).html()));

        let timer01 = setInterval(function () {

          $("#prosess01 .finish").css("width", i + "%");
          i++;
          if (i > per01) {
            clearInterval(timer01);
          }
        }, 10);

        let timer02 = setInterval(function () {
          $("#prosess02 .finish").css("width", i + "%");
          i++;
          if (i > per02) {
            clearInterval(timer02);
          }
        }, 10);

        let timer03 = setInterval(function () {
          $("#prosess03 .finish").css("width", i + "%");
          i++;
          if (i > per03) {
            clearInterval(timer03);
          }
        }, 10);
      }
    }
  }
</script>

<style scoped>
  @import "../assets/css/detail.css";
  .mt-detail{
    background: white;
    width: 100%;
    margin: 0;
    padding: 0;
  }


</style>