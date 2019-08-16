import Api from "../commons/Api"

const baseUrl = "http://localhost:3000"

//获取主页的接口地址

const CARTURL = `${baseUrl}/api/index`







export default {
  /**
   * 获取主页信息
   * @param cb
   */
  getCartInfoByUserId(cb){
    Api.get(CARTURL,cb)
  }
}

