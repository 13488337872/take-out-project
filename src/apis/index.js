import Api from "../commons/Api"

const baseUrl = "http://localhost:3000"

//获取主页的接口地址
const CARTURL = `${baseUrl}/api/index`

//详情页面接口地址
const DETAIL = `${baseUrl}/api/detail`







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
  }
}

