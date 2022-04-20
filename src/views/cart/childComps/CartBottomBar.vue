<template>
  <div class="bottom-bar">
    <div class="check-content">
      <check-button :is-checked="isSelectAll" class="all-check" @click.native="checkedClick" />
      <span>全选</span>
    </div>
    <div class="total">合计{{totalPrice}}</div>
    <div class="calc" @click="calcClick">去计算 ( {{checkedLength}} )</div>
  </div>
</template>

<script>
import CheckButton from 'components/content/checkbutton/CheckButton.vue'
export default {
  name: 'CartBottomBar',
  data() {
    return {}
  },
  components: {
    CheckButton
  },
  computed: {
    totalPrice() {
      return (
        '￥' +
        this.$store.state.cartList
          .filter(item => {
            return item.checked
          })
          .reduce((preValue, item) => {
            let price = item.price.slice(1)
            return price * item.count
          }, 0)
          .toFixed(2)
      )
    },
    checkedLength() {
      return this.$store.state.cartList.filter(item => item.checked).length
    },
    // 判断全选按钮的状态
    isSelectAll() {
      if (this.$store.state.cartList.length == 0) {
        return false
      } else {
        if (this.$store.state.cartList.filter(item => !item.checked).length) {
          return false
        } else {
          return true
        }
      }
    },
    // 存在选中的商品
    hasSelect() {
      if (this.$store.state.cartList.length == 0) {
        return false
      } else {
        if (this.$store.state.cartList.filter(item => item.checked).length) {
          return true
        } else {
          return false
        }
      }
    }
  },
  methods: {
    checkedClick() {
      // 已经全选，点击取消
      if (this.isSelectAll) {
        this.$store.state.cartList.forEach(item => (item.checked = false))
      } else {
        this.$store.state.cartList.forEach(item => (item.checked = true))
      }
    },
    calcClick() {
      if (!this.hasSelect) {
        this.$toast.show('请选择购买的商品', 1500)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.bottom-bar {
  position: relative;
  display: flex;
  height: 40px;
  line-height: 40px;
  background-color: #fff;
  .check-content {
    display: flex;
    align-items: center;
    margin-left: 20px;
    width: 80px;
    .all-check {
      width: 20px;
      height: 20px;
      line-height: 20px;
      margin-right: 5px;
    }
  }
  .total {
    flex: 1;
    margin-left: 30px;
    text-align: center;
    color: #ff0043;
  }
  .calc {
    text-align: center;
    width: 100px;
    color: #fff;
    background-color: #ff557a;
  }
}
</style>