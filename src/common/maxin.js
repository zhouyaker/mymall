import { debounce } from "./utils"
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