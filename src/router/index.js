import Vue from "vue"
import VueRouter from "vue-router"
Vue.use(VueRouter)
import index from "../views/index"
import addAddress from "../views/addAddress"
import myAddress from "../views/myAddress"
// import AddressEmpty from "../views/AddressEmpty"

//导入所有的mintui
import MintUI from 'mint-ui'

//可以省略 node_modules这一层
import 'mint-ui/lib/style.css'

//讲MintUI安装到Vue中   把所有的组件注册为全局
Vue.use(MintUI)


let router = new VueRouter({
  routes:[
    {path:"/",component:index},
    {path:"/add",component:addAddress},
    {path:"/myadd",component:myAddress,
      // children: [
      //   {
      //     // 当 /user/:id/profile 匹配成功，
      //     // UserProfile 会被渲染在 myadd 的 <router-view> 中
      //     path: 'addempty',
      //     component: AddressEmpty
      //   }
      // ]
    },
  ]
})


export default router;
