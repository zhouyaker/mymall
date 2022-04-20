<template>
  <div class="cart">
    <!-- 导航 -->
    <nav-bar class="nav-bar">
      <div slot="center">购物车{{cartLength}}
      </div>
    </nav-bar>
    <!-- 商品列表 -->
    <cart-list />
    <!-- 底部汇总 -->
    <cart-buttom-bar />
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
import CartList from './childComps/CartList.vue'
import CartButtomBar from './childComps/CartBottomBar.vue'

import { mapGetters } from 'vuex'
export default {
  name: 'Cart',
  components: {
    NavBar,
    CartList,
    CartButtomBar
  },
  computed: {
    ...mapGetters(['cartLength'])
  }
}
</script>

<style lang="less" scoped>
.nav-bar {
  background-color: #ff8198;
  color: #fff;
  font-size: 20px;
}
</style>