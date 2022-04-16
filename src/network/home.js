// 处理首页的网络请求
import { request } from './request.js'

export function getHomeData() {
  return request({
    url: '/home/homedata.json'
  })
}
export function getGoods(type, page) {
  return request({
    url: '/home/' + type + page + '.json',
    // params: {
    //   type,
    //   page
    // }
  })
}