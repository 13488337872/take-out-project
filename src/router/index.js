import Vue from "vue"
import VueRouter from "vue-router"
Vue.use(VueRouter)
import index from "../views/index"

//导入所有的mintui
import MintUI from 'mint-ui'

//可以省略 node_modules这一层
import 'mint-ui/lib/style.css'

//讲MintUI安装到Vue中   把所有的组件注册为全局
Vue.use(MintUI)


let router = new VueRouter({
  routes:[
    {path:"/",component:index}
  ]
})


export default router;
