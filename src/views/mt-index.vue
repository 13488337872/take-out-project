<template>
  <div class="mt-index">
    <router-view :data="navdata"></router-view>
    <index-footer :data="navdata.Activity"></index-footer>
  </div>
</template>
<script>
import indexFooter from "../components/common/mt-index-footer";
import index from "../apis/index";
export default {
  components: {
    "index-footer": indexFooter
  },
  data() {
    return {
      navdata: {}
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
      index.getCartInfoByUserId(data => {
        console.log(data)
        this.navdata = data;
      });
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