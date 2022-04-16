<template>
  <div class="tabs">
    <div v-for="(item,index) in titles" :key="index" class="item" :class="{active:index==currentIndex}" @click="tabClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tabs',
  props: {
    titles: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      // 记录标签栏选中状态
      currentIndex: 0
    }
  },
  methods: {
    tabClick(index) {
      this.currentIndex = index
      // 将点击事件传递到父组件,index作为参数
      this.$emit('tabClick', index)
    }
  }
}
</script>

<style lang="less" scoped>
.tabs {
  display: flex;
  text-align: center;
  height: 40px;
  line-height: 40px;
  font-size: 16px;
  background-color: #fff;
  .item {
    flex: 1;
  }
  .active {
    color: #ff8198;
    span {
      padding: 0 7px;
      border-bottom: 3px solid #ff8198;
    }
  }
}
</style>