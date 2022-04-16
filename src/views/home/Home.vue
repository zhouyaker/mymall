<template>
  <div id="home">
    <!-- 顶部 -->
    <nav-bar class="nav-bar">
      <!-- 替换中间的插槽 -->
      <div slot="center">购物街</div>
    </nav-bar>
    <tabs ref="tabs_copy" :titles="['流行','新款','精选']" @tabClick="tabClick" class="tabs" v-show="isTabsShow" />
    <scroll class="scroll" ref="scroll" :probe-type="3" @sendPosition="getposition" :pull-up-load="true" @toBottom="loadMore">
      <!-- 轮播图 -->
      <home-swiper :swiperList="banners" @SwiperImgIsLoad="swiperImg=true;allImgIsLoad()" />
      <!-- 专题分类 -->
      <home-subject :subject="subject" @SubjectImgIsLoad="subjectImg=true;allImgIsLoad()" />
      <!-- 本周流行 -->
      <this-week @weekImgIsLoad="weekImg=true;allImgIsLoad()" />
      <!-- 内容标签页 -->
      <tabs ref="tabs" :titles="['流行','新款','精选']" @tabClick="tabClick" />
      <goods-list :goods="goods[currentType].list" />
    </scroll>
    <!-- 返回顶部 -->
    <back-top @click.native="backClick" v-show="isShow" />
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
import HomeSwiper from './childrenComps/HomeSwiper.vue'
import HomeSubject from './childrenComps/HomeSubject.vue'
import ThisWeek from './childrenComps/ThisWeek.vue'
import Tabs from 'components/common/tabs/Tabs.vue'
import GoodsList from 'components/content/goods/GoodsList.vue'
import Scroll from 'components/common/scroll/Scroll.vue'
import BackTop from 'components/content/backtop/BackTop.vue'

import { getHomeData, getGoods } from 'network/home.js'
export default {
  name: 'Home',
  data() {
    return {
      banners: [],
      subject: [],
      goods: {
        fashion: { page: 0, list: [] },
        newStyle: { page: 0, list: [] },
        handpick: { page: 0, list: [] }
      },
      currentType: 'fashion',
      isShow: false,
      tabOffsetTop: 0,
      isTabsShow: false,
      swiperImg: false,
      subjectImg: false,
      weekImg: false,
      saveY: 0
    }
  },
  components: {
    NavBar,
    HomeSwiper,
    HomeSubject,
    ThisWeek,
    Tabs,
    GoodsList,
    Scroll,
    BackTop
  },
  methods: {
    /**
     * 网络请求相关方法
     */
    getHomeData_fuc() {
      getHomeData().then(res => {
        this.banners = res.data.banner.list
        this.subject = res.data.recommend.list
      })
    },
    getGoods_fuc(type) {
      const page = this.goods[type].page + 1
      // 需要传入参数getGoods(type, page)
      getGoods(type, page).then(res => {
        // 每次请求当前页码的下一页数据
        this.goods[type].list.push(...res)
        this.goods[type].page += 1
        // 完成加载，调用函数保证下次正常加载
        this.$refs.scroll.finishLoad()
      })
    },
    /**
     * 事件监听相关方法
     */
    tabClick(index) {
      // console.log(index)
      switch (index) {
        case 0:
          this.currentType = 'fashion'
          break
        case 1:
          this.currentType = 'newStyle'
          break
        case 2:
          this.currentType = 'handpick'
          break
      }
      this.$refs.tabs_copy.currentIndex = index
      this.$refs.tabs.currentIndex = index
    },
    backClick() {
      // 点击后500毫秒回到顶部
      this.$refs.scroll.scrollTo(0, 0, 500)
    },
    // 获取滚动位置
    getposition(position) {
      // 判断回到顶部箭头是否显示
      if (-position.y >= 1000) {
        this.isShow = true
      } else {
        this.isShow = false
      }
      // 判断tads是否吸顶
      if (this.tabOffsetTop < -position.y) {
        this.isTabsShow = true
      } else {
        this.isTabsShow = false
      }
    },
    // 防抖函数
    debounce(func, time) {
      let timer = null
      return function () {
        if (timer) clearTimeout(timer)
        timer = setTimeout((...args) => {
          func.apply(this, args)
        }, time)
      }
    },
    // 上拉加载更多
    loadMore() {
      this.getGoods_fuc(this.currentType)
    },
    //  图片加载完毕,此时获取高度
    allImgIsLoad() {
      /**
       * 获取tabs的offsetTop
       */
      // this.$refs.tabs是一个组件，没有offsetTop
      // 所有的组件都有一个属性$el,获取组件中的元素
      // 还要监听所有图片加载完毕才能获取正确高度
      if (this.swiperImg && this.subjectImg && this.weekImg) {
        this.tabOffsetTop = this.$refs.tabs.$el.offsetTop
      }
    }
  },
  created() {
    this.getHomeData_fuc()
    this.getGoods_fuc('fashion')
    this.getGoods_fuc('newStyle')
    this.getGoods_fuc('handpick')
  },
  mounted() {
    /**
     * 监听事件总线中的每张图片加载
     */
    const refresh = this.debounce(this.$refs.scroll.reFresh)
    this.$bus.$on('loadFinish', () => {
      // 刷新可滚动区域高度
      refresh()
    })
  },
  activated() {
    this.$refs.scroll.scrollTo(0, this.saveY)
    this.$refs.scroll.reFresh()
  },
  deactivated() {
    this.saveY = this.$refs.scroll.getScrollY()
  }
}
</script>

<style lang="less" scoped>
#home {
  width: 100%;
  height: 100vh;
  position: relative;
  .nav-bar {
    color: #fff;
    font-size: 20px;
    background-color: var(--color-tint);
  }
  .scroll {
    position: absolute;
    overflow: hidden;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
  .tabs {
    position: relative;
    z-index: 9;
  }
}
</style>