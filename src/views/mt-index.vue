<template>
  <index-loading v-if="mtindexloading"></index-loading>
  <div class="mt-index" v-else>
    <router-view :data="navdata"></router-view>
    <index-footer :data="navdata.Activity"></index-footer>
  </div>
</template>
<script>
import indexFooter from "../components/common/mt-index-footer";
import loading from "../components/common/loading";
import index from "../apis/index";
export default {
  components: {
    "index-footer": indexFooter,
    "indexLoading": loading
  },
  data() {
    return {
      navdata: {},
      mtindexloading:true
    };
  },
  created() {
    this._initPageData();
  },
  mounted() {},
  methods: {
    /**
     * @private
     */
    _initPageData() {
       setTimeout(()=>{
          index.getCartInfoByUserId(data => {
            console.log(data)
            this.navdata = data;
            this.mtindexloading = false
          });
       },2000)
    }
  }
};
</script>

<style scoped>
@import "../assets/index.css";
.mt-index {
  background: #fff;
  height: inherit;
  display: flex;
}
</style>