<template>
  <div class="goodsList">
    <goods-list-item v-for="(item,index) in goods" :key="index" :goodsItem="item" />
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem.vue'
export default {
  name: 'GoodsList',
  props: {
    goods: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    GoodsListItem
  }
}
</script>

<style lang="less" scoped>
.goodsList {
  display: flex;
  flex-wrap: wrap;
}
</style>