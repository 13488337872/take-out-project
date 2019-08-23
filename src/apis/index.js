import Api from "../commons/Api"
import mtNearbyShop from "../components/common/mt-nearby-shops"

//后端接口
const baseUrl = "http://39.100.63.237:8000"

//模拟数据
const UrlData = "http://localhost:3000"


//获取主页的接口地址
const CARTURL = `${baseUrl}/api/index/`

//详情页面接口地址
const DETAIL = `${UrlData}/api/detail`

//购物车
const SHOPCART = `${UrlData}/api/shopCar`

//获取订单接口地址
const ordUrl = `${UrlData}/api/order`;

//获取cartinfo的接口地址
const CARTINFO = `${UrlData}/api/mtorders`;

//获取附近商铺列表接口地址
const NEARBYSHOPLIST = `${baseUrl}/api/shops/shop/?shopId=`;

//获取附近商铺列表接口地址
const CLASSIFCATIONS = `${UrlData}/api/classifcations`;
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
  }

  
}

