export default  {
  /**
   * 获取数据
   */
  get(url,cb){
     fetch(url).then(response=>{
       response.json().then(cb)
     })
  }
}
