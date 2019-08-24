import Api from "../commons/Api"
// import mtNearbyShop from "../components/common/mt-nearby-shops"

//后端接口
const baseUrl = "http://39.100.63.237:8000"

//模拟数据
const UrlData = "http://localhost:3000"

//获取主页的接口地址     已经接入
const CARTURL = `${baseUrl}/api/index/`

//详情页面接口地址
const DETAIL = `${UrlData}/api/detail`

//购物车        已经接入
const SHOPCART = `${baseUrl}/api/cart/cartlist/?userId=2`

//获取订单接口地址
const ordUrl = `${UrlData}/api/order`;

//获取cartinfo的接口地址           已经接入
const CARTINFO = `${baseUrl}/api/orders/orders/?userId=1`;

//获取附近商铺列表接口地址           已经接入
const NEARBYSHOPLIST = `${baseUrl}/api/shops/shop/?shopId=`;
// const NEARBYSHOPLIST = `${UrlData}/api/shopid=`;

//获取附近商铺列表接口地址
const CLASSIFCATIONS = `${UrlData}/api/classifcations`;

const MTAFTERNOON = `${UrlData}/api/mtindexafternoontea`
const AFTURL = `${UrlData}/api/mtindexhamburger`
const COOKURL = `${UrlData}/api/mtindexcooking`
const SNACKURL = `${UrlData}/api/mtindexsnack`



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
  },

  getOrderInfoByOrderId(cb){
    Api.get(CARTINFO,cb)
  },
  
  getNearbyShopList(shopId,cb){
    Api.get(`${NEARBYSHOPLIST}${shopId}`,cb)
  },
  
  getClassIfCations(cb){
    Api.get(CLASSIFCATIONS,cb)
  },

  getTeaInfoByTeaId(cb) {
    Api.get(MTAFTERNOON, cb)
  },

  getAftInfoByAftId(cb) {
      Api.get(AFTURL, cb)
  },

  getCookInfoByCookId(cb) {
      Api.get(COOKURL, cb)
  },
  getSnackInfoBySnackId(cb) {
      Api.get(SNACKURL, cb)
  }
}

