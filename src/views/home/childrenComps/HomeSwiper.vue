<template>
  <div>
    <!-- 轮播图 -->
    <Swiper>
      <SwiperItem v-for="(item,index) in swiperList" :key="index">
        <a href="#">
          <img :src="item.image" @load="isLoad">
        </a>
      </SwiperItem>
    </Swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from 'components/common/swiper/index.js'
export default {
  name: 'HomeSwiper',
  data() {
    return {
      isLoadFlag: true
    }
  },
  props: {
    swiperList: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    Swiper,
    SwiperItem
  },
  methods: {
    isLoad() {
      if (this.isLoadFlag) {
        this.$emit('SwiperImgIsLoad')
        this.isLoadFlag = false
      }
    }
  }
}
</script>

<style lang="less" scoped>
</style>