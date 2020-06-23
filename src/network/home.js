import {request} from './request' ;  //因为request()没有用export default导出所以要用{}包起来，否则可以省略{}

export function getHomeMultidata() {
  return request({
    url: '/home/multidata'
  })
}

export function getHomeGoods(type , page) {
  return request({
    url: '/home/data' ,
    params: {
      type ,
      page
    }
  })
}
