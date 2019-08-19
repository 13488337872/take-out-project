import Vue from "vue"
import VueRouter from "vue-router"
Vue.use(VueRouter)
import axios from "axios"
Vue.prototype.$ajax = axios
//主页
import index from "../views/mt-index"
import mtindexcenter from "../components/distribution/mt-index-center"

//我的
import mtMyRedlist from "../views/mt-my-redlist"

//vip
import mtvip from "../views/mt-vip"

//我的订单
import mtorder from "../views/mt-order"
import mtOrderSection from "../components/distribution/mt-order-section";
// import mtordercheck from "../components/mt-order-check";
import mtOrderFail from "../components/distribution/mt-order-fail";


//地址
import addAddress from "../views/mt-myAddress"
import AddressEmpty from "../components/distribution/mt-addAddress"
import takedelivery from '../components/distribution/mt-take-delivery'


//购物车
import shoppingcart from '../views/shopping-cart'


//到店自取
import orderform from '../views/orderForm'

//商铺详情
import shopdetail from '../views/mt-shopdetail'

//我的账号
import mtmyid from "../views/mt-my-id"

//减免配送费
import jmpsf from '../views/jmpsf'

//商铺详情
import jtlm from '../views/jtlm'

//我的账号
import mtzs from "../views/mtzs"

//密码登录页面
import mtMyEnter from "../views/mt-my-enter"


//验证码登录
import mtMyEnterm from "../views/mt-my-enterm";


//店铺详情
import detail from "../views/detail";


//菜单下午茶
import mtIndexAfternoontea from "../views/mt-index-afternoontea"


//banner1
import mtbannereightvip from "../views/mt-banner-eightvip"


//banner2
import mtbannerseafood from "../views/mt-banner-seafood"

//search
import mtsearch from "../views/mt-search"

//导入所有的mintui
import MintUI from 'mint-ui'

//可以省略 node_modules这一层
import 'mint-ui/lib/style.css'

//讲MintUI安装到Vue中   把所有的组件注册为全局
Vue.use(MintUI)


let router = new VueRouter({
  routes:[
    {
      path:"/",component:index,
      children:[
        {
          path: '/',
          component: mtindexcenter
        },
        {
          path: '/mtMyRedlist',
          name: 'mt-my-redlist',
          component: mtMyRedlist
        },
        {
          path: '/mt-vip',
          name: 'mt-vip',
          component: mtvip
        },
        {
          path: '/mt-order',
          name: 'mt-order',
          component: mtorder,
          children:[
            {
              path:"/mtOrderSection",
              component:mtOrderSection
            },
            {
              path:"/mt-order",
              component:mtOrderSection
            },
            {
              path:"/mt-order-fail",
              component:mtOrderFail
            }
          ]
        },
      ]
    },
    
    {
      path:"/add",component:addAddress,
      children: [
        {
          path: 'AddressEmpt',
          component: AddressEmpty
        },
        {
          path: '/add',
          component: takedelivery
        }
      ]
    },
    {
      path:"/shoppingcart",component:shoppingcart,
    },
    {
      path:"/detail",component:detail,
    },
    {
      path:"/mtbannereightvip",component:mtbannereightvip,
    },
    {
      path:"/jmpsf",component:jmpsf,
    },
    {
      path:"/jtlm",component:jtlm,
    },
    {
      path:"/mtzs",component:mtzs,
    },
    {
      path:"/mtbannerseafood",component:mtbannerseafood,
    },
    {
      path:"/orderform",component:orderform,
    },
    {
      path:"/shopdetail",component:shopdetail,
    },
    {
      path:"/mtsearch",component:mtsearch,
    },
		{
      path: '/mt-my-id',
      name: 'mt-my-id',
      component: mtmyid
		},
		{
      path: '/mt-my-enter',
      name: 'mt-my-enter',
      component: mtMyEnter
		},
		{
      path: '/mt-my-enterm',
      name: 'mt-my-enterm',
      component: mtMyEnterm,
			// children:[
			// 	{
			// 		path:"",
			// 		components:
			// 	}
			// ]
    },
    
    {
      path: '/mtIndexAfternoontea',
      name: 'mt-index-afternoontea',
      component: mtIndexAfternoontea

    }
  ]
})


export default router;
