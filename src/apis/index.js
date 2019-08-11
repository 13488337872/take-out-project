import Api from "../commons/Api"

const baseUrl = "http://localhost:3000"

//获取cartinfo的接口地址

const CARTURL = `${baseUrl}/api/index`

export default {
  /**
   * 根据用户获取购物车信息
   * @param cb
   */
  getCartInfoByUserId(cb){
    Api.get(CARTURL,cb)
  }
}





