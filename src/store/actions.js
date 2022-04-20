import { ADD_COUNTE, ADD_TO_CART } from './mutation-types.js'
export default {
  addCart(context, payload) {
    return new Promise((resolve, reject) => {
      let flag = null
      for (let item of context.state.cartList) {
        if (item.id === payload.id) {
          flag = item
        }
      }
      if (flag) {
        context.commit(ADD_COUNTE, flag)
        resolve('当前商品数量加1')
      } else {
        payload.count = 1
        context.commit(ADD_TO_CART, payload)
        resolve('成功添加到购物车')
      }
    })
  }
}