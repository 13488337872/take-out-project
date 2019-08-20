import Vue from "vue"
import VueRouter from "vue-router"
Vue.use(VueRouter)

//axios请求
import axios from 'axios'

Vue.prototype.axios = axios
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

//家常菜
import mtindexcooking from "../views/mt-index-cooking";

//汉堡披萨
import mtindexhamburger from "../views/mt-index-hamburger";

//小吃馆
import mtindexsnack from "../views/mt-index-snack";

import allClassifications from '@/views/allClassifications'
import mtOrder from '@/views/mtOrder'

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
      name:"index",
      children:[
        {
          path: '/',
          name:"index",
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
      path:"/shoppingcart",
      component:shoppingcart,
    },
    {
      path:"/detail",
      component:detail,
    },
    {
      path:"/mtbannereightvip",
      component:mtbannereightvip,
    },
    {
      path:"/jmpsf/:num",
      component:jmpsf,
    },
    {
      path:"/jtlm/:num",
      component:jtlm,
    },
    {
      path:"/mtzs/:num",
      component:mtzs,
    },
    {
      path:"/mtbannerseafood",
      component:mtbannerseafood,
    },
    {
      path:"/orderform/:num",
      component:orderform,
    },
    {
      path:"/shopdetail",
      component:shopdetail,
    },
    {
      path:"/mtsearch",
      component:mtsearch,
    },
		{
      path: '/mt-my-id',
      name: 'mt-my-id',
      component: mtmyid
		},
		{
      path: '/login',
      name: 'login',
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
      path: '/mtIndexAfternoontea/:num',
      name: 'mt-index-afternoontea',
      component: mtIndexAfternoontea

    },
    {
      path: '/mtindexcooking/:num',
      component: mtindexcooking

    },
    {
      path: '/mtindexhamburger/:num',
      component: mtindexhamburger

    },
    {
      path: '/mtindexsnack/:num',
      component: mtindexsnack

    },
    {
      path: '/allClassifications/:num',
      name: '',
      component: allClassifications
    },
    {
      path: '/mtOrder',
      name: '',
      component: mtOrder
    }
  ]
});


    // 全局路由守卫
//   router.beforeEach((to, from, next) => {
//     console.log('navigation-guards');
//     // to: Route: 即将要进入的目标 路由对象
//     // from: Route: 当前导航正要离开的路由
//     // next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。

//     const nextRoute = ['detail', 'mt-order', 'jtlm'];
//     let isLogin = global.isLogin;  // 是否登录
//     // 未登录状态；当路由到nextRoute指定页时，跳转至login
//     if (nextRoute.indexOf(to.name) >= 0) {  
//       if (!isLogin) {
//         console.log('what fuck');
//         router.push({ name: 'login' })
//       }
//     }
//     // 已登录状态；当路由到login时，跳转至home 
//     if (to.name === 'login') {
//       if (isLogin) {
//         router.push({ name: 'index' });
//       }
//     }
//     next();
// });


export default router;
