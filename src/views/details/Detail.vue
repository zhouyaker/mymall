<template>
  <div id="detail">
    <detail-nav-bar @titleClick=titleClick ref="nav" />
    <scroll class="scroll" ref="scroll" @sendPosition="getPosition" :probe-type="3">
      <div class="pic">
        <img :src="coverImg" @load="imgLoad">
      </div>
      <div class="main">
        <h3>{{title}}</h3>
        <p>{{price}}</p>
        <div class="color">颜色</div>
        <div class="color-item" v-show="!item==''" v-for="(item,index) in color" :key="index">
          {{item}}
        </div>
        <div class="size">选择尺寸</div>
        <div>
          <p v-show="!item==''" v-for="(item,index) in size" :key="index" class="size-item">{{item}}</p>
        </div>
        <div class="comment" ref="comment">买家评论</div>
        <comment-info :comment="comment" v-if="comment.length!==0" />
        <div v-else class="no-comment">暂无评论</div>
        <div class="info" ref="info">图文详情</div>
        <div class="describe">
          <span>{{describe}}</span>
          <ul>
            <li v-for="(item,index) in goodsImg" :key="index">
              <img :src="item" @load="imgLoad">
            </li>
          </ul>
        </div>
        <div class="resemblance" ref="resemblance">相似产品</div>
        <div class="recommend">
          <goods-list :goods="recommend" />
        </div>
      </div>
    </scroll>
    <bottom-bar />
  </div>
</template>

<script>
import DetailNavBar from './childrenComps/DetailNavBar.vue'
import Scroll from 'components/common/scroll/Scroll.vue'
import CommentInfo from './childrenComps/CommentInfo.vue'
import GoodsList from 'components/content/goods/GoodsList.vue'
import BottomBar from './childrenComps/DetailBottomBar.vue'

import { getDetail, getComments, getRecommend } from 'network/detail.js'
import { itemListenerMaxin } from '../../common/maxin.js'
import { debounce } from '@/common/utils'
export default {
  name: 'Detail',
  components: {
    DetailNavBar,
    Scroll,
    CommentInfo,
    GoodsList,
    BottomBar
  },
  data() {
    return {
      id: null,
      goodsImg: null,
      coverImg: null,
      title: '',
      price: null,
      color: [],
      describe: '',
      serve: [],
      size: [],
      comment: [],
      recommend: [],
      topY: [],
      getTopY: null,
      currentIndex: null
    }
  },
  mixins: [itemListenerMaxin],
  created() {
    /**
     * 加载页面数据
     */
    this.id = this.$route.params.id
    // 商品数据
    getDetail(this.id).then(res => {
      // console.log(res)
      let arr = res.data[0].pic.split('-')
      if (arr[0] == '') {
        this.goodsImg = []
      } else {
        this.goodsImg = arr
      }
      this.coverImg = res.data[0].coverImg
      this.title = res.data[0].title
      this.price = res.data[0].price
      this.color = res.data[0].color.split('-')
      this.describe = res.data[0].describe
      this.serve = res.data[0].serve.split('-')
      this.size = res.data[0].size.split('-')
    })
    // 评论数据
    getComments(this.id).then(res => {
      // console.log(res)
      if (res.data.length != 0) {
        this.comment = res.data
      }
    })
    // 推荐数据
    getRecommend(this.id).then(res => {
      this.recommend = res.data
    })
    // 定义获取高度的函数，添加防抖提高性能
    this.getTopY = debounce(() => {
      this.topY = []
      this.topY.push(0)
      this.topY.push(-this.$refs.comment.offsetTop)
      this.topY.push(-this.$refs.info.offsetTop)
      this.topY.push(-this.$refs.resemblance.offsetTop)
      // console.log('使用防抖，不会过多执行')
    }, 200)
  },
  methods: {
    // 监听每张图片的加载
    imgLoad() {
      this.$refs.scroll.reFresh()
      // 调用函数每次图片加载完毕重新计算高度
      this.getTopY()
    },
    // 点击顶部导航的事件，滚动到指定位置
    titleClick(index) {
      this.$refs.scroll.scrollTo(0, this.topY[index], 500)
    },
    // 监听内容滚动的位置，改变顶部导航
    getPosition(position) {
      const positionY = position.y
      let length = this.topY.length
      // console.log(positionY)
      for (let i in this.topY) {
        // 这里获取的i是字符串
        i *= 1
        if ((this.currentIndex != i && i < length - 1 && positionY <= this.topY[i] && positionY > this.topY[i + 1]) || (i == length - 1 && positionY <= this.topY[i])) {
          this.currentIndex = i
          setTimeout(() => {
            this.$refs.nav.currentIndex = this.currentIndex
          }, 600)
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>
.pic {
  text-align: center;
  background: #efefef;
  img {
    width: 200px;
  }
}
#detail {
  position: relative;
  z-index: 9;
  height: 100vh;
  background-color: #fff;
  .scroll {
    position: absolute;
    overflow: hidden;
    top: 44px;
    bottom: 59px;
    left: 0;
    right: 0;
    .main {
      padding: 10px;
      > p {
        font-weight: 700;
        color: red;
        font-size: 26px;
        margin-bottom: 10px;
      }
      h3 {
        font-size: 20px;
      }
      .color,
      .size,
      .info,
      .comment,
      .resemblance {
        margin: 10px 0;
        font-size: 20px;
        border: 1px solid #666;
        padding: 5px;
        border-radius: 5px;
        background: linear-gradient(80deg, pink, #ecd1d9, #dee1e6);
      }
      .color-item,
      .size-item {
        display: inline-block;
        border: 2px solid #555;
        border-radius: 6px;
        padding: 5px;
        margin: 10px;
      }
      .serve {
        display: flex;
        justify-content: space-around;
        font-size: 14px;
        border: 1px solid #666;
        padding: 5px;
      }
      .no-comment {
        text-align: center;
      }
      .describe {
        ul {
          img {
            width: 100%;
          }
        }
      }
    }
  }
}
</style>