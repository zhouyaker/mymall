<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'Scroll',
  props: {
    // 定义是否监听滚动位置，默认不监听
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      scroll: null
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad
    })
    // 监听滚动坐标
    this.scroll.on('scroll', position => {
      // console.log(position)
      // 将位置参数传递到父组件
      this.$emit('sendPosition', position)
    })
    if (this.pullUpLoad) {
      // 监听滚动到底部
      this.scroll.on('pullingUp', () => {
        // 已经滚动到了底部，将事件发送出去
        this.$emit('toBottom')
      })
    }
  },
  methods: {
    // 在scroll实例已经存在的情况下，调用方法
    // 回到顶部方法
    scrollTo(x, y, time = 500) {
      this.scroll && this.scroll.scrollTo(x, y, time)
    },
    // 刷新可滚动区域方法
    reFresh() {
      this.scroll && this.scroll.refresh()
    },
    // 更多加载完成
    finishLoad() {
      this.scroll && this.scroll.finishPullUp()
    },
    // 记录当前位置
    getScrollY() {
      return this.scroll ? this.scroll.y : 0
    }
  }
}
</script>

<style lang="less" scoped>
</style>