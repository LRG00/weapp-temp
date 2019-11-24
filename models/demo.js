/*
 * @Author: liruigang
 * @Date: 2019-11-24 22:58:04
 * @LastEditors: liruigang
 * @LastEditTime: 2019-11-24 22:58:51
 * @UI: 
 */
import {
  HTTP
}
from '../util/http-p.js'

class BookModel extends HTTP {
  data = null
  getHotList() {
      return this.request({
          url: 'book/hot_list'
      })
  }

  search(start, q){
      return this.request({ 
          url:'book/search?summary=1',
          data:{
              q:q,
              start:start
          }
      })
  }

}

export {
  demoModel
}