/**
 * 处理详情页的网络请求
*/
import { request } from './request.js'

// 获取商品详情
export function getDetail(id) {
  return request({
    url: '/goodsinfo/' + id
  })
}
// 获取评论信息
export function getComments(id) {
  return request({
    url: '/comments/' + id
  })
}

// 获取推荐数据
export function getRecommend(id) {
  return request({
    url: '/recommend/' + id
  })
}