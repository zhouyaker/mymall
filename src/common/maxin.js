import { debounce } from "./utils"
import BackTop from 'components/content/backtop/BackTop.vue'
export const itemListenerMaxin = {
  mounted() {
    /**
    * 监听事件总线中的每张图片加载
    */
    const refresh = debounce(this.$refs.scroll.reFresh, 200)
    this.$bus.$on('loadFinish', () => {
      refresh()
    })
  }
}
export const backTopMaxin = {
  components: {
    BackTop
  },
  data() {
    return {
      isShow: false
    }
  },
  methods: {
    // 点击后500毫秒回到顶部
    backClick() {
      this.$refs.scroll.scrollTo(0, 0, 500)
    }
  }

}