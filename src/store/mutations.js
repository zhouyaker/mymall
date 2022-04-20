import { ADD_COUNTE, ADD_TO_CART } from './mutation-types.js'
export default {
  [ADD_COUNTE](state, payload) {
    payload.count += 1
  },
  [ADD_TO_CART](state, payload) {
    // 给商品对象添加吗默认选中属性
    payload.checked = true
    // 将商品对象添加到商品列表
    state.cartList.push(payload)
  }
}