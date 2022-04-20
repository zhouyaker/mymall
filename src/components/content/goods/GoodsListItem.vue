<template>
  <div class="goodsItem" @click="itemClick">
    <a>
      <img v-lazy="goodsItem.coverImg" alt="" @load="loadFinish">
      <p>{{goodsItem.title}}</p>
      <span>{{goodsItem.price}}</span>
    </a>
  </div>
</template>

<script>
export default {
  name: 'GoodsListItem',
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    // 监听图片加载完成事件
    loadFinish() {
      // 将$bus添加到原型，添加vue实例
      // 将监听到的事件发送到事件总线
      this.$bus.$emit('loadFinish')
    },
    itemClick() {
      // 跳转详情页面
      this.$router.push('/detail/' + this.goodsItem.id)
    }
  }
}
</script>

<style lang="less" scoped>
.goodsItem {
  width: 50%;
  padding: 5px;
  img {
    width: 100%;
  }
  p {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  span {
    color: red;
    font-size: 16px;
  }
}
</style>