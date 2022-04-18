<template>
  <div>
    <nav-bar>
      <div slot="left" class="backImg" @click="backClick">
        <img src="~assets/img/common/back.svg">
      </div>
      <div slot="center" class="title">
        <div v-for="(item,index) in titles" :key="index" :class="{active:index==currentIndex}" @click="titleClick(index)"><span>{{item}}</span></div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
export default {
  name: 'DetailNavBar',
  data() {
    return {
      titles: ['商品', '评论', '详情', '推荐'],
      currentIndex: 0
    }
  },
  components: {
    NavBar
  },
  methods: {
    titleClick(index) {
      this.currentIndex = index
      // 将点击事件发送出去
      this.$emit('titleClick', index)
    },
    backClick() {
      // this.$router.go(-1)
      this.$router.back()
    }
  }
}
</script>

<style lang="less" scoped>
.title {
  display: flex;
  justify-content: space-around;
}
.active {
  color: red;
  span {
    border-bottom: 3px solid #ff8198;
  }
}
.backImg {
  margin-top: 6px;
}
</style>