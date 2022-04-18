// 处理首页的网络请求
import { request } from './request.js'

export function getHomeData() {
  return request({
    url: '/'
  })
}
export function getGoods(type, page) {
  return request({
    url: '/classify/' + type + '/' + page,
    // params: {
    //   type,
    //   page
    // }
  })
}