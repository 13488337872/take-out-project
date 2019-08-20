<template>
  <div>
    <mt-order-top></mt-order-top>
    <mt-order-scroll></mt-order-scroll>
  </div>
</template>

<script>
import top from '../components/mtOrder/top'
import scroll from '../components/mtOrder/scroll'
import order from '../apis/index'

export default {
  name: 'mtOrder',
  data () {
    return {
      orderInfo:{}
    }
  },
  components:{
    "mt-order-top":top,
    "mt-order-scroll":scroll
  },
  created:function(){
    this._zidingyi()
  },
  methods: {
    _zidingyi(){
      order.getOrder(
        (data)=>{
          // console.log("1");
          this.orderInfo = data
        }
      ) 
    }    
  }

}
</script>

<style >
  @import '../assets/css/dingdan.css';

</style>