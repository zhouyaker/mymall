<template>
  <div class="cart-list">
    <scroll class="scroll" ref="scroll">
      <cart-list-item v-for="item in cartList" :key="item.id" :item-info="item" />
    </scroll>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Scroll from 'components/common/scroll/Scroll.vue'
import CartListItem from './CartListItem.vue'
export default {
  name: 'CartList',
  computed: {
    ...mapGetters(['cartList'])
  },
  components: {
    Scroll,
    CartListItem
  },
  activated() {
    // 每次进入页面刷新可滚动区域高度
    this.$refs.scroll.reFresh()
  }
}
</script>

<style lang="less" scoped>
.cart-list {
  height: calc(100vh - 44px - 49px - 40px);
  .scroll {
    position: absolute;
    overflow: hidden;
    top: 44px;
    bottom: 90px;
    left: 0;
    right: 0;
  }
}
</style>