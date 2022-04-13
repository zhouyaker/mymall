<template>
  <div>
    <tab-bar>
      <tab-bar-item path="/home">
        <img slot="item-icon" src="~assets/img/tabbar/home.svg">
        <img slot="item-icon-active" src="~assets/img/tabbar/home_active.svg">
        <p slot="item-text">首页</p>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <img slot="item-icon" src="~assets/img/tabbar/category.svg">
        <img slot="item-icon-active" src="~assets/img/tabbar/category_active.svg">
        <p slot="item-text">分类</p>
      </tab-bar-item>
      <tab-bar-item path="/cart">
        <img slot="item-icon" src="~assets/img/tabbar/cart.svg">
        <img slot="item-icon-active" src="~assets/img/tabbar/cart_active.svg">
        <p slot="item-text">购物车</p>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <img slot="item-icon" src="~assets/img/tabbar/profile.svg">
        <img slot="item-icon-active" src="~assets/img/tabbar/profile_active.svg">
        <p slot="item-text">我的</p>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
// 导入tabbar组件
import TabBar from '../common/tabbar/TabBar.vue'
// 导入tabbar每一项
import TabBarItem from '../common/tabbar/TabBarItem.vue'
export default {
  name: 'MainTabBar',
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style scoped>
</style>