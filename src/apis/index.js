import Api from "../commons/Api"


//后端接口
// const baseUrl = "http://10.36.175.15:8000"

//模拟数据
const UrlData = "http://localhost:3000"


//获取主页的接口地址
const CARTURL = `${UrlData}/api/index/`

//详情页面接口地址
const DETAIL = `${UrlData}/api/detail`

//购物车
const SHOPCART = `${UrlData}/api/shopCar`

//获取订单接口地址
const ordUrl = `${UrlData}/api/order`;



export default {
  /**
   * 获取主页信息
   * @param cb
   */
  getCartInfoByUserId(cb){
    Api.get(CARTURL,cb)
  },
  getMtDetail(cb){
    Api.get(DETAIL,cb)
  },
  getMtShopCar(cb){
    Api.get(SHOPCART,cb)
  },
  getOrder(cb){
    Api.getter(ordUrl,cb)
}
}

